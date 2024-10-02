export enum UserRole {
  JOB_SEEKER = "JOB_SEEKER",
  EMPLOYER = "EMPLOYER",
  ADMIN = "ADMIN",
}

export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  CONTRACT = "CONTRACT",
  TEMPORARY = "TEMPORARY",
  INTERN = "INTERN",
}

export enum LanguageProficiency {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  FLUENT = "FLUENT",
}

export enum ApplicationStatus {
  APPLIED = "APPLIED",
  INTERVIEWING = "INTERVIEWING",
  OFFERED = "OFFERED",
  REJECTED = "REJECTED",
}

export interface WorkExperienceInput {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  responsibilities: string;
}

export interface EducationInput {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: Date;
}

export interface CertificationInput {
  name: string;
  issuer: string;
  dateObtained: Date;
}

export interface JobPreferencesInput {
  preferredIndustry: string;
  preferredLocation: string;
  preferredJobType: JobType;
}

export interface LanguageInput {
  language: string;
  proficiency: LanguageProficiency;
}

export interface SocialLinksInput {
  linkedIn: string;
  github: string;
  portfolio: string;
}

export interface ApplicationHistoryInput {
  jobId: string;
  applicationDate: Date;
  status: ApplicationStatus;
}

export interface CreateUserInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber?: string;
  role: UserRole;
  profilePicture?: string;
  location?: string;
  workExperience?: WorkExperienceInput[];
  education?: EducationInput[];
  skills?: string[];
  certifications?: CertificationInput[];
  jobPreferences?: JobPreferencesInput;
  languages?: LanguageInput[];
  socialLinks?: SocialLinksInput;
  isPremium?: boolean;
  applicationHistory?: ApplicationHistoryInput[];
  jobFitScore?: number;
  accountCreated: Date;
  profileLastUpdated: Date;
}
