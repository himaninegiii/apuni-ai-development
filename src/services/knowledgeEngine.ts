import rawServicesData from '../data/centralServicesDatabase.json';
import {
  VerifiedGovernmentService,
  ServiceSource,
  FieldVerificationReport,
  ServiceRetrievalResult,
  VerificationStatus,
} from '../types/verifiedKnowledge';

/**
 * Validates a single ServiceSource object
 */
export function validateSource(source: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!source || typeof source !== 'object') {
    return { valid: false, errors: ['Source must be an object'] };
  }
  if (!source.sourceTitle || typeof source.sourceTitle !== 'string') {
    errors.push('sourceTitle is required and must be a string');
  }
  if (!source.sourceUrl || typeof source.sourceUrl !== 'string') {
    errors.push('sourceUrl is required and must be a string');
  }
  if (!source.governmentDepartment || typeof source.governmentDepartment !== 'string') {
    errors.push('governmentDepartment is required and must be a string');
  }
  if (!source.informationSupported || typeof source.informationSupported !== 'string') {
    errors.push('informationSupported is required and must be a string');
  }
  if (!['verified', 'pending', 'unverified'].includes(source.verificationStatus)) {
    errors.push(`Invalid verificationStatus: ${source.verificationStatus}. Must be 'verified', 'pending', or 'unverified'`);
  }
  if (source.verificationStatus === 'verified' && !source.verificationDate) {
    errors.push('Verified sources must have a valid verificationDate');
  }
  return { valid: errors.length === 0, errors };
}

/**
 * Validates a service entry against the required JSON schema
 */
export function validateService(service: any): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!service || typeof service !== 'object') {
    return { valid: false, errors: ['Service must be an object'] };
  }

  const requiredStringKeys = [
    'serviceId',
    'serviceName',
    'department',
    'description',
    'responsibleAuthority',
    'officialUrl'
  ];

  for (const key of requiredStringKeys) {
    if (!service[key] || typeof service[key] !== 'string') {
      errors.push(`Missing or invalid required string property: ${key}`);
    }
  }

  if (!Array.isArray(service.eligibility)) {
    errors.push('eligibility must be an array of strings');
  }
  if (!Array.isArray(service.requiredDocuments)) {
    errors.push('requiredDocuments must be an array');
  }
  if (!Array.isArray(service.applicationSteps)) {
    errors.push('applicationSteps must be an array');
  }
  if (!Array.isArray(service.sources)) {
    errors.push('sources must be an array');
  } else {
    service.sources.forEach((src: any, idx: number) => {
      const srcVal = validateSource(src);
      if (!srcVal.valid) {
        errors.push(`Source at index ${idx} invalid: ${srcVal.errors.join(', ')}`);
      }
    });
  }

  if (service.fees !== null && typeof service.fees !== 'string') {
    errors.push('fees must be either string or null');
  }
  if (service.processingTime !== null && typeof service.processingTime !== 'string') {
    errors.push('processingTime must be either string or null');
  }

  if (!['verified', 'pending', 'unverified'].includes(service.verificationStatus)) {
    errors.push(`Invalid verificationStatus: ${service.verificationStatus}`);
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Inspects a service to produce an honest field-by-field verification breakdown
 */
export function analyzeFieldVerification(service: VerifiedGovernmentService): FieldVerificationReport {
  const verifiedFields: string[] = [];
  const unverifiedFields: string[] = [];
  const missingOrNullFields: string[] = [];

  // Description & Department
  if (service.description) verifiedFields.push('description');
  if (service.department) verifiedFields.push('department');
  if (service.responsibleAuthority) verifiedFields.push('responsibleAuthority');
  if (service.officialUrl) verifiedFields.push('officialUrl');

  // Eligibility
  if (service.eligibility && service.eligibility.length > 0) {
    verifiedFields.push('eligibility');
  }

  // Documents
  if (service.requiredDocuments && service.requiredDocuments.length > 0) {
    const allDocsVerified = service.requiredDocuments.every(d => d.verificationStatus === 'verified');
    if (allDocsVerified) {
      verifiedFields.push('requiredDocuments');
    } else {
      unverifiedFields.push('requiredDocuments (partial)');
    }
  }

  // Application Steps
  if (service.applicationSteps && service.applicationSteps.length > 0) {
    const allStepsVerified = service.applicationSteps.every(s => s.verificationStatus === 'verified');
    if (allStepsVerified) {
      verifiedFields.push('applicationSteps');
    } else {
      unverifiedFields.push('applicationSteps (partial)');
    }
  }

  // Fees
  let feesNote = '';
  if (service.fees === null) {
    missingOrNullFields.push('fees');
    feesNote = 'Fee information is currently UNAVAILABLE / PENDING VERIFICATION from official gazette. Do not invent fees.';
  } else if (service.verificationStatus === 'verified') {
    verifiedFields.push('fees');
    feesNote = `Verified fee: ${service.fees}`;
  } else {
    unverifiedFields.push('fees');
    feesNote = `Unverified fee: ${service.fees} (Requires verification)`;
  }

  // Processing Time
  let processingTimeNote = '';
  if (service.processingTime === null) {
    missingOrNullFields.push('processingTime');
    processingTimeNote = 'Processing timeframe is currently UNVERIFIED / PENDING VERIFICATION under official RTS schedule. Do not invent timeframes.';
  } else if (service.verificationStatus === 'verified') {
    verifiedFields.push('processingTime');
    processingTimeNote = `Verified processing time: ${service.processingTime}`;
  } else {
    unverifiedFields.push('processingTime');
    processingTimeNote = `Unverified processing time: ${service.processingTime} (Requires verification)`;
  }

  // Derive overall verification status:
  // If ANY field is missing/null, or if any source is pending/unverified, status CANNOT be 'verified'.
  const allSourcesVerified = service.sources.length > 0 && service.sources.every(s => s.verificationStatus === 'verified');
  let computedOverallStatus: VerificationStatus = service.verificationStatus;
  if (missingOrNullFields.length > 0 || unverifiedFields.length > 0 || !allSourcesVerified) {
    if (service.verificationStatus === 'verified') {
      computedOverallStatus = 'pending';
    }
  }

  return {
    serviceId: service.serviceId,
    serviceName: service.serviceName,
    overallStatus: computedOverallStatus,
    lastVerified: service.lastVerified,
    verifiedFields,
    unverifiedFields,
    missingOrNullFields,
    feesNote,
    processingTimeNote,
  };
}

/**
 * In-memory Store for Verified Government Services
 * Provides simple, developer-accessible maintenance methods.
 */
class GovernmentKnowledgeStore {
  private services: Map<string, VerifiedGovernmentService> = new Map();

  constructor() {
    this.initializeFromSeed();
  }

  private initializeFromSeed() {
    if (Array.isArray(rawServicesData)) {
      rawServicesData.forEach(item => {
        const val = validateService(item);
        if (val.valid) {
          this.services.set(item.serviceId, item as VerifiedGovernmentService);
        } else {
          console.warn(`[KnowledgeStore] Invalid service record ${item?.serviceId}:`, val.errors);
        }
      });
    }
  }

  /**
   * Returns all active verified services
   */
  public getAllServices(): VerifiedGovernmentService[] {
    return Array.from(this.services.values());
  }

  /**
   * Retrieves a service by unique ID
   */
  public getServiceById(id: string): VerifiedGovernmentService | undefined {
    return this.services.get(id);
  }

  /**
   * Developer maintenance method: Add or update a service entry
   */
  public upsertService(service: VerifiedGovernmentService): { success: boolean; errors?: string[] } {
    const validation = validateService(service);
    if (!validation.valid) {
      return { success: false, errors: validation.errors };
    }
    this.services.set(service.serviceId, service);
    return { success: true };
  }

  /**
   * Developer maintenance method: Update specific field on a service
   */
  public updateServiceField(
    serviceId: string,
    field: keyof VerifiedGovernmentService,
    value: any,
    newSource?: ServiceSource
  ): { success: boolean; errors?: string[] } {
    const service = this.services.get(serviceId);
    if (!service) {
      return { success: false, errors: [`Service ${serviceId} not found`] };
    }

    const updated = { ...service, [field]: value };
    if (newSource) {
      const srcVal = validateSource(newSource);
      if (!srcVal.valid) {
        return { success: false, errors: srcVal.errors };
      }
      updated.sources = [...updated.sources.filter(s => s.id !== newSource.id), newSource];
    }

    const val = validateService(updated);
    if (!val.valid) {
      return { success: false, errors: val.errors };
    }

    this.services.set(serviceId, updated);
    return { success: true };
  }

  /**
   * Developer maintenance method: Export current state as structured JSON
   */
  public exportJSON(): string {
    return JSON.stringify(Array.from(this.services.values()), null, 2);
  }
}

export const knowledgeStore = new GovernmentKnowledgeStore();

/**
 * Service Retrieval Function
 * Identifies the relevant service and detects missing document contexts
 */
export function retrieveRelevantService(
  query: string,
  conversationHistory: Array<{ role: string; text: string }> = []
): ServiceRetrievalResult {
  const normalizedQuery = query.toLowerCase();

  // Combine query with recent conversation history for context preservation
  const recentHistoryText = conversationHistory
    .slice(-4)
    .map(h => h.text.toLowerCase())
    .join(' ');
  const fullContext = `${recentHistoryText} ${normalizedQuery}`;

  const allServices = knowledgeStore.getAllServices();

  // 1. Check for Missing Document Follow-up Intent
  // e.g. "Mere paas Parivar Register ki nakal nahi hai", "family register nahi hai", "document nahi hai"
  const missingDocPatterns = [
    {
      regex: /(parivar|kutumb|परिवार|कुटुंब|family\s*register|nakal).*(nahi|missing|don't have|dont have|available nahi|nahi hai|kya karu)/i,
      reverseRegex: /(nahi|missing|don't have|dont have|nahi hai).*(parivar|kutumb|परिवार|कुटुंब|family\s*register|nakal)/i,
      serviceId: 'parivar-register-copy',
      docName: 'Parivar Register (Family Register Copy)',
    },
    {
      regex: /(caste|jati|जाति|father.*caste|pita.*jati).*(nahi|missing|don't have|nahi hai)/i,
      reverseRegex: /(nahi|missing|don't have|nahi hai).*(caste|jati|जाति|father.*caste|pita.*jati)/i,
      serviceId: 'caste-certificate',
      docName: 'Father’s Caste Certificate / Ancestral Lineage Proof',
    },
    {
      regex: /(salary\s*slip|itr|income\s*proof|aay\s*praman).*(nahi|missing|don't have|nahi hai)/i,
      reverseRegex: /(nahi|missing|don't have|nahi hai).*(salary\s*slip|itr|income\s*proof|aay\s*praman)/i,
      serviceId: 'income-certificate',
      docName: 'Income Declaration / Affidavit',
    }
  ];

  for (const pat of missingDocPatterns) {
    if (pat.regex.test(normalizedQuery) || pat.reverseRegex.test(normalizedQuery)) {
      const guidanceService = knowledgeStore.getServiceById(pat.serviceId);
      if (guidanceService) {
        const fieldReport = analyzeFieldVerification(guidanceService);
        return {
          matchedService: guidanceService,
          matchedServices: [guidanceService],
          relevanceConfidence: 'high',
          detectedIntent: 'missing_document_help',
          fieldReport,
          sources: guidanceService.sources,
          missingDocumentContext: {
            documentName: pat.docName,
            guidanceServiceId: guidanceService.serviceId,
            guidanceServiceName: guidanceService.serviceName,
          },
        };
      }
    }
  }

  // 2. Keyword & Alias matching for central services
  const serviceKeywords: Record<string, string[]> = {
    'income-certificate': [
      'income', 'aay', 'आय', 'salary', 'annual income', 'income certificate', 'aay praman',
      'shulk mafi', 'fee concession', 'bpl', 'tehsildar income'
    ],
    'caste-certificate': [
      'caste', 'jati', 'जाति', 'sc', 'st', 'obc', 'caste certificate', 'jati praman',
      'reservation', 'arakshan', 'sub-caste', 'non-creamy layer', 'ncl'
    ],
    'domicile-certificate': [
      'domicile', 'niwas', 'mool niwas', 'sthai niwas', 'स्थायी निवास', 'मूल निवास', 'residence certificate',
      'uttarakhand domicile', '15 years', 'permanent resident'
    ],
    'ews-certificate': [
      'ews', 'economically weaker', 'ईडब्ल्यूएस', 'आर्थिक रूप से कमजोर', 'ews certificate', '10 percent reservation',
      'general category reservation', '8 lakh', 'ews praman'
    ],
    'character-certificate': [
      'character', 'charitra', 'चरित्र', 'police verification', 'character certificate', 'charitra praman',
      'police clearance', 'cctns', 'thana verification', 'job verification'
    ],
    'birth-certificate': [
      'birth', 'janam', 'जन्म', 'birth certificate', 'janam praman', 'crsorgi', 'newborn', '21 days'
    ],
    'death-certificate': [
      'death', 'mrityu', 'मृत्यु', 'death certificate', 'mrityu praman', 'cremation ground', 'post-mortem'
    ],
    'marriage-registration': [
      'marriage', 'vivah', 'विवाह', 'shaadi', 'shadi', 'marriage certificate', 'marriage registration',
      'sub-registrar', 'sro', 'vivah panjikaran', 'witness'
    ],
    'parivar-register-copy': [
      'parivar', 'kutumb', 'परिवार', 'कुटुंब', 'family register', 'nakal', 'kutumb register',
      'parivar register', 'vdo', 'gram vikas adhikari', 'panchayat secretary', 'form 2', 'gram sabha'
    ],
    'old-age-pension': [
      'old age', 'vridha', 'vridhavastha', 'वृद्धावस्था', 'senior citizen pension', '60 years', 'old age pension',
      'ssp.uk.gov.in', 'vridha pension', '1500 pension'
    ],
    'widow-pension': [
      'widow', 'vidhwa', 'विधवा', 'destitute woman', 'widow pension', 'vidhwa pension', 'nirashrit mahila'
    ],
    'disability-pension': [
      'disability pension', 'divyang pension', 'दिव्यांग पेंशन', 'viklang pension', 'handicapped pension', '40 percent'
    ],
    'disability-certificate': [
      'disability certificate', 'udid', 'swavlamban', 'दिव्यांगता प्रमाण पत्र', 'divyang certificate',
      'cmo medical board', 'udid card', 'disability card', 'medical board'
    ],
    'scholarship-guidance': [
      'scholarship', 'chhatravritti', 'छात्रवृत्ति', 'nsp', 'national scholarship portal', 'post matric', 'pre matric',
      'tuition fee waiver', 'scholarship application'
    ],
    'income-scholarship-guidance': [
      'income for scholarship', 'scholarship income', 'छात्रवृत्ति आय', 'income certificate for scholarship',
      'student income certificate', 'parent income for nsp'
    ],
    'land-records-khatauni': [
      'khatauni', 'bhulekh', 'खतौनी', 'भूलेख', 'khasra', 'khatoni', 'land record', 'ror', 'record of rights',
      'land ownership', 'devbhoomi bhulekh'
    ],
    'land-record-copy-guidance': [
      'khatauni nakal', 'certified khatauni', 'land record copy', 'खतौनी नकल', 'stamped khatauni',
      'tehsil khatauni', 'kisan credit card land', 'kcc'
    ],
    'panchayati-raj-services': [
      'panchayat', 'panchayati raj', 'पंचायती राज', 'gram pradhan', 'panchayat noc', 'gram sabha',
      'noc for electricity', 'village certificate'
    ],
    'pension-services': [
      'pension', 'पेंशन', 'ssp.uk.gov.in'
    ]
  };

  // Check specific fee inquiry intent
  const isFeeQuery = /(fee|fees|shulk|charges|cost|kitna paisa|rupaye|किराया|शुल्क|फीस)/i.test(normalizedQuery);
  // Check specific timeframe inquiry intent
  const isTimeQuery = /(time|days|kitne din|timeline|duration|kab tak|din lagenge|समय|अवधि|दिन)/i.test(normalizedQuery);

  let bestMatch: VerifiedGovernmentService | null = null;
  let highestScore = 0;

  for (const service of allServices) {
    let score = 0;
    const keywords = serviceKeywords[service.serviceId] || [];

    // Check direct query matches
    for (const kw of keywords) {
      if (normalizedQuery.includes(kw)) {
        score += 3;
      } else if (fullContext.includes(kw)) {
        score += 1;
      }
    }

    // Name match
    if (normalizedQuery.includes(service.serviceId)) {
      score += 5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = service;
    }
  }

  if (bestMatch && highestScore > 0) {
    const fieldReport = analyzeFieldVerification(bestMatch);
    let detectedIntent: ServiceRetrievalResult['detectedIntent'] = 'service_inquiry';
    if (isFeeQuery) detectedIntent = 'fee_query';
    else if (isTimeQuery) detectedIntent = 'timeframe_query';

    return {
      matchedService: bestMatch,
      matchedServices: [bestMatch],
      relevanceConfidence: highestScore >= 3 ? 'high' : 'medium',
      detectedIntent,
      fieldReport,
      sources: bestMatch.sources,
      missingDocumentContext: null,
    };
  }

  // Fallback: If no strong match in query, but context mentions a service
  const matchedServices = allServices.filter(s => {
    const kws = serviceKeywords[s.serviceId] || [];
    return kws.some(kw => fullContext.includes(kw));
  });

  if (matchedServices.length > 0) {
    const primary = matchedServices[0];
    return {
      matchedService: primary,
      matchedServices,
      relevanceConfidence: 'medium',
      detectedIntent: 'service_inquiry',
      fieldReport: analyzeFieldVerification(primary),
      sources: primary.sources,
      missingDocumentContext: null,
    };
  }

  return {
    matchedService: null,
    matchedServices: [],
    relevanceConfidence: 'none',
    detectedIntent: 'general',
    fieldReport: null,
    sources: [],
    missingDocumentContext: null,
  };
}

/**
 * Builds grounding context text for the Gemini prompt based on the retrieved service and field verification
 */
export function buildGroundingPromptSection(retrieval: ServiceRetrievalResult): string {
  if (!retrieval.matchedService) {
    return `RETRIEVAL STATUS: UNVERIFIED / NO MATCHED SERVICE IN GOVERNMENT KNOWLEDGE BASE.
CRITICAL INSTRUCTION:
No verified service record matches this query in the central government knowledge base.
You MUST state clearly and verbatim: "This information has not yet been verified from an official source." (In Hindi: "यह जानकारी अभी तक किसी आधिकारिक स्रोत से सत्यापित नहीं हुई है।")
Do NOT guess or invent requirements, fees, documents, or procedures.
Recommend the citizen check the official Uttarakhand e-Services portal at https://eservices.uk.gov.in or contact the relevant government department or CM Helpline 1905.`;
  }

  const s = retrieval.matchedService;
  const report = retrieval.fieldReport;

  const docsFormatted = s.requiredDocuments
    .map(d => `- ${d.name}: [${d.verificationStatus.toUpperCase()}] ${d.isMandatory ? '(MANDATORY)' : '(OPTIONAL)'}. Details: ${d.details || 'N/A'}`)
    .join('\n');

  const stepsFormatted = s.applicationSteps
    .map(st => `Step ${st.step}: ${st.title} - ${st.description} [${st.verificationStatus.toUpperCase()}]`)
    .join('\n');

  const sourcesFormatted = s.sources
    .map(src => `- ${src.sourceTitle} (${src.governmentDepartment}) [STATUS: ${src.verificationStatus.toUpperCase()} - Date: ${src.verificationDate || 'PENDING'}] -> Supports: ${src.informationSupported}`)
    .join('\n');

  let missingDocNote = '';
  if (retrieval.missingDocumentContext) {
    missingDocNote = `
CRITICAL DETECTED USER INTENT - MISSING DOCUMENT ASSISTANCE:
The citizen stated they DO NOT HAVE: "${retrieval.missingDocumentContext.documentName}".
You MUST address this specific missing document immediately!
Retrieve and explain how to obtain it through: "${retrieval.missingDocumentContext.guidanceServiceName}".
Provide clear, actionable steps on how they can obtain their ${retrieval.missingDocumentContext.documentName} from their local Gram Panchayat Vikas Adhikari (VDO) or online portal.
`;
  }

  let feeDirective = '';
  if (s.fees === null) {
    feeDirective = `FEES: NULL (UNAVAILABLE / PENDING VERIFICATION).
CRITICAL MANDATORY RULE:
Official fee information for this service has NOT yet been verified from an official government gazette or schedule.
You MUST explicitly say: "This information has not yet been verified from an official source." (In Hindi: "यह जानकारी अभी तक किसी आधिकारिक स्रोत से सत्यापित नहीं हुई है।")
NEVER invent or assume application fees (do not guess ₹10, ₹30, ₹50, etc.). Recommend checking https://eservices.uk.gov.in or inquiring at the local Tehsil / CSC.`;
  } else {
    feeDirective = `FEES: ${s.fees} [EXPLICITLY VERIFIED FROM OFFICIAL DEPARTMENTAL NOTIFICATION]`;
  }

  let timeDirective = '';
  if (s.processingTime === null) {
    timeDirective = `PROCESSING TIME: NULL (UNVERIFIED / PENDING VERIFICATION).
CRITICAL MANDATORY RULE:
The official processing timeframe has NOT yet been verified from official Right to Service (RTS) notifications for this mode.
You MUST explicitly say: "This information has not yet been verified from an official source." (In Hindi: "यह जानकारी अभी तक किसी आधिकारिक स्रोत से सत्यापित नहीं हुई है।")
NEVER invent any number of days or timeline. Recommend checking https://eservices.uk.gov.in or contacting the department.`;
  } else {
    timeDirective = `PROCESSING TIME: ${s.processingTime} [EXPLICITLY VERIFIED UNDER UTTARAKHAND RTS ACT]`;
  }

  return `
GROUNDED RETRIEVED GOVERNMENT SERVICE:
SERVICE ID: ${s.serviceId}
NAME: ${s.serviceName}
DEPARTMENT: ${s.department}
RESPONSIBLE AUTHORITY: ${s.responsibleAuthority}
OFFICIAL PORTAL: ${s.officialUrl}
OVERALL VERIFICATION STATUS: ${report?.overallStatus.toUpperCase() || s.verificationStatus.toUpperCase()}
LAST VERIFIED: ${s.lastVerified || 'Pending verification'}
${feeDirective}
${timeDirective}

VERIFIED ELIGIBILITY:
${s.eligibility.map(e => `- ${e}`).join('\n')}

VERIFIED REQUIRED DOCUMENTS:
${docsFormatted}

VERIFIED APPLICATION STEPS:
${stepsFormatted}

OFFICIAL SOURCES SUPPORTING THIS DATA (Present these exact sources):
${sourcesFormatted}

FIELD VERIFICATION BREAKDOWN:
- Verified fields: ${report?.verifiedFields.join(', ') || 'None'}
- Unverified/Partial fields: ${report?.unverifiedFields.join(', ') || 'None'}
- Null/Missing fields: ${report?.missingOrNullFields.join(', ') || 'None'}
${missingDocNote}
`;
}
