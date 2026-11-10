import { TrackerRecord } from '../types';

export const sampleTrackerRecords: Record<string, TrackerRecord> = {
  'UK-REV-2026-8819': {
    referenceNumber: 'UK-REV-2026-8819',
    serviceId: 'income-certificate',
    serviceTitle: {
      en: 'Income Certificate (आय प्रमाण पत्र)',
      hi: 'आय प्रमाण पत्र (राजस्व विभाग)'
    },
    applicantName: 'Rameshwar Prasad Bhatt (रामेश्वर प्रसाद भट्ट)',
    district: 'Dehradun (देहरादून)',
    tehsil: 'Rishikesh (ऋषिकेश)',
    appliedDate: '2026-03-24',
    estimatedCompletion: '2026-04-08',
    currentStatus: 'under_verification',
    currentOfficer: 'Revenue Inspector (Lekhpal Office, Rishikesh)',
    remarks: {
      en: 'Field enquiry in progress with Gram Pradhan regarding agricultural and household earnings.',
      hi: 'ग्राम प्रधान एवं क्षेत्रीय लेखपाल द्वारा पारिवारिक आय व कृषि भूमि का स्थलीय सत्यापन प्रक्रियाधीन है।'
    },
    timeline: [
      {
        stage: 'Application Lodged Online',
        stageHi: 'आवेदन ऑनलाइन प्राप्त हुआ',
        date: '2026-03-24 10:15 AM',
        status: 'completed',
        authority: 'Apuni Sarkar Citizen Portal'
      },
      {
        stage: 'Initial Scrutiny & Fee Cleared',
        stageHi: 'प्रारंभिक जांच व शुल्क भुगतान पूर्ण',
        date: '2026-03-25 02:40 PM',
        status: 'completed',
        authority: 'Tehsil e-District Cell'
      },
      {
        stage: 'Field Verification by Lekhpal / Patwari',
        stageHi: 'लेखपाल / पटवारी द्वारा स्थलीय सत्यापन',
        date: '2026-03-28 11:30 AM',
        status: 'in_progress',
        authority: 'Lekhpal Circle 04'
      },
      {
        stage: 'Tehsildar Digital Signature & Issue',
        stageHi: 'तहसीलदार डिजिटल हस्ताक्षर एवं प्रमाण पत्र जारी',
        date: 'Expected: 2026-04-05',
        status: 'pending',
        authority: 'Tehsildar Office Rishikesh'
      }
    ]
  },
  'UK-SOC-2026-4402': {
    referenceNumber: 'UK-SOC-2026-4402',
    serviceId: 'pension-services',
    serviceTitle: {
      en: 'Old Age Pension Scheme (वृद्धावस्था पेंशन)',
      hi: 'वृद्धावस्था पेंशन (समाज कल्याण विभाग)'
    },
    applicantName: 'Kamla Devi (कमला देवी)',
    district: 'Pauri Garhwal (पौड़ी गढ़वाल)',
    tehsil: 'Kotdwar (कोटद्वार)',
    appliedDate: '2026-02-14',
    estimatedCompletion: '2026-03-16',
    currentStatus: 'approved_ready',
    currentOfficer: 'District Social Welfare Officer (DSWO Kotdwar)',
    remarks: {
      en: 'Application approved! DBT sanction order generated. First monthly disbursement scheduled via PFMS.',
      hi: 'आवेदन स्वीकृत! डीबीटी स्वीकृति आदेश जारी हो चुका है। प्रथम किस्त बैंक खाते में भेजने की कार्यवाही पूर्ण।'
    },
    timeline: [
      {
        stage: 'Application Lodged via CSC Center',
        stageHi: 'सीएससी केंद्र के माध्यम से आवेदन प्राप्त',
        date: '2026-02-14 01:20 PM',
        status: 'completed',
        authority: 'CSC Kotdwar Branch'
      },
      {
        stage: 'Panchayat VDO Verification',
        stageHi: 'ग्राम विकास अधिकारी द्वारा सत्यापन',
        date: '2026-02-22 04:10 PM',
        status: 'completed',
        authority: 'Block Development Office'
      },
      {
        stage: 'Aadhaar NPCI Bank Linking Check',
        stageHi: 'आधार एनपीसीआई बैंक मैपिंग जांच',
        date: '2026-03-02 10:05 AM',
        status: 'completed',
        authority: 'Public Financial Management System'
      },
      {
        stage: 'Pension Sanction Order Issued',
        stageHi: 'पेंशन स्वीकृति पत्र जारी (डाउनलोड हेतु उपलब्ध)',
        date: '2026-03-12 03:45 PM',
        status: 'completed',
        authority: 'DSWO Pauri Garhwal'
      }
    ]
  },
  'UK-GEN-2026-1193': {
    referenceNumber: 'UK-GEN-2026-1193',
    serviceId: 'domicile-certificate',
    serviceTitle: {
      en: 'Permanent Resident / Domicile Certificate (मूल निवास)',
      hi: 'स्थायी निवास प्रमाण पत्र (मूल निवास)'
    },
    applicantName: 'Anil Negi (अनिल नेगी)',
    district: 'Almora (अल्मोड़ा)',
    tehsil: 'Ranikhet (रानीखेत)',
    appliedDate: '2026-03-18',
    estimatedCompletion: '2026-04-02',
    currentStatus: 'approved_ready',
    currentOfficer: 'Tehsildar Ranikhet',
    remarks: {
      en: 'Domicile Certificate issued with secure digital signature and QR code. Ready to download.',
      hi: 'डिजिटल हस्ताक्षर एवं सुरक्षित क्यूआर कोड युक्त स्थायी निवास प्रमाण पत्र जारी कर दिया गया है।'
    },
    timeline: [
      {
        stage: 'Online Submission & Document Upload',
        stageHi: 'ऑनलाइन आवेदन एवं दस्तावेज़ अपलोड',
        date: '2026-03-18 09:30 AM',
        status: 'completed',
        authority: 'Apuni Sarkar Portal'
      },
      {
        stage: 'Ancestral Land & Educational Verification',
        stageHi: 'पुश्तैनी भूमि एवं शैक्षिक अभिलेख सत्यापन',
        date: '2026-03-22 11:20 AM',
        status: 'completed',
        authority: 'Revenue Patwari Ranikhet'
      },
      {
        stage: 'Sub-Divisional Magistrate Scrutiny',
        stageHi: 'उप-जिलाधिकारी कार्यालय समीक्षा',
        date: '2026-03-27 03:00 PM',
        status: 'completed',
        authority: 'SDM Office Ranikhet'
      },
      {
        stage: 'Certificate Issued & QR Generated',
        stageHi: 'प्रमाण पत्र जारी एवं क्यूआर तैयार',
        date: '2026-03-30 04:15 PM',
        status: 'completed',
        authority: 'Tehsildar Ranikhet'
      }
    ]
  },
  'UK-REV-2026-0312': {
    referenceNumber: 'UK-REV-2026-0312',
    serviceId: 'caste-certificate',
    serviceTitle: {
      en: 'OBC Caste Certificate (अन्य पिछड़ा वर्ग)',
      hi: 'ओबीसी जाति प्रमाण पत्र (राजस्व विभाग)'
    },
    applicantName: 'Sunita Rawat (सुनीता रावत)',
    district: 'Haridwar (हरिद्वार)',
    tehsil: 'Roorkee (रुड़की)',
    appliedDate: '2026-03-20',
    estimatedCompletion: '2026-04-04',
    currentStatus: 'clarification_needed',
    currentOfficer: 'Naib Tehsildar (Roorkee)',
    remarks: {
      en: 'Clarification Needed: Paternal non-creamy layer affidavit is illegible. Please re-upload a clear scanned copy.',
      hi: 'दस्तावेज़ सुधार अपेक्षित: पिता का नॉन-क्रीमी लेयर शपथ पत्र स्पष्ट नहीं है। कृपया स्पष्ट स्कैन पुनः अपलोड करें।'
    },
    timeline: [
      {
        stage: 'Application Registered',
        stageHi: 'आवेदन पंजीकृत',
        date: '2026-03-20 11:00 AM',
        status: 'completed',
        authority: 'Roorkee Tehsil Counter'
      },
      {
        stage: 'Document Examination',
        stageHi: 'दस्तावेज़ परीक्षण',
        date: '2026-03-26 02:15 PM',
        status: 'completed',
        authority: 'Revenue Clerk Roorkee'
      },
      {
        stage: 'Discrepancy / Query Raised',
        stageHi: 'आपत्ति / सुधार नोटिस जारी',
        date: '2026-03-28 04:30 PM',
        status: 'in_progress',
        authority: 'Naib Tehsildar Roorkee'
      },
      {
        stage: 'Awaiting Citizen Response',
        stageHi: 'नागरिक द्वारा दस्तावेज़ पुनः अपलोड की प्रतीक्षा',
        date: 'Pending Action',
        status: 'pending',
        authority: 'Citizen Portal'
      }
    ]
  }
};
