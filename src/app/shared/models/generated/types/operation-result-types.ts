

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ExpertsQuery
// ====================================================

export interface ExpertsQuery_experts_translation {
  fullName: string | null;
  qualification: string | null;
  academicDegree: string | null;
  specialization: string | null;
  workingPlace: string | null;
  position: string | null;
}

export interface ExpertsQuery_experts_oecds_translation {
  name: string | null;
}

export interface ExpertsQuery_experts_oecds {
  code: string | null;
  translation: (ExpertsQuery_experts_oecds_translation | null)[] | null;
}

export interface ExpertsQuery_experts_languages {
  code: LanguageCode | null;
  name: string | null;
}

export interface ExpertsQuery_experts {
  id: string;
  workExperience: string | null;
  inpDate: string | null;
  email: string | null;
  web: string | null;
  tel: string | null;
  mobile: string | null;
  publications: string | null;
  translation: (ExpertsQuery_experts_translation | null)[] | null;
  oecds: (ExpertsQuery_experts_oecds | null)[] | null;
  languages: (ExpertsQuery_experts_languages | null)[] | null;
}

export interface ExpertsQuery {
  experts: ExpertsQuery_experts[];
  countExperts: number | null;
}

export interface ExpertsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: expertQueryInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: OecdsQuery
// ====================================================

export interface OecdsQuery_oecds_translation {
  name: string | null;
}

export interface OecdsQuery_oecds {
  id: string;
  code: string | null;
  translation: (OecdsQuery_oecds_translation | null)[] | null;
}

export interface OecdsQuery {
  oecds: OecdsQuery_oecds[];
}

export interface OecdsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjJournalsQuery
// ====================================================

export interface QrjJournalsQuery_qrjJournals_translation {
  name: string | null;
  address: string | null;
}

export interface QrjJournalsQuery_qrjJournals {
  id: string;
  code: string | null;
  translation: (QrjJournalsQuery_qrjJournals_translation | null)[] | null;
}

export interface QrjJournalsQuery {
  qrjJournals: QrjJournalsQuery_qrjJournals[];
}

export interface QrjJournalsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjPublicationsQuery
// ====================================================

export interface QrjPublicationsQuery_qrjPublications_journal_translation {
  name: string | null;
}

export interface QrjPublicationsQuery_qrjPublications_journal {
  code: string | null;
  translation: (QrjPublicationsQuery_qrjPublications_journal_translation | null)[] | null;
}

export interface QrjPublicationsQuery_qrjPublications_oecd_translation {
  name: string | null;
}

export interface QrjPublicationsQuery_qrjPublications_oecd {
  code: string | null;
  translation: (QrjPublicationsQuery_qrjPublications_oecd_translation | null)[] | null;
}

export interface QrjPublicationsQuery_qrjPublications_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface QrjPublicationsQuery_qrjPublications {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: QrjPublicationsQuery_qrjPublications_journal | null;
  oecd: QrjPublicationsQuery_qrjPublications_oecd | null;
  translation: (QrjPublicationsQuery_qrjPublications_translation | null)[] | null;
}

export interface QrjPublicationsQuery {
  qrjPublications: QrjPublicationsQuery_qrjPublications[];
  countQrjPublications: number | null;
}

export interface QrjPublicationsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: qrjPublicationQueryInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResearchProjectsQuery
// ====================================================

export interface ResearchProjectsQuery_researchProjects_translation_key {
  name: string | null;
}

export interface ResearchProjectsQuery_researchProjects_translation {
  title: string | null;
  key: (ResearchProjectsQuery_researchProjects_translation_key | null)[] | null;
}

export interface ResearchProjectsQuery_researchProjects_oecds_translation {
  name: string | null;
}

export interface ResearchProjectsQuery_researchProjects_oecds {
  code: string | null;
  translation: (ResearchProjectsQuery_researchProjects_oecds_translation | null)[] | null;
}

export interface ResearchProjectsQuery_researchProjects {
  id: string | null;
  inpDate: string | null;
  regDate: string | null;
  startDate: string | null;
  endDate: string | null;
  regNumb: string | null;
  research: string | null;
  researchDirection: string | null;
  researchExecutionBasis: string | null;
  abstract: string | null;
  annotation: string | null;
  budget: number | null;
  organizationName: string | null;
  organizationShortName: string | null;
  organizationCode: string | null;
  organizationHead: string | null;
  organizationCity: string | null;
  organizationAddress: string | null;
  organizationIndex: string | null;
  organizationTel: string | null;
  organizationWeb: string | null;
  participatingInstitutionName: string | null;
  participatingInstitutionCountryCity: string | null;
  participatingInstitutionTel: string | null;
  participatingInstitutionEmail: string | null;
  participatingInstitutionWeb: string | null;
  leaderName: string | null;
  leaderPosition: string | null;
  leaderAcademicDegree: string | null;
  leaderTel: string | null;
  leaderMobile: string | null;
  leaderEmail: string | null;
  researchExecutors: string | null;
  financing: string | null;
  note: string | null;
  pincode: string | null;
  translation: (ResearchProjectsQuery_researchProjects_translation | null)[] | null;
  oecds: (ResearchProjectsQuery_researchProjects_oecds | null)[] | null;
}

export interface ResearchProjectsQuery {
  researchProjects: ResearchProjectsQuery_researchProjects[];
  countResearchProjects: number | null;
}

export interface ResearchProjectsQueryVariables {
  languageCode?: LanguageCode | null;
  first?: number | null;
  skip?: number | null;
  query?: ResearchProjectQueryInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LanguageCode {
  DE = "DE",
  EN = "EN",
  ES = "ES",
  FR = "FR",
  IT = "IT",
  KA = "KA",
  RU = "RU",
}

// null
export interface expertQueryInput {
  fullName?: string | null;
  oecd?: string | null;
  specialization?: string | null;
}

// null
export interface qrjPublicationQueryInput {
  index?: string | null;
  author?: string | null;
  title?: string | null;
  qrjJournal?: string | null;
  oecd?: string | null;
  keywords?: (string | null)[] | null;
  yearStart?: string | null;
  yearEnd?: string | null;
}

// null
export interface ResearchProjectQueryInput {
  title?: string | null;
  researchExecutors?: string | null;
  keyword?: string | null;
  organizationName?: string | null;
  oecd?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================