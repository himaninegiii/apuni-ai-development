export interface GovernmentServiceKnowledge {
  serviceId: string;
  nameEn: string;
  nameHi: string;
  nameHinglish: string;
  department: string;
  departmentHi: string;
  description: string;
  descriptionHi: string;
  eligibility: string[];
  eligibilityHi: string[];
  requiredDocuments: Array<{
    name: string;
    nameHi: string;
    isMandatory: boolean;
    details: string;
  }>;
  applicationSteps: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  applicationStepsHi: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  verifiedFee: string;
  verifiedProcessingTime: string;
  officialUrl: string;
  officialSource: string;
  lastVerifiedDate: string;
}

export const UTTARAKHAND_SERVICES_KNOWLEDGE: GovernmentServiceKnowledge[] = [
  {
    serviceId: 'income-certificate',
    nameEn: 'Income Certificate',
    nameHi: 'आय प्रमाण पत्र',
    nameHinglish: 'Aay Praman Patra / Income Certificate',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'An official certificate authenticating total annual family earnings across all legal sources for fee concessions, admissions, scholarships, and social welfare schemes.',
    descriptionHi: 'छात्रवृत्ति, सरकारी योजनाओं, शुल्क रियायतों और आरक्षण हेतु परिवार की कुल वार्षिक आय को प्रमाणित करने वाला आधिकारिक राजस्व प्रमाण पत्र।',
    eligibility: [
      'Permanent resident of Uttarakhand or residing lawfully in the state with economic activities.',
      'Head of family or applicant declaring lawful family income with supporting documents.',
      'No active duplicate certificate issued within the same financial year.'
    ],
    eligibilityHi: [
      'उत्तराखंड का स्थायी निवासी अथवा वैध रूप से राज्य में निवासरत नागरिक।',
      'परिवार का मुखिया अथवा आवेदक जो सभी स्रोतों से वार्षिक आय का वैध विवरण दे सके।',
      'चालू वित्तीय वर्ष में पहले से कोई सक्रिय आय प्रमाण पत्र न बना हो।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Voter ID / Photo ID',
        nameHi: 'आधार कार्ड / मतदाता पहचान पत्र',
        isMandatory: true,
        details: 'Self-attested identity proof with local address.'
      },
      {
        name: 'Self-Declaration / Income Affidavit',
        nameHi: 'स्व-घोषणा पत्र / नोटरी शपथ पत्र',
        isMandatory: true,
        details: 'Prescribed affidavit on stamp paper or e-District self-declaration format declaring annual income.'
      },
      {
        name: 'Family Register (Parivar Register) Excerpt',
        nameHi: 'परिवार रजिस्टर की प्रमाणित नकल',
        isMandatory: true,
        details: 'Issued by Gram Panchayat Vikas Adhikari (VDO) in rural areas or Nagar Palika/Nigam tax record in urban areas.'
      },
      {
        name: 'Recent Passport Size Photograph',
        nameHi: 'नवीनतम पासपोर्ट साइज फोटो',
        isMandatory: true,
        details: 'Color photograph with white/light background taken within 3 months.'
      },
      {
        name: 'Salary Slip / Employer Certificate / ITR',
        nameHi: 'वेतन पर्ची / आयकर रिटर्न / नियोक्ता प्रमाण पत्र',
        isMandatory: false,
        details: 'Mandatory only if any family member is employed in government/private sector or pays income tax.'
      },
      {
        name: 'Land Record (Khatauni) / Agricultural Proof',
        nameHi: 'भूमि अभिलेख (खतौनी) या कृषि आय साक्ष्य',
        isMandatory: false,
        details: 'Excerpts from Uttarakhand Bhulekh portal if family owns agricultural land.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Registration on Apuni Sarkar',
        description: 'Create a citizen account on eservices.uk.gov.in using mobile number and Aadhaar OTP verification.'
      },
      {
        step: 2,
        title: 'Select Service & Fill Form',
        description: 'Choose Revenue Department -> Income Certificate. Enter district, tehsil, village/ward, and family income details.'
      },
      {
        step: 3,
        title: 'Upload Documents',
        description: 'Upload scanned copies of Parivar register copy, affidavit, identity proof, and photo.'
      },
      {
        step: 4,
        title: 'Pay Portal Fee & Get Receipt',
        description: 'Pay nominal service fee online and note down the application reference number (e.g. UK-REV-XXXX).'
      },
      {
        step: 5,
        title: 'Patwari Inquiry & Tehsildar Approval',
        description: 'Lekhpal/Patwari conducts field verification; upon satisfactory report, Tehsildar approves digitally with QR code.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अपुणी सरकार पोर्टल पर पंजीकरण',
        description: 'eservices.uk.gov.in पर मोबाइल नंबर व आधार ओटीपी से नागरिक खाता बनाएं।'
      },
      {
        step: 2,
        title: 'सेवा चुनें व फॉर्म भरें',
        description: 'राजस्व विभाग -> आय प्रमाण पत्र चुनें। जिला, तहसील, ग्राम/वार्ड और आय विवरण दर्ज करें।'
      },
      {
        step: 3,
        title: 'दस्तावेज़ अपलोड करें',
        description: 'परिवार रजिस्टर नकल, शपथ पत्र, पहचान पत्र व फोटो स्पष्ट रूप से अपलोड करें।'
      },
      {
        step: 4,
        title: 'शुल्क भुगतान व पावती प्राप्त करें',
        description: 'ऑनलाइन सामान्य पोर्टल शुल्क जमा करें और संदर्भ संख्या (UK-REV-XXXX) सुरक्षित रखें।'
      },
      {
        step: 5,
        title: 'पटवारी सत्यापन व तहसीलदार डिजिटल स्वीकृति',
        description: 'पटवारी/लेखपाल द्वारा स्थलीय जांच के उपरांत तहसीलदार डिजिटल हस्ताक्षर युक्त प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: 'Statutory nominal user fee (approx. ₹30–₹50 at CSC/portal as per state notification)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Right to Service Commission & Department of Revenue, UK',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'caste-certificate',
    nameEn: 'Caste Certificate (SC / ST / OBC)',
    nameHi: 'जाति प्रमाण पत्र (SC / ST / OBC)',
    nameHinglish: 'Jati Praman Patra / Caste Certificate',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Official legal certificate authenticating Scheduled Caste, Scheduled Tribe, or Other Backward Class status for constitutional reservations and welfare schemes in Uttarakhand.',
    descriptionHi: 'अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या अन्य पिछड़ा वर्ग (OBC) श्रेणी हेतु आरक्षण, सरकारी नौकरियों और शैक्षणिक लाभ का आधिकारिक प्रमाण पत्र।',
    eligibility: [
      'Applicant must belong to an officially notified SC, ST, or OBC community in Uttarakhand.',
      'Must possess ancestral revenue records or paternal lineage proving permanent residence in Uttarakhand on or before the notified cutoff date.',
      'For OBC category, Non-Creamy Layer criteria apply as per contemporary state/central income limits.'
    ],
    eligibilityHi: [
      'आवेदक उत्तराखंड राज्य द्वारा अधिसूचित अनुसूचित जाति, जनजाति या ओबीसी वर्ग का होना चाहिए।',
      'आवेदक या उसके पूर्वज विनिर्दिष्ट कट-ऑफ तिथि से पूर्व उत्तराखंड में स्थायी रूप से निवासरत होने चाहिए।',
      'ओबीसी वर्ग के लिए नॉन-क्रीमी लेयर आय सीमा के अंतर्गत होना आवश्यक है।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Photo ID',
        nameHi: 'आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Self-attested identity proof.'
      },
      {
        name: 'Father’s Caste Certificate / Ancestral Land Records',
        nameHi: 'पिता का जाति प्रमाण पत्र अथवा पुश्तैनी राजस्व अभिलेख',
        isMandatory: true,
        details: 'Paternal lineage proof: father’s caste certificate, old Khatauni mentioning caste, or ancestral school transfer certificate.'
      },
      {
        name: 'Uttarakhand Domicile / Permanent Residence Proof',
        nameHi: 'मूल निवास / स्थायी निवास प्रमाण पत्र',
        isMandatory: true,
        details: 'Proof of continuous residence in the state.'
      },
      {
        name: 'Family Register Excerpt (Parivar Register)',
        nameHi: 'परिवार रजिस्टर की प्रमाणित नकल',
        isMandatory: true,
        details: 'Gram Panchayat or municipal body family register showing genealogical lineage.'
      },
      {
        name: 'Self-Declaration / Caste Affidavit',
        nameHi: 'जाति व वंशावली शपथ पत्र',
        isMandatory: true,
        details: 'Affidavit affirming caste denomination and veracity of records.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Sign in to Apuni Sarkar',
        description: 'Log in to eservices.uk.gov.in with your citizen profile.'
      },
      {
        step: 2,
        title: 'Enter Category and Lineage Details',
        description: 'Select SC, ST, or OBC. Fill in sub-caste denomination, father’s details, and village ancestry.'
      },
      {
        step: 3,
        title: 'Upload Paternal Proof & Domicile',
        description: 'Attach father’s caste proof, Parivar register copy, domicile certificate, and photograph.'
      },
      {
        step: 4,
        title: 'Lekhpal Field Inquiry & SDM/Tehsildar Issuance',
        description: 'Revenue Patwari inspects records; Tehsildar or Sub-Divisional Magistrate issues digitally signed certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'पोर्टल पर लॉगिन करें',
        description: 'eservices.uk.gov.in पर नागरिक प्रोफाइल से साइन इन करें।'
      },
      {
        step: 2,
        title: 'श्रेणी व पैतृक विवरण भरें',
        description: 'SC, ST अथवा OBC श्रेणी चुनें। उप-जाति एवं पिता/पूर्वजों का विवरण भरें।'
      },
      {
        step: 3,
        title: 'पैतृक प्रमाण व निवास संलग्न करें',
        description: 'पिता का जाति प्रमाण अथवा पुश्तैनी खतौनी, परिवार रजिस्टर व फोटो अपलोड करें।'
      },
      {
        step: 4,
        title: 'पटवारी स्थलीय जांच व तहसीलदार अनुमोदन',
        description: 'पटवारी आख्या के पश्चात तहसीलदार या एसडीएम द्वारा डिजिटल हस्ताक्षरित प्रमाण पत्र जारी किया जाता है।'
      }
    ],
    verifiedFee: 'Statutory portal/CSC fee (approx. ₹30–₹50)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Department of Revenue & Social Welfare, Uttarakhand',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'domicile-certificate',
    nameEn: 'Domicile / Permanent Resident Certificate',
    nameHi: 'स्थायी निवास प्रमाण पत्र (मूल निवास)',
    nameHinglish: 'Mool Niwas / Domicile Certificate',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Statutory certificate proving permanent residential connection with the state of Uttarakhand for state government recruitment, college domicile quotas, and legal entitlements.',
    descriptionHi: 'उत्तराखंड में स्थायी निवास का वैधानिक प्रमाण पत्र, जो राज्य स्तरीय सरकारी नौकरियों, इंजीनियरिंग/मेडिकल कॉलेज राज्य कोटे और योजनाओं हेतु अनिवार्य है।',
    eligibility: [
      'Uninterrupted continuous residence in Uttarakhand for minimum 15 years, OR ancestral residence prior to the state creation.',
      'Child of parents holding certified permanent resident status in Uttarakhand.',
      'Studied in recognized schools of Uttarakhand for at least 3 years or holding ancestral immovable property.'
    ],
    eligibilityHi: [
      'उत्तराखंड में न्यूनतम 15 वर्षों से निरंतर निवास, अथवा राज्य गठन से पूर्व पुश्तैनी निवासी होना।',
      'उत्तराखंड के स्थायी निवासी माता-पिता की वैध संतान होना।',
      'राज्य में कम से कम 3 वर्ष की निरंतर स्कूली शिक्षा अथवा पुश्तैनी अचल संपत्ति होना।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Voter ID of Applicant',
        nameHi: 'आवेदक का आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Self-attested identity proof.'
      },
      {
        name: '15-Year Residence Proof / Ancestral Land Records',
        nameHi: '15 वर्ष निरंतर निवास साक्ष्य अथवा पुश्तैनी खतौनी',
        isMandatory: true,
        details: 'Ancestral land registry, Khatauni, municipal house tax receipts, or continuous utility records.'
      },
      {
        name: 'School Leaving Certificate / Educational Certificates',
        nameHi: 'विद्यालय त्याग प्रमाण पत्र (टी.सी.) / 10वीं प्रमाण पत्र',
        isMandatory: true,
        details: 'Class 10 or Transfer Certificate from recognized Uttarakhand school/college.'
      },
      {
        name: 'Family Register Excerpt (Parivar Register)',
        nameHi: 'परिवार रजिस्टर की प्रमाणित नकल',
        isMandatory: true,
        details: 'Gram Panchayat or municipal body record.'
      },
      {
        name: 'Affidavit of Permanent Residence',
        nameHi: 'स्थायी निवास का शपथ पत्र',
        isMandatory: true,
        details: 'Notarized declaration detailing duration of stay in Uttarakhand.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Select Permanent Resident Certificate Service',
        description: 'Log in to Apuni Sarkar and navigate to Revenue Department -> Permanent Resident Certificate.'
      },
      {
        step: 2,
        title: 'Provide Residential Timeline & Education',
        description: 'Enter your total years of stay, ancestral village, and school details.'
      },
      {
        step: 3,
        title: 'Upload Proofs',
        description: 'Upload school certificates, Parivar register copy, land/property papers, and affidavit.'
      },
      {
        step: 4,
        title: 'Tehsildar Verification & Lifelong Issuance',
        description: 'Revenue Patwari validates the residency period; Tehsildar approves. Once issued, certificate has lifelong validity.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'स्थायी निवास सेवा चुनें',
        description: 'अपुणी सरकार पोर्टल में लॉगिन कर राजस्व विभाग -> स्थायी निवास प्रमाण पत्र चुनें।'
      },
      {
        step: 2,
        title: 'निवास अवधि व शिक्षा विवरण भरें',
        description: 'राज्य में रहने की कुल अवधि, पुश्तैनी गांव और विद्यालयों का विवरण दर्ज करें।'
      },
      {
        step: 3,
        title: 'साक्ष्य अपलोड करें',
        description: '10वीं टी.सी., परिवार रजिस्टर नकल, भूमि/मकान दस्तावेज एवं शपथ पत्र अपलोड करें।'
      },
      {
        step: 4,
        title: 'पटवारी रिपोर्ट व तहसीलदार आजीवन प्रमाण पत्र',
        description: 'पटवारी स्थलीय सत्यापन करते हैं और तहसीलदार द्वारा आजीवन वैध डिजिटल प्रमाण पत्र जारी किया जाता है।'
      }
    ],
    verifiedFee: 'Statutory nominal fee (approx. ₹30–₹50)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Right to Service Commission & Revenue Department',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'birth-certificate',
    nameEn: 'Birth Certificate',
    nameHi: 'जन्म प्रमाण पत्र',
    nameHinglish: 'Janam Praman Patra / Birth Certificate',
    department: 'Panchayati Raj & Urban Development, Uttarakhand',
    departmentHi: 'पंचायती राज विभाग एवं नगर निकाय, उत्तराखंड',
    description: 'Primary legal identity and age document registering the birth of a child in rural or urban Uttarakhand under the Registration of Births and Deaths Act.',
    descriptionHi: 'बच्चे के जन्म का आधिकारिक कानूनी पंजीकरण, जो विद्यालय प्रवेश, पासपोर्ट और पहचान हेतु मूल आधार है।',
    eligibility: [
      'Birth took place within the geographic territory of Uttarakhand (hospital or home birth).',
      'Institutional births reported directly by hospital authorities, or home births reported by parents within the prescribed timeline.'
    ],
    eligibilityHi: [
      'जन्म उत्तराखंड राज्य की भौगोलिक सीमा के भीतर (अस्पताल या गृह प्रसव) हुआ हो।',
      'अस्पताल द्वारा सीधे प्रेषित अथवा अभिभावक द्वारा निर्धारित अवधि में रिपोर्ट किया गया हो।'
    ],
    requiredDocuments: [
      {
        name: 'Hospital Birth Slip / Discharge Summary (Form 1)',
        nameHi: 'अस्पताल जन्म सूचना पर्ची (फॉर्म-1) / डिस्चार्ज स्लिप',
        isMandatory: true,
        details: 'Medical slip certifying date, time, and sex of baby.'
      },
      {
        name: 'Parents’ Aadhaar Cards',
        nameHi: 'माता-पिता के आधार कार्ड',
        isMandatory: true,
        details: 'Aadhaar copies of both mother and father.'
      },
      {
        name: 'Parents’ Address Proof in Uttarakhand',
        nameHi: 'माता-पिता का निवास प्रमाण पत्र',
        isMandatory: true,
        details: 'Electricity bill, Voter card, or Ration Card.'
      },
      {
        name: 'Delayed Registration Affidavit (If >21 Days)',
        nameHi: 'विलंब शपथ पत्र / आदेश (21 दिन से अधिक पर)',
        isMandatory: false,
        details: 'Only needed if registering after 21 days from birth date.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Check Hospital Institutional Reporting',
        description: 'Most Uttarakhand hospitals submit data to CRS/e-District upon discharge. Request the reference slip.'
      },
      {
        step: 2,
        title: 'Register Online or with Gram Vikas Adhikari / Palika',
        description: 'In rural areas contact Gram Panchayat VDO; in urban areas, apply on Apuni Sarkar or Nagar Palika counter.'
      },
      {
        step: 3,
        title: 'Registrar Approval & QR Code Download',
        description: 'Registrar verifies medical records and issues digitally signed certificate available for instant download.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अस्पताल पर्ची प्राप्त करें',
        description: 'डिस्चार्ज के समय अस्पताल द्वारा जारी जन्म सूचना प्रपत्र (Form 1) प्राप्त करें।'
      },
      {
        step: 2,
        title: 'ऑनलाइन अथवा पंचायत/नगर पालिका में आवेदन',
        description: 'ग्रामीण क्षेत्रों में ग्राम विकास अधिकारी (VDO) तथा शहरी क्षेत्रों में नगर पालिका/निगम में आवेदन करें।'
      },
      {
        step: 3,
        title: 'रजिस्ट्रार सत्यापन व क्यूआर प्रमाण पत्र डाउनलोड',
        description: 'रजिस्ट्रार रिकॉर्ड का मिलान कर डिजिटल प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: 'Free if registered within 21 days of birth; minor statutory delayed fee if delayed',
    verifiedProcessingTime: '7 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Directorate of Panchayati Raj & Urban Local Bodies, Uttarakhand',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'death-certificate',
    nameEn: 'Death Certificate',
    nameHi: 'मृत्यु प्रमाण पत्र',
    nameHinglish: 'Mrityu Praman Patra / Death Certificate',
    department: 'Panchayati Raj & Urban Development, Uttarakhand',
    departmentHi: 'पंचायती राज विभाग एवं नगर निकाय, उत्तराखंड',
    description: 'Statutory civil record certifying the demise of an individual for property inheritance, bank settlements, and family pension claims.',
    descriptionHi: 'उत्तराधिकार, बैंक खाते के निस्तारण, बीमा दावों और पारिवारिक पेंशन हेतु मृत्यु का कानूनी पंजीकरण।',
    eligibility: [
      'Death occurred within the territorial boundaries of Uttarakhand.',
      'Applicant must be a legal heir, immediate family member, or authorized representative.'
    ],
    eligibilityHi: [
      'मृत्यु उत्तराखंड की भौगोलिक सीमा के भीतर हुई हो।',
      'आवेदक मृतक का विधिक वारिस, निकटतम परिजन अथवा अधिकृत व्यक्ति होना चाहिए।'
    ],
    requiredDocuments: [
      {
        name: 'Hospital Cause of Death Slip / Cremation or Burial Receipt',
        nameHi: 'अस्पताल मृत्यु पर्ची अथवा श्मशान घाट/कब्रिस्तान रसीद',
        isMandatory: true,
        details: 'Doctor’s medical report or official crematorium slip.'
      },
      {
        name: 'Deceased Person’s Aadhaar / Voter ID',
        nameHi: 'मृतक का आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Identity card of deceased.'
      },
      {
        name: 'Applicant’s ID & Proof of Relationship',
        nameHi: 'आवेदक का पहचान पत्र व संबंध साक्ष्य',
        isMandatory: true,
        details: 'Parivar register excerpt or Ration card showing family relationship.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Gather Medical or Cremation Receipt',
        description: 'Obtain doctor certificate or cremation ground voucher.'
      },
      {
        step: 2,
        title: 'Submit Application on Apuni Sarkar or Local Registrar',
        description: 'Apply on portal or visit local Panchayat/Municipal health counter.'
      },
      {
        step: 3,
        title: 'Registrar Verification & Issuance',
        description: 'Registrar registers the civil event and generates digitally signed certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'चिकित्सकीय पर्ची या अंत्येष्टि रसीद प्राप्त करें',
        description: 'अस्पताल की मृत्यु पर्ची या श्मशान घाट की रसीद सुरक्षित रखें।'
      },
      {
        step: 2,
        title: 'पोर्टल अथवा स्थानीय रजिस्ट्रार के समक्ष आवेदन',
        description: 'अपुणी सरकार अथवा ग्राम पंचायत/नगर पालिका स्वास्थ्य काउंटर पर प्रपत्र प्रस्तुत करें।'
      },
      {
        step: 3,
        title: 'सत्यापन व डिजिटल प्रमाण पत्र प्राप्त करें',
        description: 'रजिस्ट्रार द्वारा रिकॉर्ड दर्ज कर डिजिटल हस्ताक्षर युक्त प्रमाण पत्र जारी किया जाता है।'
      }
    ],
    verifiedFee: 'Free if registered within 21 days; nominal delayed fee thereafter',
    verifiedProcessingTime: '7 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Panchayati Raj & Urban Development Directorate, Uttarakhand',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'pension-services',
    nameEn: 'Social Welfare Pension Schemes (Old Age / Widow / Disability)',
    nameHi: 'समाज कल्याण पेंशन योजनाएं (वृद्धावस्था / विधवा / दिव्यांग)',
    nameHinglish: 'Social Pension / Vridhavastha, Vidhwa & Divyang Pension',
    department: 'Social Welfare Department, Government of Uttarakhand',
    departmentHi: 'समाज कल्याण विभाग, उत्तराखंड सरकार',
    description: 'Monthly direct financial assistance (DBT) for eligible senior citizens (60+), destitute widows, and persons with benchmark disability (40%+).',
    descriptionHi: 'वरिष्ठ नागरिकों (60+ आयु), निराश्रित विधवाओं और 40% या अधिक दिव्यांगजनों को बैंक खाते में प्रत्यक्ष लाभ अंतरण (DBT) द्वारा मासिक पेंशन।',
    eligibility: [
      'Old Age Pension: Age 60 years or above, permanent resident of Uttarakhand, family income below BPL/notified limit.',
      'Widow Pension: 18 years or older, death of lawful husband, living below prescribed income ceiling.',
      'Disability Pension: Minimum 40% benchmark disability certified by Chief Medical Officer (CMO) board.',
      'Active savings bank account seeded with Aadhaar for Direct Benefit Transfer (DBT).'
    ],
    eligibilityHi: [
      'वृद्धावस्था पेंशन: न्यूनतम आयु 60 वर्ष, उत्तराखंड का स्थायी निवासी, बीपीएल अथवा राज्य की आय सीमा के भीतर।',
      'विधवा पेंशन: आयु 18 वर्ष या अधिक, पति की मृत्यु का वैध साक्ष्य, निर्धारित आय सीमा के भीतर।',
      'दिव्यांग पेंशन: मुख्य चिकित्सा अधिकारी (CMO) मेडिकल बोर्ड द्वारा न्यूनतम 40% दिव्यांगता प्रमाण पत्र।',
      'आधार से लिंक सक्रिय बैंक बचत खाता होना अनिवार्य।'
    ],
    requiredDocuments: [
      {
        name: 'Age Proof (Voter ID / Matriculation / CMO Age Certificate)',
        nameHi: 'आयु प्रमाण पत्र (वोटर कार्ड / 10वीं प्रमाण / सीएमओ आयु साक्ष्य)',
        isMandatory: true,
        details: 'Proof proving age criteria (60+ for Old Age).'
      },
      {
        name: 'Aadhaar Card with Mobile Linkage',
        nameHi: 'आधार कार्ड (मोबाइल लिंक युक्त)',
        isMandatory: true,
        details: 'Essential for biometric verification and PFMS DBT mapping.'
      },
      {
        name: 'Bank Passbook Copy (Account Number & IFSC)',
        nameHi: 'बैंक पासबुक की प्रति (खाता संख्या व IFSC कोड)',
        isMandatory: true,
        details: 'Core banking passbook first page showing applicant name.'
      },
      {
        name: 'Income Certificate / BPL Family Proof',
        nameHi: 'आय प्रमाण पत्र अथवा बीपीएल प्रमाण',
        isMandatory: true,
        details: 'Tehsildar income certificate or BPL card excerpt.'
      },
      {
        name: 'Husband’s Death Certificate (For Widow Pension)',
        nameHi: 'पति का मृत्यु प्रमाण पत्र (केवल विधवा पेंशन हेतु)',
        isMandatory: false,
        details: 'Required only for destitute widow pension applicants.'
      },
      {
        name: 'CMO Disability Certificate with UDID (For Divyang Pension)',
        nameHi: 'सीएमओ दिव्यांगता प्रमाण पत्र व यूडीआईडी कार्ड',
        isMandatory: false,
        details: 'Required only for disability pension (minimum 40% disability).'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Select Specific Pension Category',
        description: 'Choose Old Age, Widow, or Disability on Apuni Sarkar or Social Welfare portal.'
      },
      {
        step: 2,
        title: 'Input Aadhaar & DBT Bank Details',
        description: 'Enter 12-digit Aadhaar and active bank account number and IFSC.'
      },
      {
        step: 3,
        title: 'Attach Income & Category Proofs',
        description: 'Upload Tehsildar income certificate, age proof, bank passbook, and medical/death certificates as applicable.'
      },
      {
        step: 4,
        title: 'Panchayat Verification & DSWO Sanction',
        description: 'Gram Panchayat Vikas Adhikari validates physical residency; District Social Welfare Officer (DSWO) sanctions the monthly allowance.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'पेंशन योजना का चयन करें',
        description: 'अपुणी सरकार अथवा समाज कल्याण पोर्टल पर वृद्धावस्था, विधवा अथवा दिव्यांग पेंशन चुनें।'
      },
      {
        step: 2,
        title: 'आधार व डीबीटी बैंक खाता विवरण भरें',
        description: 'मासिक पेंशन सीधे खाते में आने हेतु 12 अंकों का आधार व सही बैंक खाता संख्या भरें।'
      },
      {
        step: 3,
        title: 'आय एवं मेडिकल/मृत्यु प्रमाण संलग्न करें',
        description: 'तहसीलदार का आय प्रमाण पत्र, आयु प्रमाण और संबंधित मेडिकल/मृत्यु प्रमाण अपलोड करें।'
      },
      {
        step: 4,
        title: 'पंचायत सत्यापन व समाज कल्याण अधिकारी स्वीकृति',
        description: 'ग्राम विकास अधिकारी स्थलीय सत्यापन कर जिला समाज कल्याण अधिकारी (DSWO) को प्रेषित करते हैं।'
      }
    ],
    verifiedFee: 'Completely free application process (Zero government fee)',
    verifiedProcessingTime: '30 working days under Uttarakhand Right to Service (RTS) Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Social Welfare Department, Uttarakhand',
    lastVerifiedDate: 'March 2026'
  },
  {
    serviceId: 'parivar-register-copy',
    nameEn: 'Parivar Register Copy (Family Register Excerpt)',
    nameHi: 'परिवार रजिस्टर की नकल (कुटुंब रजिस्टर)',
    nameHinglish: 'Parivar Register Nakal / Family Register Copy',
    department: 'Panchayati Raj Department, Government of Uttarakhand',
    departmentHi: 'पंचायती राज विभाग, उत्तराखंड सरकार',
    description: 'Certified legal excerpt of the official Gram Panchayat Family Register (कुटुंब रजिस्टर / फॉर्म 2) detailing family head, living members, familial relationships, dates of birth, and house numbers. Essential foundational proof of family relationship and local residence for income, caste, and domicile certificates in Uttarakhand.',
    descriptionHi: 'ग्राम पंचायत कुटुंब रजिस्टर की प्रमाणित कानूनी नकल जिसमें परिवार के मुखिया, सभी सदस्यों के नाम, संबंध और जन्मतिथि का आधिकारिक ब्यौरा होता है। यह आय, जाति व मूल निवास के लिए अनिवार्य आधार दस्तावेज है।',
    eligibility: [
      'Family must be registered in the Gram Panchayat register (Kutumb Register) of the respective village in Uttarakhand.',
      'Applicant must be a listed family member, head of family, or authorized representative.'
    ],
    eligibilityHi: [
      'परिवार का नाम संबंधित ग्राम पंचायत के कुटुंब रजिस्टर में दर्ज होना आवश्यक है।',
      'आवेदक परिवार का सदस्य, मुखिया अथवा विधिक रूप से अधिकृत प्रतिनिधि होना चाहिए।'
    ],
    requiredDocuments: [
      {
        name: 'Applicant’s Aadhaar Card / Voter ID (Photo ID)',
        nameHi: 'आवेदक का आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Self-attested identity proof.'
      },
      {
        name: 'Written Application Form / Plain Paper Request',
        nameHi: 'लिखित प्रार्थना पत्र अथवा पोर्टल ऑनलाइन आवेदन',
        isMandatory: true,
        details: 'Addressed to Gram Panchayat Vikas Adhikari (VDO) or online request on Apuni Sarkar.'
      },
      {
        name: 'House Number / Old Ration Card Reference (Optional)',
        nameHi: 'मकान संख्या अथवा पुराना राशन कार्ड (वैकल्पिक)',
        isMandatory: false,
        details: 'Helps Gram Vikas Adhikari locate the exact register volume quickly.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Submit Request Offline or Online',
        description: 'Offline: Visit the Gram Panchayat office during office days and submit request to Gram Vikas Adhikari (VDO). Online: Log in to eservices.uk.gov.in -> Panchayati Raj -> Copy of Family Register.'
      },
      {
        step: 2,
        title: 'Register Verification by VDO',
        description: 'Gram Vikas Adhikari checks the official physical Kutumb Register (Form 2) or e-Panchayat digital register volume for the specified Gram Sabha and family head.'
      },
      {
        step: 3,
        title: 'Certified Copy Issuance',
        description: 'VDO issues signed and stamped certified copy bearing register volume folio number or issues digitally on the portal.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'ऑफलाइन अथवा ऑनलाइन आवेदन प्रस्तुत करें',
        description: 'ग्राम पंचायत कार्यालय में ग्राम विकास अधिकारी (VDO) को प्रार्थना पत्र दें अथवा अपुणी सरकार पोर्टल पर ऑनलाइन आवेदन करें।'
      },
      {
        step: 2,
        title: 'कुटुंब रजिस्टर मिलान व सत्यापन',
        description: 'ग्राम विकास अधिकारी ग्राम सभा के कुटुंब रजिस्टर (फॉर्म 2) से परिवार के सभी सदस्यों के विवरण का मिलान करते हैं।'
      },
      {
        step: 3,
        title: 'प्रमाणित नकल व मुहर सहित जारी',
        description: 'रजिस्टर पृष्ठ संख्या व आधिकारिक मुहर युक्त प्रमाणित प्रतिलिपि जारी की जाती है।'
      }
    ],
    verifiedFee: 'Pending official gazette verification (Nominal copy fee or free depending on Gram Panchayat resolution; Apuni AI does not estimate fees)',
    verifiedProcessingTime: 'Pending official departmental notification for offline archive retrieval (Standard online copy up to 7 working days)',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Directorate of Panchayati Raj, Uttarakhand (panchayat.uk.gov.in) & Apuni Sarkar',
    lastVerifiedDate: 'March 2026'
  }
];
