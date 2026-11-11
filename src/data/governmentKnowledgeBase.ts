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
    description: 'Statutory revenue certificate certifying total annual household income across all legal sources for fee concessions, admissions, scholarships, and social welfare schemes.',
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
        title: 'Fill Family Income Details',
        description: 'Select Revenue Department -> Income Certificate, and enter family member details and earnings.'
      },
      {
        step: 3,
        title: 'Upload Scanned Documents',
        description: 'Upload Parivar register copy, affidavit, photo, and identity proofs.'
      },
      {
        step: 4,
        title: 'Pay Portal Fee',
        description: 'Pay statutory portal charge online and save application tracking number.'
      },
      {
        step: 5,
        title: 'Patwari Inquiry & Tehsildar Approval',
        description: 'Local Lekhpal/Patwari conducts field inquiry, and Tehsildar issues digitally signed QR-coded certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अपुणी सरकार पोर्टल पर पंजीकरण',
        description: 'eservices.uk.gov.in पर मोबाइल नंबर और आधार ओटीपी से नागरिक खाता बनाएं।'
      },
      {
        step: 2,
        title: 'पारिवारिक आय विवरण भरें',
        description: 'राजस्व विभाग -> आय प्रमाण पत्र चुनें और परिवार के सदस्यों तथा आय का विवरण दर्ज करें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड करें',
        description: 'परिवार रजिस्टर नकल, शपथ पत्र, फोटो और पहचान पत्र अपलोड करें।'
      },
      {
        step: 4,
        title: 'पोर्टल शुल्क का भुगतान',
        description: 'पोर्टल पर निर्धारित शुल्क जमा करें और संदर्भ संख्या सुरक्षित रखें।'
      },
      {
        step: 5,
        title: 'पटवारी आख्या एवं तहसीलदार स्वीकृति',
        description: 'क्षेत्रीय लेखपाल/पटवारी द्वारा जांच के बाद तहसीलदार डिजिटल हस्ताक्षरित प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: '₹30 (Portal direct) / ₹50 (CSC user fee)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Right to Service Commission & Revenue Department Notification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'caste-certificate',
    nameEn: 'Caste Certificate (SC/ST/OBC)',
    nameHi: 'जाति प्रमाण पत्र (अ.जा./अ.ज.जा./अ.पि.व.)',
    nameHinglish: 'Jati Praman Patra / Caste Certificate',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Statutory certificate validating membership in Scheduled Caste, Scheduled Tribe, or Other Backward Classes for constitutional reservation, admissions, and welfare benefits.',
    descriptionHi: 'अनुसूचित जाति, अनुसूचित जनजाति अथवा अन्य पिछड़ा वर्ग में सदस्यता को प्रमाणित करने वाला विधिक प्रमाण पत्र।',
    eligibility: [
      'Permanent resident of Uttarakhand holding valid ancestral domicile.',
      'Belongs to a community listed in the presidential orders for Uttarakhand.',
      'For OBC category: Household annual income must be within Non-Creamy Layer (NCL) threshold.'
    ],
    eligibilityHi: [
      'उत्तराखंड का स्थायी निवासी जिसके पास वैध पैतृक निवास प्रमाण हो।',
      'उत्तराखंड की अधिसूचित अनुसूचित जाति/जनजाति/ओबीसी सूची में शामिल समुदाय से हो।',
      'ओबीसी वर्ग हेतु: परिवार की वार्षिक आय नॉन-क्रीमी लेयर सीमा के भीतर होनी चाहिए।'
    ],
    requiredDocuments: [
      {
        name: 'Applicant Identity Proof (Aadhaar / Voter ID)',
        nameHi: 'आवेदक का पहचान पत्र (आधार / वोटर आईडी)',
        isMandatory: true,
        details: 'Self-attested government identity proof.'
      },
      {
        name: "Father's Caste Certificate or Pre-1985 Ancestral Caste Proof",
        nameHi: 'पिता का जाति प्रमाण पत्र या 1985 से पूर्व का पैतृक अभिलेख',
        isMandatory: true,
        details: "Father's caste certificate, land records (Khatauni), or revenue settlement records."
      },
      {
        name: 'Uttarakhand Permanent Residence (Domicile) Certificate',
        nameHi: 'उत्तराखंड स्थायी निवास (मूल निवास) प्रमाण पत्र',
        isMandatory: true,
        details: 'Mandatory to verify state origin.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की प्रमाणित नकल (प्रारूप 2)',
        isMandatory: true,
        details: 'Issued by Gram Vikas Adhikari (VDO) showing family lineage.'
      },
      {
        name: 'Non-Creamy Layer (NCL) Income Proof (For OBC Applicants)',
        nameHi: 'नॉन-क्रीमी लेयर आय प्रमाण पत्र (केवल ओबीसी हेतु)',
        isMandatory: false,
        details: 'Required only for OBC applicants to verify income limit.'
      },
      {
        name: 'Self-Declaration Affidavit of Caste',
        nameHi: 'जाति एवं उप-जाति का स्व-घोषणा शपथ पत्र',
        isMandatory: true,
        details: 'Notarized affidavit declaring clan, sub-caste, and lineage.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Login to Apuni Sarkar',
        description: 'Access eservices.uk.gov.in with citizen credentials.'
      },
      {
        step: 2,
        title: 'Choose Caste Category',
        description: 'Select SC, ST, or OBC certificate application under Revenue Department.'
      },
      {
        step: 3,
        title: 'Enter Ancestral Details',
        description: "Fill father's name, sub-caste, and ancestral village/mohalla details."
      },
      {
        step: 4,
        title: 'Upload Documents & Pay Fee',
        description: "Upload Parivar register, father's caste proof, Domicile, and submit statutory fee."
      },
      {
        step: 5,
        title: 'Revenue Inquiry & Issue',
        description: 'Revenue Inspector/Lekhpal verifies lineage before Tehsildar signs certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अपुणी सरकार पोर्टल पर लॉगिन',
        description: 'eservices.uk.gov.in पर अपनी लॉगिन आईडी से प्रवेश करें।'
      },
      {
        step: 2,
        title: 'जाति वर्ग का चयन',
        description: 'राजस्व विभाग में एससी, एसटी या ओबीसी विकल्प चुनें।'
      },
      {
        step: 3,
        title: 'पैतृक विवरण दर्ज करें',
        description: 'पिता का नाम, उप-जाति और पैतृक गांव/मुहल्ले का विवरण भरें।'
      },
      {
        step: 4,
        title: 'दस्तावेज अपलोड एवं शुल्क भुगतान',
        description: 'परिवार रजिस्टर, पिता का जाति साक्ष्य, मूल निवास अपलोड कर शुल्क जमा करें।'
      },
      {
        step: 5,
        title: 'राजस्व जांच एवं प्रमाण पत्र जारी होना',
        description: 'कानूनगो/लेखपाल की आख्या के बाद तहसीलदार डिजिटल प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: '₹30 (Portal direct) / ₹50 (CSC user fee)',
    verifiedProcessingTime: '15 working days for SC/ST; 30 working days for OBC under RTS Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Right to Service Commission & Revenue Department Notification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'domicile-certificate',
    nameEn: 'Domicile / Permanent Residence Certificate',
    nameHi: 'स्थायी निवास (मूल निवास) प्रमाण पत्र',
    nameHinglish: 'Mool Niwas / Domicile Certificate',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Statutory certificate certifying permanent residence and legal domicile in Uttarakhand for government recruitment, exams, and state quotas.',
    descriptionHi: 'उत्तराखंड में स्थायी निवास और अधिवास को प्रमाणित करने वाला विधिक प्रमाण पत्र।',
    eligibility: [
      'Applicant or ancestors residing in Uttarakhand continuously for at least 15 years, OR',
      'Passed High School / Intermediate examination from recognized institutions within Uttarakhand with continuous residence criteria, OR',
      'State government employee posted in Uttarakhand as per statutory rules.'
    ],
    eligibilityHi: [
      'आवेदक या उसके पूर्वज कम से कम 15 वर्षों से लगातार उत्तराखंड में निवासरत हों, अथवा',
      'उत्तराखंड के मान्यता प्राप्त विद्यालयों से हाईस्कूल/इंटरमीडिएट उत्तीर्ण की हो और निरंतर निवास हो, अथवा',
      'राज्य सरकार के नियमित कर्मचारी।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Voter ID',
        nameHi: 'आधार कार्ड / मतदाता पहचान पत्र',
        isMandatory: true,
        details: 'Government photo identification and current address proof.'
      },
      {
        name: '15-Year Continuous Residence Proof in Uttarakhand',
        nameHi: 'उत्तराखंड में 15 वर्ष का निरंतर निवास प्रमाण',
        isMandatory: true,
        details: 'School certificates, legacy voter lists, electricity bills, or property registry.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की नकल',
        isMandatory: true,
        details: 'Gram Panchayat family register excerpt.'
      },
      {
        name: 'Ancestral Land Record (Khatauni) / House Registry',
        nameHi: 'पैतृक भूमि अभिलेख (खतौनी) या मकान की रजिस्ट्री',
        isMandatory: false,
        details: 'Proof of ancestral immovable property in Uttarakhand.'
      },
      {
        name: 'Notarized Domicile Affidavit',
        nameHi: 'स्थायी निवास शपथ पत्र (नोटरीकृत)',
        isMandatory: true,
        details: 'Affidavit declaring no domicile claimed in any other state.'
      },
      {
        name: 'Recent Passport Size Photograph',
        nameHi: 'नवीनतम पासपोर्ट साइज फोटो',
        isMandatory: true,
        details: 'Color photograph taken within 3 months.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Citizen Portal Login',
        description: 'Log into eservices.uk.gov.in.'
      },
      {
        step: 2,
        title: 'Fill Domicile Application',
        description: 'Select Permanent Residence Certificate and input 15-year stay details.'
      },
      {
        step: 3,
        title: 'Upload Scanned Documents',
        description: 'Upload Parivar register, stay proofs, affidavit, and photo.'
      },
      {
        step: 4,
        title: 'Pay Portal Fee',
        description: 'Complete online payment of statutory fees.'
      },
      {
        step: 5,
        title: 'Patwari Verification & Digital Certificate',
        description: 'Patwari verifies physical residence; Tehsildar issues digitally signed certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'नागरिक पोर्टल पर लॉगिन',
        description: 'eservices.uk.gov.in पर लॉगिन करें।'
      },
      {
        step: 2,
        title: 'स्थायी निवास आवेदन भरें',
        description: 'स्थायी निवास प्रमाण पत्र विकल्प चुनकर 15 वर्ष के निवास का विवरण भरें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड करें',
        description: 'परिवार रजिस्टर, 15 वर्ष के साक्ष्य, शपथ पत्र और फोटो अपलोड करें।'
      },
      {
        step: 4,
        title: 'शुल्क भुगतान',
        description: 'ऑनलाइन निर्धारित पोर्टल शुल्क जमा करें।'
      },
      {
        step: 5,
        title: 'पटवारी सत्यापन एवं डिजिटल प्रमाण पत्र',
        description: 'पटवारी द्वारा स्थलीय सत्यापन के बाद तहसीलदार डिजिटल प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: '₹30 (Portal direct) / ₹50 (CSC user fee)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Right to Service Commission & Revenue Department Notification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'ews-certificate',
    nameEn: 'EWS Certificate (Economically Weaker Section)',
    nameHi: 'ईडब्ल्यूएस प्रमाण पत्र (आर्थिक रूप से कमजोर वर्ग)',
    nameHinglish: 'EWS Certificate / Aarthik Kamjor Varg Praman Patra',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Income and asset certificate issued to general category citizens eligible for 10% Economically Weaker Section reservation in admissions and government jobs.',
    descriptionHi: 'सामान्य वर्ग के नागरिकों हेतु 10% ईडब्ल्यूएस आरक्षण का लाभ प्राप्त करने के लिए आय एवं परिसंपत्ति प्रमाण पत्र।',
    eligibility: [
      'General category citizen not covered under SC, ST, or OBC reservation.',
      'Gross annual family income from all sources below ₹8 Lakh in the previous financial year.',
      'Family does not own 5 acres or more agricultural land, residential flat >= 1000 sq ft, or notified residential plot >= 100/200 sq yards.'
    ],
    eligibilityHi: [
      'सामान्य वर्ग का नागरिक जो एससी, एसटी या ओबीसी आरक्षण के अंतर्गत न आता हो।',
      'पूर्व वित्तीय वर्ष में परिवार की कुल वार्षिक आय ₹8 लाख से कम हो।',
      'परिवार के पास 5 एकड़ या अधिक कृषि भूमि, 1000 वर्ग फुट या अधिक का फ्लैट, अथवा 100/200 वर्ग गज का अधिसूचित भूखंड न हो।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Photo ID',
        nameHi: 'आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Photo identification proof.'
      },
      {
        name: 'Uttarakhand Domicile Certificate',
        nameHi: 'उत्तराखंड मूल निवास / स्थायी निवास प्रमाण पत्र',
        isMandatory: true,
        details: 'Confirms resident status.'
      },
      {
        name: 'Parivar Register Copy (Form 2) / Ration Card',
        nameHi: 'परिवार रजिस्टर नकल / राशन कार्ड',
        isMandatory: true,
        details: 'Verifies family composition.'
      },
      {
        name: 'Income Proof / ITR of All Earning Family Members',
        nameHi: 'वेतन पर्ची / आयकर रिटर्न / आय साक्ष्य',
        isMandatory: true,
        details: 'Validates that gross family income is under ₹8 Lakh.'
      },
      {
        name: 'Land Record (Khatauni) / Property Tax Receipt',
        nameHi: 'खतौनी / मकान रजिस्ट्री / संपत्ति कर रसीद',
        isMandatory: true,
        details: 'Verifies property assets do not exceed EWS ceiling.'
      },
      {
        name: 'Notarized EWS Self-Declaration Affidavit',
        nameHi: 'ईडब्ल्यूएस स्व-घोषणा शपथ पत्र',
        isMandatory: true,
        details: 'Affidavit affirming family income and assets.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Portal Selection',
        description: 'Log into eservices.uk.gov.in -> Revenue Department -> EWS Certificate.'
      },
      {
        step: 2,
        title: 'Declare Income & Assets',
        description: 'Enter gross family income, agricultural land measurements, and residential property details.'
      },
      {
        step: 3,
        title: 'Upload Scanned Documents',
        description: 'Upload Domicile, Parivar register, income proofs, property papers, and affidavit.'
      },
      {
        step: 4,
        title: 'Submit & Pay Fee',
        description: 'Pay statutory portal fee online.'
      },
      {
        step: 5,
        title: 'Patwari Inquiry & Tehsildar Issuance',
        description: 'Lekhpal verifies assets in field; Tehsildar issues signed EWS Certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'पोर्टल पर सेवा चयन',
        description: 'eservices.uk.gov.in पर लॉगिन कर राजस्व विभाग -> ईडब्ल्यूएस प्रमाण पत्र चुनें।'
      },
      {
        step: 2,
        title: 'आय एवं परिसंपत्ति विवरण भरें',
        description: 'पारिवारिक कुल आय, कृषि भूमि और आवासीय मकान की माप का विवरण दर्ज करें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड करें',
        description: 'मूल निवास, परिवार रजिस्टर, आय साक्ष्य, खतौनी और शपथ पत्र अपलोड करें।'
      },
      {
        step: 4,
        title: 'शुल्क भुगतान',
        description: 'पोर्टल पर निर्धारित शुल्क जमा करें।'
      },
      {
        step: 5,
        title: 'पटवारी जांच एवं तहसीलदार स्वीकृति',
        description: 'लेखपाल द्वारा संपत्तियों के स्थलीय सत्यापन के बाद तहसीलदार डिजिटल प्रमाण पत्र जारी करते हैं।'
      }
    ],
    verifiedFee: '₹30 (Portal direct) / ₹50 (CSC user fee)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Personnel Department & Revenue Department Notification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'character-certificate',
    nameEn: 'Character Certificate (Police Verification)',
    nameHi: 'चरित्र प्रमाण पत्र (पुलिस सत्यापन)',
    nameHinglish: 'Charitra Praman Patra / Character Certificate',
    department: 'Home & Police Department / Revenue Department, Government of Uttarakhand',
    departmentHi: 'गृह एवं पुलिस विभाग / राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Official police verification and character certificate required for state government employment, private jobs, security clearances, and public contractor licenses.',
    descriptionHi: 'सरकारी नौकरी, निजी सेवा, सुरक्षा मंजूरी और ठेकेदारी पंजीकरण हेतु पुलिस सत्यापन एवं चरित्र प्रमाण पत्र।',
    eligibility: [
      'Resident of Uttarakhand with local residential address verification.',
      'No adverse criminal record or pending non-bailable warrants.',
      'Must provide valid references and identification.'
    ],
    eligibilityHi: [
      'उत्तराखंड का निवासी जिसके स्थानीय पते का भौतिक सत्यापन संभव हो।',
      'कोई गंभीर आपराधिक रिकॉर्ड या गैर-जमानती वारंट लंबित न हो।',
      'वैध पहचान पत्र एवं संभ्रांत व्यक्तियों की संस्तुति।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Voter ID',
        nameHi: 'आधार कार्ड या वोटर आईडी',
        isMandatory: true,
        details: 'Photo identification proof.'
      },
      {
        name: 'Local Residence Proof (Domicile / Parivar Register / Utility Bill)',
        nameHi: 'स्थानीय निवास प्रमाण (मूल निवास / परिवार रजिस्टर / बिल)',
        isMandatory: true,
        details: 'Verifies residence within local police station boundary.'
      },
      {
        name: 'Two Character Recommendation Letters',
        nameHi: 'दो संभ्रांत व्यक्तियों / राजपत्रित अधिकारियों के संस्तुति पत्र',
        isMandatory: true,
        details: 'From Gazetted Officers, Gram Pradhan, or Municipal Councilor.'
      },
      {
        name: 'Recent Passport Size Photographs',
        nameHi: 'नवीनतम पासपोर्ट साइज फोटो',
        isMandatory: true,
        details: 'Clear photograph with light background.'
      },
      {
        name: 'Self-Declaration of No Criminal Record',
        nameHi: 'आपराधिक रिकॉर्ड न होने का स्व-घोषणा पत्र',
        isMandatory: true,
        details: 'Self-declaration affirming no criminal case pending.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Online Application Submission',
        description: 'Apply on uttarakhandpolice.uk.gov.in or eservices.uk.gov.in.'
      },
      {
        step: 2,
        title: 'Select Local Police Station (Thana)',
        description: 'Choose your territorial police station for field verification.'
      },
      {
        step: 3,
        title: 'Upload Documents & Pay ₹50 Fee',
        description: 'Upload ID proofs, references, and pay statutory verification fee.'
      },
      {
        step: 4,
        title: 'Police Station Field & CCTNS Verification',
        description: 'Beat officer visits address and checks state crime records.'
      },
      {
        step: 5,
        title: 'SP Office / SDM Issuance',
        description: 'Superintendent of Police office or SDM approves digitally signed certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'ऑनलाइन आवेदन',
        description: 'uttarakhandpolice.uk.gov.in अथवा eservices.uk.gov.in पर आवेदन करें।'
      },
      {
        step: 2,
        title: 'संबंधित थाने का चयन',
        description: 'अपने निवास क्षेत्र के पुलिस थाने का चयन करें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड एवं ₹50 शुल्क भुगतान',
        description: 'पहचान पत्र, संस्तुति पत्र अपलोड कर सत्यापन शुल्क जमा करें।'
      },
      {
        step: 4,
        title: 'थाना स्तर पर स्थलीय एवं सीसीटीएनएस जांच',
        description: 'बीट कांस्टेबल द्वारा भौतिक सत्यापन और अपराध रिकॉर्ड की जांच।'
      },
      {
        step: 5,
        title: 'एसपी कार्यालय द्वारा प्रमाण पत्र जारी',
        description: 'पुलिस अधीक्षक कार्यालय द्वारा डिजिटल हस्ताक्षरित चरित्र प्रमाण पत्र जारी किया जाता है।'
      }
    ],
    verifiedFee: '₹50 (Statutory verification fee)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://uttarakhandpolice.uk.gov.in',
    officialSource: 'Uttarakhand Police Citizen Charter & RTS Act Notification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'birth-certificate',
    nameEn: 'Birth Certificate',
    nameHi: 'जन्म प्रमाण पत्र',
    nameHinglish: 'Janam Praman Patra / Birth Certificate',
    department: 'Medical Health & Family Welfare / Panchayati Raj / Urban Development',
    departmentHi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण / पंचायती राज / शहरी विकास',
    description: 'Vital registration certificate establishing legal identity, date of birth, and parentage under the Registration of Births and Deaths (RBD) Act 1969.',
    descriptionHi: 'जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 के अंतर्गत जन्म की तिथि, स्थान और माता-पिता के नाम को प्रमाणित करने वाला विधिक प्रमाण पत्र।',
    eligibility: [
      'Any birth occurring within Uttarakhand.',
      'Parents, hospital, or legal guardian applying for registration.'
    ],
    eligibilityHi: [
      'उत्तराखंड राज्य के भीतर हुआ कोई भी जन्म।',
      'माता-पिता, अस्पताल प्रशासन या विधिक अभिभावक।'
    ],
    requiredDocuments: [
      {
        name: 'Hospital Birth Slip / Discharge Card (Form 1)',
        nameHi: 'अस्पताल जन्म पर्ची / डिस्चार्ज कार्ड',
        isMandatory: true,
        details: 'Institutional birth record issued by medical officer.'
      },
      {
        name: "Parents' Aadhaar Card / Identity Proof",
        nameHi: 'माता-पिता का आधार कार्ड / पहचान पत्र',
        isMandatory: true,
        details: 'Identity proof of both parents.'
      },
      {
        name: 'Parivar Register Copy / Residence Proof',
        nameHi: 'परिवार रजिस्टर नकल / निवास प्रमाण',
        isMandatory: true,
        details: 'Gram Panchayat or municipal residence proof.'
      },
      {
        name: 'SDM Order (If delayed registration after 1 year)',
        nameHi: 'एसडीएम अनुमति आदेश (1 वर्ष बाद विलंबित पंजीकरण हेतु)',
        isMandatory: false,
        details: 'Mandatory only for delayed registration after 365 days.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Hospital Reporting or Portal Entry',
        description: 'Hospitals log Form 1 directly on crsorgi.gov.in. For home births, report within 21 days to VDO/Registrar.'
      },
      {
        step: 2,
        title: 'Citizen Portal Application',
        description: 'Access crsorgi.gov.in or eservices.uk.gov.in.'
      },
      {
        step: 3,
        title: 'Enter Child and Parent Details',
        description: "Enter child's name, gender, birth date, and parents' details."
      },
      {
        step: 4,
        title: 'Registrar Verification',
        description: 'Registrar of Births & Deaths verifies hospital entry or field report.'
      },
      {
        step: 5,
        title: 'Download Signed Certificate',
        description: 'Obtain QR-coded digital Birth Certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अस्पताल सूचना या पोर्टल प्रविष्टि',
        description: 'अस्पताल crsorgi.gov.in पर सूचना दर्ज करते हैं; घर पर जन्म होने पर 21 दिन में सूचना दें।'
      },
      {
        step: 2,
        title: 'पोर्टल पर आवेदन',
        description: 'crsorgi.gov.in अथवा eservices.uk.gov.in पर जाएं।'
      },
      {
        step: 3,
        title: 'बच्चे एवं माता-पिता का विवरण',
        description: 'बच्चे का नाम, जन्म तिथि, स्थान और माता-पिता के आधार का विवरण दर्ज करें।'
      },
      {
        step: 4,
        title: 'रजिस्ट्रार द्वारा सत्यापन',
        description: 'रजिस्ट्रार (ग्राम विकास अधिकारी / ईओ) द्वारा अभिलेखों की जांच।'
      },
      {
        step: 5,
        title: 'प्रमाण पत्र डाउनलोड करें',
        description: 'क्यूआर कोड युक्त डिजिटल जन्म प्रमाण पत्र डाउनलोड करें।'
      }
    ],
    verifiedFee: 'Free within 21 days; ₹2 (21-30 days); ₹5 (30 days-1 year); ₹10 + SDM order (after 1 year)',
    verifiedProcessingTime: '7 to 15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://crsorgi.gov.in',
    officialSource: 'Registration of Births and Deaths Act 1969 & Uttarakhand RBD Rules',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'death-certificate',
    nameEn: 'Death Certificate',
    nameHi: 'मृत्यु प्रमाण पत्र',
    nameHinglish: 'Mrityu Praman Patra / Death Certificate',
    department: 'Medical Health & Family Welfare / Panchayati Raj / Urban Development',
    departmentHi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण / पंचायती राज / शहरी विकास',
    description: 'Statutory certificate validating fact, date, and place of death under RBD Act 1969 for inheritance, insurance, bank settlement, and pensions.',
    descriptionHi: 'उत्तराधिकार, बीमा दावों, पारिवारिक पेंशन और बैंक खातों के निस्तारण हेतु मृत्यु की तिथि एवं तथ्य को प्रमाणित करने वाला विधिक प्रमाण पत्र।',
    eligibility: [
      'Death occurring within territorial boundaries of Uttarakhand.',
      'Immediate family members (spouse, children, parents) or legal heirs.'
    ],
    eligibilityHi: [
      'उत्तराखंड राज्य की सीमा में हुई कोई भी मृत्यु।',
      'निकटतम परिजन (पति/पत्नी, पुत्र/पुत्री, माता-पिता) अथवा विधिक वारिस।'
    ],
    requiredDocuments: [
      {
        name: 'Hospital Death Summary / Cause of Death Form 2',
        nameHi: 'अस्पताल मृत्यु पर्ची / मृत्यु का चिकित्सीय कारण पत्र',
        isMandatory: true,
        details: 'Institutional death certificate issued by attending physician.'
      },
      {
        name: 'Cremation / Burial Ground Receipt or Gram Pradhan Certificate',
        nameHi: 'श्मशान घाट / अंत्येष्टि रसीद अथवा ग्राम प्रधान प्रमाण पत्र',
        isMandatory: true,
        details: 'Proof of funeral rites.'
      },
      {
        name: 'Aadhaar Card of Deceased & Applicant',
        nameHi: 'मृतक एवं आवेदक का आधार कार्ड',
        isMandatory: true,
        details: 'Identity verification.'
      },
      {
        name: 'Parivar Register Copy / Relation Proof',
        nameHi: 'परिवार रजिस्टर नकल / संबंध साक्ष्य',
        isMandatory: true,
        details: 'Proves applicant is lawful relative or heir.'
      },
      {
        name: 'SDM Order (If delayed registration after 1 year)',
        nameHi: 'एसडीएम अनुमति आदेश (1 वर्ष बाद विलंबित पंजीकरण)',
        isMandatory: false,
        details: 'Mandatory only for deaths registered after 365 days.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Report Death within 21 Days',
        description: 'Report to local Registrar (VDO in rural, Municipal EO in urban).'
      },
      {
        step: 2,
        title: 'Portal Entry on CRS / Apuni Sarkar',
        description: 'Submit application on crsorgi.gov.in or eservices.uk.gov.in.'
      },
      {
        step: 3,
        title: 'Upload Hospital & Cremation Proofs',
        description: 'Attach Form 2, cremation slip, and deceased ID proofs.'
      },
      {
        step: 4,
        title: 'Registrar Verification',
        description: 'Local Registrar verifies hospital or village death register.'
      },
      {
        step: 5,
        title: 'Download Certificate',
        description: 'Download digitally signed Death Certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: '21 दिनों के भीतर मृत्यु की सूचना',
        description: 'रजिस्ट्रार (ग्राम विकास अधिकारी / पालिका स्वास्थ्य अधिकारी) को सूचना दें।'
      },
      {
        step: 2,
        title: 'पोर्टल पर विवरण दर्ज करें',
        description: 'crsorgi.gov.in अथवा eservices.uk.gov.in पर आवेदन करें।'
      },
      {
        step: 3,
        title: 'अस्पताल पर्ची एवं श्मशान रसीद अपलोड करें',
        description: 'चिकित्सक मृत्यु सारांश और अंत्येष्टि रसीद अपलोड करें।'
      },
      {
        step: 4,
        title: 'रजिस्ट्रार सत्यापन',
        description: 'रजिस्ट्रार द्वारा अभिलेखों की जांच।'
      },
      {
        step: 5,
        title: 'प्रमाण पत्र डाउनलोड',
        description: 'डिजिटल हस्ताक्षरित मृत्यु प्रमाण पत्र प्राप्त करें।'
      }
    ],
    verifiedFee: 'Free within 21 days; ₹2 (21-30 days); ₹5 (30 days-1 year); ₹10 + SDM order (after 1 year)',
    verifiedProcessingTime: '7 to 15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://crsorgi.gov.in',
    officialSource: 'Registration of Births and Deaths Act 1969 & Uttarakhand RBD Rules',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'marriage-registration',
    nameEn: 'Marriage Registration',
    nameHi: 'विवाह पंजीकरण',
    nameHinglish: 'Vivah Panjikaran / Marriage Registration',
    department: 'Registration & Stamps Department / Women Empowerment & Child Development',
    departmentHi: 'निबंधन एवं स्टांप विभाग / महिला सशक्तिकरण एवं बाल विकास',
    description: 'Compulsory legal registration of marriage under the Uttarakhand Compulsory Registration of Marriages Act for visas, joint assets, bank nominees, and social security.',
    descriptionHi: 'उत्तराखंड अनिवार्य विवाह पंजीकरण अधिनियम के अंतर्गत विवाह का विधिक पंजीकरण।',
    eligibility: [
      'Groom must be at least 21 years old and Bride at least 18 years old at solemnization.',
      'Marriage solemnized in Uttarakhand, OR either spouse is permanent resident of Uttarakhand.',
      'Free mutual consent and lawful marital relationship.'
    ],
    eligibilityHi: [
      'विवाह के समय वर की आयु कम से कम 21 वर्ष और वधू की कम से कम 18 वर्ष हो।',
      'विवाह उत्तराखंड में संपन्न हुआ हो, अथवा पति या पत्नी में से कोई एक राज्य का स्थायी निवासी हो।',
      'दोनों पक्षों की स्वतंत्र सहमति हो।'
    ],
    requiredDocuments: [
      {
        name: 'Age Proof of Bride and Groom (10th Marksheet / Birth Certificate)',
        nameHi: 'वर-वधू का आयु प्रमाण (10वीं अंकतालिका / जन्म प्रमाण पत्र)',
        isMandatory: true,
        details: 'Age verification proof.'
      },
      {
        name: 'Aadhaar Card and Residence Proof of Spouses',
        nameHi: 'वर-वधू का आधार कार्ड एवं निवास प्रमाण',
        isMandatory: true,
        details: 'Government photo identification and address proof.'
      },
      {
        name: 'Wedding Card / Priest Certificate / Mandir Certificate',
        nameHi: 'विवाह निमंत्रण पत्र / पंडित या मौलवी का प्रमाण पत्र',
        isMandatory: true,
        details: 'Proof of solemnization of rites.'
      },
      {
        name: 'Joint Wedding Photographs',
        nameHi: 'विवाह समारोह की संयुक्त तस्वीर',
        isMandatory: true,
        details: 'Joint postcard photograph of couple.'
      },
      {
        name: 'Identity & Residence Proof of Two Adult Witnesses',
        nameHi: 'दो वयस्क गवाहों के आधार कार्ड एवं निवास प्रमाण',
        isMandatory: true,
        details: 'Witnesses who were physically present during ceremony.'
      },
      {
        name: 'Affidavit of Marital Status',
        nameHi: 'वैवाहिक स्थिति का नोटरी शपथ पत्र',
        isMandatory: true,
        details: 'Affidavit confirming date, place, and nationality.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Online Application on Registration Portal',
        description: 'Submit preliminary application on registration.uk.gov.in.'
      },
      {
        step: 2,
        title: 'Upload Documents & Choose Sub-Registrar Office (SRO)',
        description: 'Select your Tehsil Sub-Registrar Office and upload proofs.'
      },
      {
        step: 3,
        title: 'Pay Statutory Fee & Slot Booking',
        description: 'Pay ₹50/₹100 fee online and book an appointment slot.'
      },
      {
        step: 4,
        title: 'Mandatory In-Person Appearance',
        description: 'Both spouses and 2 witnesses appear before the Sub-Registrar with originals.'
      },
      {
        step: 5,
        title: 'Issuance of Marriage Certificate',
        description: 'Sub-Registrar registers the deed and issues official certificate.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'निबंधन पोर्टल पर ऑनलाइन आवेदन',
        description: 'registration.uk.gov.in पर विवाह पंजीकरण का प्राथमिक फॉर्म भरें।'
      },
      {
        step: 2,
        title: 'दस्तावेज अपलोड एवं उप-निबंधक कार्यालय चयन',
        description: 'संबंधित तहसील के उप-निबंधक (एसआरओ) कार्यालय का चयन करें।'
      },
      {
        step: 3,
        title: 'शुल्क भुगतान एवं स्लॉट बुकिंग',
        description: '₹50/₹100 शुल्क जमा कर उपस्थिति हेतु समय स्लॉट बुक करें।'
      },
      {
        step: 4,
        title: 'उप-निबंधक के समक्ष अनिवार्य भौतिक उपस्थिति',
        description: 'दंपति एवं दो वयस्क गवाह मूल दस्तावेजों के साथ उप-निबंधक के समक्ष उपस्थित होते हैं।'
      },
      {
        step: 5,
        title: 'विवाह प्रमाण पत्र जारी होना',
        description: 'उप-निबंधक द्वारा विधिक रूप से पंजीकृत प्रमाण पत्र जारी किया जाता है।'
      }
    ],
    verifiedFee: '₹50 (Within 90 days); ₹100 (Beyond 90 days)',
    verifiedProcessingTime: 'Same day or up to 3 working days upon in-person appearance',
    officialUrl: 'https://registration.uk.gov.in',
    officialSource: 'Uttarakhand Compulsory Registration of Marriages Act & Rules',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'parivar-register-copy',
    nameEn: 'Parivar Register Copy (Kutumb Register)',
    nameHi: 'परिवार रजिस्टर की नकल (कुटुम्ब रजिस्टर)',
    nameHinglish: 'Parivar Register Nakal / Family Register',
    department: 'Panchayati Raj Department, Government of Uttarakhand',
    departmentHi: 'पंचायती राज विभाग, उत्तराखंड सरकार',
    description: 'Official certified excerpt of Form-2 Kutumb Register maintained by Gram Vikas Adhikari (VDO), documenting household composition, resident status, and lineage in rural Uttarakhand.',
    descriptionHi: 'ग्राम विकास अधिकारी (VDO) द्वारा संधारित प्रारूप-2 कुटुम्ब रजिस्टर की प्रमाणित नकल, जो ग्रामीण परिवार के सदस्यों और निवास को प्रमाणित करती है।',
    eligibility: [
      'Resident of rural Gram Panchayat in Uttarakhand.',
      'Member of family registered in the village Kutumb Register.'
    ],
    eligibilityHi: [
      'उत्तराखंड के किसी ग्रामीण ग्राम पंचायत का निवासी।',
      'संबंधित ग्राम सभा के कुटुम्ब रजिस्टर में परिवार का नाम दर्ज हो।'
    ],
    requiredDocuments: [
      {
        name: 'Applicant Aadhaar Card / Photo ID',
        nameHi: 'आवेदक का आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Photo identity proof.'
      },
      {
        name: 'Application Mentioning Head of Family & Ward',
        nameHi: 'परिवार के मुखिया का नाम एवं वार्ड संख्या युक्त प्रार्थना पत्र',
        isMandatory: true,
        details: 'Details to locate page in physical register.'
      },
      {
        name: 'Old Parivar Register Slip / Ration Card (Optional)',
        nameHi: 'पुरानी परिवार नकल / राशन कार्ड प्रति (वैकल्पिक)',
        isMandatory: false,
        details: 'Helps trace register volume.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Apply Online or In-Person',
        description: 'Apply on eservices.uk.gov.in or directly submit to Gram Vikas Adhikari (VDO).'
      },
      {
        step: 2,
        title: 'Select District, Block & Gram Panchayat',
        description: 'Map request to local Panchayat Secretary.'
      },
      {
        step: 3,
        title: 'Register Inspection by VDO',
        description: 'VDO checks physical Form-2 Kutumb Register.'
      },
      {
        step: 4,
        title: 'Issue of Stamped Certified Copy',
        description: 'VDO issues signed, stamped official excerpt.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'ऑनलाइन अथवा ऑफलाइन आवेदन',
        description: 'eservices.uk.gov.in पर अथवा सीधे ग्राम विकास अधिकारी (VDO) को प्रार्थना पत्र दें।'
      },
      {
        step: 2,
        title: 'जनपद, ब्लॉक एवं ग्राम पंचायत का चयन',
        description: 'संबंधित ग्राम पंचायत का चयन करें।'
      },
      {
        step: 3,
        title: 'वीडीओ द्वारा रजिस्टर की जांच',
        description: 'ग्राम विकास अधिकारी भौतिक प्रारूप-2 कुटुम्ब रजिस्टर का मिलान करते हैं।'
      },
      {
        step: 4,
        title: 'मुहर युक्त प्रमाणित नकल जारी',
        description: 'हस्ताक्षरित एवं प्रमाणित नकल प्राप्त करें।'
      }
    ],
    verifiedFee: 'PENDING VERIFICATION: Typically ₹10–₹20 or free per Gram Sabha resolution',
    verifiedProcessingTime: '7 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Panchayati Raj Act & Kutumb Register Rules',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'old-age-pension',
    nameEn: 'Old Age Pension Scheme',
    nameHi: 'वृद्धावस्था पेंशन योजना',
    nameHinglish: 'Vridhavastha Pension Yojana / Old Age Pension',
    department: 'Social Welfare Department (समाज कल्याण विभाग), Government of Uttarakhand',
    departmentHi: 'समाज कल्याण विभाग, उत्तराखंड सरकार',
    description: 'Monthly social security financial assistance of ₹1,500/month disbursed via Direct Benefit Transfer (DBT) to elderly citizens aged 60 and above living below poverty line or meeting income limits.',
    descriptionHi: '60 वर्ष या उससे अधिक आयु के बीपीएल अथवा पात्र वृद्ध नागरिकों को प्रतिमाह ₹1,500 की दर से प्रदान की जाने वाली सामाजिक सुरक्षा पेंशन।',
    eligibility: [
      'Applicant must be 60 years of age or older.',
      'Permanent resident of Uttarakhand holding valid domicile.',
      'Family must be Below Poverty Line (BPL) or monthly family income not exceeding ₹4,000 per month.',
      'Applicant must not be receiving any other government pension.'
    ],
    eligibilityHi: [
      'आवेदक की आयु 60 वर्ष या उससे अधिक हो।',
      'उत्तराखंड का स्थायी निवासी हो।',
      'बीपीएल सूची में दर्ज हो अथवा मासिक पारिवारिक आय ₹4,000 से अधिक न हो।',
      'किसी अन्य सरकारी पेंशन योजना का लाभार्थी न हो।'
    ],
    requiredDocuments: [
      {
        name: 'Age Proof (10th Marksheet / Voter ID / CMO Age Certificate)',
        nameHi: 'आयु प्रमाण पत्र (10वीं प्रमाण पत्र / वोटर आईडी / सीएमओ आयु प्रमाण पत्र)',
        isMandatory: true,
        details: 'Proof of 60 years or above.'
      },
      {
        name: 'Aadhaar Card (Aadhaar Seeded)',
        nameHi: 'आधार कार्ड',
        isMandatory: true,
        details: 'Required for DBT linkage.'
      },
      {
        name: 'BPL Ration Card / Tehsildar Income Certificate',
        nameHi: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र',
        isMandatory: true,
        details: 'Income eligibility verification.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की नकल',
        isMandatory: true,
        details: 'Verifies family composition.'
      },
      {
        name: 'Bank Passbook Copy (DBT Enabled)',
        nameHi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)',
        isMandatory: true,
        details: 'Core banking account with IFSC.'
      },
      {
        name: 'Recent Passport Size Photograph',
        nameHi: 'नवीनतम पासपोर्ट साइज फोटो',
        isMandatory: true,
        details: 'Clear passport photo.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Apply on Social Security Portal (SSP)',
        description: 'Visit ssp.uk.gov.in and click Old Age Pension application.'
      },
      {
        step: 2,
        title: 'Fill Personal & Banking Details',
        description: 'Enter Aadhaar, age details, bank IFSC, and BPL/income details.'
      },
      {
        step: 3,
        title: 'Upload Scanned Documents',
        description: 'Upload age proof, income certificate, Parivar register, and bank passbook.'
      },
      {
        step: 4,
        title: 'Physical Verification by ADO Welfare',
        description: 'Assistant Development Officer (Welfare) or VDO verifies applicant on ground.'
      },
      {
        step: 5,
        title: 'DSWO Approval & Monthly DBT Credit',
        description: 'District Social Welfare Officer sanctions pension and ₹1,500/month is transferred via DBT.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'सामाजिक सुरक्षा पोर्टल (SSP) पर आवेदन',
        description: 'ssp.uk.gov.in पर जाकर वृद्धावस्था पेंशन का चयन करें।'
      },
      {
        step: 2,
        title: 'व्यक्तिगत एवं बैंक विवरण भरें',
        description: 'आधार संख्या, आयु साक्ष्य, बैंक खाता, आईएफएससी और बीपीएल विवरण भरें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड करें',
        description: 'आयु प्रमाण, आय प्रमाण पत्र, परिवार रजिस्टर नकल और पासबुक अपलोड करें।'
      },
      {
        step: 4,
        title: 'सहायक विकास अधिकारी (कल्याण) द्वारा सत्यापन',
        description: 'एडीओ समाज कल्याण द्वारा स्थलीय सत्यापन।'
      },
      {
        step: 5,
        title: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति',
        description: 'स्वीकृति के उपरांत प्रतिमाह ₹1,500 डीबीटी के माध्यम से सीधे खाते में भेजे जाते हैं।'
      }
    ],
    verifiedFee: 'Free of cost (No application fee)',
    verifiedProcessingTime: '30 to 45 working days for sanction after field inquiry',
    officialUrl: 'https://ssp.uk.gov.in',
    officialSource: 'Uttarakhand Social Security Pension Portal (SSP) Guidelines',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'widow-pension',
    nameEn: 'Widow / Destitute Woman Pension',
    nameHi: 'विधवा / निराश्रित महिला पेंशन योजना',
    nameHinglish: 'Vidhwa Pension Yojana / Destitute Widow Pension',
    department: 'Social Welfare Department (समाज कल्याण विभाग), Government of Uttarakhand',
    departmentHi: 'समाज कल्याण विभाग, उत्तराखंड सरकार',
    description: 'Monthly social pension of ₹1,500/month disbursed via DBT to destitute widows and abandoned women aged 18 and above in Uttarakhand.',
    descriptionHi: '18 वर्ष या उससे अधिक आयु की निराश्रित विधवा महिलाओं को आर्थिक संबल प्रदान करने हेतु ₹1,500 प्रतिमाह की पेंशन।',
    eligibility: [
      'Widowed woman aged 18 years or above.',
      'Permanent resident of Uttarakhand holding valid domicile.',
      'Living below poverty line (BPL) or family income within state limits.',
      'Has not remarried and not receiving other government pensions.'
    ],
    eligibilityHi: [
      '18 वर्ष या अधिक आयु की विधवा अथवा निराश्रित महिला।',
      'उत्तराखंड की स्थायी निवासी हो।',
      'बीपीएल परिवार से हो अथवा मासिक पारिवारिक आय सरकारी सीमा में हो।',
      'पुनर्विवाह न किया हो एवं किसी अन्य पेंशन की लाभार्थी न हो।'
    ],
    requiredDocuments: [
      {
        name: 'Death Certificate of Husband',
        nameHi: 'पति का मृत्यु प्रमाण पत्र',
        isMandatory: true,
        details: 'Statutory death certificate issued by Registrar.'
      },
      {
        name: 'Applicant Aadhaar Card',
        nameHi: 'आवेदिका का आधार कार्ड',
        isMandatory: true,
        details: 'Identity and address proof.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की नकल',
        isMandatory: true,
        details: 'Reflects widowhood status in family.'
      },
      {
        name: 'BPL Card / Tehsildar Income Certificate',
        nameHi: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र',
        isMandatory: true,
        details: 'Economic eligibility proof.'
      },
      {
        name: 'Bank Passbook (Aadhaar Seeded)',
        nameHi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)',
        isMandatory: true,
        details: 'Bank account in applicant name.'
      },
      {
        name: 'Non-Remarriage Affidavit',
        nameHi: 'पुनर्विवाह न करने का शपथ पत्र',
        isMandatory: true,
        details: 'Affidavit declaring applicant has not remarried.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Apply on SSP Portal',
        description: 'Visit ssp.uk.gov.in and select Widow Pension Scheme.'
      },
      {
        step: 2,
        title: 'Enter Husband Details & Upload Death Proof',
        description: "Input husband's name, date of death, and attach certificate."
      },
      {
        step: 3,
        title: 'Submit Bank and Family Details',
        description: 'Provide Aadhaar-linked bank details and Parivar register copy.'
      },
      {
        step: 4,
        title: 'Verification by Social Welfare Officer',
        description: 'Block ADO Welfare conducts local verification.'
      },
      {
        step: 5,
        title: 'Sanction by DSWO & DBT Credit',
        description: 'Sanctioned amount of ₹1,500/month credited electronically.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'एसएसपी पोर्टल पर आवेदन',
        description: 'ssp.uk.gov.in पर विधवा पेंशन योजना का चयन करें।'
      },
      {
        step: 2,
        title: 'पति का विवरण एवं मृत्यु प्रमाण पत्र अपलोड',
        description: 'पति का नाम, मृत्यु तिथि और मृत्यु प्रमाण पत्र संलग्न करें।'
      },
      {
        step: 3,
        title: 'बैंक एवं पारिवारिक विवरण भरें',
        description: 'आधार लिंक बैंक खाता और परिवार रजिस्टर नकल प्रस्तुत करें।'
      },
      {
        step: 4,
        title: 'कल्याण अधिकारी द्वारा सत्यापन',
        description: 'ब्लॉक समाज कल्याण अधिकारी द्वारा स्थलीय जांच।'
      },
      {
        step: 5,
        title: 'स्वीकृति एवं मासिक डीबीटी अंतरण',
        description: 'स्वीकृति के बाद प्रतिमाह ₹1,500 सीधे बैंक खाते में प्रेषित।'
      }
    ],
    verifiedFee: 'Free of cost (No application fee)',
    verifiedProcessingTime: '30 to 45 working days',
    officialUrl: 'https://ssp.uk.gov.in',
    officialSource: 'Uttarakhand Social Welfare Department Scheme Charter',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'disability-pension',
    nameEn: 'Disability Pension Scheme',
    nameHi: 'दिव्यांग पेंशन योजना',
    nameHinglish: 'Divyang Pension Yojana / Disability Pension',
    department: 'Social Welfare Department (समाज कल्याण विभाग), Government of Uttarakhand',
    departmentHi: 'समाज कल्याण विभाग, उत्तराखंड सरकार',
    description: 'Monthly social pension of ₹1,500/month disbursed via DBT to persons with benchmark disabilities of 40% or more residing in Uttarakhand.',
    descriptionHi: '40% या उससे अधिक दिव्यांगता वाले पात्र व्यक्तियों को प्रतिमाह ₹1,500 की दर से प्रदान की जाने वाली दिव्यांग पेंशन।',
    eligibility: [
      'Permanent resident of Uttarakhand holding valid domicile.',
      'Person with a benchmark disability of 40% or more certified by CMO/Medical Board.',
      'Income within prescribed state threshold or BPL family.',
      'Not receiving any other pension.'
    ],
    eligibilityHi: [
      'उत्तराखंड का स्थायी निवासी हो।',
      'मुख्य चिकित्सा अधिकारी (सीएमओ) या मेडिकल बोर्ड द्वारा 40% या अधिक दिव्यांगता प्रमाणित हो।',
      'बीपीएल परिवार से हो अथवा वार्षिक आय सरकारी सीमा में हो।',
      'अन्य किसी पेंशन योजना का लाभ न ले रहा हो।'
    ],
    requiredDocuments: [
      {
        name: 'Disability Certificate / UDID Card (Minimum 40%)',
        nameHi: 'दिव्यांगता प्रमाण पत्र / यूडीआईडी कार्ड (न्यूनतम 40%)',
        isMandatory: true,
        details: 'Issued by authorized Chief Medical Officer (CMO).'
      },
      {
        name: 'Aadhaar Card',
        nameHi: 'आधार कार्ड',
        isMandatory: true,
        details: 'Identity and address proof.'
      },
      {
        name: 'Income Certificate / BPL Card',
        nameHi: 'आय प्रमाण पत्र / बीपीएल राशन कार्ड',
        isMandatory: true,
        details: 'Income eligibility verification.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर नकल',
        isMandatory: true,
        details: 'Family composition proof.'
      },
      {
        name: 'Bank Passbook (Aadhaar Seeded)',
        nameHi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)',
        isMandatory: true,
        details: 'Account details for monthly DBT disbursal.'
      },
      {
        name: 'Recent Color Photographs Showing Disability',
        nameHi: 'दिव्यांगता दर्शाती रंगीन फोटो',
        isMandatory: true,
        details: 'Passport size photo showing physical condition.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Apply on SSP Portal',
        description: 'Visit ssp.uk.gov.in and select Disability Pension Scheme.'
      },
      {
        step: 2,
        title: 'Input UDID / CMO Certificate Number',
        description: 'Provide medical certificate reference number and disability percentage.'
      },
      {
        step: 3,
        title: 'Upload Documents & Bank Details',
        description: 'Upload CMO certificate, photo, passbook, and income certificate.'
      },
      {
        step: 4,
        title: 'Verification by Welfare Officer',
        description: 'Block social welfare officer verifies paperwork.'
      },
      {
        step: 5,
        title: 'DSWO Sanction & Monthly Credit',
        description: 'District Social Welfare Officer sanctions ₹1,500/month via DBT.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'एसएसपी पोर्टल पर आवेदन',
        description: 'ssp.uk.gov.in पर जाकर दिव्यांग पेंशन योजना चुनें।'
      },
      {
        step: 2,
        title: 'यूडीआईडी / सीएमओ प्रमाण पत्र संख्या भरें',
        description: 'दिव्यांगता प्रतिशत (कम से कम 40%) और जारीकर्ता चिकित्सालय का विवरण भरें।'
      },
      {
        step: 3,
        title: 'दस्तावेज एवं बैंक विवरण अपलोड',
        description: 'सीएमओ प्रमाण पत्र, फोटो, पासबुक और आय प्रमाण पत्र अपलोड करें।'
      },
      {
        step: 4,
        title: 'कल्याण अधिकारी द्वारा सत्यापन',
        description: 'ब्लॉक कल्याण अधिकारी द्वारा पात्रता की जांच।'
      },
      {
        step: 5,
        title: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति',
        description: 'स्वीकृति के बाद प्रतिमाह ₹1,500 डीबीटी से अंतरित।'
      }
    ],
    verifiedFee: 'Free of cost (No application fee)',
    verifiedProcessingTime: '30 to 45 working days',
    officialUrl: 'https://ssp.uk.gov.in',
    officialSource: 'Uttarakhand Social Welfare Department Scheme Charter',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'disability-certificate',
    nameEn: 'Disability Certificate & UDID Card',
    nameHi: 'दिव्यांगता प्रमाण पत्र एवं यूडीआईडी कार्ड',
    nameHinglish: 'Divyangta Praman Patra / UDID Card',
    department: 'Medical Health & Family Welfare Department & Ministry of Social Justice & Empowerment',
    departmentHi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग एवं सामाजिक न्याय मंत्रालय',
    description: 'National Unique Disability ID (UDID) card and medical certificate issued after assessment by district medical board for reservations, concessions, and aids.',
    descriptionHi: 'जिला मेडिकल बोर्ड द्वारा चिकित्सकीय परीक्षण के उपरांत जारी किया जाने वाला राष्ट्रीय यूडीआईडी कार्ड एवं दिव्यांगता प्रमाण पत्र।',
    eligibility: [
      'Person residing in Uttarakhand with physical, visual, hearing, neurological, or intellectual impairment.',
      'Seeking certification under Rights of Persons with Disabilities Act 2016.'
    ],
    eligibilityHi: [
      'उत्तराखंड का निवासी जिसे कोई शारीरिक, दृष्टि, श्रवण, तंत्रिका या बौद्धिक दिव्यांगता हो।',
      'दिव्यांगजन अधिकार अधिनियम 2016 के तहत प्रमाण पत्र हेतु इच्छुक।'
    ],
    requiredDocuments: [
      {
        name: 'Aadhaar Card / Address Proof',
        nameHi: 'आधार कार्ड / निवास प्रमाण',
        isMandatory: true,
        details: 'Identity and address proof.'
      },
      {
        name: 'Past Medical Records / Hospital Slips',
        nameHi: 'पूर्व उपचार पर्चियां / चिकित्सकीय जांच रिपोर्ट',
        isMandatory: false,
        details: 'Hospital treatment papers.'
      },
      {
        name: 'Recent Color Photographs Showing Disability',
        nameHi: 'दिव्यांगता दर्शाती रंगीन फोटो',
        isMandatory: true,
        details: 'Color photos displaying physical handicap.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Register on Swavlamban Portal',
        description: 'Visit swavlambancard.gov.in and click Apply for Disability Certificate.'
      },
      {
        step: 2,
        title: 'Fill Personal & Disability Details',
        description: 'Enter personal info, disability category, and select District Hospital.'
      },
      {
        step: 3,
        title: 'Medical Board Assessment Date',
        description: 'Appear before the CMO Medical Board at District Hospital on scheduled day.'
      },
      {
        step: 4,
        title: 'Clinical Evaluation by Specialists',
        description: 'Specialist doctors evaluate condition and assign percentage.'
      },
      {
        step: 5,
        title: 'Download Certificate & Receive UDID Card',
        description: 'Download e-Certificate online; laminated UDID card dispatched by post.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'स्वावलंबन पोर्टल पर पंजीकरण',
        description: 'swavlambancard.gov.in पर जाकर ऑनलाइन आवेदन करें।'
      },
      {
        step: 2,
        title: 'व्यक्तिगत एवं दिव्यांगता विवरण भरें',
        description: 'दिव्यांगता का प्रकार चुनें और संबंधित जिला चिकित्सालय का चयन करें।'
      },
      {
        step: 3,
        title: 'मेडिकल बोर्ड के समक्ष उपस्थिति',
        description: 'निर्धारित तिथि पर जिला अस्पताल में सीएमओ मेडिकल बोर्ड के समक्ष उपस्थित हों।'
      },
      {
        step: 4,
        title: 'विशेषज्ञ चिकित्सकों द्वारा परीक्षण',
        description: 'विशेषज्ञ डॉक्टरों द्वारा चिकित्सकीय जांच कर दिव्यांगता प्रतिशत तय किया जाता है।'
      },
      {
        step: 5,
        title: 'प्रमाण पत्र डाउनलोड एवं यूडीआईडी कार्ड प्राप्ति',
        description: 'डिजिटल प्रमाण पत्र डाउनलोड करें और यूडीआईडी कार्ड डाक से प्राप्त करें।'
      }
    ],
    verifiedFee: 'Free of cost (Medical evaluation is free in government hospitals)',
    verifiedProcessingTime: '15 to 30 days (based on weekly medical board schedule)',
    officialUrl: 'https://www.swavlambancard.gov.in',
    officialSource: 'National UDID Portal & Directorate of Health Services Uttarakhand',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'scholarship-guidance',
    nameEn: 'Scholarship Application Guidance (Pre & Post Matric)',
    nameHi: 'उत्तराखंड छात्रवृत्ति आवेदन मार्गदर्शन (प्री एवं पोस्ट मैट्रिक)',
    nameHinglish: 'Chhatravritti / Scholarship Guidance',
    department: 'Social Welfare, Tribal Welfare & Minorities Welfare, Government of Uttarakhand',
    departmentHi: 'समाज कल्याण, जनजाति कल्याण एवं अल्पसंख्यक कल्याण विभाग',
    description: 'Guidance for state students applying for Post-Matric & Pre-Matric scholarships for SC, ST, OBC, EBC, and minority students through the National Scholarship Portal (NSP) and State SSP.',
    descriptionHi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) एवं राज्य पोर्टल के माध्यम से एससी, एसटी, ओबीसी एवं ईबीसी छात्रों हेतु छात्रवृत्ति आवेदन प्रक्रिया।',
    eligibility: [
      'Bonafide student holding permanent domicile of Uttarakhand.',
      'Enrolled in recognized school, college, polytechnic, or university.',
      'Family income within specified category limits (up to ₹2.5 Lakh for SC/ST, up to ₹1.5–₹2.5 Lakh for OBC/EBC).',
      'Passed previous qualifying examination.'
    ],
    eligibilityHi: [
      'उत्तराखंड का मूल/स्थायी निवासी छात्र।',
      'मान्यता प्राप्त विद्यालय, महाविद्यालय या विश्वविद्यालय में नियमित रूप से अध्ययनरत।',
      'पारिवारिक आय निर्धारित सीमा में हो (एससी/एसटी हेतु ₹2.5 लाख तक, ओबीसी हेतु ₹1.5–₹2.5 लाख तक)।',
      'पिछली कक्षा उत्तीर्ण की हो।'
    ],
    requiredDocuments: [
      {
        name: 'Bonafide Student Certificate / College Fee Receipt',
        nameHi: 'संस्थान का बोनाफाइड प्रमाण पत्र / शुल्क रसीद',
        isMandatory: true,
        details: 'Proof of active enrollment in recognized institution.'
      },
      {
        name: 'Previous Year Marksheet',
        nameHi: 'गत वर्ष की अंकतालिका',
        isMandatory: true,
        details: 'Attested marksheet.'
      },
      {
        name: 'Valid Tehsildar Income Certificate (Current Financial Year)',
        nameHi: 'तहसीलदार द्वारा जारी वैध आय प्रमाण पत्र (चालू वित्तीय वर्ष)',
        isMandatory: true,
        details: 'Current year income certificate matching NSP criteria.'
      },
      {
        name: 'Uttarakhand Domicile Certificate',
        nameHi: 'उत्तराखंड मूल निवास प्रमाण पत्र',
        isMandatory: true,
        details: 'State domicile proof.'
      },
      {
        name: 'Caste Certificate (For SC/ST/OBC)',
        nameHi: 'जाति प्रमाण पत्र (एससी/एसटी/ओबीसी हेतु)',
        isMandatory: true,
        details: 'Category verification.'
      },
      {
        name: 'Aadhaar Card and Student Bank Passbook (DBT Enabled)',
        nameHi: 'छात्र का आधार कार्ड एवं बैंक पासबुक (डीबीटी सक्रिय)',
        isMandatory: true,
        details: 'Account in student name with Aadhaar linkage.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Register on National Scholarship Portal (NSP)',
        description: 'Visit scholarships.gov.in and complete One-Time Registration (OTR).'
      },
      {
        step: 2,
        title: 'Select Uttarakhand State Scheme',
        description: 'Choose Pre-Matric or Post-Matric scheme matching your category.'
      },
      {
        step: 3,
        title: 'Upload Documents & Submit Online',
        description: 'Upload marksheet, income certificate, caste certificate, and college receipt.'
      },
      {
        step: 4,
        title: 'Institute Level Verification',
        description: 'College Scholarship Nodal Officer verifies enrollment within 15 days.'
      },
      {
        step: 5,
        title: 'DSWO Sanction & DBT Disbursal',
        description: 'District Social Welfare Officer sanctions scholarship for DBT transfer.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर वन-टाइम पंजीकरण',
        description: 'scholarships.gov.in पर जाकर ओटीआर पूरा करें।'
      },
      {
        step: 2,
        title: 'उत्तराखंड राज्य छात्रवृत्ति योजना का चयन',
        description: 'अपने वर्ग के अनुसार प्री-मैट्रिक या पोस्ट-मैट्रिक योजना चुनें।'
      },
      {
        step: 3,
        title: 'दस्तावेज अपलोड एवं ऑनलाइन सबमिट',
        description: 'अंकतालिका, आय प्रमाण पत्र, जाति प्रमाण पत्र और कॉलेज रसीद अपलोड करें।'
      },
      {
        step: 4,
        title: 'शिक्षण संस्थान स्तर पर सत्यापन',
        description: 'कॉलेज नोडल अधिकारी द्वारा 15 दिन के भीतर प्रवेश का सत्यापन।'
      },
      {
        step: 5,
        title: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति',
        description: 'सत्यापन के उपरांत छात्रवृत्ति सीधे बैंक खाते में भेजी जाती है।'
      }
    ],
    verifiedFee: 'Free of cost (No portal fees on NSP or State portal)',
    verifiedProcessingTime: 'Subject to academic cycle & NSP verification schedule (Institute verification within 15 days)',
    officialUrl: 'https://scholarships.gov.in',
    officialSource: 'National Scholarship Portal & Uttarakhand Social Welfare Guidelines',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'income-scholarship-guidance',
    nameEn: 'Income Certificate for Scholarship Purposes',
    nameHi: 'छात्रवृत्ति प्रयोजन हेतु आय प्रमाण पत्र मार्गदर्शन',
    nameHinglish: 'Scholarship Income Certificate Guidance',
    department: 'Revenue Department & Social Welfare Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग एवं समाज कल्याण विभाग, उत्तराखंड सरकार',
    description: 'Specific instructions on obtaining and validating income certificates tailored to student scholarship portals (NSP & State portal) where parental income declarations and format must match DBT standards.',
    descriptionHi: 'छात्रवृत्ति पोर्टलों के सख्त मानकों के अनुरूप माता-पिता की वार्षिक आय का तहसीलदार प्रमाण पत्र प्राप्त करने की मार्गदर्शिका।',
    eligibility: [
      'Student or parent/guardian applying on behalf of a student.',
      'Resident of Uttarakhand.',
      'Must declare total household earnings of parents from all sources.'
    ],
    eligibilityHi: [
      'अध्ययनरत छात्र अथवा उसके माता-पिता/अभिभावक।',
      'उत्तराखंड का निवासी।',
      'परिवार के सभी स्रोतों से अर्जित कुल वार्षिक आय का वैध विवरण।'
    ],
    requiredDocuments: [
      {
        name: 'Student College ID / Admission Slip',
        nameHi: 'छात्र का कॉलेज पहचान पत्र / प्रवेश पर्ची',
        isMandatory: true,
        details: 'Confirms educational purpose.'
      },
      {
        name: "Father / Mother & Student Aadhaar Card",
        nameHi: 'माता-पिता एवं छात्र का आधार कार्ड',
        isMandatory: true,
        details: 'Photo identification proof.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की नकल',
        isMandatory: true,
        details: "Confirms student's relation with earning parent."
      },
      {
        name: 'Income Affidavit Explicitly for Scholarship',
        nameHi: 'छात्रवृत्ति प्रयोजन हेतु आय शपथ पत्र',
        isMandatory: true,
        details: 'Notarized affidavit declaring family income for education.'
      },
      {
        name: 'Recent Photographs of Student & Parent',
        nameHi: 'छात्र एवं अभिभावक की नवीनतम फोटो',
        isMandatory: true,
        details: 'Color photographs.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Apply on Apuni Sarkar Portal',
        description: 'Log into eservices.uk.gov.in -> Revenue Department -> Income Certificate.'
      },
      {
        step: 2,
        title: 'Select "Scholarship / Education" Purpose',
        description: 'Mention scholarship purpose so the appropriate format is generated.'
      },
      {
        step: 3,
        title: 'Upload College Proof & Parivar Register',
        description: 'Upload college ID, Parivar copy, affidavit, and salary/land proofs.'
      },
      {
        step: 4,
        title: 'Lekhpal Field Inquiry & Tehsildar Issuance',
        description: 'Patwari verifies family earnings; Tehsildar approves digital certificate within 15 days.'
      },
      {
        step: 5,
        title: 'Enter Certificate Number on NSP Portal',
        description: 'Link issued certificate number on scholarships.gov.in for automatic e-verification.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'अपुणी सरकार पोर्टल पर आवेदन',
        description: 'eservices.uk.gov.in पर राजस्व विभाग -> आय प्रमाण पत्र चुनें।'
      },
      {
        step: 2,
        title: 'प्रयोजन में "छात्रवृत्ति / शिक्षा" चुनें',
        description: 'आवेदन के उद्देश्य में छात्रवृत्ति का उल्लेख करें ताकि उचित प्रारूप में प्रमाण पत्र बने।'
      },
      {
        step: 3,
        title: 'कॉलेज आईडी एवं परिवार नकल अपलोड करें',
        description: 'कॉलेज पर्ची, परिवार रजिस्टर, शपथ पत्र अपलोड करें।'
      },
      {
        step: 4,
        title: 'लेखपाल जांच एवं तहसीलदार स्वीकृति',
        description: 'लेखपाल जांच के उपरांत 15 कार्य दिवसों में डिजिटल प्रमाण पत्र जारी होता है।'
      },
      {
        step: 5,
        title: 'एनएसपी पोर्टल पर प्रमाण पत्र संख्या दर्ज करें',
        description: 'छात्रवृत्ति पोर्टल पर प्रमाणपत्र संख्या डालकर ऑनलाइन सत्यापन पूरा करें।'
      }
    ],
    verifiedFee: '₹30 (Portal direct) / ₹50 (CSC user fee)',
    verifiedProcessingTime: '15 working days under Uttarakhand Right to Service Act',
    officialUrl: 'https://eservices.uk.gov.in',
    officialSource: 'Uttarakhand Revenue Department Order on Educational Income Certification',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'land-records-khatauni',
    nameEn: 'Khatauni / Land Records Information (ROR)',
    nameHi: 'भूलेख खतौनी / अधिकार अभिलेख (ROR) जानकारी',
    nameHinglish: 'Bhulekh Khatauni / Land Records Info',
    department: 'Revenue Council (राजस्व परिषद), Government of Uttarakhand',
    departmentHi: 'राजस्व परिषद, उत्तराखंड सरकार',
    description: 'Public online inspection and information regarding land ownership titles, Khasra numbers, land area, account holder names, shares, and mortgages across all 13 districts of Uttarakhand on the Devbhoomi Bhulekh portal.',
    descriptionHi: 'देवभूमि भूलेख पोर्टल पर उत्तराखंड के सभी 13 जनपदों की भूमि के स्वामित्व, खसरा संख्या, रकबा, खातेदारों के नाम और बंधक प्रविष्टियों की ऑनलाइन सार्वजनिक जानकारी।',
    eligibility: [
      'Open to all citizens, farmers, buyers, and legal heirs.',
      'Requires knowledge of District, Tehsil, and Village (Gram).'
    ],
    eligibilityHi: [
      'सभी नागरिकों, काश्तकारों, क्रेताओं और वारिसों के लिए खुला सार्वजनिक पोर्टल।',
      'जनपद, तहसील और गांव का नाम ज्ञात होना आवश्यक।'
    ],
    requiredDocuments: [
      {
        name: 'Administrative Location Details (District, Tehsil, Gram)',
        nameHi: 'प्रशासनिक स्थिति (जनपद, तहसील, गांव का नाम)',
        isMandatory: true,
        details: 'Location of land parcel.'
      },
      {
        name: 'Land Identifier (Khasra No. / Khata No. / Landholder Name)',
        nameHi: 'खसरा संख्या / खाता संख्या / खातेदार का नाम',
        isMandatory: true,
        details: 'At least one identifier to locate record.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Visit Devbhoomi Bhulekh Portal',
        description: 'Go to bhulekh.uk.gov.in.'
      },
      {
        step: 2,
        title: 'Select District, Tehsil & Village',
        description: 'Click "View Khatauni (ROR)" and select your village.'
      },
      {
        step: 3,
        title: 'Search by Khasra or Name',
        description: 'Search using Khasra/Gata number or Hindi landowner name.'
      },
      {
        step: 4,
        title: 'Inspect Land Title & Encumbrances',
        description: 'Examine area in Hectares/Nali, co-owners, and bank mortgage remarks.'
      },
      {
        step: 5,
        title: 'Download / Print Informational Copy',
        description: 'Save or print copy for personal reference.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'देवभूमि भूलेख पोर्टल पर जाएं',
        description: 'bhulekh.uk.gov.in पर जाएं।'
      },
      {
        step: 2,
        title: 'जनपद, तहसील एवं गांव चुनें',
        description: '"खतौनी की नकल देखें" पर क्लिक कर अपना गांव चुनें।'
      },
      {
        step: 3,
        title: 'खसरा संख्या या नाम से खोजें',
        description: 'खसरा नंबर, खाता नंबर अथवा काश्तकार के नाम से खोजें।'
      },
      {
        step: 4,
        title: 'स्वामित्व एवं बंधक प्रविष्टियां देखें',
        description: 'हेक्टेयर/नाली में रकबा, सह-खातेदारों के नाम और बैंक बंधक विवरण देखें।'
      },
      {
        step: 5,
        title: 'विवरण प्रिंट या सुरक्षित करें',
        description: 'अपनी निजी जानकारी हेतु प्रतिलिपि सहेजें।'
      }
    ],
    verifiedFee: 'Free of cost to search and view online',
    verifiedProcessingTime: 'Instant 24x7 online access',
    officialUrl: 'https://bhulekh.uk.gov.in',
    officialSource: 'Devbhoomi Uttarakhand Bhulekh Citizen Land Records System',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'land-record-copy-guidance',
    nameEn: 'Land Record Copy Guidance (Certified Khatauni)',
    nameHi: 'प्रमाणित खतौनी नकल प्राप्त करने की प्रक्रिया',
    nameHinglish: 'Certified Khatauni Nakal Guidance',
    department: 'Revenue Department, Government of Uttarakhand',
    departmentHi: 'राजस्व विभाग, उत्तराखंड सरकार',
    description: 'Step-by-step guidance on obtaining an officially certified, stamped copy of Khatauni from Tehsil Land Record Computer Center or Apuni Sarkar for court litigation, bank loans (KCC), mutation, and sale deeds.',
    descriptionHi: 'न्यायालयीय साक्ष्य, बैंक ऋण (केसीसी) और रजिस्ट्री हेतु तहसील कंप्यूटर केंद्र से मुहर युक्त प्रमाणित खतौनी नकल प्राप्त करने की प्रक्रिया।',
    eligibility: [
      'Landowner, legal heir, authorized representative, or person having legal interest.'
    ],
    eligibilityHi: [
      'भूमि स्वामी, विधिक वारिस अथवा भूमि में वैधानिक हित रखने वाला कोई भी व्यक्ति।'
    ],
    requiredDocuments: [
      {
        name: 'Applicant Identity Proof (Aadhaar / Voter ID)',
        nameHi: 'आवेदक का पहचान पत्र (आधार / वोटर आईडी)',
        isMandatory: true,
        details: 'Photo identification proof.'
      },
      {
        name: 'Land Identification (Village, Tehsil, Khata / Khasra Number)',
        nameHi: 'भूमि का विवरण (गांव, तहसील, खाता / खसरा संख्या)',
        isMandatory: true,
        details: 'Written application or Bhulekh printout.'
      },
      {
        name: 'Proof of Interest (For Court / Bank Requirements)',
        nameHi: 'आवश्यकता का साक्ष्य (बैंक / न्यायालय हेतु)',
        isMandatory: false,
        details: 'Bank demand letter or court notice.'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Locate Parcel on Bhulekh',
        description: 'Check Khata number on bhulekh.uk.gov.in.'
      },
      {
        step: 2,
        title: 'Visit Tehsil Land Record Computer Center',
        description: 'Go to the revenue counter at your Tehsil or apply via Apuni Sarkar.'
      },
      {
        step: 3,
        title: 'Pay Statutory User Charge',
        description: 'Pay ₹15 for first page + ₹5 per additional page.'
      },
      {
        step: 4,
        title: 'Stamping by Registrar Qanungo',
        description: 'Operator prints ROR and Registrar Qanungo (RQ) signs and affixes official seal.'
      },
      {
        step: 5,
        title: 'Collect Certified Legal Copy',
        description: 'Receive officially stamped copy valid for courts and bank loans.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'भूलेख पर खाता संख्या जानें',
        description: 'bhulekh.uk.gov.in से अपना खाता या खसरा नंबर ज्ञात करें।'
      },
      {
        step: 2,
        title: 'तहसील भूलेख कंप्यूटर केंद्र पर जाएं',
        description: 'तहसील के राजस्व काउंटर पर जाएं अथवा अपुणी सरकार पर आवेदन करें।'
      },
      {
        step: 3,
        title: 'राजस्व शुल्क जमा करें',
        description: 'प्रथम पृष्ठ हेतु ₹15 तथा प्रत्येक अतिरिक्त पृष्ठ हेतु ₹5 जमा करें।'
      },
      {
        step: 4,
        title: 'रजिस्ट्रार कानूनगो द्वारा मुहर एवं हस्ताक्षर',
        description: 'कंप्यूटर ऑपरेटर द्वारा प्रिंट निकालने के बाद रजिस्ट्रार कानूनगो अधिकृत मुहर लगाते हैं।'
      },
      {
        step: 5,
        title: 'प्रमाणित नकल प्राप्त करें',
        description: 'न्यायालय, बैंक एवं रजिस्ट्री हेतु मान्य प्रमाणित नकल प्राप्त करें।'
      }
    ],
    verifiedFee: '₹15 for the first page + ₹5 for each subsequent page',
    verifiedProcessingTime: '1 to 3 working days at Tehsil computer center under RTS Act',
    officialUrl: 'https://bhulekh.uk.gov.in',
    officialSource: 'Uttarakhand Revenue Council Guidelines on Certified Land Record Copies',
    lastVerifiedDate: '2026-03-01'
  },
  {
    serviceId: 'panchayati-raj-services',
    nameEn: 'Panchayati Raj Services (NOC & Village Services)',
    nameHi: 'पंचायती राज सेवाएं (ग्राम पंचायत अनापत्ति एवं सेवाएं)',
    nameHinglish: 'Panchayati Raj Services / Gram Panchayat NOC',
    department: 'Panchayati Raj Department, Government of Uttarakhand',
    departmentHi: 'पंचायती राज विभाग, उत्तराखंड सरकार',
    description: 'Rural citizen governance services including Gram Panchayat No-Objection Certificates (NOC) for electricity/water connection, rural construction permission, and village-level welfare certifications.',
    descriptionHi: 'बिजली/पानी कनेक्शन हेतु अनापत्ति प्रमाण पत्र (NOC), ग्रामीण निर्माण अनुमति और ग्राम सभा स्तर की विभिन्न नागरिक सेवाएं।',
    eligibility: [
      'Permanent or residing citizen of the respective Gram Sabha in rural Uttarakhand.',
      'Holding residential occupancy or lawful land holding within Gram Panchayat limits.'
    ],
    eligibilityHi: [
      'संबंधित ग्रामीण ग्राम सभा का निवासी।',
      'ग्राम पंचायत सीमा के भीतर आवासीय अथवा कृषि भूमि पर वैधानिक दखल रखता हो।'
    ],
    requiredDocuments: [
      {
        name: 'Applicant Aadhaar Card / Voter ID',
        nameHi: 'आवेदक का आधार कार्ड या पहचान पत्र',
        isMandatory: true,
        details: 'Photo identity proof.'
      },
      {
        name: 'Parivar Register Copy (Form 2)',
        nameHi: 'परिवार रजिस्टर की नकल',
        isMandatory: true,
        details: 'Proof of membership in local Gram Panchayat.'
      },
      {
        name: 'Land / House Possession Proof in Gram Sabha',
        nameHi: 'ग्राम सभा में भूमि अथवा मकान पर कब्जे का साक्ष्य',
        isMandatory: true,
        details: 'Khatauni or ancestral house tax receipt.'
      },
      {
        name: 'Application Stating Specific NOC Purpose',
        nameHi: 'एनओसी के उद्देश्य का प्रार्थना पत्र',
        isMandatory: true,
        details: 'Written application mentioning purpose (electricity, water, etc.).'
      }
    ],
    applicationSteps: [
      {
        step: 1,
        title: 'Submit Application to Gram Pradhan / VDO',
        description: 'Submit written application during Panchayat hours or Gram Sabha meeting.'
      },
      {
        step: 2,
        title: 'Field Verification by VDO',
        description: 'Gram Vikas Adhikari checks site to ensure no encroachment on Panchayat land.'
      },
      {
        step: 3,
        title: 'Gram Panchayat Committee Scrutiny',
        description: 'Resolution reviewed during monthly Panchayat meeting.'
      },
      {
        step: 4,
        title: 'Issuance of Stamped NOC',
        description: 'Gram Pradhan and VDO jointly sign and seal the official NOC.'
      }
    ],
    applicationStepsHi: [
      {
        step: 1,
        title: 'ग्राम प्रधान अथवा वीडीओ को प्रार्थना पत्र',
        description: 'पंचायत कार्यालय अथवा खुली बैठक में प्रार्थना पत्र प्रस्तुत करें।'
      },
      {
        step: 2,
        title: 'ग्राम विकास अधिकारी द्वारा स्थलीय जांच',
        description: 'वीडीओ यह जांच करते हैं कि ग्राम सभा की भूमि पर कोई अवैध कब्जा तो नहीं है।'
      },
      {
        step: 3,
        title: 'ग्राम पंचायत समिति द्वारा विचार',
        description: 'मासिक पंचायत बैठक में आवेदन पर विचार किया जाता है।'
      },
      {
        step: 4,
        title: 'मुहर युक्त अनापत्ति प्रमाण पत्र (NOC) जारी',
        description: 'ग्राम प्रधान एवं ग्राम विकास अधिकारी के संयुक्त हस्ताक्षर से एनओसी जारी की जाती है।'
      }
    ],
    verifiedFee: 'PENDING VERIFICATION: Typically ₹20–₹50 or free as per individual Gram Sabha resolution',
    verifiedProcessingTime: '7 to 15 working days depending on Gram Sabha meeting schedule',
    officialUrl: 'https://panchayat.gov.in',
    officialSource: 'Uttarakhand Panchayati Raj Act & Rural Citizen Charter',
    lastVerifiedDate: '2026-03-01'
  }
];
