import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  // ==========================================
  // 1. REVENUE AND IDENTITY (revenue_identity)
  // ==========================================
  {
    id: 'income-certificate',
    iconName: 'CreditCard',
    code: 'UK-REV-INC',
    category: 'revenue_identity',
    serviceType: 'certificate',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'Income Certificate',
      hi: 'आय प्रमाण पत्र'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Official document certifying total annual family income from all legal sources for admissions, scholarships, and subsidies.',
      hi: 'छात्रवृत्ति, सरकारी योजनाओं और रियायतों हेतु परिवार की कुल वार्षिक आय को प्रमाणित करने वाला आधिकारिक प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Income Certificate is issued by the Revenue Department of Uttarakhand through the Tehsildar office. It assesses total annual earnings of the family across agriculture, business, profession, or wages for availing reservation benefits, fee remissions, and social welfare schemes.',
      hi: 'आय प्रमाण पत्र उत्तराखंड के राजस्व विभाग के तहसीलदार कार्यालय द्वारा जारी किया जाता है। यह छात्रवृत्ति, आरक्षण, शुल्क माफी और सरकारी योजनाओं के लाभ हेतु परिवार की कुल वार्षिक आय का निर्धारण करता है।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: '₹30 (Portal direct) / ₹50 (CSC user fee)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल शुल्क ₹30 / सीएससी शुल्क ₹50'
    },
    eligibility: {
      en: [
        'Resident of Uttarakhand or residing in the state with lawful domicile/employment.',
        'Applicant or family head declaring lawful family income with supporting proofs.',
        'No active duplicate certificate issued within the same financial year.'
      ],
      hi: [
        'उत्तराखंड का स्थायी या वैध निवासी अथवा राज्य में कार्यरत व्यक्ति।',
        'पारिवारिक मुखिया या आवेदक जो सभी स्रोतों से वार्षिक आय का वैध विवरण दे सके।',
        'चालू वित्तीय वर्ष में पहले से कोई सक्रिय आय प्रमाण पत्र न बना हो।'
      ]
    },
    documents: [
      {
        id: 'inc-doc-1',
        name: { en: 'Aadhaar Card / Photo ID', hi: 'आधार कार्ड या फोटो पहचान पत्र' },
        description: { en: 'Clear front and back copy of Aadhaar, Voter ID, or Passport', hi: 'आधार कार्ड, वोटर कार्ड या पासपोर्ट की स्पष्ट प्रति' },
        required: true,
        acceptedFormats: ['PDF', 'JPG', 'PNG'],
        maxSizeMB: 2,
        tip: { en: 'Ensure mobile number is linked to Aadhaar for e-KYC', hi: 'ई-केवाईसी के लिए आधार से जुड़ा मोबाइल नंबर होना उपयोगी है' }
      },
      {
        id: 'inc-doc-2',
        name: { en: 'Self-Declaration Form / Affidavit', hi: 'स्व-घोषणा पत्र / शपथ पत्र' },
        description: { en: 'Notarized affidavit or standard self-declaration of family income', hi: 'पारिवारिक वार्षिक आय का नोटरीकृत शपथ पत्र या स्व-घोषणा पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2,
        tip: { en: 'Standard declaration formats are downloadable from the e-district portal', hi: 'ई-डिस्ट्रिक्ट पोर्टल से निर्धारित प्रारूप डाउनलोड किया जा सकता है' }
      },
      {
        id: 'inc-doc-3',
        name: { en: 'Salary Slip / Employer Certificate / ITR', hi: 'वेतन पर्ची / नियोक्ता प्रमाण पत्र / आयकर रिटर्न' },
        description: { en: 'For salaried employees or business owners showing recent earnings', hi: 'नौकरीपेशा या व्यवसायी आवेदकों के लिए हालिया आय साक्ष्य' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 5,
        tip: { en: 'Required if any family member is in formal employment', hi: 'यदि परिवार में कोई नियमित सेवा में है तो अनिवार्य' }
      },
      {
        id: 'inc-doc-4',
        name: { en: 'Land Holding Record (Khatauni) / Agricultural Proof', hi: 'भूमि रिकॉर्ड (खतौनी) या कृषि आय साक्ष्य' },
        description: { en: 'Recent Khatauni excerpt if applicant owns agricultural land', hi: 'यदि कृषि भूमि है तो नवीनतम खतौनी नकल' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3,
        tip: { en: 'Can be downloaded directly from Uttarakhand Bhulekh portal', hi: 'उत्तराखंड भूलेख पोर्टल से भी डाउनलोड की जा सकती है' }
      },
      {
        id: 'inc-doc-5',
        name: { en: 'Recent Passport Size Photograph', hi: 'आवेदक की नवीनतम पासपोर्ट साइज फोटो' },
        description: { en: 'Coloured photograph with white background taken within 3 months', hi: 'सफेद पृष्ठभूमि वाली 3 माह के भीतर की रंगीन तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1,
        tip: { en: 'Face must be clearly visible without dark glasses', hi: 'चेहरा स्पष्ट दिखे और चश्मा न लगा हो' }
      },
      {
        id: 'inc-doc-6',
        name: { en: 'Ration Card / Family Register Excerpt (Parivar Register)', hi: 'राशन कार्ड या परिवार रजिस्टर की नकल' },
        description: { en: 'Attested copy of Gram Panchayat family register or municipal tax receipt', hi: 'ग्राम पंचायत परिवार रजिस्टर की प्रमाणित नकल या निकाय कर रसीद' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2,
        tip: { en: 'Obtainable from your local Gram Panchayat Vikas Adhikari (VDO)', hi: 'संबंधित ग्राम विकास अधिकारी (VDO) से प्राप्त की जा सकती है' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Citizen Portal Registration', hi: 'नागरिक पोर्टल पर पंजीकरण' },
        instruction: {
          en: 'Visit the official Uttarakhand Apuni Sarkar portal (eservices.uk.gov.in) and register your citizen account using your mobile number and email ID.',
          hi: 'उत्तराखंड अपुणी सरकार पोर्टल (eservices.uk.gov.in) पर जाएं और अपने मोबाइल नंबर से नागरिक खाता बनाएं।'
        },
        substeps: {
          en: ['Click "Citizen Registration" on top right', 'Enter Aadhaar number and verify via OTP', 'Set a secure login password'],
          hi: ['ऊपर दाईं ओर "नागरिक पंजीकरण" पर क्लिक करें', 'आधार नंबर दर्ज कर ओटीपी से सत्यापन करें', 'लॉगिन पासवर्ड सुरक्षित करें']
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Service Selection & Form Filling', hi: 'सेवा का चयन एवं आवेदन पत्र भरना' },
        instruction: {
          en: 'Log in to your profile, navigate to Revenue Department, and click "Application for Income Certificate".',
          hi: 'लॉगिन करने के बाद राजस्व विभाग में "आय प्रमाण पत्र हेतु आवेदन" का चयन करें।'
        },
        substeps: {
          en: ['Select your District, Tehsil, and Village/Ward', 'Fill family member details and individual annual earnings', 'Specify purpose of certificate'],
          hi: ['अपना जनपद, तहसील और ग्राम/वार्ड चुनें', 'परिवार के सदस्यों का नाम और आय दर्ज करें', 'प्रमाण पत्र बनवाने का उद्देश्य लिखें']
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Uploading Required Documents', hi: 'आवश्यक दस्तावेज अपलोड करना' },
        instruction: {
          en: 'Attach legible PDF or JPG copies of your self-declaration, identity proof, Parivar register excerpt, and photograph.',
          hi: 'स्व-घोषणा पत्र, पहचान पत्र, परिवार रजिस्टर नकल और फोटो की साफ फाइलें अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Online Payment & Acknowledgment Slip', hi: 'ऑनलाइन शुल्क भुगतान एवं पावती रसीद' },
        instruction: {
          en: 'Pay statutory portal charges online via UPI/Net Banking and download your Application Acknowledgment Slip containing reference number (UK-REV-XXXX).',
          hi: 'पोर्टल पर निर्धारित शुल्क ऑनलाइन जमा करें और आवेदन पावती रसीद (UK-REV-XXXX संदर्भ संख्या) डाउनलोड करें।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Patwari Inquiry & Tehsildar Issuance', hi: 'पटवारी आख्या एवं तहसीलदार स्वीकृति' },
        instruction: {
          en: 'Area Lekhpal/Patwari conducts revenue inquiry, forwards report to Tehsildar, and the digitally signed QR-coded certificate is issued within 15 days.',
          hi: 'क्षेत्रीय लेखपाल स्थलीय जांच कर रिपोर्ट भेजते हैं और 15 कार्य दिवसों में डिजिटल प्रमाण पत्र जारी हो जाता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Income Certificates in Uttarakhand are generally valid for 6 months or 1 financial year depending on the receiving scheme.',
        'Always verify that the annual amount matches the affidavit submitted.',
        'Digital certificates carry an official QR code; no physical signature is required.'
      ],
      hi: [
        'उत्तराखंड में आय प्रमाण पत्र सामान्यतः 6 माह अथवा 1 वित्तीय वर्ष के लिए मान्य होता है।',
        'शपथ पत्र में उल्लिखित राशि और पोर्टल पर दर्ज राशि बिल्कुल समान होनी चाहिए।',
        'डिजिटल प्रमाण पत्र पर आधिकारिक क्यूआर कोड होता है; अलग से भौतिक हस्ताक्षर की जरूरत नहीं होती।'
      ]
    }
  },
  {
    id: 'caste-certificate',
    iconName: 'ShieldCheck',
    code: 'UK-REV-CST',
    category: 'revenue_identity',
    serviceType: 'certificate',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'Caste Certificate (SC/ST/OBC)',
      hi: 'जाति प्रमाण पत्र (SC/ST/OBC)'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Statutory certificate validating membership in Scheduled Caste, Scheduled Tribe, or Other Backward Classes for state benefits.',
      hi: 'अनुसूचित जाति, अनुसूचित जनजाति अथवा अन्य पिछड़ा वर्ग में सदस्यता को प्रमाणित करने वाला विधिक प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Caste Certificate establishes belonging to an affirmative category recognized in Uttarakhand. It is mandatory for state quotas in education admissions, government jobs, competitive exams, and social welfare subsidies.',
      hi: 'जाति प्रमाण पत्र उत्तराखंड राज्य की अधिसूचित आरक्षित श्रेणियों में सदस्यता प्रमाणित करता है। यह राज्य स्तरीय शिक्षा आरक्षण, सरकारी नौकरियों और कल्याणकारी योजनाओं हेतु आवश्यक है।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: '15 working days for SC/ST; 30 working days for OBC under Uttarakhand RTS Act',
      hi: 'एससी/एसटी हेतु 15 कार्य दिवस; ओबीसी हेतु 30 कार्य दिवस (उत्तराखंड RTS अधिनियम)'
    },
    officialFee: {
      en: '₹30 (Portal direct) / ₹50 (CSC user fee)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल शुल्क ₹30 / सीएससी शुल्क ₹50'
    },
    eligibility: {
      en: [
        'Permanent resident of Uttarakhand holding valid ancestral domicile.',
        'Belongs to a community recognized in the state SC, ST, or OBC presidential orders for Uttarakhand.',
        'For OBC category: Household annual income must fall within Non-Creamy Layer (NCL) threshold.'
      ],
      hi: [
        'उत्तराखंड का स्थायी निवासी जिसके पास वैध पैतृक निवास प्रमाण हो।',
        'उत्तराखंड की अधिसूचित अनुसूचित जाति/जनजाति/ओबीसी सूची में शामिल समुदाय से हो।',
        'ओबीसी वर्ग हेतु: परिवार की वार्षिक आय नॉन-क्रीमी लेयर सीमा के भीतर होनी चाहिए।'
      ]
    },
    documents: [
      {
        id: 'cst-doc-1',
        name: { en: 'Aadhaar Card / Voter ID of Applicant', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Government issued photo identity proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-2',
        name: { en: "Father's Caste Certificate or Pre-1985 Ancestral Caste Proof", hi: 'पिता का जाति प्रमाण पत्र या 1985 से पूर्व का पैतृक अभिलेख' },
        description: { en: 'Ancestral land record (Khatauni), revenue entry, or legacy certificate', hi: 'पैतृक भूमि अभिलेख, बंदोबस्त अभिलेख या पिता का पूर्व प्रमाण पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3,
        tip: { en: 'Pre-1985 revenue record is prime evidence for ancestral caste', hi: '1985 से पूर्व का राजस्व अभिलेख पैतृक जाति का मुख्य साक्ष्य है' }
      },
      {
        id: 'cst-doc-3',
        name: { en: 'Permanent Residence (Domicile) Certificate of Uttarakhand', hi: 'उत्तराखंड स्थायी निवास (मूल निवास) प्रमाण पत्र' },
        description: { en: 'Mandatory proof of Uttarakhand state origin', hi: 'राज्य मूल निवासी होने का विधिक प्रमाण' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-4',
        name: { en: 'Parivar Register Excerpt (Form 2)', hi: 'परिवार रजिस्टर की प्रमाणित नकल' },
        description: { en: 'Certified copy from Gram Vikas Adhikari showing father-child relation', hi: 'ग्राम विकास अधिकारी द्वारा जारी प्रमाणित नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-5',
        name: { en: 'Non-Creamy Layer (NCL) Income Proof (OBC Only)', hi: 'नॉन-क्रीमी लेयर आय प्रमाण पत्र (केवल ओबीसी)' },
        description: { en: 'Verifies family annual income does not exceed creamy layer limit', hi: 'यह प्रमाणित करने हेतु कि आय क्रीमी लेयर सीमा से कम है' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-6',
        name: { en: 'Self-Declaration of Caste and Sub-Caste', hi: 'जाति एवं उप-जाति का स्व-घोषणा शपथ पत्र' },
        description: { en: 'Notarized affidavit declaring clan, sub-caste, and lineage', hi: 'गोत्र, उप-जाति और पैतृक मूल का नोटरी शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Citizen Portal Login', hi: 'नागरिक पोर्टल पर लॉगिन' },
        instruction: {
          en: 'Log in to Apuni Sarkar portal (eservices.uk.gov.in) with your citizen credentials.',
          hi: 'अपुणी सरकार पोर्टल पर अपनी आईडी से लॉगिन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Category Selection', hi: 'जाति श्रेणी का चयन' },
        instruction: {
          en: 'Navigate to Revenue Department -> Caste Certificate and choose SC, ST, or OBC.',
          hi: 'राजस्व विभाग में जाति प्रमाण पत्र चुनकर एससी, एसटी या ओबीसी का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Fill Lineage Details', hi: 'पैतृक वंश विवरण भरें' },
        instruction: {
          en: "Enter father's name, grandfather's name, ancestral village, and details of earlier family certificates.",
          hi: 'पिता, दादा का नाम, पैतृक गांव और पुराने पारिवारिक जाति प्रमाण पत्र का विवरण भरें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Document Upload & Payment', hi: 'दस्तावेज अपलोड एवं शुल्क भुगतान' },
        instruction: {
          en: "Upload Domicile, Parivar register, father's caste proof, and pay statutory fees.",
          hi: 'मूल निवास, परिवार रजिस्टर और पिता का जाति प्रमाण पत्र अपलोड कर शुल्क जमा करें।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Tehsil Revenue Inquiry & Approval', hi: 'तहसील राजस्व जांच एवं स्वीकृति' },
        instruction: {
          en: 'Lekhpal verifies family heritage, submits report to Kanoongo, and Tehsildar approves digital certificate.',
          hi: 'लेखपाल द्वारा पैतृक जांच के बाद तहसीलदार डिजिटल प्रमाण पत्र स्वीकृत करते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'SC and ST certificates in Uttarakhand have lifetime validity.',
        'OBC Non-Creamy Layer certificates are valid for 3 financial years or as specified in current rules.',
        'If father does not hold a certificate, pre-1985 ancestral land records of Uttarakhand are required.'
      ],
      hi: [
        'उत्तराखंड में एससी और एसटी प्रमाण पत्र आजीवन मान्य होते हैं।',
        'ओबीसी नॉन-क्रीमी लेयर प्रमाण पत्र 3 वित्तीय वर्षों के लिए मान्य होता है।',
        'यदि पिता का प्रमाण पत्र न हो तो 1985 से पूर्व का पैतृक भूमि रिकॉर्ड आवश्यक होता है।'
      ]
    }
  },
  {
    id: 'domicile-certificate',
    iconName: 'Home',
    code: 'UK-REV-DOM',
    category: 'revenue_identity',
    serviceType: 'certificate',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'Domicile / Permanent Residence Certificate',
      hi: 'स्थायी निवास (मूल निवास) प्रमाण पत्र'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Statutory certificate certifying permanent residence and legal domicile in Uttarakhand for government recruitment and state quotas.',
      hi: 'उत्तराखंड में स्थायी निवास और अधिवास को प्रमाणित करने वाला विधिक प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Permanent Residence Certificate (Mool Niwas / Sthai Niwas) proves that the applicant or their ancestors have resided continuously in Uttarakhand for at least 15 years, or satisfy statutory education requirements for state recruitment and quota eligibility.',
      hi: 'मूल निवास प्रमाण पत्र यह प्रमाणित करता है कि आवेदक अथवा उसके पूर्वज कम से कम 15 वर्षों से लगातार उत्तराखंड में निवासरत हैं, अथवा राज्य सेवा नियमों के अंतर्गत पात्रता रखते हैं।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: '₹30 (Portal direct) / ₹50 (CSC user fee)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल शुल्क ₹30 / सीएससी शुल्क ₹50'
    },
    eligibility: {
      en: [
        'Applicant or ancestors residing in Uttarakhand continuously for at least 15 years, OR',
        'Passed High School / Intermediate examination from recognized institutions within Uttarakhand with continuous residence criteria, OR',
        'State government employee posted in Uttarakhand as per statutory rules.'
      ],
      hi: [
        'आवेदक या उसके पूर्वज कम से कम 15 वर्षों से लगातार उत्तराखंड में निवासरत हों, अथवा',
        'उत्तराखंड के मान्यता प्राप्त विद्यालयों से हाईस्कूल/इंटरमीडिएट उत्तीर्ण की हो और निरंतर निवास हो, अथवा',
        'राज्य सरकार के नियमित कर्मचारी।'
      ]
    },
    documents: [
      {
        id: 'dom-doc-1',
        name: { en: 'Aadhaar Card / Voter ID of Applicant', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Government photo identification proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-2',
        name: { en: '15-Year Continuous Stay Proof in Uttarakhand', hi: 'उत्तराखंड में 15 वर्ष का निरंतर निवास प्रमाण' },
        description: { en: 'School transfer certificate, legacy voter lists, electricity bills, or property deeds', hi: 'विद्यालय स्थानांतरण प्रमाण पत्र, पुरानी मतदाता सूची, बिजली बिल अथवा मकान रजिस्ट्री' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 5,
        tip: { en: 'Multiple historical documents can be merged into a single PDF', hi: 'पुराने दस्तावेजों को एक ही पीडीएफ फाइल में जोड़कर अपलोड करें' }
      },
      {
        id: 'dom-doc-3',
        name: { en: 'Parivar Register Excerpt (Form 2)', hi: 'परिवार रजिस्टर की प्रमाणित नकल' },
        description: { en: 'Certified copy from Gram Vikas Adhikari showing family entry in village register', hi: 'ग्राम विकास अधिकारी द्वारा जारी परिवार रजिस्टर नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-4',
        name: { en: 'Ancestral Land Record (Khatauni) / House Registry', hi: 'पैतृक भूमि अभिलेख (खतौनी) या मकान की रजिस्ट्री' },
        description: { en: 'Proof of ancestral immovable property in Uttarakhand', hi: 'उत्तराखंड में पैतृक अचल संपत्ति का प्रमाण' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3
      },
      {
        id: 'dom-doc-5',
        name: { en: 'Notarized Domicile Affidavit', hi: 'स्थायी निवास शपथ पत्र (नोटरीकृत)' },
        description: { en: 'Affidavit affirming 15-year stay and declaring no domicile in another state', hi: '15 वर्ष के निवास और अन्य राज्य में अधिवास न होने का शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-6',
        name: { en: 'Recent Passport Size Photograph', hi: 'नवीनतम पासपोर्ट साइज फोटो' },
        description: { en: 'Color photograph with white background taken within 3 months', hi: 'सफेद पृष्ठभूमि वाली 3 माह के भीतर की रंगीन तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Login to Apuni Sarkar', hi: 'अपुणी सरकार पर लॉगिन' },
        instruction: {
          en: 'Sign in to eservices.uk.gov.in using your citizen account.',
          hi: 'eservices.uk.gov.in पर अपने नागरिक खाते से लॉगिन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select Domicile Service', hi: 'स्थायी निवास सेवा का चयन' },
        instruction: {
          en: 'Select Revenue Department -> Permanent Residence (Domicile) Certificate.',
          hi: 'राजस्व विभाग में स्थायी निवास प्रमाण पत्र का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Fill 15-Year Residential History', hi: '15 वर्ष का निवास इतिहास दर्ज करें' },
        instruction: {
          en: 'Input ancestral village, duration of stay, educational history, and property details.',
          hi: 'पैतृक गांव, निवास की अवधि, शिक्षा और संपत्ति का विवरण भरें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Upload Documents & Pay Fee', hi: 'दस्तावेज अपलोड एवं शुल्क भुगतान' },
        instruction: {
          en: 'Upload Parivar register, stay proofs, affidavit, photo, and pay ₹30/₹50 fee.',
          hi: 'परिवार रजिस्टर, निवास साक्ष्य, शपथ पत्र और फोटो अपलोड कर शुल्क जमा करें।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Patwari Inquiry & Tehsildar Approval', hi: 'पटवारी स्थलीय जांच एवं तहसीलदार स्वीकृति' },
        instruction: {
          en: 'Patwari verifies physical residence on ground, and Tehsildar issues digitally signed certificate within 15 days.',
          hi: 'पटवारी द्वारा स्थलीय सत्यापन के बाद 15 कार्य दिवसों में तहसीलदार डिजिटल प्रमाण पत्र जारी करते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Domicile certificates in Uttarakhand have lifetime validity unless cancelled due to fraud.',
        'Holding a domicile certificate of another state simultaneously is illegal.',
        'Continuous schooling from primary to 12th in Uttarakhand is considered strong supporting evidence.'
      ],
      hi: [
        'उत्तराखंड में मूल निवास प्रमाण पत्र आजीवन मान्य होता है।',
        'एक ही समय में किसी अन्य राज्य का मूल निवास प्रमाण पत्र रखना विधि विरुद्ध है।',
        'उत्तराखंड में प्राथमिक से 12वीं तक की निरंतर पढ़ाई को मजबूत साक्ष्य माना जाता है।'
      ]
    }
  },
  {
    id: 'ews-certificate',
    iconName: 'Award',
    code: 'UK-REV-EWS',
    category: 'revenue_identity',
    serviceType: 'certificate',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'EWS Certificate (Economically Weaker Section)',
      hi: 'ईडब्ल्यूएस प्रमाण पत्र (आर्थिक रूप से कमजोर वर्ग)'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Income and asset certificate for general category citizens to claim 10% EWS reservation in admissions and government jobs.',
      hi: 'सामान्य वर्ग के नागरिकों हेतु 10% ईडब्ल्यूएस आरक्षण का लाभ प्राप्त करने के लिए आय एवं परिसंपत्ति प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Economically Weaker Section (EWS) Certificate is issued by the Tehsildar to general category citizens whose annual gross family income is below ₹8 Lakh and who satisfy statutory immovable asset ceilings (agricultural land < 5 acres, flat < 1000 sq ft).',
      hi: 'ईडब्ल्यूएस प्रमाण पत्र तहसीलदार द्वारा सामान्य वर्ग के उन नागरिकों को जारी किया जाता है जिनकी वार्षिक पारिवारिक आय ₹8 लाख से कम है तथा जिनकी परिसंपत्तियां सरकारी सीमा के भीतर हैं।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: '₹30 (Portal direct) / ₹50 (CSC user fee)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल शुल्क ₹30 / सीएससी शुल्क ₹50'
    },
    eligibility: {
      en: [
        'General category citizen not covered under SC, ST, or OBC reservation.',
        'Gross annual family income from all sources below ₹8 Lakh in the financial year prior to application.',
        'Family does not own 5 acres or more agricultural land, residential flat >= 1000 sq ft, or notified residential plot >= 100/200 sq yards.'
      ],
      hi: [
        'सामान्य वर्ग का नागरिक जो एससी, एसटी या ओबीसी आरक्षण के अंतर्गत न आता हो।',
        'पूर्व वित्तीय वर्ष में परिवार की कुल वार्षिक आय ₹8 लाख से कम हो।',
        'परिवार के पास 5 एकड़ या अधिक कृषि भूमि, 1000 वर्ग फुट या अधिक का फ्लैट, अथवा 100/200 वर्ग गज का अधिसूचित भूखंड न हो।'
      ]
    },
    documents: [
      {
        id: 'ews-doc-1',
        name: { en: 'Aadhaar Card / Photo ID', hi: 'आधार कार्ड या पहचान पत्र' },
        description: { en: 'Identity proof of applicant and parents', hi: 'आवेदक एवं अभिभावक का पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'ews-doc-2',
        name: { en: 'Uttarakhand Domicile Certificate', hi: 'उत्तराखंड मूल निवास प्रमाण पत्र' },
        description: { en: 'Valid proof of permanent residence', hi: 'स्थायी निवास का विधिक साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'ews-doc-3',
        name: { en: 'Parivar Register Copy (Form 2) / Ration Card', hi: 'परिवार रजिस्टर नकल / राशन कार्ड' },
        description: { en: 'Verifies family composition and members', hi: 'परिवार के सदस्यों का सत्यापन' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'ews-doc-4',
        name: { en: 'Income Proof / ITR of All Earning Family Members', hi: 'वेतन पर्ची / आयकर रिटर्न / आय साक्ष्य' },
        description: { en: 'Salary slip, Form 16, or ITR proving gross income under ₹8 Lakh', hi: 'आय ₹8 लाख से कम होने का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 3
      },
      {
        id: 'ews-doc-5',
        name: { en: 'Land Record (Khatauni) / House Registry / Tax Receipt', hi: 'खतौनी / मकान रजिस्ट्री / संपत्ति कर रसीद' },
        description: { en: 'Verifies property assets do not exceed EWS ceiling', hi: 'परिसंपत्तियां सीमा में होने का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3
      },
      {
        id: 'ews-doc-6',
        name: { en: 'Notarized EWS Self-Declaration Affidavit', hi: 'ईडब्ल्यूएस स्व-घोषणा शपथ पत्र' },
        description: { en: 'Affidavit affirming general category status, family income, and assets', hi: 'सामान्य वर्ग, पारिवारिक आय और संपत्तियों का शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Select EWS Service', hi: 'ईडब्ल्यूएस सेवा का चयन' },
        instruction: {
          en: 'Log into eservices.uk.gov.in -> Revenue Department -> EWS Certificate.',
          hi: 'eservices.uk.gov.in पर लॉगिन कर राजस्व विभाग -> ईडब्ल्यूएस प्रमाण पत्र चुनें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Declare Income & Assets', hi: 'आय एवं परिसंपत्तियों का विवरण भरें' },
        instruction: {
          en: 'Enter gross family income, agricultural land measurements, and residential property details.',
          hi: 'पारिवारिक कुल आय, कृषि भूमि और आवासीय मकान की माप का विवरण दर्ज करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Scanned Documents', hi: 'दस्तावेज अपलोड करें' },
        instruction: {
          en: 'Attach Domicile, Parivar register, income proofs, property papers, and affidavit.',
          hi: 'मूल निवास, परिवार रजिस्टर, आय साक्ष्य, खतौनी और शपथ पत्र अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Pay Portal Fee & Submit', hi: 'शुल्क भुगतान एवं सबमिट' },
        instruction: {
          en: 'Pay statutory portal charge online and save application receipt.',
          hi: 'पोर्टल पर निर्धारित शुल्क जमा करें और संदर्भ संख्या सुरक्षित रखें।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Patwari Inquiry & Tehsildar Issuance', hi: 'पटवारी जांच एवं तहसीलदार स्वीकृति' },
        instruction: {
          en: 'Lekhpal verifies assets in field; Tehsildar issues digitally signed EWS Certificate.',
          hi: 'लेखपाल द्वारा संपत्तियों के स्थलीय सत्यापन के बाद तहसीलदार डिजिटल प्रमाण पत्र जारी करते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'EWS Certificate in Uttarakhand is valid for 1 financial year.',
        'Applies only to General Category candidates not covered under SC/ST/OBC.',
        'Assets across all family members (parents, spouse, siblings below 18) are clubbed together.'
      ],
      hi: [
        'उत्तराखंड में ईडब्ल्यूएस प्रमाण पत्र 1 वित्तीय वर्ष के लिए मान्य होता है।',
        'यह केवल सामान्य वर्ग के अभ्यर्थियों पर लागू होता है जो एससी/एसटी/ओबीसी में नहीं हैं।',
        'परिवार के सभी सदस्यों की संपत्तियों को एक साथ जोड़कर गणना की जाती है।'
      ]
    }
  },
  {
    id: 'character-certificate',
    iconName: 'ShieldCheck',
    code: 'UK-POL-CHR',
    category: 'revenue_identity',
    serviceType: 'certificate',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://uttarakhandpolice.uk.gov.in',
    officialPortalName: {
      en: 'Uttarakhand Police Citizen Portal',
      hi: 'उत्तराखंड पुलिस नागरिक पोर्टल'
    },
    title: {
      en: 'Character Certificate (Police Verification)',
      hi: 'चरित्र प्रमाण पत्र (पुलिस सत्यापन)'
    },
    department: {
      en: 'Home & Police Department (गृह एवं पुलिस विभाग)',
      hi: 'गृह एवं पुलिस विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Official police verification and character certificate required for state government employment, private jobs, and security clearances.',
      hi: 'सरकारी नौकरी, निजी सेवा, सुरक्षा मंजूरी और ठेकेदारी पंजीकरण हेतु पुलिस सत्यापन एवं चरित्र प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Character Certificate is issued after thorough background verification through local police station records and the Crime and Criminal Tracking Network & Systems (CCTNS) to confirm the applicant has no adverse criminal record.',
      hi: 'चरित्र प्रमाण पत्र स्थानीय पुलिस थाने के अभिलेखों और सीसीटीएनएस (CCTNS) डेटाबेस के माध्यम से आपराधिक रिकॉर्ड की जांच के उपरांत जारी किया जाता है।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: '₹50 (Statutory verification fee)',
      hi: '₹50 (सरकारी पुलिस सत्यापन शुल्क)'
    },
    eligibility: {
      en: [
        'Resident of Uttarakhand with local residential address verification.',
        'No adverse criminal record or pending non-bailable warrants.',
        'Must provide valid references and identification.'
      ],
      hi: [
        'उत्तराखंड का निवासी जिसके स्थानीय पते का भौतिक सत्यापन संभव हो।',
        'कोई गंभीर आपराधिक रिकॉर्ड या गैर-जमानती वारंट लंबित न हो।',
        'वैध पहचान पत्र एवं संभ्रांत व्यक्तियों की संस्तुति।'
      ]
    },
    documents: [
      {
        id: 'chr-doc-1',
        name: { en: 'Aadhaar Card / Voter ID / Passport', hi: 'आधार कार्ड या पहचान पत्र' },
        description: { en: 'Government photo identification proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'chr-doc-2',
        name: { en: 'Local Residence Proof (Domicile / Parivar Register / Utility Bill)', hi: 'स्थानीय निवास प्रमाण' },
        description: { en: 'Verifies residence within local police station boundary', hi: 'संबंधित थाने के क्षेत्र में निवास का प्रमाण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'chr-doc-3',
        name: { en: 'Two Character Recommendation Letters', hi: 'दो संभ्रांत व्यक्तियों / राजपत्रित अधिकारियों के संस्तुति पत्र' },
        description: { en: 'From Gazetted Officers, Gram Pradhan, or Municipal Councilor', hi: 'राजपत्रित अधिकारी, ग्राम प्रधान या सभासद का संस्तुति पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'chr-doc-4',
        name: { en: 'Recent Passport Size Photographs (3 copies)', hi: 'नवीनतम पासपोर्ट साइज फोटो' },
        description: { en: 'Clear photograph with light background', hi: 'हल्की पृष्ठभूमि वाली रंगीन तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      },
      {
        id: 'chr-doc-5',
        name: { en: 'Self-Declaration of No Criminal Record', hi: 'आपराधिक रिकॉर्ड न होने का स्व-घोषणा पत्र' },
        description: { en: 'Affidavit declaring no criminal FIR or conviction pending', hi: 'कोई आपराधिक मामला लंबित न होने का शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Online Application', hi: 'ऑनलाइन आवेदन' },
        instruction: {
          en: 'Apply online on uttarakhandpolice.uk.gov.in or eservices.uk.gov.in.',
          hi: 'uttarakhandpolice.uk.gov.in अथवा eservices.uk.gov.in पर आवेदन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Nominate Police Station', hi: 'संबंधित थाने का चयन' },
        instruction: {
          en: 'Select your territorial police station for field verification.',
          hi: 'अपने निवास क्षेत्र के पुलिस थाने का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Documents & Pay ₹50 Fee', hi: 'दस्तावेज अपलोड एवं ₹50 शुल्क भुगतान' },
        instruction: {
          en: 'Upload ID proofs, references, and pay statutory verification fee.',
          hi: 'पहचान पत्र, संस्तुति पत्र अपलोड कर सत्यापन शुल्क जमा करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Police Station Field & CCTNS Verification', hi: 'थाना स्तर पर स्थलीय एवं सीसीटीएनएस जांच' },
        instruction: {
          en: 'Beat officer visits address and checks state crime records.',
          hi: 'बीट कांस्टेबल द्वारा भौतिक सत्यापन और अपराध रिकॉर्ड की जांच की जाती है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'SP Office / SDM Issuance', hi: 'एसपी कार्यालय द्वारा प्रमाण पत्र जारी' },
        instruction: {
          en: 'Superintendent of Police office or SDM approves digitally signed certificate.',
          hi: 'पुलिस अधीक्षक कार्यालय द्वारा डिजिटल हस्ताक्षरित चरित्र प्रमाण पत्र जारी किया जाता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Character Certificate is usually valid for 6 months for employment and tenders.',
        'Applicants must be present or reachable during police beat inquiry.',
        'False declaration in criminal affidavit invites prosecution under BNS / IPC.'
      ],
      hi: [
        'चरित्र प्रमाण पत्र नौकरियों और निविदाओं हेतु सामान्यतः 6 माह के लिए मान्य होता है।',
        'बीट कांस्टेबल की जांच के समय स्थानीय पते पर उपलब्ध होना आवश्यक है।',
        'शपथ पत्र में झूठी जानकारी देना विधिक अपराध है।'
      ]
    }
  },

  // ==========================================
  // 2. CIVIL REGISTRATION (civil_registration)
  // ==========================================
  {
    id: 'birth-certificate',
    iconName: 'Baby',
    code: 'UK-REG-BRT',
    category: 'civil_registration',
    serviceType: 'certificate',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://crsorgi.gov.in',
    officialPortalName: {
      en: 'Civil Registration System (CRS) Portal',
      hi: 'नागरिक पंजीकरण प्रणाली (CRS) पोर्टल'
    },
    title: {
      en: 'Birth Certificate',
      hi: 'जन्म प्रमाण पत्र'
    },
    department: {
      en: 'Medical Health & Family Welfare / Panchayati Raj / Urban Development',
      hi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण / पंचायती राज / शहरी विकास'
    },
    shortDesc: {
      en: 'Statutory vital registration certificate establishing legal identity, date of birth, and parentage under the RBD Act 1969.',
      hi: 'जन्म और मृत्यु रजिस्ट्रीकरण अधिनियम 1969 के अंतर्गत जन्म की तिथि, स्थान और माता-पिता के नाम को प्रमाणित करने वाला विधिक प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Birth Certificate is the primary legal document confirming date of birth and parentage. It is registered by the local Registrar of Births and Deaths (Gram Vikas Adhikari in rural villages, Municipal Health Officer in urban wards) under the Civil Registration System (CRS).',
      hi: 'जन्म प्रमाण पत्र जन्म की तिथि और अभिभावकत्व का मूल विधिक प्रमाण पत्र है। यह ग्रामीण क्षेत्रों में ग्राम विकास अधिकारी तथा शहरी क्षेत्रों में नगर निकाय के स्वास्थ्य अधिकारी द्वारा नागरिक पंजीकरण प्रणाली (CRS) के तहत जारी किया जाता है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Delivery within 7 to 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 7 से 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: 'Free within 21 days; ₹2 (21-30 days); ₹5 (30 days-1 year); ₹10 + SDM order (after 1 year)',
      hi: '21 दिनों के भीतर निःशुल्क; ₹2 (21-30 दिन); ₹5 (30 दिन-1 वर्ष); ₹10 + एसडीएम आदेश (1 वर्ष बाद)'
    },
    eligibility: {
      en: [
        'Any birth occurring within territorial boundaries of Uttarakhand.',
        'Parents, hospital, or legal guardian applying for registration.'
      ],
      hi: [
        'उत्तराखंड राज्य के भीतर हुआ कोई भी जन्म।',
        'माता-पिता, अस्पताल प्रशासन या विधिक अभिभावक।'
      ]
    },
    documents: [
      {
        id: 'brt-doc-1',
        name: { en: 'Hospital Birth Slip / Discharge Card (Form 1)', hi: 'अस्पताल जन्म पर्ची / डिस्चार्ज कार्ड' },
        description: { en: 'Institutional birth record signed by hospital superintendent or ANM', hi: 'अस्पताल अधीक्षक अथवा एएनएम द्वारा जारी जन्म पर्ची' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-2',
        name: { en: "Parents' Aadhaar Card / Identity Proof", hi: 'माता-पिता का आधार कार्ड / पहचान पत्र' },
        description: { en: 'Identity proof of both mother and father', hi: 'माता एवं पिता दोनों के पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-3',
        name: { en: 'Parivar Register Copy / Residence Proof of Parents', hi: 'परिवार रजिस्टर नकल / निवास प्रमाण' },
        description: { en: 'Gram Panchayat family register excerpt or municipal water/tax bill', hi: 'ग्राम पंचायत परिवार रजिस्टर की नकल अथवा निकाय बिल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-4',
        name: { en: 'SDM Order (If delayed registration after 1 year)', hi: 'एसडीएम अनुमति आदेश (1 वर्ष बाद विलंबित पंजीकरण)' },
        description: { en: 'Mandatory order from Sub-Divisional Magistrate for births over 365 days', hi: '1 वर्ष बाद पंजीकरण हेतु उप-जिलाधिकारी (एसडीएम) का आदेश' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 3
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Hospital Reporting or Portal Entry', hi: 'अस्पताल सूचना या पोर्टल प्रविष्टि' },
        instruction: {
          en: 'Hospitals log Form 1 directly on crsorgi.gov.in. For home births, report within 21 days to VDO/Registrar.',
          hi: 'अस्पताल crsorgi.gov.in पर सूचना दर्ज करते हैं; घर पर जन्म होने पर 21 दिन में सूचना दें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Portal Application', hi: 'पोर्टल पर आवेदन' },
        instruction: {
          en: 'Access crsorgi.gov.in or eservices.uk.gov.in -> Civil Registration.',
          hi: 'crsorgi.gov.in अथवा eservices.uk.gov.in पर जाएं।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Enter Child and Parent Details', hi: 'बच्चे एवं माता-पिता का विवरण भरें' },
        instruction: {
          en: "Enter child's name, gender, birth date, place of birth, and parents' details.",
          hi: 'बच्चे का नाम, जन्म तिथि, स्थान और माता-पिता के आधार का विवरण दर्ज करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Registrar Verification', hi: 'रजिस्ट्रार द्वारा सत्यापन' },
        instruction: {
          en: 'Registrar of Births & Deaths verifies hospital entry or field report.',
          hi: 'रजिस्ट्रार (ग्राम विकास अधिकारी / ईओ) द्वारा अभिलेखों की जांच की जाती है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Download Signed Certificate', hi: 'प्रमाण पत्र डाउनलोड करें' },
        instruction: {
          en: 'Download QR-coded digital Birth Certificate from portal.',
          hi: 'क्यूआर कोड युक्त डिजिटल जन्म प्रमाण पत्र डाउनलोड करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Registration is completely free within 21 days of birth.',
        'Delayed registration after 1 year requires a formal inquiry and order by Sub-Divisional Magistrate (SDM).',
        'Child name can be added up to 1 year without penalty.'
      ],
      hi: [
        'जन्म के 21 दिनों के भीतर पंजीकरण पूर्णतः निःशुल्क होता है।',
        '1 वर्ष के बाद पंजीकरण हेतु उप-जिलाधिकारी (एसडीएम) का अनुमति आदेश अनिवार्य है।',
        'बच्चे का नाम 1 वर्ष तक बिना किसी अतिरिक्त शुल्क के जोड़ा जा सकता है।'
      ]
    }
  },
  {
    id: 'death-certificate',
    iconName: 'HeartPulse',
    code: 'UK-REG-DTH',
    category: 'civil_registration',
    serviceType: 'certificate',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://crsorgi.gov.in',
    officialPortalName: {
      en: 'Civil Registration System (CRS) Portal',
      hi: 'नागरिक पंजीकरण प्रणाली (CRS) पोर्टल'
    },
    title: {
      en: 'Death Certificate',
      hi: 'मृत्यु प्रमाण पत्र'
    },
    department: {
      en: 'Medical Health & Family Welfare / Panchayati Raj / Urban Development',
      hi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण / पंचायती राज / शहरी विकास'
    },
    shortDesc: {
      en: 'Statutory certificate confirming date, fact, and place of death for property succession, insurance claims, and bank settlement.',
      hi: 'उत्तराधिकार, बीमा दावों, पारिवारिक पेंशन और बैंक खातों के निस्तारण हेतु मृत्यु की तिथि एवं तथ्य को प्रमाणित करने वाला विधिक प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Death Certificate is the mandatory legal record establishing the death of an individual under the Registration of Births and Deaths Act 1969. It is required by heirs to claim bank deposits, settle insurance policies, transfer land ownership (mutation), and receive family welfare grants.',
      hi: 'मृत्यु प्रमाण पत्र विधिक रूप से मृत्यु का निर्धारण करने वाला आवश्यक दस्तावेज है। यह वारिसों के लिए बैंक खातों, बीमा दावों, भूमि वरासत (दाखिल-खारिज) और पारिवारिक पेंशन हेतु अनिवार्य होता है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Delivery within 7 to 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 7 से 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: 'Free within 21 days; ₹2 (21-30 days); ₹5 (30 days-1 year); ₹10 + SDM order (after 1 year)',
      hi: '21 दिनों के भीतर निःशुल्क; ₹2 (21-30 दिन); ₹5 (30 दिन-1 वर्ष); ₹10 + एसडीएम आदेश (1 वर्ष बाद)'
    },
    eligibility: {
      en: [
        'Death occurring within territorial boundaries of Uttarakhand.',
        'Immediate family members (spouse, children, parents) or legal heirs.'
      ],
      hi: [
        'उत्तराखंड राज्य की सीमा में हुई कोई भी मृत्यु।',
        'निकटतम परिजन (पति/पत्नी, पुत्र/पुत्री, माता-पिता) अथवा विधिक वारिस।'
      ]
    },
    documents: [
      {
        id: 'dth-doc-1',
        name: { en: 'Hospital Death Summary / Cause of Death Form 2', hi: 'अस्पताल मृत्यु पर्ची / मृत्यु का चिकित्सीय कारण पत्र' },
        description: { en: 'Institutional death certificate issued by attending physician', hi: 'चिकित्सक द्वारा जारी मृत्यु सारांश' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-2',
        name: { en: 'Cremation / Burial Ground Receipt or Gram Pradhan Certificate', hi: 'श्मशान घाट / अंत्येष्टि रसीद अथवा ग्राम प्रधान प्रमाण पत्र' },
        description: { en: 'Proof of funeral rites performed in Uttarakhand', hi: 'अंत्येष्टि संस्कार का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-3',
        name: { en: 'Aadhaar Card of Deceased and Applicant', hi: 'मृतक एवं आवेदक का आधार कार्ड' },
        description: { en: 'Photo identification proof of deceased and legal heir', hi: 'मृतक एवं वारिस का पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-4',
        name: { en: 'Parivar Register Copy / Relation Proof', hi: 'परिवार रजिस्टर नकल / संबंध साक्ष्य' },
        description: { en: 'Gram Panchayat family register excerpt showing relationship', hi: 'ग्राम पंचायत परिवार रजिस्टर की नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-5',
        name: { en: 'SDM Order (If delayed registration after 1 year)', hi: 'एसडीएम अनुमति आदेश (1 वर्ष बाद विलंबित पंजीकरण)' },
        description: { en: 'Mandatory order from Sub-Divisional Magistrate for deaths over 365 days', hi: '1 वर्ष बाद पंजीकरण हेतु उप-जिलाधिकारी (एसडीएम) का आदेश' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 3
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Report Death within 21 Days', hi: '21 दिनों के भीतर मृत्यु की सूचना' },
        instruction: {
          en: 'Report to local Registrar (VDO in rural, Municipal EO in urban).',
          hi: 'रजिस्ट्रार (ग्राम विकास अधिकारी / पालिका स्वास्थ्य अधिकारी) को सूचना दें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Portal Application Entry', hi: 'पोर्टल पर विवरण दर्ज करें' },
        instruction: {
          en: 'Submit application on crsorgi.gov.in or eservices.uk.gov.in.',
          hi: 'crsorgi.gov.in अथवा eservices.uk.gov.in पर आवेदन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Proofs', hi: 'अस्पताल पर्ची एवं श्मशान रसीद अपलोड करें' },
        instruction: {
          en: 'Attach Form 2, cremation slip, and deceased ID proofs.',
          hi: 'चिकित्सक मृत्यु सारांश और अंत्येष्टि रसीद अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Registrar Verification', hi: 'रजिस्ट्रार सत्यापन' },
        instruction: {
          en: 'Local Registrar verifies hospital or village death register.',
          hi: 'रजिस्ट्रार द्वारा अभिलेखों की जांच की जाती है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Download Certificate', hi: 'प्रमाण पत्र डाउनलोड' },
        instruction: {
          en: 'Download digitally signed QR-coded Death Certificate.',
          hi: 'डिजिटल हस्ताक्षरित मृत्यु प्रमाण पत्र प्राप्त करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Registration is completely free if done within 21 days.',
        'Delayed registration beyond 1 year requires a formal SDM inquiry.',
        'Ensure exact spelling of deceased name matches bank accounts and land records.'
      ],
      hi: [
        '21 दिनों के भीतर पंजीकरण पूर्णतः निःशुल्क होता है।',
        '1 वर्ष से अधिक की देरी पर एसडीएम का अनुमति आदेश अनिवार्य है।',
        'सुनिश्चित करें कि नाम की स्पेलिंग बैंक खाते और भूमि रिकॉर्ड से बिल्कुल मेल खाती हो।'
      ]
    }
  },
  {
    id: 'marriage-registration',
    iconName: 'Scroll',
    code: 'UK-REG-MAR',
    category: 'civil_registration',
    serviceType: 'registration',
    applicationMode: 'hybrid',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://registration.uk.gov.in',
    officialPortalName: {
      en: 'Uttarakhand Registration & Stamps Portal',
      hi: 'उत्तराखंड निबंधन एवं स्टांप पोर्टल'
    },
    title: {
      en: 'Marriage Registration',
      hi: 'विवाह पंजीकरण'
    },
    department: {
      en: 'Registration & Stamps Department (निबंधन एवं स्टांप विभाग)',
      hi: 'निबंधन एवं स्टांप विभाग / महिला सशक्तिकरण एवं बाल विकास'
    },
    shortDesc: {
      en: 'Compulsory legal registration of marriage under Uttarakhand law, required for visas, joint assets, and welfare schemes.',
      hi: 'उत्तराखंड अनिवार्य विवाह पंजीकरण अधिनियम के अंतर्गत विवाह का विधिक पंजीकरण।'
    },
    fullDesc: {
      en: 'Compulsory registration of marriages under the Uttarakhand Compulsory Registration of Marriages Act. Spouses complete online pre-registration on registration.uk.gov.in and appear in person with 2 adult witnesses before the Sub-Registrar of Assurances (SRO) in their Tehsil.',
      hi: 'उत्तराखंड अनिवार्य विवाह पंजीकरण अधिनियम के अंतर्गत विवाह का विधिक पंजीकरण। दंपत्ति ऑनलाइन आवेदन भरकर तहसील के उप-निबंधक (एसआरओ) के समक्ष दो वयस्क गवाहों के साथ उपस्थित होकर विधिक प्रमाण पत्र प्राप्त करते हैं।'
    },
    estimatedDays: 3,
    rtsGuarantee: {
      en: 'Same day or within 3 working days upon in-person appearance before Sub-Registrar',
      hi: 'उप-निबंधक के समक्ष भौतिक उपस्थिति के दिन ही अथवा 3 कार्य दिवसों में'
    },
    officialFee: {
      en: '₹50 (Within 90 days); ₹100 (Beyond 90 days)',
      hi: '₹50 (विवाह के 90 दिन के भीतर); ₹100 (90 दिन के बाद)'
    },
    eligibility: {
      en: [
        'Groom must be at least 21 years old and Bride at least 18 years old at solemnization.',
        'Marriage solemnized in Uttarakhand, OR either spouse is permanent resident of Uttarakhand.',
        'Free mutual consent and lawful marital relationship.'
      ],
      hi: [
        'विवाह के समय वर की आयु कम से कम 21 वर्ष और वधू की कम से कम 18 वर्ष हो।',
        'विवाह उत्तराखंड में संपन्न हुआ हो, अथवा पति या पत्नी में से कोई एक राज्य का स्थायी निवासी हो।',
        'दोनों पक्षों की स्वतंत्र सहमति हो।'
      ]
    },
    documents: [
      {
        id: 'mar-doc-1',
        name: { en: 'Age Proof of Bride and Groom (10th Marksheet / Birth Certificate)', hi: 'वर-वधू का आयु प्रमाण (10वीं अंकतालिका / जन्म प्रमाण पत्र)' },
        description: { en: 'Government age verification proof of both spouses', hi: 'वर-वधू दोनों की आयु का विधिक साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'mar-doc-2',
        name: { en: 'Aadhaar Card and Residence Proof of Spouses', hi: 'वर-वधू का आधार कार्ड एवं निवास प्रमाण' },
        description: { en: 'Aadhaar, Voter ID, or Domicile certificate', hi: 'आधार कार्ड या मूल निवास प्रमाण पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'mar-doc-3',
        name: { en: 'Wedding Card / Priest Certificate / Mandir Certificate', hi: 'विवाह निमंत्रण पत्र / पंडित या मौलवी का प्रमाण पत्र' },
        description: { en: 'Proof of solemnization of wedding ceremonies', hi: 'विवाह संस्कार संपन्न होने का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'mar-doc-4',
        name: { en: 'Joint Wedding Photographs', hi: 'विवाह समारोह की संयुक्त तस्वीर' },
        description: { en: 'Postcard size joint photograph of couple during marriage', hi: 'विवाह के समय की संयुक्त रंगीन तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 2
      },
      {
        id: 'mar-doc-5',
        name: { en: 'Identity & Residence Proof of Two Adult Witnesses', hi: 'दो वयस्क गवाहों के आधार कार्ड एवं निवास प्रमाण' },
        description: { en: 'Aadhaar or Voter ID of two witnesses who attended the ceremony', hi: 'विवाह में उपस्थित दो वयस्क गवाहों के पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'mar-doc-6',
        name: { en: 'Affidavit of Marital Status and Consent', hi: 'वैवाहिक स्थिति का नोटरी शपथ पत्र' },
        description: { en: 'Notarized affidavits affirming date, place, marital status, and nationality', hi: 'विवाह की तिथि, स्थान और सहमति का नोटरी शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Online Pre-Registration', hi: 'निबंधन पोर्टल पर ऑनलाइन आवेदन' },
        instruction: {
          en: 'Submit preliminary application on registration.uk.gov.in or eservices.uk.gov.in.',
          hi: 'registration.uk.gov.in पर विवाह पंजीकरण का प्राथमिक फॉर्म भरें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select Sub-Registrar Office (SRO)', hi: 'उप-निबंधक कार्यालय चयन' },
        instruction: {
          en: 'Select your Tehsil Sub-Registrar Office (SRO) and upload documents.',
          hi: 'संबंधित तहसील के उप-निबंधक (एसआरओ) कार्यालय का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Pay Statutory Fee & Slot Booking', hi: 'शुल्क भुगतान एवं स्लॉट बुकिंग' },
        instruction: {
          en: 'Pay ₹50/₹100 fee online and book an appointment slot.',
          hi: '₹50/₹100 शुल्क जमा कर उपस्थिति हेतु समय स्लॉट बुक करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Mandatory In-Person Appearance', hi: 'उप-निबंधक के समक्ष अनिवार्य भौतिक उपस्थिति' },
        instruction: {
          en: 'Both spouses and 2 witnesses appear before Sub-Registrar with original documents.',
          hi: 'दंपति एवं दो वयस्क गवाह मूल दस्तावेजों के साथ उप-निबंधक के समक्ष उपस्थित होते हैं।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Certificate Issuance', hi: 'विवाह प्रमाण पत्र जारी होना' },
        instruction: {
          en: 'Sub-Registrar registers the deed and issues stamped, signed Marriage Certificate.',
          hi: 'उप-निबंधक द्वारा विधिक रूप से पंजीकृत प्रमाण पत्र जारी किया जाता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Mandatory physical presence: Both bride and groom along with 2 witnesses must appear before the Sub-Registrar.',
        'Fee is ₹50 if registered within 90 days; increases to ₹100 thereafter.',
        'Essential for visa processing, joint passports, and spousal inheritance.'
      ],
      hi: [
        'अनिवार्य भौतिक उपस्थिति: वर-वधू तथा दोनों गवाहों का उप-निबंधक के समक्ष उपस्थित होना अनिवार्य है।',
        'विवाह के 90 दिनों के भीतर शुल्क ₹50 है, उसके बाद ₹100 हो जाता है।',
        'पासपोर्ट, वीजा और पति/पत्नी के उत्तराधिकार हेतु विधिक दस्तावेज।'
      ]
    }
  },
  {
    id: 'parivar-register-copy',
    iconName: 'Scroll',
    code: 'UK-PAN-PRV',
    category: 'civil_registration',
    serviceType: 'registration',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'pending',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'Parivar Register Copy (Kutumb Register)',
      hi: 'परिवार रजिस्टर की नकल (कुटुम्ब रजिस्टर)'
    },
    department: {
      en: 'Panchayati Raj Department (पंचायती राज विभाग)',
      hi: 'पंचायती राज विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Certified excerpt of Form-2 Kutumb Register from Gram Vikas Adhikari (VDO), documenting family members and lineage.',
      hi: 'ग्राम विकास अधिकारी (VDO) द्वारा संधारित प्रारूप-2 कुटुम्ब रजिस्टर की प्रमाणित नकल।'
    },
    fullDesc: {
      en: 'The Parivar Register (Kutumb Register Form 2) is the primary rural demographic record maintained in each Gram Panchayat. Certified copies are issued by the Gram Vikas Adhikari (VDO) / Panchayat Secretary and are required as supporting evidence for Income, Caste, and Domicile certificates.',
      hi: 'परिवार रजिस्टर (कुटुम्ब रजिस्टर प्रारूप 2) प्रत्येक ग्राम पंचायत में संधारित किया जाने वाला मूल ग्रामीण अभिलेख है। इसकी प्रमाणित नकल ग्राम विकास अधिकारी (VDO) द्वारा जारी की जाती है और यह आय, जाति तथा मूल निवास हेतु आवश्यक साक्ष्य है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Delivery within 7 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 7 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: 'PENDING VERIFICATION: Typically ₹10–₹20 or free per Gram Sabha resolution',
      hi: 'सत्यापन प्रक्रियाधीन: स्थानीय ग्राम सभा प्रस्ताव के अनुसार नाममात्र ₹10-₹20 अथवा निःशुल्क'
    },
    eligibility: {
      en: [
        'Resident of rural Gram Panchayat in Uttarakhand.',
        'Member of family registered in the village Kutumb Register.'
      ],
      hi: [
        'उत्तराखंड के किसी ग्रामीण ग्राम पंचायत का निवासी।',
        'संबंधित ग्राम सभा के कुटुम्ब रजिस्टर में परिवार का नाम दर्ज हो।'
      ]
    },
    documents: [
      {
        id: 'prv-doc-1',
        name: { en: 'Applicant Aadhaar Card / Photo ID', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Government photo identity proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'prv-doc-2',
        name: { en: 'Application Mentioning Head of Family & Ward', hi: 'परिवार के मुखिया का नाम एवं वार्ड संख्या युक्त प्रार्थना पत्र' },
        description: { en: 'Details to locate page in physical register', hi: 'रजिस्टर में प्रविष्टि खोजने हेतु विवरण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'prv-doc-3',
        name: { en: 'Old Parivar Register Slip / Ration Card (Optional)', hi: 'पुरानी परिवार नकल / राशन कार्ड प्रति (वैकल्पिक)' },
        description: { en: 'Helps trace register volume', hi: 'रजिस्टर वॉल्यूम खोजने में सहायक' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply Online or In-Person', hi: 'ऑनलाइन अथवा ऑफलाइन आवेदन' },
        instruction: {
          en: 'Apply on eservices.uk.gov.in or directly submit to Gram Vikas Adhikari (VDO).',
          hi: 'eservices.uk.gov.in पर अथवा सीधे ग्राम विकास अधिकारी (VDO) को प्रार्थना पत्र दें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select District, Block & Gram Panchayat', hi: 'जनपद, ब्लॉक एवं ग्राम पंचायत का चयन' },
        instruction: {
          en: 'Map request to local Panchayat Secretary.',
          hi: 'संबंधित ग्राम पंचायत का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Register Inspection by VDO', hi: 'वीडीओ द्वारा रजिस्टर की जांच' },
        instruction: {
          en: 'VDO checks physical Form-2 Kutumb Register.',
          hi: 'ग्राम विकास अधिकारी भौतिक प्रारूप-2 कुटुम्ब रजिस्टर का मिलान करते हैं।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Issue of Stamped Certified Copy', hi: 'मुहर युक्त प्रमाणित नकल जारी' },
        instruction: {
          en: 'VDO issues signed, stamped official excerpt within 7 working days.',
          hi: '7 कार्य दिवसों में हस्ताक्षरित एवं प्रमाणित नकल प्राप्त करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Urban areas (Nagar Palika/Nigam) do not maintain Form 2; municipal house tax receipts or voter list excerpts are used instead.',
        'Fee varies across Gram Panchayats based on local Gram Sabha resolutions (Pending Verification).',
        'Any citizen can request additions/deletions of family members during designated Gram Sabha sessions.'
      ],
      hi: [
        'शहरी क्षेत्रों (नगर पालिका/निगम) में प्रारूप-2 लागू नहीं होता; वहां भवन कर रसीद या मतदाता सूची मान्य होती है।',
        'शुल्क विभिन्न ग्राम पंचायतों में स्थानीय प्रस्तावों पर निर्भर करता है (सत्यापन प्रक्रियाधीन)।',
        'खुली ग्राम सभा बैठक में नाम जोड़ने या हटाने हेतु आवेदन किया जा सकता है।'
      ]
    }
  },

  // ==========================================
  // 3. SOCIAL WELFARE (social_welfare)
  // ==========================================
  {
    id: 'old-age-pension',
    iconName: 'HandHeart',
    code: 'UK-WEL-OAP',
    category: 'social_welfare',
    serviceType: 'scheme',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://ssp.uk.gov.in',
    officialPortalName: {
      en: 'Uttarakhand Social Security Pension Portal (SSP)',
      hi: 'उत्तराखंड सामाजिक सुरक्षा पोर्टल (SSP)'
    },
    title: {
      en: 'Old Age Pension Scheme',
      hi: 'वृद्धावस्था पेंशन योजना'
    },
    department: {
      en: 'Social Welfare Department (समाज कल्याण विभाग)',
      hi: 'समाज कल्याण विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Monthly social security financial assistance of ₹1,500/month disbursed via DBT to elderly citizens aged 60 and above living below poverty line.',
      hi: '60 वर्ष या उससे अधिक आयु के बीपीएल अथवा पात्र वृद्ध नागरिकों को प्रतिमाह ₹1,500 की दर से प्रदान की जाने वाली सामाजिक सुरक्षा पेंशन।'
    },
    fullDesc: {
      en: 'The Old Age Pension Scheme provides monthly social security financial support of ₹1,500 directly into the bank accounts of senior citizens aged 60 and above residing in Uttarakhand, whose families fall below poverty line or satisfy income limits.',
      hi: 'वृद्धावस्था पेंशन योजना के तहत उत्तराखंड के 60 वर्ष या उससे अधिक आयु के वृद्ध नागरिकों को ₹1,500 प्रतिमाह की आर्थिक सहायता सीधे उनके आधार से जुड़े बैंक खाते में अंतरित की जाती है।'
    },
    estimatedDays: 45,
    rtsGuarantee: {
      en: 'Sanction within 30 to 45 working days following field inquiry',
      hi: 'स्थलीय सत्यापन के उपरांत 30 से 45 कार्य दिवसों में पेंशन स्वीकृति'
    },
    officialFee: {
      en: 'Free of cost (No application fee)',
      hi: 'निःशुल्क (कोई सरकारी आवेदन शुल्क नहीं)'
    },
    eligibility: {
      en: [
        'Applicant must be 60 years of age or older.',
        'Permanent resident of Uttarakhand holding valid domicile.',
        'Family must be Below Poverty Line (BPL) or monthly family income not exceeding ₹4,000 per month.',
        'Applicant must not be receiving any other government pension.'
      ],
      hi: [
        'आवेदक की आयु 60 वर्ष या उससे अधिक हो।',
        'उत्तराखंड का स्थायी निवासी हो।',
        'बीपीएल सूची में दर्ज हो अथवा मासिक पारिवारिक आय ₹4,000 से अधिक न हो।',
        'किसी अन्य सरकारी पेंशन योजना का लाभार्थी न हो।'
      ]
    },
    documents: [
      {
        id: 'oap-doc-1',
        name: { en: 'Age Proof (10th Certificate / Voter ID / CMO Age Certificate)', hi: 'आयु प्रमाण पत्र (10वीं प्रमाण पत्र / वोटर आईडी / सीएमओ आयु प्रमाण पत्र)' },
        description: { en: 'Verifies applicant is 60 years or above', hi: '60 वर्ष या अधिक आयु का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'oap-doc-2',
        name: { en: 'Aadhaar Card (Aadhaar Seeded)', hi: 'आधार कार्ड' },
        description: { en: 'Mandatory for Direct Benefit Transfer (DBT)', hi: 'डीबीटी भुगतान हेतु अनिवार्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'oap-doc-3',
        name: { en: 'BPL Ration Card / Tehsildar Income Certificate', hi: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र' },
        description: { en: 'Income eligibility verification', hi: 'पारिवारिक आय सीमा का सत्यापन' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'oap-doc-4',
        name: { en: 'Parivar Register Copy (Form 2)', hi: 'परिवार रजिस्टर की नकल' },
        description: { en: 'Excerpt from Gram Panchayat proving family composition', hi: 'ग्राम पंचायत से परिवार रजिस्टर नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'oap-doc-5',
        name: { en: 'Bank Passbook Copy (DBT Enabled)', hi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)' },
        description: { en: 'Core banking passbook showing Account Number and IFSC', hi: 'बैंक खाता संख्या और आईएफएससी कोड' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'oap-doc-6',
        name: { en: 'Recent Passport Size Photograph', hi: 'नवीनतम पासपोर्ट साइज फोटो' },
        description: { en: 'Clear color photograph', hi: 'रंगीन पासपोर्ट फोटो' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on Social Security Portal (SSP)', hi: 'सामाजिक सुरक्षा पोर्टल (SSP) पर आवेदन' },
        instruction: {
          en: 'Visit ssp.uk.gov.in and click Old Age Pension application.',
          hi: 'ssp.uk.gov.in पर जाकर वृद्धावस्था पेंशन का चयन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Fill Personal & Banking Details', hi: 'व्यक्तिगत एवं बैंक विवरण भरें' },
        instruction: {
          en: 'Enter Aadhaar, age details, bank IFSC, and BPL/income details.',
          hi: 'आधार संख्या, आयु साक्ष्य, बैंक खाता, आईएफएससी और बीपीएल विवरण भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Scanned Documents', hi: 'दस्तावेज अपलोड करें' },
        instruction: {
          en: 'Upload age proof, income certificate, Parivar register, and bank passbook.',
          hi: 'आयु प्रमाण, आय प्रमाण पत्र, परिवार रजिस्टर नकल और पासबुक अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Physical Verification by ADO Welfare', hi: 'सहायक विकास अधिकारी (कल्याण) द्वारा सत्यापन' },
        instruction: {
          en: 'Assistant Development Officer (Welfare) or VDO verifies applicant on ground.',
          hi: 'एडीओ समाज कल्याण द्वारा स्थलीय सत्यापन किया जाता है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'DSWO Approval & Monthly DBT Credit', hi: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति' },
        instruction: {
          en: 'District Social Welfare Officer sanctions pension and ₹1,500/month is transferred via DBT.',
          hi: 'स्वीकृति के उपरांत प्रतिमाह ₹1,500 डीबीटी के माध्यम से सीधे खाते में भेजे जाते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Pension is ₹1,500 per month credited directly to the Aadhaar-seeded bank account.',
        'Annual digital life certificate (Jeevan Pramaan) or biometric authentication is required to maintain continuity.',
        'Applicants must have no sons in regular government service.'
      ],
      hi: [
        'पेंशन की दर ₹1,500 प्रतिमाह है जो सीधे आधार लिंक बैंक खाते में भेजी जाती है।',
        'पेंशन निरंतर रखने हेतु प्रतिवर्ष डिजिटल जीवन प्रमाण पत्र प्रस्तुत करना आवश्यक है।',
        'यदि पुत्र नियमित सरकारी सेवा में है तो सामान्यतः पात्रता नहीं होती।'
      ]
    }
  },
  {
    id: 'widow-pension',
    iconName: 'HandHeart',
    code: 'UK-WEL-WDP',
    category: 'social_welfare',
    serviceType: 'scheme',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://ssp.uk.gov.in',
    officialPortalName: {
      en: 'Uttarakhand Social Security Pension Portal (SSP)',
      hi: 'उत्तराखंड सामाजिक सुरक्षा पोर्टल (SSP)'
    },
    title: {
      en: 'Widow / Destitute Woman Pension',
      hi: 'विधवा / निराश्रित महिला पेंशन योजना'
    },
    department: {
      en: 'Social Welfare Department (समाज कल्याण विभाग)',
      hi: 'समाज कल्याण विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Monthly financial assistance of ₹1,500/month disbursed via DBT to destitute widows and abandoned women aged 18 and above.',
      hi: '18 वर्ष या उससे अधिक आयु की निराश्रित विधवा महिलाओं को आर्थिक संबल प्रदान करने हेतु ₹1,500 प्रतिमाह की पेंशन।'
    },
    fullDesc: {
      en: 'The Widow Pension Scheme provides monthly social pension of ₹1,500/month granted to destitute widows and destitute women above 18 years residing in Uttarakhand to ensure livelihood security.',
      hi: 'निराश्रित महिला (विधवा) पेंशन योजना के अंतर्गत उत्तराखंड की 18 वर्ष से अधिक आयु की विधवा एवं परित्यक्ता महिलाओं को ₹1,500 प्रतिमाह की सहायता प्रदान की जाती है।'
    },
    estimatedDays: 45,
    rtsGuarantee: {
      en: 'Sanction within 30 to 45 working days following field inquiry',
      hi: 'स्थलीय सत्यापन के उपरांत 30 से 45 कार्य दिवसों में पेंशन स्वीकृति'
    },
    officialFee: {
      en: 'Free of cost (No application fee)',
      hi: 'निःशुल्क (कोई आवेदन शुल्क नहीं)'
    },
    eligibility: {
      en: [
        'Widowed woman aged 18 years or above.',
        'Permanent resident of Uttarakhand holding valid domicile.',
        'Living below poverty line (BPL) or family income within state limits.',
        'Has not remarried and not receiving other government pensions.'
      ],
      hi: [
        '18 वर्ष या अधिक आयु की विधवा अथवा निराश्रित महिला।',
        'उत्तराखंड की स्थायी निवासी हो।',
        'बीपीएल परिवार से हो अथवा मासिक पारिवारिक आय सरकारी सीमा में हो।',
        'पुनर्विवाह न किया हो एवं किसी अन्य पेंशन की लाभार्थी न हो।'
      ]
    },
    documents: [
      {
        id: 'wdp-doc-1',
        name: { en: 'Death Certificate of Husband', hi: 'पति का मृत्यु प्रमाण पत्र' },
        description: { en: 'Statutory death certificate issued by Registrar', hi: 'रजिस्ट्रार द्वारा जारी पति का मृत्यु प्रमाण पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'wdp-doc-2',
        name: { en: 'Applicant Aadhaar Card', hi: 'आवेदिका का आधार कार्ड' },
        description: { en: 'Identity and address proof', hi: 'पहचान एवं निवास प्रमाण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'wdp-doc-3',
        name: { en: 'Parivar Register Copy (Form 2)', hi: 'परिवार रजिस्टर की नकल' },
        description: { en: 'Reflects widowhood status in family register', hi: 'परिवार रजिस्टर में विधवा दर्ज होने का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'wdp-doc-4',
        name: { en: 'BPL Card / Tehsildar Income Certificate', hi: 'बीपीएल राशन कार्ड अथवा आय प्रमाण पत्र' },
        description: { en: 'Economic eligibility proof', hi: 'आर्थिक पात्रता का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'wdp-doc-5',
        name: { en: 'Bank Passbook (Aadhaar Seeded)', hi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)' },
        description: { en: 'Bank account in applicant name', hi: 'आवेदिका के नाम बैंक खाता' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'wdp-doc-6',
        name: { en: 'Non-Remarriage Affidavit', hi: 'पुनर्विवाह न करने का शपथ पत्र' },
        description: { en: 'Affidavit declaring applicant has not remarried', hi: 'पुनर्विवाह न करने का नोटरी शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on SSP Portal', hi: 'एसएसपी पोर्टल पर आवेदन' },
        instruction: {
          en: 'Visit ssp.uk.gov.in and select Widow Pension Scheme.',
          hi: 'ssp.uk.gov.in पर विधवा पेंशन योजना का चयन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Enter Husband Details & Upload Death Proof', hi: 'पति का विवरण एवं मृत्यु प्रमाण पत्र अपलोड' },
        instruction: {
          en: "Input husband's name, date of death, and attach death certificate.",
          hi: 'पति का नाम, मृत्यु तिथि और मृत्यु प्रमाण पत्र संलग्न करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Submit Bank and Family Details', hi: 'बैंक एवं पारिवारिक विवरण भरें' },
        instruction: {
          en: 'Provide Aadhaar-linked bank details and Parivar register copy.',
          hi: 'आधार लिंक बैंक खाता और परिवार रजिस्टर नकल प्रस्तुत करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Verification by Welfare Officer', hi: 'कल्याण अधिकारी द्वारा सत्यापन' },
        instruction: {
          en: 'Block ADO Welfare conducts local verification.',
          hi: 'ब्लॉक समाज कल्याण अधिकारी द्वारा स्थलीय जांच की जाती है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Sanction by DSWO & DBT Credit', hi: 'स्वीकृति एवं मासिक डीबीटी अंतरण' },
        instruction: {
          en: 'Sanctioned amount of ₹1,500/month credited electronically.',
          hi: 'स्वीकृति के बाद प्रतिमाह ₹1,500 सीधे बैंक खाते में प्रेषित किए जाते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Pension is ₹1,500 per month credited directly via DBT.',
        'Applicant must submit an annual declaration affirming non-remarriage.',
        'Widows of any age above 18 are eligible if criteria are met.'
      ],
      hi: [
        'पेंशन की दर ₹1,500 प्रतिमाह है जो डीबीटी से सीधे खाते में भेजी जाती है।',
        'प्रतिवर्ष पुनर्विवाह न करने का स्व-घोषणा पत्र देना होता है।',
        '18 वर्ष से अधिक आयु की सभी पात्र विधवा महिलाएं आवेदन कर सकती हैं।'
      ]
    }
  },
  {
    id: 'disability-pension',
    iconName: 'HandHeart',
    code: 'UK-WEL-DSP',
    category: 'social_welfare',
    serviceType: 'scheme',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://ssp.uk.gov.in',
    officialPortalName: {
      en: 'Uttarakhand Social Security Pension Portal (SSP)',
      hi: 'उत्तराखंड सामाजिक सुरक्षा पोर्टल (SSP)'
    },
    title: {
      en: 'Disability Pension Scheme',
      hi: 'दिव्यांग पेंशन योजना'
    },
    department: {
      en: 'Social Welfare Department (समाज कल्याण विभाग)',
      hi: 'समाज कल्याण विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Monthly social pension of ₹1,500/month disbursed via DBT to persons with benchmark disabilities of 40% or more residing in Uttarakhand.',
      hi: '40% या उससे अधिक दिव्यांगता वाले पात्र व्यक्तियों को प्रतिमाह ₹1,500 की दर से प्रदान की जाने वाली दिव्यांग पेंशन।'
    },
    fullDesc: {
      en: 'The Disability Pension Scheme grants monthly financial support of ₹1,500 to persons with benchmark disabilities of 40% or more certified by the Chief Medical Officer (CMO), whose family income falls within state thresholds.',
      hi: 'दिव्यांग पेंशन योजना के अंतर्गत 40% या उससे अधिक दिव्यांगता प्रमाणित पात्र व्यक्तियों को ₹1,500 प्रतिमाह की पेंशन राशि सीधे बैंक खाते में दी जाती है।'
    },
    estimatedDays: 45,
    rtsGuarantee: {
      en: 'Sanction within 30 to 45 working days following field inquiry',
      hi: 'स्थलीय सत्यापन के उपरांत 30 से 45 कार्य दिवसों में पेंशन स्वीकृति'
    },
    officialFee: {
      en: 'Free of cost (No application fee)',
      hi: 'निःशुल्क (कोई आवेदन शुल्क नहीं)'
    },
    eligibility: {
      en: [
        'Permanent resident of Uttarakhand holding valid domicile.',
        'Person with a benchmark disability of 40% or more certified by CMO/Medical Board.',
        'Income within prescribed state threshold or BPL family.',
        'Not receiving any other pension.'
      ],
      hi: [
        'उत्तराखंड का स्थायी निवासी हो।',
        'मुख्य चिकित्सा अधिकारी (सीएमओ) या मेडिकल बोर्ड द्वारा 40% या अधिक दिव्यांगता प्रमाणित हो।',
        'बीपीएल परिवार से हो अथवा वार्षिक आय सरकारी सीमा में हो।',
        'अन्य किसी पेंशन योजना का लाभ न ले रहा हो।'
      ]
    },
    documents: [
      {
        id: 'dsp-doc-1',
        name: { en: 'Disability Certificate / UDID Card (Minimum 40%)', hi: 'दिव्यांगता प्रमाण पत्र / यूडीआईडी कार्ड (न्यूनतम 40%)' },
        description: { en: 'Issued by authorized Chief Medical Officer (CMO)', hi: 'सीएमओ अथवा अधिकृत मेडिकल बोर्ड द्वारा जारी' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dsp-doc-2',
        name: { en: 'Aadhaar Card', hi: 'आधार कार्ड' },
        description: { en: 'Identity and address proof', hi: 'पहचान एवं निवास प्रमाण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dsp-doc-3',
        name: { en: 'Income Certificate / BPL Card', hi: 'आय प्रमाण पत्र / बीपीएल राशन कार्ड' },
        description: { en: 'Income eligibility verification', hi: 'आय पात्रता साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'dsp-doc-4',
        name: { en: 'Parivar Register Copy (Form 2)', hi: 'परिवार रजिस्टर नकल' },
        description: { en: 'Family composition proof', hi: 'परिवार रजिस्टर नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dsp-doc-5',
        name: { en: 'Bank Passbook (Aadhaar Seeded)', hi: 'बैंक पासबुक प्रति (डीबीटी सक्रिय)' },
        description: { en: 'Account details for monthly DBT disbursal', hi: 'डीबीटी हेतु बैंक खाता विवरण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dsp-doc-6',
        name: { en: 'Recent Color Photographs Showing Disability', hi: 'दिव्यांगता दर्शाती रंगीन फोटो' },
        description: { en: 'Passport size photo showing physical condition', hi: 'शारीरिक स्थिति दर्शाती तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on SSP Portal', hi: 'एसएसपी पोर्टल पर आवेदन' },
        instruction: {
          en: 'Visit ssp.uk.gov.in and select Disability Pension Scheme.',
          hi: 'ssp.uk.gov.in पर जाकर दिव्यांग पेंशन योजना चुनें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Input UDID / CMO Certificate Number', hi: 'यूडीआईडी / सीएमओ प्रमाण पत्र संख्या भरें' },
        instruction: {
          en: 'Provide medical certificate reference number and disability percentage.',
          hi: 'दिव्यांगता प्रतिशत (कम से कम 40%) और जारीकर्ता चिकित्सालय का विवरण भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Documents & Bank Details', hi: 'दस्तावेज एवं बैंक विवरण अपलोड' },
        instruction: {
          en: 'Upload CMO certificate, photo, passbook, and income certificate.',
          hi: 'सीएमओ प्रमाण पत्र, फोटो, पासबुक और आय प्रमाण पत्र अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Verification by Welfare Officer', hi: 'कल्याण अधिकारी द्वारा सत्यापन' },
        instruction: {
          en: 'Block social welfare officer verifies paperwork.',
          hi: 'ब्लॉक कल्याण अधिकारी द्वारा पात्रता की जांच की जाती है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'DSWO Sanction & Monthly Credit', hi: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति' },
        instruction: {
          en: 'District Social Welfare Officer sanctions ₹1,500/month via DBT.',
          hi: 'स्वीकृति के बाद प्रतिमाह ₹1,500 डीबीटी से अंतरित किए जाते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Disability percentage must be 40% or above certified by CMO.',
        'Pension is ₹1,500/month disbursed via direct bank transfer.',
        'Applicants holding national UDID card receive expedited verification.'
      ],
      hi: [
        'सीएमओ द्वारा न्यूनतम 40% दिव्यांगता प्रमाणित होना अनिवार्य है।',
        'पेंशन की दर ₹1,500 प्रतिमाह है जो सीधे बैंक खाते में आती है।',
        'राष्ट्रीय यूडीआईडी कार्ड धारकों का सत्यापन त्वरित गति से होता है।'
      ]
    }
  },
  {
    id: 'disability-certificate',
    iconName: 'HeartPulse',
    code: 'UK-HLT-UDID',
    category: 'social_welfare',
    serviceType: 'certificate',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://www.swavlambancard.gov.in',
    officialPortalName: {
      en: 'National UDID Swavlamban Portal',
      hi: 'राष्ट्रीय यूडीआईडी स्वावलंबन पोर्टल'
    },
    title: {
      en: 'Disability Certificate & UDID Card',
      hi: 'दिव्यांगता प्रमाण पत्र एवं यूडीआईडी कार्ड'
    },
    department: {
      en: 'Medical Health & Family Welfare Department & Ministry of Social Justice',
      hi: 'चिकित्सा स्वास्थ्य एवं परिवार कल्याण विभाग एवं सामाजिक न्याय मंत्रालय'
    },
    shortDesc: {
      en: 'National Unique Disability ID (UDID) card and medical certificate issued after assessment by district medical board.',
      hi: 'जिला मेडिकल बोर्ड द्वारा चिकित्सकीय परीक्षण के उपरांत जारी किया जाने वाला राष्ट्रीय यूडीआईडी कार्ड एवं दिव्यांगता प्रमाण पत्र।'
    },
    fullDesc: {
      en: 'The Unique Disability ID (UDID) project issues a single, unified disability identity card and medical certificate nationwide under the Rights of Persons with Disabilities Act 2016. In Uttarakhand, assessments are held at District Hospitals by CMO Medical Boards.',
      hi: 'स्वावलंबन परियोजना के अंतर्गत दिव्यांगजन अधिकार अधिनियम 2016 के तहत राष्ट्रीय यूडीआईडी कार्ड और दिव्यांगता प्रमाण पत्र जारी किया जाता है। उत्तराखंड के जिला अस्पतालों में सीएमओ मेडिकल बोर्ड द्वारा जांच की जाती है।'
    },
    estimatedDays: 30,
    rtsGuarantee: {
      en: 'Assessment and issuance within 15 to 30 days based on CMO medical board schedule',
      hi: 'सीएमओ मेडिकल बोर्ड की निर्धारित तिथियों के अनुसार 15 से 30 दिनों में'
    },
    officialFee: {
      en: 'Free of cost (Medical evaluation is free in government hospitals)',
      hi: 'निःशुल्क (सरकारी अस्पतालों में चिकित्सीय जांच पूरी तरह निःशुल्क है)'
    },
    eligibility: {
      en: [
        'Person residing in Uttarakhand with physical, visual, hearing, neurological, or intellectual impairment.',
        'Seeking certification under Rights of Persons with Disabilities Act 2016.'
      ],
      hi: [
        'उत्तराखंड का निवासी जिसे कोई शारीरिक, दृष्टि, श्रवण, तंत्रिका या बौद्धिक दिव्यांगता हो।',
        'दिव्यांगजन अधिकार अधिनियम 2016 के तहत प्रमाण पत्र हेतु इच्छुक।'
      ]
    },
    documents: [
      {
        id: 'udid-doc-1',
        name: { en: 'Aadhaar Card / Address Proof', hi: 'आधार कार्ड / निवास प्रमाण' },
        description: { en: 'Identity and address proof of Uttarakhand', hi: 'पहचान एवं निवास प्रमाण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'udid-doc-2',
        name: { en: 'Past Medical Records / Hospital Slips', hi: 'पूर्व उपचार पर्चियां / चिकित्सकीय जांच रिपोर्ट' },
        description: { en: 'Hospital diagnosis papers or surgical summary', hi: 'सरकारी अस्पताल के पूर्व उपचार पत्र' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 5
      },
      {
        id: 'udid-doc-3',
        name: { en: 'Recent Color Photographs Showing Disability', hi: 'दिव्यांगता दर्शाती रंगीन फोटो' },
        description: { en: 'Color photos displaying physical handicap', hi: 'शारीरिक स्थिति स्पष्ट दर्शाती रंगीन तस्वीर' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Register on Swavlamban Portal', hi: 'स्वावलंबन पोर्टल पर पंजीकरण' },
        instruction: {
          en: 'Visit swavlambancard.gov.in and click Apply for Disability Certificate.',
          hi: 'swavlambancard.gov.in पर जाकर ऑनलाइन आवेदन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Fill Personal & Disability Details', hi: 'व्यक्तिगत एवं दिव्यांगता विवरण भरें' },
        instruction: {
          en: 'Enter personal info, disability category, and select District Hospital.',
          hi: 'दिव्यांगता का प्रकार चुनें और संबंधित जिला चिकित्सालय का चयन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Medical Board Assessment Date', hi: 'मेडिकल बोर्ड के समक्ष उपस्थिति' },
        instruction: {
          en: 'Appear before the CMO Medical Board at District Hospital on scheduled day.',
          hi: 'निर्धारित तिथि पर जिला अस्पताल में सीएमओ मेडिकल बोर्ड के समक्ष उपस्थित हों।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Clinical Evaluation by Specialists', hi: 'विशेषज्ञ चिकित्सकों द्वारा परीक्षण' },
        instruction: {
          en: 'Specialist doctors evaluate condition and assign percentage.',
          hi: 'विशेषज्ञ डॉक्टरों द्वारा चिकित्सकीय जांच कर दिव्यांगता प्रतिशत तय किया जाता है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Download Certificate & Receive UDID Card', hi: 'प्रमाण पत्र डाउनलोड एवं यूडीआईडी कार्ड प्राप्ति' },
        instruction: {
          en: 'Download e-Certificate online; laminated UDID card dispatched by post.',
          hi: 'डिजिटल प्रमाण पत्र डाउनलोड करें और यूडीआईडी कार्ड डाक से प्राप्त करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'UDID is accepted across India for railway concessions, bus travel, and reservations.',
        'Permanent cards are issued for non-progressive conditions; temporary cards for conditions requiring review.',
        'Medical board evaluation is conducted free of charge at all District Hospitals.'
      ],
      hi: [
        'यूडीआईडी कार्ड रेलवे रियायत, बस पास और आरक्षण हेतु पूरे भारत में मान्य है।',
        'अपरिवर्तनीय स्थितियों में स्थायी कार्ड तथा समीक्षा योग्य स्थितियों में अस्थायी कार्ड दिया जाता है।',
        'जिला अस्पतालों में मेडिकल बोर्ड की जांच पूर्णतः निःशुल्क होती है।'
      ]
    }
  },

  // ==========================================
  // 4. STUDENT SERVICES (student_services)
  // ==========================================
  {
    id: 'scholarship-guidance',
    iconName: 'GraduationCap',
    code: 'UK-EDU-SCH',
    category: 'student_services',
    serviceType: 'guidance',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://scholarships.gov.in',
    officialPortalName: {
      en: 'National Scholarship Portal (NSP)',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)'
    },
    title: {
      en: 'Scholarship Application Guidance (Pre & Post Matric)',
      hi: 'उत्तराखंड छात्रवृत्ति आवेदन मार्गदर्शन (प्री एवं पोस्ट मैट्रिक)'
    },
    department: {
      en: 'Social Welfare, Tribal Welfare & Minorities Welfare',
      hi: 'समाज कल्याण, जनजाति कल्याण एवं अल्पसंख्यक कल्याण विभाग'
    },
    shortDesc: {
      en: 'Guidance for state students applying for Post-Matric & Pre-Matric scholarships for SC, ST, OBC, EBC, and minority students through NSP.',
      hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) एवं राज्य पोर्टल के माध्यम से एससी, एसटी, ओबीसी एवं ईबीसी छात्रों हेतु छात्रवृत्ति आवेदन प्रक्रिया।'
    },
    fullDesc: {
      en: 'Guidance for Uttarakhand domicile students applying for Pre-Matric and Post-Matric scholarships on the National Scholarship Portal (scholarships.gov.in) and State Welfare portal. Covers fee reimbursement and maintenance allowance for SC, ST, OBC, and EBC students enrolled in recognized educational institutions.',
      hi: 'उत्तराखंड के मूल निवासी छात्रों हेतु राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) और राज्य समाज कल्याण पोर्टल पर प्री एवं पोस्ट मैट्रिक छात्रवृत्ति, शिक्षण शुल्क प्रतिपूर्ति और मासिक भत्ते हेतु विस्तृत मार्गदर्शन।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Institute verification within 15 days of online submission per NSP cycle',
      hi: 'एनएसपी चक्र के अनुसार ऑनलाइन आवेदन के 15 दिनों के भीतर संस्थान स्तर पर सत्यापन'
    },
    officialFee: {
      en: 'Free of cost (No portal fees on NSP or State portal)',
      hi: 'निःशुल्क (एनएसपी अथवा राज्य पोर्टल पर कोई आवेदन शुल्क नहीं)'
    },
    eligibility: {
      en: [
        'Bonafide student holding permanent domicile of Uttarakhand.',
        'Enrolled in recognized school, college, polytechnic, or university.',
        'Family income within specified category limits (up to ₹2.5 Lakh for SC/ST, up to ₹1.5–₹2.5 Lakh for OBC/EBC).',
        'Passed previous qualifying examination.'
      ],
      hi: [
        'उत्तराखंड का मूल/स्थायी निवासी छात्र।',
        'मान्यता प्राप्त विद्यालय, महाविद्यालय या विश्वविद्यालय में नियमित रूप से अध्ययनरत।',
        'पारिवारिक आय निर्धारित सीमा में हो (एससी/एसटी हेतु ₹2.5 लाख तक, ओबीसी हेतु ₹1.5–₹2.5 लाख तक)।',
        'पिछली कक्षा उत्तीर्ण की हो।'
      ]
    },
    documents: [
      {
        id: 'sch-doc-1',
        name: { en: 'Bonafide Student Certificate / College Fee Receipt', hi: 'संस्थान का बोनाफाइड प्रमाण पत्र / शुल्क रसीद' },
        description: { en: 'Proof of active enrollment in recognized institution', hi: 'मान्यता प्राप्त संस्थान में प्रवेश का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sch-doc-2',
        name: { en: 'Previous Year Marksheet', hi: 'गत वर्ष की अंकतालिका' },
        description: { en: 'Attested marksheet of previous class/semester', hi: 'पिछली कक्षा/सेमेस्टर की प्रमाणित अंकतालिका' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sch-doc-3',
        name: { en: 'Valid Tehsildar Income Certificate (Current Financial Year)', hi: 'तहसीलदार द्वारा जारी वैध आय प्रमाण पत्र' },
        description: { en: 'Current year income certificate matching NSP criteria', hi: 'चालू वित्तीय वर्ष का वैध आय प्रमाण पत्र' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'sch-doc-4',
        name: { en: 'Uttarakhand Domicile Certificate', hi: 'उत्तराखंड मूल निवास प्रमाण पत्र' },
        description: { en: 'State domicile proof', hi: 'स्थायी निवास का विधिक साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'sch-doc-5',
        name: { en: 'Caste Certificate (For SC/ST/OBC)', hi: 'जाति प्रमाण पत्र (एससी/एसटी/ओबीसी हेतु)' },
        description: { en: 'Category verification', hi: 'आरक्षित श्रेणी का प्रमाण पत्र' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      },
      {
        id: 'sch-doc-6',
        name: { en: 'Aadhaar Card and Student Bank Passbook (DBT Enabled)', hi: 'छात्र का आधार कार्ड एवं बैंक पासबुक (डीबीटी सक्रिय)' },
        description: { en: 'Account in student name with Aadhaar linkage', hi: 'छात्र के नाम आधार लिंक बैंक खाता' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Register on National Scholarship Portal (NSP)', hi: 'राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर वन-टाइम पंजीकरण' },
        instruction: {
          en: 'Visit scholarships.gov.in and complete One-Time Registration (OTR).',
          hi: 'scholarships.gov.in पर जाकर ओटीआर पूरा करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select Uttarakhand State Scheme', hi: 'उत्तराखंड राज्य छात्रवृत्ति योजना का चयन' },
        instruction: {
          en: 'Choose Pre-Matric or Post-Matric scheme matching your category.',
          hi: 'अपने वर्ग के अनुसार प्री-मैट्रिक या पोस्ट-मैट्रिक योजना चुनें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Documents & Submit Online', hi: 'दस्तावेज अपलोड एवं ऑनलाइन सबमिट' },
        instruction: {
          en: 'Upload marksheet, income certificate, caste certificate, and college receipt.',
          hi: 'अंकतालिका, आय प्रमाण पत्र, जाति प्रमाण पत्र और कॉलेज रसीद अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Institute Level Verification', hi: 'शिक्षण संस्थान स्तर पर सत्यापन' },
        instruction: {
          en: 'College Scholarship Nodal Officer verifies enrollment within 15 days.',
          hi: 'कॉलेज नोडल अधिकारी द्वारा 15 दिन के भीतर प्रवेश का सत्यापन किया जाता है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'DSWO Sanction & DBT Disbursal', hi: 'जिला समाज कल्याण अधिकारी द्वारा स्वीकृति' },
        instruction: {
          en: 'District Social Welfare Officer sanctions scholarship for DBT transfer.',
          hi: 'सत्यापन के उपरांत छात्रवृत्ति सीधे बैंक खाते में भेजी जाती है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Bank account must be in the student’s own name and seeded with Aadhaar on NPCI mapper.',
        'Income certificate must be of the current financial year issued by Tehsildar.',
        'Hard copy of application with original fee receipts must be deposited with college nodal officer.'
      ],
      hi: [
        'बैंक खाता छात्र के स्वयं के नाम होना चाहिए तथा एनपीसीआई मैपर पर आधार से लिंक होना अनिवार्य है।',
        'आय प्रमाण पत्र चालू वित्तीय वर्ष का और तहसीलदार द्वारा जारी होना चाहिए।',
        'आवेदन की हार्ड कॉपी मूल शुल्क रसीद के साथ कॉलेज नोडल अधिकारी के पास जमा करनी होती है।'
      ]
    }
  },
  {
    id: 'income-scholarship-guidance',
    iconName: 'CreditCard',
    code: 'UK-EDU-INC',
    category: 'student_services',
    serviceType: 'guidance',
    applicationMode: 'apuni_sarkar_online',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://eservices.uk.gov.in',
    officialPortalName: {
      en: 'Apuni Sarkar e-Services Portal',
      hi: 'अपुणी सरकार ई-सेवा पोर्टल'
    },
    title: {
      en: 'Income Certificate for Scholarship Purposes',
      hi: 'छात्रवृत्ति प्रयोजन हेतु आय प्रमाण पत्र मार्गदर्शन'
    },
    department: {
      en: 'Revenue Department & Social Welfare Department',
      hi: 'राजस्व विभाग एवं समाज कल्याण विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Specific instructions on obtaining and validating income certificates tailored to student scholarship portals (NSP & State portal).',
      hi: 'छात्रवृत्ति पोर्टलों के सख्त मानकों के अनुरूप माता-पिता की वार्षिक आय का तहसीलदार प्रमाण पत्र प्राप्त करने की मार्गदर्शिका।'
    },
    fullDesc: {
      en: 'Comprehensive procedure to obtain an Income Certificate explicitly formatted for scholarship portals. Explains parent name alignment, inclusion of student enrollment details, and strict validity period requirements enforced by central and state scholarship verification authorities.',
      hi: 'छात्रवृत्ति पोर्टलों हेतु निर्धारित मानकों के अनुरूप आय प्रमाण पत्र प्राप्त करने की प्रक्रिया। इसमें माता-पिता के नाम का मिलान, छात्र के अध्ययनरत होने का विवरण तथा एनएसपी द्वारा निर्धारित समय-सीमा के नियम सम्मिलित हैं।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand Right to Service (RTS) Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत 15 कार्य दिवसों में सेवा उपलब्ध'
    },
    officialFee: {
      en: '₹30 (Portal direct) / ₹50 (CSC user fee)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल शुल्क ₹30 / सीएससी शुल्क ₹50'
    },
    eligibility: {
      en: [
        'Student or parent/guardian applying on behalf of a student.',
        'Resident of Uttarakhand.',
        'Must declare total household earnings of parents from all sources.'
      ],
      hi: [
        'अध्ययनरत छात्र अथवा उसके माता-पिता/अभिभावक।',
        'उत्तराखंड का निवासी।',
        'परिवार के सभी स्रोतों से अर्जित कुल वार्षिक आय का वैध विवरण।'
      ]
    },
    documents: [
      {
        id: 'sci-doc-1',
        name: { en: 'Student College ID / Admission Slip', hi: 'छात्र का कॉलेज पहचान पत्र / प्रवेश पर्ची' },
        description: { en: 'Confirms educational requirement for scholarship', hi: 'शिक्षा एवं छात्रवृत्ति प्रयोजन का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sci-doc-2',
        name: { en: "Father / Mother & Student Aadhaar Card", hi: 'माता-पिता एवं छात्र का आधार कार्ड' },
        description: { en: 'Government photo identification proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sci-doc-3',
        name: { en: 'Parivar Register Copy (Form 2)', hi: 'परिवार रजिस्टर की नकल' },
        description: { en: "Confirms student's relation with earning parent", hi: 'छात्र और अभिभावक के संबंध का सत्यापन' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sci-doc-4',
        name: { en: 'Income Affidavit Explicitly for Scholarship', hi: 'छात्रवृत्ति प्रयोजन हेतु आय शपथ पत्र' },
        description: { en: 'Notarized affidavit declaring family income for education', hi: 'छात्रवृत्ति हेतु नोटरी शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'sci-doc-5',
        name: { en: 'Recent Photographs of Student & Parent', hi: 'छात्र एवं अभिभावक की नवीनतम फोटो' },
        description: { en: 'Color photographs', hi: 'रंगीन तस्वीरें' },
        required: true,
        acceptedFormats: ['JPG', 'PNG'],
        maxSizeMB: 1
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Apply on Apuni Sarkar Portal', hi: 'अपुणी सरकार पोर्टल पर आवेदन' },
        instruction: {
          en: 'Log into eservices.uk.gov.in -> Revenue Department -> Income Certificate.',
          hi: 'eservices.uk.gov.in पर राजस्व विभाग -> आय प्रमाण पत्र चुनें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select "Scholarship / Education" Purpose', hi: 'प्रयोजन में "छात्रवृत्ति / शिक्षा" चुनें' },
        instruction: {
          en: 'Mention scholarship purpose so the appropriate format is generated.',
          hi: 'आवेदन के उद्देश्य में छात्रवृत्ति का उल्लेख करें ताकि उचित प्रारूप में प्रमाण पत्र बने।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload College Proof & Parivar Register', hi: 'कॉलेज आईडी एवं परिवार नकल अपलोड करें' },
        instruction: {
          en: 'Upload college ID, Parivar copy, affidavit, and salary/land proofs.',
          hi: 'कॉलेज पर्ची, परिवार रजिस्टर, शपथ पत्र अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Lekhpal Field Inquiry & Tehsildar Issuance', hi: 'लेखपाल जांच एवं तहसीलदार स्वीकृति' },
        instruction: {
          en: 'Patwari verifies family earnings; Tehsildar approves digital certificate within 15 days.',
          hi: 'लेखपाल जांच के उपरांत 15 कार्य दिवसों में डिजिटल प्रमाण पत्र जारी होता है।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Enter Certificate Number on NSP Portal', hi: 'एनएसपी पोर्टल पर प्रमाण पत्र संख्या दर्ज करें' },
        instruction: {
          en: 'Link issued certificate number on scholarships.gov.in for automatic e-verification.',
          hi: 'छात्रवृत्ति पोर्टल पर प्रमाणपत्र संख्या डालकर ऑनलाइन सत्यापन पूरा करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Always verify that the spellings of student’s and father’s names exactly match between Aadhaar, College ID, and Income Certificate.',
        'Scholarship portals reject income certificates dated in older financial years.',
        'Certificate is digitally signed with official QR code; no physical stamp needed.'
      ],
      hi: [
        'आधार, कॉलेज आईडी और आय प्रमाण पत्र में छात्र व पिता के नाम की स्पेलिंग पूरी तरह समान होनी चाहिए।',
        'छात्रवृत्ति पोर्टल पुराने वित्तीय वर्ष के आय प्रमाण पत्रों को अस्वीकार कर देते हैं।',
        'डिजिटल प्रमाण पत्र पर क्यूआर कोड होता है; अलग से भौतिक मुहर की आवश्यकता नहीं होती।'
      ]
    }
  },

  // ==================================================
  // 5. LAND AND LOCAL ADMINISTRATION (land_administration)
  // ==================================================
  {
    id: 'land-records-khatauni',
    iconName: 'Compass',
    code: 'UK-LND-ROR',
    category: 'land_administration',
    serviceType: 'guidance',
    applicationMode: 'department_portal',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://bhulekh.uk.gov.in',
    officialPortalName: {
      en: 'Devbhoomi Uttarakhand Bhulekh Portal',
      hi: 'देवभूमि उत्तराखंड भूलेख पोर्टल'
    },
    title: {
      en: 'Khatauni / Land Records Information (ROR)',
      hi: 'भूलेख खतौनी / अधिकार अभिलेख (ROR) जानकारी'
    },
    department: {
      en: 'Revenue Council (राजस्व परिषद)',
      hi: 'राजस्व परिषद, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Public online inspection and information regarding land ownership titles, Khasra numbers, land area, and mortgages across all 13 districts.',
      hi: 'देवभूमि भूलेख पोर्टल पर उत्तराखंड के सभी 13 जनपदों की भूमि के स्वामित्व, खसरा संख्या, रकबा और बंधक प्रविष्टियों की ऑनलाइन जानकारी।'
    },
    fullDesc: {
      en: 'The Devbhoomi Uttarakhand Bhulekh portal (bhulekh.uk.gov.in) provides free, transparent public access to computerized Record of Rights (Khatauni / ROR). Citizens can verify landownership titles, co-sharer names, area in Hectares or Nali, and bank mortgage / encumbrance remarks before buying or mortgaging land.',
      hi: 'देवभूमि उत्तराखंड भूलेख पोर्टल (bhulekh.uk.gov.in) नागरिकों को अधिकार अभिलेख (खतौनी/ROR) की पारदर्शी जानकारी निःशुल्क प्रदान करता है। नागरिक भूमि खरीदने या बंधक रखने से पहले खातेदारों के नाम, खसरा नंबर, रकबा और बैंक बंधक प्रविष्टियों की जांच कर सकते हैं।'
    },
    estimatedDays: 1,
    rtsGuarantee: {
      en: 'Instant 24x7 online access via Devbhoomi Bhulekh portal',
      hi: 'देवभूमि भूलेख पोर्टल के माध्यम से 24x7 तत्काल ऑनलाइन पहुंच'
    },
    officialFee: {
      en: 'Free of cost to search and view online',
      hi: 'ऑनलाइन खोजने और देखने हेतु पूर्णतः निःशुल्क'
    },
    eligibility: {
      en: [
        'Open to all citizens, farmers, buyers, and legal heirs.',
        'Requires knowledge of District, Tehsil, and Village (Gram).'
      ],
      hi: [
        'सभी नागरिकों, काश्तकारों, क्रेताओं और वारिसों के लिए खुला सार्वजनिक पोर्टल।',
        'जनपद, तहसील और गांव का नाम ज्ञात होना आवश्यक।'
      ]
    },
    documents: [
      {
        id: 'ror-doc-1',
        name: { en: 'Administrative Location Details (District, Tehsil, Gram)', hi: 'प्रशासनिक स्थिति (जनपद, तहसील, गांव का नाम)' },
        description: { en: 'Location of land parcel in Uttarakhand', hi: 'उत्तराखंड में भूमि की प्रशासनिक स्थिति' },
        required: true,
        acceptedFormats: ['TEXT'],
        tip: { en: 'Know your revenue village name as per official revenue records', hi: 'राजस्व अभिलेखों के अनुसार अपने गांव का नाम ज्ञात रखें' }
      },
      {
        id: 'ror-doc-2',
        name: { en: 'Land Identifier (Khasra No. / Khata No. / Landholder Name)', hi: 'खसरा संख्या / खाता संख्या / खातेदार का नाम' },
        description: { en: 'At least one identifier to locate record in database', hi: 'डेटाबेस में अभिलेख खोजने हेतु कोई एक पहचान' },
        required: true,
        acceptedFormats: ['TEXT']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Visit Devbhoomi Bhulekh Portal', hi: 'देवभूमि भूलेख पोर्टल पर जाएं' },
        instruction: {
          en: 'Go to bhulekh.uk.gov.in on any browser.',
          hi: 'किसी भी ब्राउज़र पर bhulekh.uk.gov.in खोलें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Select District, Tehsil & Village', hi: 'जनपद, तहसील एवं गांव चुनें' },
        instruction: {
          en: 'Click "View Khatauni (ROR)" and select your village from dropdown lists.',
          hi: '"खतौनी की नकल देखें" पर क्लिक कर अपना गांव चुनें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Search by Khasra or Name', hi: 'खसरा संख्या या नाम से खोजें' },
        instruction: {
          en: 'Search using Khasra/Gata number, Khata number, or Hindi landowner name.',
          hi: 'खसरा नंबर, खाता नंबर अथवा काश्तकार के नाम से खोजें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Inspect Land Title & Encumbrances', hi: 'स्वामित्व एवं बंधक प्रविष्टियां देखें' },
        instruction: {
          en: 'Examine area in Hectares/Nali, co-owners, and bank mortgage remarks in Column 7/8.',
          hi: 'हेक्टेयर/नाली में रकबा, सह-खातेदारों के नाम और बैंक बंधक विवरण देखें।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Download / Print Informational Copy', hi: 'विवरण प्रिंट या सुरक्षित करें' },
        instruction: {
          en: 'Save or print copy for personal reference and information.',
          hi: 'अपनी निजी जानकारी हेतु प्रतिलिपि सहेजें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'The online copy on Bhulekh is for informational purposes only.',
        'For court litigation or bank loans, an officially stamped certified copy from the Tehsil Computer Center is required.',
        'Any ongoing bank loan or court stay is recorded in the remarks column.'
      ],
      hi: [
        'भूलेख पर उपलब्ध ऑनलाइन प्रति केवल सूचनात्मक उपयोग के लिए है।',
        'न्यायालय अथवा बैंक ऋण हेतु तहसील कंप्यूटर केंद्र से मुहर युक्त प्रमाणित नकल आवश्यक होती है।',
        'किसी भी बैंक ऋण अथवा अदालती स्थगन का विवरण खतौनी के टिप्पणी कॉलम में दर्ज होता है।'
      ]
    }
  },
  {
    id: 'land-record-copy-guidance',
    iconName: 'FileText',
    code: 'UK-LND-CPY',
    category: 'land_administration',
    serviceType: 'guidance',
    applicationMode: 'hybrid',
    verificationStatus: 'verified',
    officialPortalUrl: 'https://bhulekh.uk.gov.in',
    officialPortalName: {
      en: 'Devbhoomi Uttarakhand Bhulekh Portal',
      hi: 'देवभूमि उत्तराखंड भूलेख पोर्टल'
    },
    title: {
      en: 'Land Record Copy Guidance (Certified Khatauni)',
      hi: 'प्रमाणित खतौनी नकल प्राप्त करने की प्रक्रिया'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Step-by-step guidance on obtaining an officially certified, stamped copy of Khatauni from Tehsil Land Record Computer Center for legal use.',
      hi: 'न्यायालयीय साक्ष्य, बैंक ऋण (केसीसी) और रजिस्ट्री हेतु तहसील कंप्यूटर केंद्र से मुहर युक्त प्रमाणित खतौनी नकल प्राप्त करने की प्रक्रिया।'
    },
    fullDesc: {
      en: 'Guidance on securing a legally certified, stamped excerpt of Khatauni (Record of Rights) from the Tehsil Land Record Computer Center. Certified copies carry official embossed seal and signature of the Registrar Qanungo (RQ) and are legally admissible in civil courts and for Kisan Credit Cards (KCC).',
      hi: 'तहसील भूलेख कंप्यूटर केंद्र से विधिक रूप से प्रमाणित खतौनी नकल प्राप्त करने की प्रक्रिया। प्रमाणित नकल पर रजिस्ट्रार कानूनगो (RQ) के हस्ताक्षर और राजकीय मुहर होती है, जो अदालतों और बैंक ऋणों हेतु विधिक रूप से मान्य होती है।'
    },
    estimatedDays: 3,
    rtsGuarantee: {
      en: 'Delivery within 1 to 3 working days at Tehsil computer center under RTS Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम के तहत तहसील कंप्यूटर केंद्र पर 1 से 3 कार्य दिवसों में'
    },
    officialFee: {
      en: '₹15 for the first page + ₹5 for each subsequent page',
      hi: 'प्रथम पृष्ठ हेतु ₹15 तथा प्रत्येक अतिरिक्त पृष्ठ हेतु ₹5 (सरकारी निर्धारित यूजर चार्ज)'
    },
    eligibility: {
      en: [
        'Landowner, legal heir, authorized representative, or person having legal interest.'
      ],
      hi: [
        'भूमि स्वामी, विधिक वारिस अथवा भूमि में वैधानिक हित रखने वाला कोई भी व्यक्ति।'
      ]
    },
    documents: [
      {
        id: 'cpy-doc-1',
        name: { en: 'Applicant Identity Proof (Aadhaar / Voter ID)', hi: 'आवेदक का पहचान पत्र (आधार / वोटर आईडी)' },
        description: { en: 'Government photo identification proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cpy-doc-2',
        name: { en: 'Land Identification (Village, Tehsil, Khata / Khasra Number)', hi: 'भूमि का विवरण (गांव, तहसील, खाता / खसरा संख्या)' },
        description: { en: 'Written application or Bhulekh printout', hi: 'लिखित प्रार्थना पत्र अथवा भूलेख पर्ची' },
        required: true,
        acceptedFormats: ['TEXT', 'PDF']
      },
      {
        id: 'cpy-doc-3',
        name: { en: 'Proof of Interest (For Court / Bank Requirements)', hi: 'आवश्यकता का साक्ष्य (बैंक / न्यायालय हेतु)' },
        description: { en: 'Bank loan demand letter or court notice if applicable', hi: 'बैंक ऋण पत्र अथवा अदालती नोटिस' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 3
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Locate Parcel on Bhulekh', hi: 'भूलेख पर खाता संख्या जानें' },
        instruction: {
          en: 'Check Khata number on bhulekh.uk.gov.in.',
          hi: 'bhulekh.uk.gov.in से अपना खाता या खसरा नंबर ज्ञात करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Visit Tehsil Land Record Computer Center', hi: 'तहसील भूलेख कंप्यूटर केंद्र पर जाएं' },
        instruction: {
          en: 'Go to the revenue counter at your Tehsil or apply via Apuni Sarkar.',
          hi: 'तहसील के राजस्व काउंटर पर जाएं अथवा अपुणी सरकार पर आवेदन करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Pay Statutory User Charge', hi: 'राजस्व शुल्क जमा करें' },
        instruction: {
          en: 'Pay ₹15 for first page + ₹5 per additional page.',
          hi: 'प्रथम पृष्ठ हेतु ₹15 तथा प्रत्येक अतिरिक्त पृष्ठ हेतु ₹5 जमा करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Stamping by Registrar Qanungo', hi: 'रजिस्ट्रार कानूनगो द्वारा मुहर एवं हस्ताक्षर' },
        instruction: {
          en: 'Operator prints ROR and Registrar Qanungo (RQ) signs and affixes official seal.',
          hi: 'कंप्यूटर ऑपरेटर द्वारा प्रिंट निकालने के बाद रजिस्ट्रार कानूनगो अधिकृत मुहर लगाते हैं।'
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Collect Certified Legal Copy', hi: 'प्रमाणित नकल प्राप्त करें' },
        instruction: {
          en: 'Receive officially stamped copy valid for courts and bank loans.',
          hi: 'न्यायालय, बैंक एवं रजिस्ट्री हेतु मान्य प्रमाणित नकल प्राप्त करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Only certified copies with Registrar Qanungo seal are admissible in judicial proceedings.',
        'Fee is ₹15 for page 1 plus ₹5 per subsequent page as per Revenue Council order.',
        'Applicants can also apply through CSC kiosks enabled with e-District services.'
      ],
      hi: [
        'केवल रजिस्ट्रार कानूनगो की मुहर वाली प्रमाणित नकल ही न्यायिक कार्यवाहियों में ग्राह्य होती है।',
        'राजस्व परिषद के आदेशानुसार शुल्क ₹15 प्रथम पृष्ठ तथा ₹5 प्रति अतिरिक्त पृष्ठ है।',
        'नागरिक सीएससी कियोस्क के माध्यम से भी प्रमाणित प्रति हेतु आवेदन कर सकते हैं।'
      ]
    }
  },
  {
    id: 'panchayati-raj-services',
    iconName: 'Building2',
    code: 'UK-PAN-SRV',
    category: 'land_administration',
    serviceType: 'registration',
    applicationMode: 'offline_in_person',
    verificationStatus: 'pending',
    officialPortalUrl: 'https://panchayat.gov.in',
    officialPortalName: {
      en: 'Ministry of Panchayati Raj / e-Gram Swaraj',
      hi: 'पंचायती राज मंत्रालय / ई-ग्राम स्वराज'
    },
    title: {
      en: 'Panchayati Raj Services (NOC & Village Services)',
      hi: 'पंचायती राज सेवाएं (ग्राम पंचायत अनापत्ति एवं सेवाएं)'
    },
    department: {
      en: 'Panchayati Raj Department (पंचायती राज विभाग)',
      hi: 'पंचायती राज विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Rural citizen governance services including Gram Panchayat No-Objection Certificates (NOC) for electricity/water and construction permissions.',
      hi: 'बिजली/पानी कनेक्शन हेतु अनापत्ति प्रमाण पत्र (NOC), ग्रामीण निर्माण अनुमति और ग्राम सभा स्तर की विभिन्न नागरिक सेवाएं।'
    },
    fullDesc: {
      en: 'Rural governance services administered at the Gram Panchayat level in Uttarakhand. Includes Gram Panchayat No-Objection Certificates (NOC) for UPCL electricity connections, rural drinking water connections, house construction permissions, and certifications presented in Gram Sabha meetings.',
      hi: 'उत्तराखंड में ग्राम पंचायत स्तर पर प्रदान की जाने वाली ग्रामीण नागरिक सेवाएं। इसमें विद्युत कनेक्शन (UPCL), पेयजल कनेक्शन हेतु ग्राम पंचायत अनापत्ति (NOC), ग्रामीण भवन निर्माण अनुमति और ग्राम सभा प्रस्ताव प्रमाणन शामिल हैं।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 7 to 15 working days depending on Gram Sabha meeting schedule',
      hi: 'ग्राम सभा बैठक चक्र के अनुसार 7 से 15 कार्य दिवसों में'
    },
    officialFee: {
      en: 'PENDING VERIFICATION: Typically ₹20–₹50 or free as per individual Gram Sabha resolution',
      hi: 'सत्यापन प्रक्रियाधीन: स्थानीय ग्राम सभा नियमावली के अनुसार ₹20-₹50 अथवा निःशुल्क'
    },
    eligibility: {
      en: [
        'Permanent or residing citizen of the respective Gram Sabha in rural Uttarakhand.',
        'Holding residential occupancy or lawful land holding within Gram Panchayat limits.'
      ],
      hi: [
        'संबंधित ग्रामीण ग्राम सभा का निवासी।',
        'ग्राम पंचायत सीमा के भीतर आवासीय अथवा कृषि भूमि पर वैधानिक दखल रखता हो।'
      ]
    },
    documents: [
      {
        id: 'pan-doc-1',
        name: { en: 'Applicant Aadhaar Card / Voter ID', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Government photo identity proof', hi: 'सरकारी पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pan-doc-2',
        name: { en: 'Parivar Register Copy (Form 2)', hi: 'परिवार रजिस्टर की नकल' },
        description: { en: 'Proof of membership in local Gram Panchayat', hi: 'स्थानीय ग्राम पंचायत में परिवार दर्ज होने का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pan-doc-3',
        name: { en: 'Land / House Possession Proof in Gram Sabha', hi: 'ग्राम सभा में भूमि अथवा मकान पर कब्जे का साक्ष्य' },
        description: { en: 'Khatauni excerpt or ancestral house tax receipt', hi: 'खतौनी अथवा पैतृक मकान की रसीद' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3
      },
      {
        id: 'pan-doc-4',
        name: { en: 'Application Stating Specific NOC Purpose', hi: 'एनओसी के उद्देश्य का प्रार्थना पत्र' },
        description: { en: 'Written application specifying electricity, water, or construction purpose', hi: 'बिजली/पानी अथवा निर्माण के उद्देश्य का प्रार्थना पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'TEXT'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Application to Gram Pradhan / VDO', hi: 'ग्राम प्रधान अथवा वीडीओ को प्रार्थना पत्र' },
        instruction: {
          en: 'Submit written application during Panchayat hours or Gram Sabha meeting.',
          hi: 'पंचायत कार्यालय अथवा खुली बैठक में प्रार्थना पत्र प्रस्तुत करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Field Verification by VDO', hi: 'ग्राम विकास अधिकारी द्वारा स्थलीय जांच' },
        instruction: {
          en: 'Gram Vikas Adhikari checks site to ensure no encroachment on Panchayat land.',
          hi: 'वीडीओ यह जांच करते हैं कि ग्राम सभा की भूमि पर कोई अवैध कब्जा तो नहीं है।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Gram Panchayat Committee Scrutiny', hi: 'ग्राम पंचायत समिति द्वारा विचार' },
        instruction: {
          en: 'Resolution reviewed during monthly Panchayat meeting.',
          hi: 'मासिक पंचायत बैठक में आवेदन पर विचार किया जाता है।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Issuance of Stamped NOC', hi: 'मुहर युक्त अनापत्ति प्रमाण पत्र (NOC) जारी' },
        instruction: {
          en: 'Gram Pradhan and VDO jointly sign and seal the official NOC.',
          hi: 'ग्राम प्रधान एवं ग्राम विकास अधिकारी के संयुक्त हस्ताक्षर से एनओसी जारी की जाती है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'NOC fees are determined by individual Gram Sabha resolutions (Pending Verification).',
        'Joint signatures of both Gram Pradhan and Gram Vikas Adhikari are mandatory for legal validity.',
        'Electricity department (UPCL) requires this NOC before energizing new rural meters.'
      ],
      hi: [
        'एनओसी शुल्क प्रत्येक ग्राम सभा के अपने प्रस्तावों द्वारा निर्धारित होता है (सत्यापन प्रक्रियाधीन)।',
        'विधिक मान्यता हेतु ग्राम प्रधान एवं ग्राम विकास अधिकारी दोनों के संयुक्त हस्ताक्षर अनिवार्य हैं।',
        'ऊर्जा निगम (UPCL) नए ग्रामीण मीटर लगाने से पहले यह एनओसी अनिवार्य रूप से मांगता है।'
      ]
    }
  }
];
