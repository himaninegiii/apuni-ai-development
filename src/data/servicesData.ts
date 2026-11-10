import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'income-certificate',
    iconName: 'CreditCard',
    code: 'UK-REV-INC',
    category: 'revenue',
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
      en: 'Nominal user fee (approx. ₹30–₹50 at CSC/portal as per state notification)',
      hi: 'सरकारी नियम अनुसार सामान्य पोर्टल / सीएससी शुल्क (लगभग ₹30-₹50)'
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
        name: { en: 'Land Holding Record (Khatauni) / Agricultural Income Proof', hi: 'भूमि रिकॉर्ड (खतौनी) या कृषि आय साक्ष्य' },
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
          en: ['Select your District, Tehsil, and Village/Ward', 'Enter family member details and individual earnings', 'Review the declared annual income sum'],
          hi: ['अपना ज़िला, तहसील और ग्राम/वार्ड चुनें', 'परिवार के सदस्यों का विवरण और आय दर्ज करें', 'घोषित कुल वार्षिक आय का मिलान करें']
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Document Uploads & Self-Attestation', hi: 'दस्तावेज़ अपलोड एवं स्व-प्रमाणन' },
        instruction: {
          en: 'Upload scanned copies of required documents (Parivar register copy, affidavit, photo, identity proof) in prescribed formats.',
          hi: 'परिवार रजिस्टर, शपथ पत्र, पहचान पत्र और फोटो के स्कैन निर्धारित प्रारूप में अपलोड करें।'
        },
        caution: {
          en: 'Make sure all files are under the maximum size limit and completely readable to prevent rejection.',
          hi: 'फ़ाइल साइज़ सीमा के भीतर रखें ताकि अस्पष्टता के कारण आवेदन निरस्त न हो।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Fee Payment & Receipt Generation', hi: 'शुल्क भुगतान एवं पावती रसीद' },
        instruction: {
          en: 'Pay the government portal service fee online using UPI, Net Banking, or Debit Card.',
          hi: 'पोर्टल सेवा शुल्क का भुगतान यूपीआई, नेट बैंकिंग या डेबिट कार्ड से करें।'
        },
        substeps: {
          en: ['Download and print the Acknowledgement Receipt (पावती पत्र)', 'Note down the Application Reference Number (UK-REV-XXXX) for status tracking'],
          hi: ['पावती रसीद को डाउनलोड कर सुरक्षित रखें', 'आवेदन संख्या (UK-REV-XXXX) को स्थिति जांच हेतु नोट कर लें']
        }
      },
      {
        stepNumber: 5,
        title: { en: 'Field Verification & Tehsildar Issuance', hi: 'क्षेत्रीय सत्यापन एवं प्रमाण पत्र जारी होना' },
        instruction: {
          en: 'Your application is forwarded to the area Patwari/Lekhpal for field verification. Once verified, the Tehsildar approves and signs digitally.',
          hi: 'आवेदन क्षेत्र के पटवारी/लेखपाल को स्थलीय सत्यापन हेतु भेजा जाता है। रिपोर्ट के उपरांत तहसीलदार द्वारा डिजिटल हस्ताक्षर युक्त प्रमाण पत्र जारी किया जाता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Income Certificates in Uttarakhand are generally valid for 6 months to 1 year depending on the specific scheme requirement.',
        'False declaration of income is a punishable offense under Indian law.',
        'Applicants without internet access can visit their nearest Common Service Center (CSC) or Tehsil e-District Kiosk.'
      ],
      hi: [
        'उत्तराखंड में आय प्रमाण पत्र सामान्यतः 6 माह से 1 वर्ष के लिए मान्य होता है।',
        'आय का गलत विवरण देना विधिक रूप से दंडनीय अपराध है।',
        'इंटरनेट की सुविधा न होने पर नज़दीकी सीएससी केंद्र या तहसील में जाकर आवेदन किया जा सकता है।'
      ]
    }
  },
  {
    id: 'caste-certificate',
    iconName: 'ShieldCheck',
    code: 'UK-REV-CST',
    category: 'revenue',
    title: {
      en: 'Caste Certificate (SC / ST / OBC)',
      hi: 'जाति प्रमाण पत्र (SC / ST / OBC)'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Official certificate authenticating Scheduled Caste, Scheduled Tribe, or Other Backward Class status for reservations and welfare programs.',
      hi: 'अनुसूचित जाति (SC), अनुसूचित जनजाति (ST) या अन्य पिछड़ा वर्ग (OBC) श्रेणी हेतु संवैधानिक लाभ और आरक्षण का प्रमाण।'
    },
    fullDesc: {
      en: 'The Caste Certificate serves as legal proof of an individual belonging to designated SC, ST, or OBC communities in the state of Uttarakhand. It is required for educational quotas, civil services recruitment, educational stipends, and reserved social benefits.',
      hi: 'जाति प्रमाण पत्र उत्तराखंड राज्य की अधिसूचित एससी, एसटी अथवा ओबीसी समुदाय से संबंधित होने का विधिक साक्ष्य है। यह शिक्षण संस्थानों में आरक्षण, सरकारी भर्ती और योजनाओं के लिए आवश्यक है।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand RTS Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) के तहत 15 कार्य दिवस'
    },
    officialFee: {
      en: 'Standard statutory service fee (approx. ₹30–₹50)',
      hi: 'मानक सरकारी सेवा शुल्क (लगभग ₹30-₹50)'
    },
    eligibility: {
      en: [
        'Applicant must belong to an officially notified SC, ST, or OBC community in Uttarakhand.',
        'Must possess ancestral records or paternal lineage proving residence in the state on or before the cutoff date.',
        'For OBC, non-creamy layer criteria apply as per contemporary government guidelines.'
      ],
      hi: [
        'आवेदक उत्तराखंड राज्य द्वारा अधिसूचित अनुसूचित जाति, जनजाति या ओबीसी वर्ग का होना चाहिए।',
        'आवेदक या उसके पूर्वज निर्धारित कट-ऑफ तिथि से उत्तराखंड में स्थायी रूप से निवासरत होने चाहिए।',
        'ओबीसी वर्ग के लिए क्रीमी लेयर से संबंधित आय नियमों का पालन आवश्यक है।'
      ]
    },
    documents: [
      {
        id: 'cst-doc-1',
        name: { en: 'Aadhaar Card / Identification Proof', hi: 'आधार कार्ड या पहचान पत्र' },
        description: { en: 'Copy of applicant Aadhaar or photo Voter ID', hi: 'आवेदक का आधार कार्ड या मतदाता पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-2',
        name: { en: 'Father’s / Ancestral Caste Certificate or Revenue Land Records', hi: 'पिता का जाति प्रमाण पत्र अथवा पुश्तैनी राजस्व अभिलेख' },
        description: { en: 'Father’s certified caste certificate, land records mentioning caste, or school leaving certificate', hi: 'पिता का जाति प्रमाण पत्र, जाति उल्लिखित खतौनी अथवा पूर्वजों का पुराना विद्यालय अभिलेख' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 5,
        tip: { en: 'Paternal lineage document is critical for quick verification', hi: 'पितृ पक्ष के दस्तावेज़ सत्यापन में सबसे महत्वपूर्ण होते हैं' }
      },
      {
        id: 'cst-doc-3',
        name: { en: 'Domicile / Permanent Residence Certificate', hi: 'मूल निवास / स्थायी निवास प्रमाण पत्र' },
        description: { en: 'Uttarakhand Domicile or Proof of continuous residence prior to 1985/notified date', hi: 'उत्तराखंड का स्थायी निवास प्रमाण पत्र या विनिर्दिष्ट वर्ष से निरंतर निवास का साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-4',
        name: { en: 'Family Register (Parivar Register) Excerpt', hi: 'परिवार रजिस्टर की प्रमाणित नकल' },
        description: { en: 'Gram Panchayat or Nagar Nigam family register extract showing family tree', hi: 'ग्राम पंचायत या नगर निकाय के परिवार रजिस्टर की नकल' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'cst-doc-5',
        name: { en: 'Self-Declaration / Affidavit for Caste & Lineage', hi: 'जाति व वंश संबंधी शपथ पत्र' },
        description: { en: 'Affidavit affirming caste denomination and truth of supporting records', hi: 'जाति वर्ग और प्रस्तुत प्रपत्रों की सत्यता हेतु शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Access Apuni Sarkar e-District Portal', hi: 'अपुणी सरकार ई-डिस्ट्रिक्ट पोर्टल खोलें' },
        instruction: {
          en: 'Sign in to eservices.uk.gov.in using your citizen account.',
          hi: 'eservices.uk.gov.in पर अपने नागरिक क्रेडेंशियल्स से साइन इन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Fill Caste Category Information', hi: 'जाति वर्ग व वंशावली विवरण भरें' },
        instruction: {
          en: 'Select the specific caste category (SC/ST/OBC) and specify sub-caste and paternal details accurately.',
          hi: 'अपनी श्रेणी (SC/ST/OBC) चुनें तथा उप-जाति एवं पिता/पूर्वज का विवरण सावधानीपूर्वक भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Upload Paternal Proof & Domicile', hi: 'पैतृक प्रमाण एवं निवास साक्ष्य अपलोड करें' },
        instruction: {
          en: 'Upload father’s caste certificate or revenue records alongside identity proof and photograph.',
          hi: 'पिता का जाति प्रमाण अथवा पुश्तैनी राजस्व अभिलेख, पहचान पत्र व फोटो अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Lekhpal Enquiry & Tehsildar Approval', hi: 'लेखपाल स्थलीय जांच एवं तहसीलदार स्वीकृति' },
        instruction: {
          en: 'The concerned Patwari/Lekhpal verifies local ancestry and submits report to the Tehsildar or SDM for digital approval.',
          hi: 'संबंधित पटवारी/लेखपाल स्थलीय जांच कर अपनी आख्या प्रस्तुत करते हैं, जिसके बाद तहसीलदार द्वारा प्रमाण पत्र डिजिटल रूप से स्वीकृत होता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'SC and ST certificates generally have lifetime validity, whereas OBC Non-Creamy Layer certificates usually require renewal as per income guidelines.',
        'Ensure the spelling of applicant and father’s name matches school certificates exactly.'
      ],
      hi: [
        'एससी और एसटी प्रमाण पत्र सामान्यतः आजीवन मान्य होते हैं, जबकि ओबीसी गैर-क्रीमी लेयर प्रमाण पत्र आय अनुसार समय-समय पर नवीनीकृत होते हैं।',
        'शैक्षणिक अंकपत्रों और राजस्व अभिलेखों में नाम की वर्तनी का मिलान होना चाहिए।'
      ]
    }
  },
  {
    id: 'parivar-register-copy',
    iconName: 'Scroll',
    code: 'UK-PR-PRC',
    category: 'vital_records',
    title: {
      en: 'Parivar Register Copy (Family Register Excerpt)',
      hi: 'परिवार रजिस्टर की नकल (कुटुंब रजिस्टर)'
    },
    department: {
      en: 'Panchayati Raj Department (पंचायती राज विभाग)',
      hi: 'पंचायती राज विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Certified excerpt of Gram Panchayat Kutumb Register detailing family members, relationships, and house number.',
      hi: 'ग्राम पंचायत कुटुंब रजिस्टर की प्रमाणित नकल जो परिवार के सदस्यों, संबंधों और मकान संख्या को प्रमाणित करती है।'
    },
    fullDesc: {
      en: 'The Parivar Register Copy (परिवार रजिस्टर की नकल) is an essential civil record issued by the Gram Panchayat Vikas Adhikari (VDO) or Nagar Palika. It provides statutory legal proof of family composition, local residence, and genealogical lineage, mandatory for obtaining Income, Caste, and Domicile certificates in Uttarakhand.',
      hi: 'परिवार रजिस्टर की नकल ग्राम विकास अधिकारी (VDO) अथवा नगर पालिका द्वारा जारी की जाती है। यह परिवार के सभी सदस्यों के नाम, संबंध और निवास का प्राथमिक कानूनी प्रमाण है, जो आय, जाति एवं मूल निवास प्रमाण पत्र के लिए अनिवार्य दस्तावेज है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Timeframe for physical archive retrieval is pending gazette verification; online copy standard under RTS is up to 7 working days',
      hi: 'भौतिक अभिलेख हेतु समय सीमा आधिकारिक रूप से सत्यापन प्रक्रियाधीन है; ऑनलाइन प्रति हेतु आरटीएस मानक 7 कार्य दिवस'
    },
    officialFee: {
      en: 'Fee information currently pending official gazette verification (Nominal copy charge or free depending on Gram Panchayat)',
      hi: 'शुल्क विवरण आधिकारिक गजट अधिसूचना के अनुसार सत्यापन प्रक्रियाधीन (अपुणी एआई शुल्क का अनुमान नहीं लगाता)'
    },
    eligibility: {
      en: [
        'Family must be recorded in the Gram Panchayat Kutumb Register in Uttarakhand.',
        'Applicant must be a listed member, family head, or legally authorized representative.'
      ],
      hi: [
        'परिवार का नाम उत्तराखंड की ग्राम पंचायत के कुटुंब रजिस्टर में दर्ज होना चाहिए।',
        'आवेदक परिवार का सदस्य, मुखिया अथवा विधिक प्रतिनिधि होना चाहिए।'
      ]
    },
    documents: [
      {
        id: 'prc-doc-1',
        name: { en: 'Aadhaar Card / Voter ID of Applicant', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Self-attested identity proof', hi: 'स्व-प्रमाणित पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG', 'PNG'],
        maxSizeMB: 2,
        tip: { en: 'Keep your local address details clear', hi: 'स्थानीय पते का विवरण स्पष्ट होना चाहिए' }
      },
      {
        id: 'prc-doc-2',
        name: { en: 'Written Request / Online Application', hi: 'लिखित आवेदन पत्र अथवा ऑनलाइन आवेदन' },
        description: { en: 'Plain paper request to VDO or online application form on Apuni Sarkar', hi: 'ग्राम विकास अधिकारी के नाम प्रार्थना पत्र अथवा पोर्टल पर ऑनलाइन आवेदन' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2,
        tip: { en: 'Mention Gram Sabha, Majra/village name, and head of family', hi: 'ग्राम सभा, मजरा व परिवार के मुखिया का नाम अवश्य लिखें' }
      },
      {
        id: 'prc-doc-3',
        name: { en: 'House Number / Old Ration Card (Optional)', hi: 'मकान संख्या अथवा पुराना राशन कार्ड (वैकल्पिक)' },
        description: { en: 'Helps VDO locate the exact register volume quickly', hi: 'रजिस्टर के संबंधित पृष्ठ को शीघ्र खोजने में सहायक' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2,
        tip: { en: 'Useful if register was prepared in previous census rounds', hi: 'पूर्व जनगणना के कुटुंब रजिस्टर खोजने में उपयोगी' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Submit Request Offline or Online', hi: 'ऑफलाइन अथवा ऑनलाइन आवेदन' },
        instruction: {
          en: 'Visit your local Gram Panchayat office on designated days and meet the Gram Vikas Adhikari (VDO), or log in to Apuni Sarkar (eservices.uk.gov.in) -> Panchayati Raj Department.',
          hi: 'ग्राम पंचायत कार्यालय में ग्राम विकास अधिकारी (VDO) से संपर्क करें अथवा अपुणी सरकार पोर्टल पर पंचायती राज विभाग चुनें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Record Verification by VDO', hi: 'ग्राम विकास अधिकारी द्वारा रजिस्टर मिलान' },
        instruction: {
          en: 'The VDO verifies the family entry in the physical Kutumb Register (Form 2) or e-Panchayat software.',
          hi: 'ग्राम विकास अधिकारी ग्राम सभा के कुटुंब रजिस्टर (प्रपत्र 2) अथवा ई-पंचायत पोर्टल से परिवार विवरण का सत्यापन करते हैं।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Certified Excerpt Issuance', hi: 'प्रमाणित नकल जारी' },
        instruction: {
          en: 'A certified signed copy bearing the Panchayat seal and register folio number is handed over or digitally issued.',
          hi: 'हस्ताक्षर व पंचायत की मुहर युक्त प्रमाणित नकल प्रदान की जाती है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Fee details are pending official departmental gazette verification—check with your Gram Vikas Adhikari.',
        'If a family member’s name is missing, an application for addition to the Parivar Register must be submitted to the VDO.',
        'The copy is an essential prerequisite for Income, Caste, and Domicile certificates.'
      ],
      hi: [
        'शुल्क विवरण आधिकारिक गजट अनुसार सत्यापन प्रक्रियाधीन है—संबंधित ग्राम विकास अधिकारी से पुष्टि करें।',
        'यदि किसी सदस्य का नाम छूटा है तो नाम दर्ज करने हेतु अलग से आवेदन करना होता है।',
        'यह नकल आय, जाति एवं मूल निवास प्रमाण पत्रों के लिए अत्यंत महत्वपूर्ण दस्तावेज है।'
      ]
    }
  },
  {
    id: 'domicile-certificate',
    iconName: 'Home',
    code: 'UK-REV-DOM',
    category: 'revenue',
    title: {
      en: 'Domicile / Permanent Resident Certificate',
      hi: 'स्थायी निवास प्रमाण पत्र (मूल निवास)'
    },
    department: {
      en: 'Revenue Department (राजस्व विभाग)',
      hi: 'राजस्व विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Proof of permanent residency in Uttarakhand essential for state government jobs, state quotas in education, and land purchase eligibility.',
      hi: 'उत्तराखंड में स्थायी निवास का कानूनी साक्ष्य, जो राज्य की भर्तियों, शिक्षा कोटे और योजनाओं के लिए आवश्यक है।'
    },
    fullDesc: {
      en: 'The Uttarakhand Domicile / Permanent Residence Certificate establishes an individual’s legal permanent connection with the state of Uttarakhand. It is a mandatory prerequisite for state civil services, engineering and medical college domicile reservations, and welfare entitlements.',
      hi: 'स्थायी निवास प्रमाण पत्र (Domicile Certificate) यह प्रमाणित करता है कि व्यक्ति उत्तराखंड का स्थायी निवासी है। यह राज्य स्तरीय प्रतियोगी परीक्षाओं, तकनीकी व उच्च शिक्षा में राज्य कोटे तथा विभिन्न योजनाओं हेतु अनिवार्य है।'
    },
    estimatedDays: 15,
    rtsGuarantee: {
      en: 'Delivery within 15 working days under Uttarakhand RTS Act',
      hi: 'उत्तराखंड सेवा का अधिकार (RTS) के अंतर्गत 15 कार्य दिवस'
    },
    officialFee: {
      en: 'Statutory portal user charge (approx. ₹30–₹50)',
      hi: 'मानक पोर्टल शुल्क (लगभग ₹30-₹50)'
    },
    eligibility: {
      en: [
        'Continuous residence in Uttarakhand for at least 15 years, OR ancestral residence prior to the state creation.',
        'Child of parents holding permanent resident status in Uttarakhand.',
        'Educated in Uttarakhand state for at least 3 years or possessing ancestral immovable property in the state.'
      ],
      hi: [
        'उत्तराखंड में कम से कम 15 वर्षों से निरंतर निवास, अथवा पुश्तैनी निवासी होना।',
        'उत्तराखंड के स्थायी निवासी माता-पिता की संतान होना।',
        'राज्य में न्यूनतम 3 वर्ष की निरंतर स्कूली शिक्षा अथवा राज्य में पुश्तैनी अचल संपत्ति होना।'
      ]
    },
    documents: [
      {
        id: 'dom-doc-1',
        name: { en: 'Aadhaar Card / Voter ID of Applicant', hi: 'आवेदक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Identity proof with local residential address', hi: 'वर्तमान निवास पते वाला पहचान पत्र' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-2',
        name: { en: 'Proof of 15 Years Continuous Residence / Land Records', hi: '15 वर्ष के निरंतर निवास का साक्ष्य या भूमि अभिलेख' },
        description: { en: 'Ancestral Khatauni, registry of house, electricity bills spanning years, or municipal record', hi: 'पुश्तैनी खतौनी, मकान की रजिस्ट्री, पुराने बिजली बिल अथवा नगर पालिका गृहकर रसीद' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 5
      },
      {
        id: 'dom-doc-3',
        name: { en: 'School Leaving Certificate / Educational Records', hi: 'विद्यालय त्याग प्रमाण पत्र (टी.सी.) / शैक्षिक प्रमाण पत्र' },
        description: { en: 'High School / Class 10 certificate indicating study in Uttarakhand schools', hi: 'उत्तराखंड के विद्यालय से उत्तीर्ण 10वीं/12वीं का प्रमाण पत्र अथवा टीसी' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-4',
        name: { en: 'Family Register Excerpt (Parivar Register)', hi: 'परिवार रजिस्टर की प्रमाणित नकल' },
        description: { en: 'Panchayat or urban local body record proving continuous family listing', hi: 'ग्राम पंचायत अथवा निकाय का परिवार रजिस्टर विवरण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dom-doc-5',
        name: { en: 'Affidavit for Permanent Residence', hi: 'स्थायी निवास का शपथ पत्र' },
        description: { en: 'Notarized declaration specifying duration of uninterrupted residence', hi: 'निरंतर निवास की अवधि दर्शाने वाला नोटरीकृत शपथ पत्र' },
        required: true,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Select Domicile Service on Apuni Sarkar', hi: 'अपुणी सरकार पर स्थायी निवास सेवा चुनें' },
        instruction: {
          en: 'Log in and navigate to Revenue Department -> Permanent Resident Certificate.',
          hi: 'पोर्टल में लॉगिन कर राजस्व विभाग के अंतर्गत "स्थायी निवास प्रमाण पत्र" चुनें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Enter Residential History & Education', hi: 'निवास इतिहास व शिक्षा का विवरण भरें' },
        instruction: {
          en: 'Provide details of residential duration in Uttarakhand and schools attended in the state.',
          hi: 'राज्य में निवास की कुल अवधि और उत्तराखंड में अध्ययनरत रहे विद्यालयों का विवरण भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Attach Land / Educational Records', hi: 'भूमि व शैक्षिक अभिलेख संलग्न करें' },
        instruction: {
          en: 'Upload supporting proof of residence, Parivar register copy, and school documents.',
          hi: 'निवास साक्ष्य, परिवार रजिस्टर की नकल एवं शैक्षिक अभिलेख अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Patwari Inquiry and Tehsildar Sign-off', hi: 'पटवारी जांच एवं तहसीलदार अनुमोदन' },
        instruction: {
          en: 'Revenue staff inspects the local records and forwards the favorable verification report for certificate issuance.',
          hi: 'राजस्व कर्मी स्थलीय जांच कर रिपोर्ट अग्रेषित करते हैं, जिसके बाद डिजिटल हस्ताक्षर युक्त प्रमाण पत्र जारी होता है।'
        }
      }
    ],
    importantNotes: {
      en: [
        'A Domicile Certificate once legally issued has lifelong validity unless canceled due to fraud or moving domicile.',
        'Holding domicile of more than one Indian state simultaneously is prohibited.'
      ],
      hi: [
        'विधिक रूप से जारी स्थायी निवास प्रमाण पत्र आजीवन मान्य होता है (जब तक कि निरस्त न किया जाए)।',
        'एक समय में एक से अधिक राज्यों का मूल निवास रखना विधिक रूप से अनुमत नहीं है।'
      ]
    }
  },
  {
    id: 'birth-certificate',
    iconName: 'Baby',
    code: 'UK-PAN-BRT',
    category: 'vital_records',
    title: {
      en: 'Birth Certificate',
      hi: 'जन्म प्रमाण पत्र'
    },
    department: {
      en: 'Panchayati Raj & Urban Development (पंचायती राज व शहरी विकास)',
      hi: 'पंचायती राज विभाग / नगर निकाय, उत्तराखंड'
    },
    shortDesc: {
      en: 'Primary legal identity and age document registering the birth of a child in rural or urban Uttarakhand.',
      hi: 'बच्चे के जन्म का आधिकारिक कानूनी पंजीकरण, जो विद्यालय प्रवेश, पासपोर्ट और पहचान हेतु मूल आधार है।'
    },
    fullDesc: {
      en: 'The Birth Certificate is the fundamental identity record establishing date and place of birth under the Registration of Births and Deaths Act. In rural areas, it is registered by the Gram Panchayat Vikas Adhikari; in urban areas, by the Municipal Corporation (Nagar Nigam / Palika).',
      hi: 'जन्म एवं मृत्यु पंजीकरण अधिनियम के तहत जन्म प्रमाण पत्र आयु और जन्म स्थान का प्रथम वैधानिक प्रमाण है। ग्रामीण क्षेत्रों में ग्राम विकास अधिकारी तथा शहरी क्षेत्रों में नगर निगम/पालिका द्वारा पंजीकरण किया जाता है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Issued within 7 working days for timely registered institutional births',
      hi: 'समयबद्ध पंजीकृत जन्म हेतु 7 कार्य दिवस में सेवा का अधिकार'
    },
    officialFee: {
      en: 'Free within 21 days of birth; late registration attracts minor statutory delayed fee',
      hi: 'जन्म के 21 दिनों के भीतर निःशुल्क; विलंब होने पर नियमानुसार सामान्य विलंब शुल्क'
    },
    eligibility: {
      en: [
        'Birth must have taken place within the geographic territory of Uttarakhand (hospital or domicile).',
        'Institutional births reported by hospital authorities directly or domicile births reported by family within permitted window.'
      ],
      hi: [
        'जन्म उत्तराखंड राज्य की भौगोलिक सीमा के भीतर (अस्पताल या गृह प्रसव) हुआ हो।',
        'अस्पताल द्वारा सीधे प्रेषित अथवा अभिभावक द्वारा निर्धारित अवधि में रिपोर्ट किया गया हो।'
      ]
    },
    documents: [
      {
        id: 'brt-doc-1',
        name: { en: 'Hospital Discharge Summary / Birth Slip', hi: 'अस्पताल डिस्चार्ज स्लिप / जन्म सूचना प्रपत्र' },
        description: { en: 'Form-1 issued by government or private hospital certifying date and time of delivery', hi: 'अस्पताल द्वारा जारी जन्म सूचना पर्ची (फॉर्म-1) जिसमें जन्म समय व तारीख दर्ज हो' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-2',
        name: { en: 'Parents’ Aadhaar Cards', hi: 'माता-पिता के आधार कार्ड' },
        description: { en: 'Copy of both mother’s and father’s Aadhaar for parentage verification', hi: 'माता एवं पिता दोनों के आधार कार्ड की प्रति' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-3',
        name: { en: 'Address Proof of Parents', hi: 'माता-पिता का निवास प्रमाण पत्र' },
        description: { en: 'Electricity bill, Voter card, or Ration Card of parents in Uttarakhand', hi: 'उत्तराखंड में माता-पिता का बिजली बिल, वोटर कार्ड या राशन कार्ड' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'brt-doc-4',
        name: { en: 'Delayed Registration Order / Affidavit (If >21 Days)', hi: 'विलंब पंजीकरण शपथ पत्र / एसडीएम आदेश (21 दिन से अधिक पर)' },
        description: { en: 'Affidavit explaining reason for delay; order from Tehsildar/SDM if birth is older than 1 year', hi: 'विलंब का कारण दर्शाने वाला शपथ पत्र; 1 वर्ष से अधिक पुराने जन्म हेतु सक्षम अधिकारी का आदेश' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 3,
        tip: { en: 'Only applicable if birth was not registered within 21 days', hi: 'केवल 21 दिन के उपरांत आवेदन करने पर ही आवश्यक' }
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Check Institutional Auto-Registration', hi: 'अस्पताल पंजीकरण की जांच' },
        instruction: {
          en: 'Most government and empanelled private hospitals in Uttarakhand enter birth records directly on the CRS/e-District portal. Obtain the reference slip upon discharge.',
          hi: 'उत्तराखंड के अधिकांश सरकारी व निजी अस्पताल जन्म का विवरण सीधे पोर्टल पर दर्ज करते हैं। डिस्चार्ज के समय अस्पताल से संदर्भ पर्ची प्राप्त करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Submit Application on Apuni Sarkar / CRS', hi: 'अपुणी सरकार / सीआरएस पोर्टल पर आवेदन' },
        instruction: {
          en: 'Select Birth Certificate service and input hospital registration number, baby’s name, and parent details.',
          hi: 'जन्म प्रमाण पत्र सेवा का चयन करें और अस्पताल की पर्ची संख्या, शिशु का नाम व माता-पिता का विवरण भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Verification by Panchayat / Nagar Palika Registrar', hi: 'पंचायत / नगर पालिका रजिस्ट्रार द्वारा सत्यापन' },
        instruction: {
          en: 'The Registrar of Births & Deaths reviews the medical record and digitalizes the legal entry.',
          hi: 'जन्म-मृत्यु रजिस्ट्रार अस्पताल के रिकॉर्ड का मिलान कर जन्म प्रविष्टि को डिजिटल रूप में प्रमाणित करते हैं।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Download QR Code-Enabled Certificate', hi: 'क्यूआर कोड युक्त प्रमाण पत्र डाउनलोड करें' },
        instruction: {
          en: 'Once issued, download the digitally signed certificate directly from your citizen dashboard.',
          hi: 'स्वीकृति के बाद नागरिक डैशबोर्ड से क्यूआर कोड युक्त डिजिटल प्रमाण पत्र डाउनलोड करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Birth registration within 21 days is completely free and requires minimal verification.',
        'Delayed registration beyond 1 year requires an inquiry order by the Sub-Divisional Magistrate (SDM).'
      ],
      hi: [
        'जन्म के 21 दिनों के भीतर पंजीकरण पूर्णतः निःशुल्क और सरल प्रक्रिया है।',
        '1 वर्ष से अधिक विलंब पर उप-जिलाधिकारी (SDM) की अनुमति आवश्यक होती है।'
      ]
    }
  },
  {
    id: 'death-certificate',
    iconName: 'HeartPulse',
    code: 'UK-PAN-DTH',
    category: 'vital_records',
    title: {
      en: 'Death Certificate',
      hi: 'मृत्यु प्रमाण पत्र'
    },
    department: {
      en: 'Panchayati Raj & Urban Development (पंचायती राज व शहरी विकास)',
      hi: 'पंचायती राज विभाग / नगर निकाय, उत्तराखंड'
    },
    shortDesc: {
      en: 'Mandatory civil record certifying the demise of an individual for property inheritance, insurance claims, and pensions.',
      hi: 'उत्तराधिकार, बैंक खाते के निस्तारण, बीमा दावों और पारिवारिक पेंशन हेतु मृत्यु का कानूनी पंजीकरण।'
    },
    fullDesc: {
      en: 'The Death Certificate is a statutory record issued under the Registration of Births and Deaths Act. It confirms the time, date, and cause/circumstances of death and is legally mandatory for settling estate succession, banking, and life insurance benefits.',
      hi: 'मृत्यु प्रमाण पत्र किसी व्यक्ति के देहावसान का कानूनी साक्ष्य है। यह उत्तराधिकार हस्तांतरण, संपत्ति नामांतरण, बैंक खातों के संचालन तथा बीमा दावों के निपटारे हेतु आवश्यक होता है।'
    },
    estimatedDays: 7,
    rtsGuarantee: {
      en: 'Issued within 7 working days under Uttarakhand RTS Act',
      hi: 'उत्तराखंड सेवा का अधिकार के तहत 7 कार्य दिवस में जारी'
    },
    officialFee: {
      en: 'Free within 21 days; nominal government fee for late registration',
      hi: '21 दिनों के भीतर निःशुल्क; विलंब होने पर सामान्य निर्धारित शुल्क'
    },
    eligibility: {
      en: [
        'Death occurred within the jurisdiction of Uttarakhand.',
        'Applicant must be a legal heir, immediate family member, or authorized representative.'
      ],
      hi: [
        'मृत्यु उत्तराखंड की भौगोलिक सीमा के भीतर हुई हो।',
        'आवेदक मृतक का विधिक वारिस, निकटतम परिजन अथवा अधिकृत व्यक्ति होना चाहिए।'
      ]
    },
    documents: [
      {
        id: 'dth-doc-1',
        name: { en: 'Hospital Death Summary / Cremation or Burial Receipt', hi: 'अस्पताल मृत्यु प्रमाण पर्ची / श्मशान अथवा अंत्येष्टि रसीद' },
        description: { en: 'Medical certificate of cause of death from doctor or receipt from local cremation ground', hi: 'चिकित्सक द्वारा जारी मृत्यु पर्ची अथवा श्मशान घाट/कब्रिस्तान की आधिकारिक रसीद' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-2',
        name: { en: 'Deceased Person’s Aadhaar / Voter Card', hi: 'मृतक का आधार कार्ड या पहचान पत्र' },
        description: { en: 'Original identity proof of the deceased (to be surrendered / verified)', hi: 'मृतक का आधार, पहचान पत्र अथवा राशन कार्ड' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-3',
        name: { en: 'Applicant’s Proof of Relationship & ID', hi: 'आवेदक का पहचान पत्र एवं संबंध साक्ष्य' },
        description: { en: 'Aadhaar of family member applying and proof of relationship (Parivar Register or Ration Card)', hi: 'आवेदनकर्ता परिजन का आधार कार्ड एवं संबंध दर्शाने वाला परिवार रजिस्टर' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'dth-doc-4',
        name: { en: 'Affidavit for Delayed Registration (If >21 Days)', hi: 'विलंब शपथ पत्र (21 दिन बाद होने पर)' },
        description: { en: 'Affidavit describing circumstances and reasons for delay if registering after 21 days', hi: '21 दिन के बाद आवेदन करने पर विलंब का कारण दर्शाने वाला शपथ पत्र' },
        required: false,
        acceptedFormats: ['PDF'],
        maxSizeMB: 2
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Collect Medical / Cremation Slip', hi: 'चिकित्सीय पर्ची अथवा अंत्येष्टि साक्ष्य' },
        instruction: {
          en: 'Obtain the official cause-of-death certificate from the hospital or the receipt from the designated crematorium/burial ground.',
          hi: 'अस्पताल से चिकित्सक द्वारा हस्ताक्षरित मृत्यु सूचना पर्ची अथवा श्मशान घाट की रसीद सुरक्षित रखें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Apply Online or at Local Registrar Office', hi: 'ऑनलाइन अथवा स्थानीय रजिस्ट्रार कार्यालय में आवेदन' },
        instruction: {
          en: 'Log in to Apuni Sarkar or visit your Gram Panchayat / Nagar Nigam health department counter.',
          hi: 'अपुणी सरकार पोर्टल पर लॉगिन करें अथवा अपनी ग्राम पंचायत/नगर निगम स्वास्थ्य विभाग काउंटर पर संपर्क करें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Official Verification & Entry', hi: 'अभिलेख सत्यापन एवं प्रविष्टि' },
        instruction: {
          en: 'The Registrar registers the death in the statutory register and invalidates the identity records.',
          hi: 'रजिस्ट्रार द्वारा विवरण का सत्यापन कर जन्म-मृत्यु रजिस्टर में प्रविष्टि अंकित की जाती है।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Receipt of Official Certificate', hi: 'आधिकारिक प्रमाण पत्र प्राप्त करना' },
        instruction: {
          en: 'Download the digitally certified Death Certificate for all legal, insurance, and banking formalities.',
          hi: 'बैंक, बीमा एवं उत्तराधिकार संबंधित कार्यों हेतु डिजिटल प्रमाणित मृत्यु प्रमाण पत्र डाउनलोड करें।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Prompt registration within 21 days avoids complicated SDM/Tehsildar court orders.',
        'Keep multiple certified copies ready as banks and insurance providers require official transcripts.'
      ],
      hi: [
        '21 दिनों के भीतर पंजीकरण कराने से तहसील या न्यायालय के चक्कर नहीं लगाने पड़ते।',
        'बैंक, एलआईसी और संपत्ति नामांतरण के लिए कई प्रतियों की आवश्यकता हो सकती है।'
      ]
    }
  },
  {
    id: 'pension-services',
    iconName: 'HandHeart',
    code: 'UK-SOC-PEN',
    category: 'social_welfare',
    title: {
      en: 'Social Welfare Pension Services',
      hi: 'समाज कल्याण पेंशन योजनाएं'
    },
    department: {
      en: 'Social Welfare Department (समाज कल्याण विभाग)',
      hi: 'समाज कल्याण विभाग, उत्तराखंड सरकार'
    },
    shortDesc: {
      en: 'Monthly financial pension schemes for senior citizens (Old Age), widows, and persons with disabilities (Divyangjan).',
      hi: 'वरिष्ठ नागरिकों (वृद्धावस्था), विधवा माताओं और दिव्यांगजनों हेतु मासिक सामाजिक सुरक्षा पेंशन सहायता।'
    },
    fullDesc: {
      en: 'The Social Welfare Department of Uttarakhand administers state and national social assistance pension schemes. Eligible senior citizens aged 60+, destitute widows, and persons with 40%+ benchmark disabilities receive direct monthly DBT allowances credited to their Aadhaar-linked bank accounts.',
      hi: 'उत्तराखंड समाज कल्याण विभाग 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिकों, निराश्रित विधवाओं तथा 40% या अधिक दिव्यांगता वाले नागरिकों को प्रत्यक्ष लाभ अंतरण (DBT) के माध्यम से बैंक खाते में मासिक पेंशन प्रदान करता है।'
    },
    estimatedDays: 30,
    rtsGuarantee: {
      en: 'Sanction and verification within 30 days under Uttarakhand RTS norms',
      hi: 'सत्यापन एवं स्वीकृति उत्तराखंड सेवा का अधिकार के तहत 30 दिनों में'
    },
    officialFee: {
      en: 'Completely free application process (No government fee)',
      hi: 'पेंशन आवेदन पूर्णतः निःशुल्क है (कोई सरकारी शुल्क नहीं)'
    },
    eligibility: {
      en: [
        'Old Age Pension: Age 60 years or above, permanent resident of Uttarakhand, family income below BPL/notified limit.',
        'Widow Pension: 18 years or older, death of lawful husband, living below prescribed income ceiling.',
        'Disability Pension: 40% or greater disability certified by authorized Chief Medical Officer (CMO) medical board.',
        'Aadhaar-seeded savings bank account in any core-banking branch or post office.'
      ],
      hi: [
        'वृद्धावस्था पेंशन: न्यूनतम आयु 60 वर्ष, उत्तराखंड का स्थायी निवासी, बीपीएल अथवा राज्य द्वारा निर्धारित आय सीमा के अंतर्गत।',
        'विधवा पेंशन: आयु 18 वर्ष या अधिक, पति की मृत्यु का वैध साक्ष्य, निर्धारित वार्षिक आय सीमा के भीतर।',
        'दिव्यांग पेंशन: मुख्य चिकित्सा अधिकारी (CMO) मेडिकल बोर्ड द्वारा न्यूनतम 40% दिव्यांगता प्रमाण पत्र।',
        'आधार से लिंक सक्रिय बैंक अथवा डाकघर बचत खाता होना अनिवार्य।'
      ]
    },
    documents: [
      {
        id: 'pen-doc-1',
        name: { en: 'Age Proof (Voter Card / Matriculation / Medical Certificate)', hi: 'आयु प्रमाण पत्र (वोटर कार्ड / 10वीं प्रमाण पत्र / सीएमओ आयु प्रमाण)' },
        description: { en: 'Document clearly showing birth date to verify 60+ age threshold', hi: '60 वर्ष की न्यूनतम आयु की पुष्टि करने वाला वैध साक्ष्य' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pen-doc-2',
        name: { en: 'Aadhaar Card with Mobile Linkage', hi: 'आधार कार्ड (मोबाइल लिंक युक्त)' },
        description: { en: 'Required for DBT authentication and biometric verification', hi: 'डीबीटी भुगतान और ई-केवाईसी हेतु आधार कार्ड' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pen-doc-3',
        name: { en: 'Bank Passbook with Account & IFSC Details', hi: 'बैंक पासबुक की प्रति (खाता संख्या व IFSC कोड)' },
        description: { en: 'First page of bank passbook showing applicant name, account number, and branch IFSC', hi: 'बैंक पासबुक का प्रथम पृष्ठ जिसमें खाताधारक का नाम और खाता संख्या स्पष्ट हो' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2,
        tip: { en: 'Ensure account is single/joint only with spouse, not with other relatives', hi: 'खाता एकल (Single) अथवा केवल जीवनसाथी के साथ संयुक्त होना चाहिए' }
      },
      {
        id: 'pen-doc-4',
        name: { en: 'Income Certificate / BPL Card', hi: 'आय प्रमाण पत्र अथवा बीपीएल राशन कार्ड' },
        description: { en: 'Valid income certificate issued by Tehsildar or BPL family listing', hi: 'तहसीलदार द्वारा जारी आय प्रमाण पत्र अथवा बीपीएल सूची का प्रमाण' },
        required: true,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pen-doc-5',
        name: { en: 'Husband’s Death Certificate (For Widow Pension)', hi: 'पति का मृत्यु प्रमाण पत्र (विधवा पेंशन हेतु)' },
        description: { en: 'Mandatory only for destitute widow pension applicants', hi: 'केवल विधवा पेंशन के लिए अनिवार्य' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 2
      },
      {
        id: 'pen-doc-6',
        name: { en: 'CMO Disability Certificate with UDID (For Divyang Pension)', hi: 'सीएमओ दिव्यांगता प्रमाण पत्र व यूडीआईडी कार्ड (दिव्यांग पेंशन हेतु)' },
        description: { en: 'Medical certificate issued by district medical board certifying 40%+ disability', hi: 'मेडिकल बोर्ड द्वारा जारी 40% या अधिक का दिव्यांगता प्रमाण पत्र' },
        required: false,
        acceptedFormats: ['PDF', 'JPG'],
        maxSizeMB: 3
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: { en: 'Choose Pension Scheme Category', hi: 'पेंशन योजना श्रेणी चुनें' },
        instruction: {
          en: 'Select from Old Age (वृद्धावस्था), Widow (विधवा), or Disability (दिव्यांग) on the Social Welfare portal or Apuni Sarkar.',
          hi: 'अपुणी सरकार अथवा समाज कल्याण पोर्टल पर उपयुक्त पेंशन योजना का चयन करें।'
        }
      },
      {
        stepNumber: 2,
        title: { en: 'Enter Bank Account & Aadhaar for DBT', hi: 'डीबीटी हेतु बैंक खाता व आधार विवरण भरें' },
        instruction: {
          en: 'Carefully input your 12-digit Aadhaar number and exact bank account details to ensure monthly pension deposits without failure.',
          hi: 'मासिक पेंशन सीधे खाते में आने हेतु 12 अंकों का आधार व सही बैंक खाता संख्या भरें।'
        }
      },
      {
        stepNumber: 3,
        title: { en: 'Attach Verified Medical / Income Proof', hi: 'आय एवं मेडिकल प्रमाण संलग्न करें' },
        instruction: {
          en: 'Upload your age proof, Tehsildar income certificate, and CMO medical certificate (if applying for disability pension).',
          hi: 'आयु प्रमाण पत्र, आय प्रमाण पत्र तथा दिव्यांग पेंशन हेतु सीएमओ का प्रमाण पत्र अपलोड करें।'
        }
      },
      {
        stepNumber: 4,
        title: { en: 'Gram Panchayat / Social Welfare Officer Approval', hi: 'ग्राम पंचायत / जिला समाज कल्याण अधिकारी स्वीकृति' },
        instruction: {
          en: 'The Gram Panchayat Adhikari verifies living status and forwards to the District Social Welfare Officer (DSWO) for budget sanction.',
          hi: 'ग्राम विकास अधिकारी स्थलीय सत्यापन कर ज़िला समाज कल्याण अधिकारी (DSWO) को बजट स्वीकृति हेतु प्रेषित करते हैं।'
        }
      }
    ],
    importantNotes: {
      en: [
        'Annual digital life certificate (जीवन प्रमाण पत्र) submission is required every year in November/December to maintain active pension disbursements.',
        'Applicants must notify the department in case of remarriage or significant change in family economic status.'
      ],
      hi: [
        'पेंशन निरंतर प्राप्त करने हेतु प्रतिवर्ष नवंबर/दिसंबर में जीवन प्रमाण पत्र (Life Certificate) जमा कराना अनिवार्य है।',
        'पुनर्विवाह अथवा आर्थिक स्थिति में बड़े बदलाव पर विभाग को सूचित करना आवश्यक होता है।'
      ]
    }
  }
];
