export type VerificationStatus = 'verified' | 'pending' | 'unverified';

export interface ServiceSource {
  id: string;
  sourceTitle: string;
  sourceUrl: string;
  governmentDepartment: string;
  informationSupported: string;
  verificationDate: string | null;
  verificationStatus: VerificationStatus;
  officialReferenceNote?: string;
}

export interface VerifiedDocumentItem {
  name: string;
  isMandatory: boolean;
  details?: string;
  issuingAuthority?: string;
  verificationStatus: VerificationStatus;
}

export interface VerifiedStepItem {
  step: number;
  title: string;
  description: string;
  verificationStatus: VerificationStatus;
}

export interface VerifiedGovernmentService {
  serviceId: string;
  serviceName: string;
  department: string;
  description: string;
  eligibility: string[];
  requiredDocuments: VerifiedDocumentItem[];
  applicationSteps: VerifiedStepItem[];
  fees: string | null;
  processingTime: string | null;
  responsibleAuthority: string;
  officialUrl: string;
  sources: ServiceSource[];
  verificationStatus: VerificationStatus;
  lastVerified: string | null;
}

export interface FieldVerificationReport {
  serviceId: string;
  serviceName: string;
  overallStatus: VerificationStatus;
  lastVerified: string | null;
  verifiedFields: string[];
  unverifiedFields: string[];
  missingOrNullFields: string[]; // e.g., fees or processingTime when null
  feesNote: string;
  processingTimeNote: string;
}

export interface ServiceRetrievalResult {
  matchedService: VerifiedGovernmentService | null;
  matchedServices: VerifiedGovernmentService[];
  relevanceConfidence: 'high' | 'medium' | 'none';
  detectedIntent: 'service_inquiry' | 'missing_document_help' | 'fee_query' | 'timeframe_query' | 'general';
  fieldReport: FieldVerificationReport | null;
  sources: ServiceSource[];
  missingDocumentContext?: {
    documentName: string;
    guidanceServiceId: string;
    guidanceServiceName: string;
  } | null;
}
