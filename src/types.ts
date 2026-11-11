export type Language = 'en' | 'hi';
export type FontSize = 'normal' | 'large' | 'xlarge';

export type PageId = 'home' | 'assistant' | 'services' | 'checklist' | 'guide' | 'tracker';

export interface DocumentItem {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: {
    en: string;
    hi: string;
  };
  required: boolean;
  acceptedFormats: string[];
  maxSizeMB?: number;
  tip?: {
    en: string;
    hi: string;
  };
}

export interface ApplicationStep {
  stepNumber: number;
  title: {
    en: string;
    hi: string;
  };
  instruction: {
    en: string;
    hi: string;
  };
  substeps?: {
    en: string[];
    hi: string[];
  };
  caution?: {
    en: string;
    hi: string;
  };
}

export type ServiceCategory =
  | 'revenue_identity'
  | 'civil_registration'
  | 'social_welfare'
  | 'student_services'
  | 'land_administration'
  | 'certificates'
  | 'revenue'
  | 'vital_records';

export type ServiceType = 'certificate' | 'registration' | 'scheme' | 'guidance';

export type ApplicationMode = 'apuni_sarkar_online' | 'department_portal' | 'offline_in_person' | 'hybrid';

export interface ServiceItem {
  id: string;
  iconName:
    | 'FileText'
    | 'ShieldCheck'
    | 'Home'
    | 'Baby'
    | 'HeartPulse'
    | 'HandHeart'
    | 'CreditCard'
    | 'Scroll'
    | 'GraduationCap'
    | 'Building2'
    | 'Landmark'
    | 'Award'
    | 'BookOpen'
    | 'Compass'
    | 'FileCheck'
    | 'Layers';
  code: string;
  title: {
    en: string;
    hi: string;
  };
  department: {
    en: string;
    hi: string;
  };
  category: ServiceCategory;
  serviceType: ServiceType;
  applicationMode: ApplicationMode;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  officialPortalUrl: string;
  officialPortalName?: {
    en: string;
    hi: string;
  };
  shortDesc: {
    en: string;
    hi: string;
  };
  fullDesc: {
    en: string;
    hi: string;
  };
  eligibility: {
    en: string[];
    hi: string[];
  };
  documents: DocumentItem[];
  steps: ApplicationStep[];
  estimatedDays: number;
  rtsGuarantee: {
    en: string;
    hi: string;
  };
  officialFee: {
    en: string;
    hi: string;
  };
  importantNotes: {
    en: string[];
    hi: string[];
  };
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  language: Language;
  isDemonstration?: boolean;
  recommendedServiceId?: string;
  quickActions?: Array<{
    label: string;
    targetPage: PageId;
    serviceId?: string;
  }>;
  sources?: Array<{
    id: string;
    sourceTitle: string;
    sourceUrl: string;
    governmentDepartment: string;
    informationSupported: string;
    verificationDate: string | null;
    verificationStatus: 'verified' | 'pending' | 'unverified';
    officialReferenceNote?: string;
  }>;
  retrievedService?: {
    serviceId: string;
    serviceName: string;
    department: string;
    responsibleAuthority: string;
    officialUrl: string;
    verificationStatus: 'verified' | 'pending' | 'unverified';
    lastVerified: string | null;
    fees: string | null;
    processingTime: string | null;
  } | null;
  fieldReport?: {
    serviceId: string;
    serviceName: string;
    overallStatus: 'verified' | 'pending' | 'unverified';
    lastVerified: string | null;
    verifiedFields: string[];
    unverifiedFields: string[];
    missingOrNullFields: string[];
    feesNote: string;
    processingTimeNote: string;
  } | null;
}

export interface TrackerRecord {
  referenceNumber: string;
  serviceId: string;
  serviceTitle: {
    en: string;
    hi: string;
  };
  applicantName: string;
  district: string;
  tehsil: string;
  appliedDate: string;
  estimatedCompletion: string;
  currentStatus: 'submitted' | 'under_verification' | 'approver_review' | 'approved_ready' | 'clarification_needed';
  currentOfficer: string;
  remarks: {
    en: string;
    hi: string;
  };
  timeline: Array<{
    stage: string;
    stageHi: string;
    date: string;
    status: 'completed' | 'in_progress' | 'pending';
    authority: string;
  }>;
}
