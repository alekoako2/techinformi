

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CountQrjPublicationsQuery
// ====================================================

export interface CountQrjPublicationsQuery {
  countQrjPublications: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QrjPublicationQuery
// ====================================================

export interface QrjPublicationQuery_qrjPublication_journal_translation {
  name: string | null;
}

export interface QrjPublicationQuery_qrjPublication_journal {
  code: string | null;
  translation: (QrjPublicationQuery_qrjPublication_journal_translation | null)[] | null;
}

export interface QrjPublicationQuery_qrjPublication_oecd_translation {
  name: string | null;
}

export interface QrjPublicationQuery_qrjPublication_oecd {
  code: string | null;
  translation: (QrjPublicationQuery_qrjPublication_oecd_translation | null)[] | null;
}

export interface QrjPublicationQuery_qrjPublication_translation {
  title: string | null;
  publicationAuthor: string | null;
  publicationLang: string | null;
  abstract: string | null;
}

export interface QrjPublicationQuery_qrjPublication {
  id: string;
  index: string | null;
  year: string | null;
  number: string | null;
  pages: string | null;
  inputDate: string | null;
  journal: QrjPublicationQuery_qrjPublication_journal | null;
  oecd: QrjPublicationQuery_qrjPublication_oecd | null;
  translation: (QrjPublicationQuery_qrjPublication_translation | null)[] | null;
}

export interface QrjPublicationQuery {
  qrjPublication: QrjPublicationQuery_qrjPublication;
}

export interface QrjPublicationQueryVariables {
  id: string;
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
export interface qrjPublicationQueryInput {
  author?: string | null;
  title?: string | null;
  qrjJournal?: string | null;
  oecd?: string | null;
  keywords?: (string | null)[] | null;
  yearStart?: string | null;
  yearEnd?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================