import gql from 'graphql-tag'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  token: Scalars['String']
  user: User
}

export type Department = {
  __typename?: 'Department'
  translation: Maybe<Array<Maybe<DepartmentTranslation>>>
}

export type DepartmentTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type DepartmentTranslation = {
  __typename?: 'DepartmentTranslation'
  name: Maybe<Scalars['String']>
  language: Language
}

export type Employee = {
  __typename?: 'Employee'
  id: Scalars['ID']
  inpDate: Maybe<Scalars['String']>
  workExperience: Maybe<Scalars['String']>
  email: Maybe<Scalars['String']>
  gender: Maybe<Gender>
  tel: Maybe<Scalars['String']>
  department: Maybe<Department>
  position: Maybe<EmployeePosition>
  translation: Maybe<Array<Maybe<EmployeeTranslation>>>
}

export type EmployeeTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type EmployeePosition = {
  __typename?: 'EmployeePosition'
  translation: Maybe<Array<Maybe<EmployeePositionTranslation>>>
}

export type EmployeePositionTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type EmployeePositionTranslation = {
  __typename?: 'EmployeePositionTranslation'
  name: Maybe<Scalars['String']>
  language: Language
}

export type EmployeeTranslation = {
  __typename?: 'EmployeeTranslation'
  firstName: Maybe<Scalars['String']>
  lastName: Maybe<Scalars['String']>
  language: Language
}

export type Expert = {
  __typename?: 'Expert'
  id: Scalars['ID']
  inpDate: Maybe<Scalars['String']>
  workExperience: Maybe<Scalars['String']>
  email: Maybe<Scalars['String']>
  web: Maybe<Scalars['String']>
  tel: Maybe<Scalars['String']>
  mobile: Maybe<Scalars['String']>
  publications: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<ExpertTranslation>>>
  oecds: Maybe<Array<Maybe<Oecd>>>
  languages: Maybe<Array<Maybe<Language>>>
  author: User
}

export type ExpertTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type ExpertInput = {
  inpDate: Maybe<Scalars['String']>
  email: Maybe<Scalars['String']>
  web: Maybe<Scalars['String']>
  workExperience: Maybe<Scalars['String']>
  tel: Maybe<Scalars['String']>
  mobile: Maybe<Scalars['String']>
  publications: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<ExpertTranslationInput>>>
  oecds: Maybe<Array<Maybe<OecdInput>>>
  languages: Maybe<Array<Maybe<LanguageInput>>>
}

export type ExpertQueryInput = {
  fullName: Maybe<Scalars['String']>
  oecd: Maybe<Scalars['String']>
  specialization: Maybe<Scalars['String']>
}

export type ExpertTranslation = {
  __typename?: 'ExpertTranslation'
  fullName: Maybe<Scalars['String']>
  qualification: Maybe<Scalars['String']>
  academicDegree: Maybe<Scalars['String']>
  specialization: Maybe<Scalars['String']>
  workingPlace: Maybe<Scalars['String']>
  position: Maybe<Scalars['String']>
  language: Language
}

export type ExpertTranslationInput = {
  fullName: Maybe<Scalars['String']>
  qualification: Maybe<Scalars['String']>
  academicDegree: Maybe<Scalars['String']>
  specialization: Maybe<Scalars['String']>
  workingPlace: Maybe<Scalars['String']>
  position: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export enum Gender {
  FEMALE = 'FEMALE',
  MALE = 'MALE',
}

export type Journal = {
  __typename?: 'Journal'
  id: Maybe<Scalars['String']>
  pubNumber: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<QrjTranslation>>>
}

export type JournalTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type JournalInput = {
  id: Maybe<Scalars['String']>
  pub_num: Maybe<Scalars['String']>
  translation: Maybe<Array<QrjTranslationInput>>
}

export type Keyword = {
  __typename?: 'Keyword'
  name: Maybe<Scalars['String']>
}

export type Language = {
  __typename?: 'Language'
  code: Maybe<LanguageCode>
  name: Maybe<Scalars['String']>
}

export enum LanguageCode {
  KA = 'KA',
  EN = 'EN',
  FR = 'FR',
  DE = 'DE',
  RU = 'RU',
  ES = 'ES',
  IT = 'IT',
}

export type LanguageInput = {
  code: Maybe<Scalars['String']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  signup: AuthPayload
  login: AuthPayload
  createNews: Maybe<News>
  updateNews: Maybe<News>
  deleteNews: Maybe<News>
  createOecd: Maybe<Oecd>
  updateOecd: Maybe<Oecd>
  deleteOecd: Maybe<Oecd>
  createQrjJournal: Maybe<QrjJournal>
  updateQrjJournal: Maybe<QrjJournal>
  deleteQrjJournal: Maybe<QrjJournal>
  createQrjPublication: Maybe<QrjPublication>
  updateQrjPublication: Maybe<QrjPublication>
  deleteQrjPublication: Maybe<QrjPublication>
  createQrj: Maybe<Qrj>
  updateQrj: Maybe<Qrj>
  deleteQrj: Maybe<Qrj>
  createTechnologyTransferNetwork: Maybe<TechnologyTransferNetwork>
  updateTechnologyTransferNetwork: Maybe<TechnologyTransferNetwork>
  deleteTechnologyTransferNetwork: Maybe<TechnologyTransferNetwork>
  createTechnologyTransferAndInnovationOrganization: Maybe<
    TechnologyTransferAndInnovationOrganization
  >
  updateTechnologyTransferAndInnovationOrganization: Maybe<
    TechnologyTransferAndInnovationOrganization
  >
  deleteTechnologyTransferAndInnovationOrganization: Maybe<
    TechnologyTransferAndInnovationOrganization
  >
  createExpert: Maybe<Expert>
  updateExpert: Maybe<Expert>
  deleteExpert: Maybe<Expert>
  createResearchProject: Maybe<ResearchProject>
  updateResearchProject: Maybe<ResearchProject>
  deleteResearchProject: Maybe<ResearchProject>
}

export type MutationSignupArgs = {
  input: SignupInput
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationCreateNewsArgs = {
  input: Maybe<NewsInput>
}

export type MutationUpdateNewsArgs = {
  id: Scalars['ID']
  input: Maybe<NewsInput>
}

export type MutationDeleteNewsArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateOecdArgs = {
  input: Maybe<OecdInput>
}

export type MutationUpdateOecdArgs = {
  id: Scalars['ID']
  input: Maybe<OecdInput>
}

export type MutationDeleteOecdArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateQrjJournalArgs = {
  input: Maybe<QrjJournalInput>
}

export type MutationUpdateQrjJournalArgs = {
  id: Scalars['ID']
  input: Maybe<QrjJournalInput>
}

export type MutationDeleteQrjJournalArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateQrjPublicationArgs = {
  input: Maybe<QrjPublicationInput>
}

export type MutationUpdateQrjPublicationArgs = {
  id: Scalars['ID']
  input: Maybe<QrjPublicationInput>
}

export type MutationDeleteQrjPublicationArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateQrjArgs = {
  input: Maybe<QrjInput>
}

export type MutationUpdateQrjArgs = {
  id: Scalars['ID']
  input: Maybe<QrjInput>
}

export type MutationDeleteQrjArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateTechnologyTransferNetworkArgs = {
  input: Maybe<TechnologyTransferNetworkInput>
}

export type MutationUpdateTechnologyTransferNetworkArgs = {
  id: Scalars['ID']
  input: Maybe<TechnologyTransferNetworkInput>
}

export type MutationDeleteTechnologyTransferNetworkArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateTechnologyTransferAndInnovationOrganizationArgs = {
  input: Maybe<TechnologyTransferAndInnovationOrganizationInput>
}

export type MutationUpdateTechnologyTransferAndInnovationOrganizationArgs = {
  id: Scalars['ID']
  input: Maybe<TechnologyTransferAndInnovationOrganizationInput>
}

export type MutationDeleteTechnologyTransferAndInnovationOrganizationArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateExpertArgs = {
  input: Maybe<ExpertInput>
}

export type MutationUpdateExpertArgs = {
  id: Scalars['ID']
  input: Maybe<ExpertInput>
}

export type MutationDeleteExpertArgs = {
  id: Maybe<Scalars['ID']>
}

export type MutationCreateResearchProjectArgs = {
  input: Maybe<ResearchProjectInput>
}

export type MutationUpdateResearchProjectArgs = {
  id: Scalars['ID']
  input: Maybe<ResearchProjectInput>
}

export type MutationDeleteResearchProjectArgs = {
  id: Maybe<Scalars['ID']>
}

export type News = {
  __typename?: 'News'
  id: Scalars['ID']
  translation: Maybe<Array<Maybe<NewsTranslation>>>
  author: User
}

export type NewsTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type NewsInput = {
  translation: Maybe<Array<Maybe<NewsTranslationInput>>>
}

export type NewsTranslation = {
  __typename?: 'NewsTranslation'
  title: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  content: Maybe<Scalars['String']>
  language: Language
}

export type NewsTranslationInput = {
  title: Maybe<Scalars['String']>
  description: Maybe<Scalars['String']>
  content: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export type Oecd = {
  __typename?: 'Oecd'
  id: Scalars['ID']
  code: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<OecdTranslation>>>
  author: User
}

export type OecdTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type OecdInput = {
  code: Maybe<Scalars['String']>
  translation: Maybe<Array<OecdTranslationInput>>
}

export type OecdTranslation = {
  __typename?: 'OecdTranslation'
  name: Maybe<Scalars['String']>
  language: Language
}

export type OecdTranslationInput = {
  name: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export type Qrj = {
  __typename?: 'Qrj'
  id: Scalars['ID']
  year: Maybe<Scalars['String']>
  journal: Maybe<Array<Maybe<Journal>>>
  author: User
}

export type QrjInput = {
  year: Maybe<Scalars['String']>
  journal: Maybe<Array<Maybe<JournalInput>>>
}

export type QrjJournal = {
  __typename?: 'QrjJournal'
  id: Scalars['ID']
  code: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<QrjJournalTranslation>>>
  author: User
}

export type QrjJournalTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type QrjJournalInput = {
  code: Maybe<Scalars['String']>
  translation: Maybe<Array<QrjJournalTranslationInput>>
}

export type QrjJournalTranslation = {
  __typename?: 'QrjJournalTranslation'
  name: Maybe<Scalars['String']>
  address: Maybe<Scalars['String']>
  language: Language
}

export type QrjJournalTranslationInput = {
  name: Maybe<Scalars['String']>
  address: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export type QrjPublication = {
  __typename?: 'QrjPublication'
  id: Scalars['ID']
  edited: Maybe<Scalars['Boolean']>
  index: Maybe<Scalars['String']>
  year: Maybe<Scalars['String']>
  number: Maybe<Scalars['String']>
  pages: Maybe<Scalars['String']>
  journal: Maybe<QrjJournal>
  inputDate: Maybe<Scalars['String']>
  oecd: Maybe<Oecd>
  translation: Maybe<Array<Maybe<QrjPublicationTranslation>>>
  author: User
}

export type QrjPublicationTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type QrjPublicationInput = {
  index: Maybe<Scalars['String']>
  year: Maybe<Scalars['String']>
  edited: Maybe<Scalars['Boolean']>
  number: Maybe<Scalars['String']>
  pages: Maybe<Scalars['String']>
  journal: Maybe<Scalars['String']>
  inputDate: Maybe<Scalars['String']>
  oecd: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<QrjPublicationTranslationInput>>>
}

export type QrjPublicationQueryInput = {
  index: Maybe<Scalars['String']>
  author: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  qrjJournal: Maybe<Scalars['String']>
  oecd: Maybe<Scalars['String']>
  keywords: Maybe<Array<Maybe<Scalars['String']>>>
  yearStart: Maybe<Scalars['String']>
  yearEnd: Maybe<Scalars['String']>
}

export type QrjPublicationTranslation = {
  __typename?: 'QrjPublicationTranslation'
  title: Maybe<Scalars['String']>
  publicationAuthor: Maybe<Scalars['String']>
  publicationLang: Maybe<Scalars['String']>
  abstract: Maybe<Scalars['String']>
  language: Language
}

export type QrjPublicationTranslationInput = {
  title: Maybe<Scalars['String']>
  publicationAuthor: Maybe<Scalars['String']>
  publicationLang: Maybe<Scalars['String']>
  abstract: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export type QrjTranslation = {
  __typename?: 'QrjTranslation'
  address: Maybe<Scalars['String']>
  language: Language
}

export type QrjTranslationInput = {
  address: Maybe<Scalars['String']>
  language: Maybe<LanguageCode>
}

export type Query = {
  __typename?: 'Query'
  me: Maybe<User>
  employees: Array<Employee>
  countNewses: Maybe<Scalars['Int']>
  newses: Array<News>
  news: News
  countOecds: Maybe<Scalars['Int']>
  oecds: Array<Oecd>
  oecd: Oecd
  countQrjJournals: Maybe<Scalars['Int']>
  qrjJournals: Array<QrjJournal>
  qrjJournal: QrjJournal
  countQrjPublications: Maybe<Scalars['Int']>
  qrjPublications: Array<QrjPublication>
  qrjPublication: QrjPublication
  countQrjs: Maybe<Scalars['Int']>
  qrjs: Array<Qrj>
  qrj: Qrj
  countTechnologyTransferNetworks: Maybe<Scalars['Int']>
  technologyTransferNetworks: Array<TechnologyTransferNetwork>
  technologyTransferNetwork: TechnologyTransferNetwork
  countTechnologyTransferAndInnovationOrganizations: Maybe<Scalars['Int']>
  technologyTransferAndInnovationOrganizations: Array<
    TechnologyTransferAndInnovationOrganization
  >
  technologyTransferAndInnovationOrganization: TechnologyTransferAndInnovationOrganization
  countExperts: Maybe<Scalars['Int']>
  experts: Array<Expert>
  expert: Expert
  countResearchProjects: Maybe<Scalars['Int']>
  researchProjects: Array<ResearchProject>
  researchProject: ResearchProject
}

export type QueryMeArgs = {
  language: Maybe<LanguageCode>
}

export type QueryEmployeesArgs = {
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryNewsesArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryNewsArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryOecdsArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryOecdArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryQrjJournalsArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryQrjJournalArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryCountQrjPublicationsArgs = {
  query: Maybe<QrjPublicationQueryInput>
}

export type QueryQrjPublicationsArgs = {
  query: Maybe<QrjPublicationQueryInput>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryQrjPublicationArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryQrjsArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryQrjArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryTechnologyTransferNetworksArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryTechnologyTransferNetworkArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryTechnologyTransferAndInnovationOrganizationsArgs = {
  query: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryTechnologyTransferAndInnovationOrganizationArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryCountExpertsArgs = {
  query: Maybe<ExpertQueryInput>
}

export type QueryExpertsArgs = {
  query: Maybe<ExpertQueryInput>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryExpertArgs = {
  id: Maybe<Scalars['String']>
}

export type QueryCountResearchProjectsArgs = {
  query: Maybe<ResearchProjectQueryInput>
}

export type QueryResearchProjectsArgs = {
  query: Maybe<ResearchProjectQueryInput>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
}

export type QueryResearchProjectArgs = {
  id: Maybe<Scalars['String']>
}

export type ResearchProject = {
  __typename?: 'ResearchProject'
  id: Maybe<Scalars['ID']>
  inpDate: Maybe<Scalars['String']>
  regDate: Maybe<Scalars['String']>
  startDate: Maybe<Scalars['String']>
  endDate: Maybe<Scalars['String']>
  regNumb: Maybe<Scalars['String']>
  research: Maybe<Scalars['String']>
  researchDirection: Maybe<Scalars['String']>
  researchExecutionBasis: Maybe<Scalars['String']>
  abstract: Maybe<Scalars['String']>
  annotation: Maybe<Scalars['String']>
  budget: Maybe<Scalars['Int']>
  organizationName: Maybe<Scalars['String']>
  organizationShortName: Maybe<Scalars['String']>
  organizationCode: Maybe<Scalars['String']>
  organizationHead: Maybe<Scalars['String']>
  organizationCity: Maybe<Scalars['String']>
  organizationAddress: Maybe<Scalars['String']>
  organizationIndex: Maybe<Scalars['String']>
  organizationTel: Maybe<Scalars['String']>
  organizationWeb: Maybe<Scalars['String']>
  participatingInstitutionName: Maybe<Scalars['String']>
  participatingInstitutionCountryCity: Maybe<Scalars['String']>
  participatingInstitutionTel: Maybe<Scalars['String']>
  participatingInstitutionEmail: Maybe<Scalars['String']>
  participatingInstitutionWeb: Maybe<Scalars['String']>
  leaderName: Maybe<Scalars['String']>
  leaderPosition: Maybe<Scalars['String']>
  leaderAcademicDegree: Maybe<Scalars['String']>
  leaderTel: Maybe<Scalars['String']>
  leaderMobile: Maybe<Scalars['String']>
  leaderEmail: Maybe<Scalars['String']>
  researchExecutors: Maybe<Scalars['String']>
  financing: Maybe<Scalars['String']>
  note: Maybe<Scalars['String']>
  pincode: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<ResearchProjectTranslation>>>
  oecds: Maybe<Array<Maybe<Oecd>>>
  author: User
}

export type ResearchProjectTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type ResearchProjectInput = {
  inpDate: Maybe<Scalars['String']>
  regDate: Maybe<Scalars['String']>
  startDate: Maybe<Scalars['String']>
  endDate: Maybe<Scalars['String']>
  regNumb: Maybe<Scalars['String']>
  research: Maybe<Scalars['String']>
  researchDirection: Maybe<Scalars['String']>
  researchExecutionBasis: Maybe<Scalars['String']>
  abstract: Maybe<Scalars['String']>
  annotation: Maybe<Scalars['String']>
  budget: Maybe<Scalars['Int']>
  organizationName: Maybe<Scalars['String']>
  organizationShortName: Maybe<Scalars['String']>
  organizationCode: Maybe<Scalars['String']>
  organizationHead: Maybe<Scalars['String']>
  organizationCity: Maybe<Scalars['String']>
  organizationAddress: Maybe<Scalars['String']>
  organizationIndex: Maybe<Scalars['String']>
  organizationTel: Maybe<Scalars['String']>
  organizationWeb: Maybe<Scalars['String']>
  participatingInstitutionName: Maybe<Scalars['String']>
  participatingInstitutionCountryCity: Maybe<Scalars['String']>
  participatingInstitutionTel: Maybe<Scalars['String']>
  participatingInstitutionEmail: Maybe<Scalars['String']>
  participatingInstitutionWeb: Maybe<Scalars['String']>
  leaderName: Maybe<Scalars['String']>
  leaderPosition: Maybe<Scalars['String']>
  leaderAcademicDegree: Maybe<Scalars['String']>
  leaderTel: Maybe<Scalars['String']>
  leaderMobile: Maybe<Scalars['String']>
  leaderEmail: Maybe<Scalars['String']>
  researchExecutors: Maybe<Scalars['String']>
  financing: Maybe<Scalars['String']>
  note: Maybe<Scalars['String']>
  pincode: Maybe<Scalars['String']>
  translation: Maybe<Array<Maybe<ResearchProjectTranslationInput>>>
  oecds: Maybe<Array<Maybe<OecdInput>>>
  languages: Maybe<Array<Maybe<LanguageInput>>>
}

export type ResearchProjectQueryInput = {
  title: Maybe<Scalars['String']>
  researchExecutors: Maybe<Scalars['String']>
  keyword: Maybe<Scalars['String']>
  organizationName: Maybe<Scalars['String']>
  oecd: Maybe<Scalars['String']>
}

export type ResearchProjectTranslation = {
  __typename?: 'ResearchProjectTranslation'
  title: Maybe<Scalars['String']>
  key: Maybe<Array<Maybe<Keyword>>>
  language: Language
}

export type ResearchProjectTranslationInput = {
  title: Maybe<Scalars['String']>
  key: Maybe<Array<Maybe<Scalars['String']>>>
  language: Maybe<LanguageCode>
}

export enum Role {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  CUSTOMER = 'CUSTOMER',
}

export type SignupInput = {
  email: Scalars['String']
  password: Scalars['String']
  role: Role
  translation: Maybe<Array<UserTranslationInput>>
}

export type TechnologyTransferAndInnovationOrganization = {
  __typename?: 'TechnologyTransferAndInnovationOrganization'
  id: Scalars['ID']
  url: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
  region: Maybe<Scalars['String']>
  author: User
}

export type TechnologyTransferAndInnovationOrganizationInput = {
  url: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
  region: Maybe<Scalars['String']>
}

export type TechnologyTransferNetwork = {
  __typename?: 'TechnologyTransferNetwork'
  id: Scalars['ID']
  url: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
  region: Maybe<Scalars['String']>
  author: User
}

export type TechnologyTransferNetworkInput = {
  url: Maybe<Scalars['String']>
  title: Maybe<Scalars['String']>
  text: Maybe<Scalars['String']>
  region: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  email: Scalars['String']
  role: Role
  createdAt: Scalars['String']
  translation: Maybe<Array<UserTranslation>>
  newses: Array<News>
  oecds: Array<Oecd>
  qrjJournals: Array<QrjJournal>
  qrjPublications: Array<QrjPublication>
  qrjs: Array<Qrj>
  technologyTransferNetworks: Array<TechnologyTransferNetwork>
  technologyTransferAndInnovationOrganizations: Array<
    TechnologyTransferAndInnovationOrganization
  >
  experts: Array<Expert>
  researchProjects: Array<ResearchProject>
}

export type UserTranslationArgs = {
  language: Maybe<LanguageCode>
}

export type UserNewsesArgs = {
  language: LanguageCode
}

export type UserOecdsArgs = {
  language: LanguageCode
}

export type UserQrjJournalsArgs = {
  language: LanguageCode
}

export type UserQrjPublicationsArgs = {
  language: LanguageCode
}

export type UserQrjsArgs = {
  language: LanguageCode
}

export type UserTechnologyTransferNetworksArgs = {
  language: LanguageCode
}

export type UserTechnologyTransferAndInnovationOrganizationsArgs = {
  language: LanguageCode
}

export type UserExpertsArgs = {
  language: LanguageCode
}

export type UserResearchProjectsArgs = {
  language: LanguageCode
}

export type UserTranslation = {
  __typename?: 'UserTranslation'
  firstName: Maybe<Scalars['String']>
  lastName: Maybe<Scalars['String']>
  language: Language
}

export type UserTranslationInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  language: LanguageCode
}

export type ExpertsQueryVariables = {
  languageCode: Maybe<LanguageCode>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
  query: Maybe<ExpertQueryInput>
}

export type ExpertsQuery = { __typename?: 'Query' } & Pick<
  Query,
  'countExperts'
> & {
    experts: Array<
      { __typename?: 'Expert' } & Pick<
        Expert,
        | 'id'
        | 'workExperience'
        | 'inpDate'
        | 'email'
        | 'web'
        | 'tel'
        | 'mobile'
        | 'publications'
      > & {
          translation: Maybe<
            Array<
              Maybe<
                { __typename?: 'ExpertTranslation' } & Pick<
                  ExpertTranslation,
                  | 'fullName'
                  | 'qualification'
                  | 'academicDegree'
                  | 'specialization'
                  | 'workingPlace'
                  | 'position'
                >
              >
            >
          >
          oecds: Maybe<
            Array<
              Maybe<
                { __typename?: 'Oecd' } & Pick<Oecd, 'code'> & {
                    translation: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'OecdTranslation' } & Pick<
                            OecdTranslation,
                            'name'
                          >
                        >
                      >
                    >
                  }
              >
            >
          >
          languages: Maybe<
            Array<
              Maybe<
                { __typename?: 'Language' } & Pick<Language, 'code' | 'name'>
              >
            >
          >
        }
    >
  }

export type OecdsQueryVariables = {
  languageCode: Maybe<LanguageCode>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
  query: Maybe<Scalars['String']>
}

export type OecdsQuery = { __typename?: 'Query' } & {
  oecds: Array<
    { __typename?: 'Oecd' } & Pick<Oecd, 'id' | 'code'> & {
        translation: Maybe<
          Array<
            Maybe<
              { __typename?: 'OecdTranslation' } & Pick<OecdTranslation, 'name'>
            >
          >
        >
      }
  >
}

export type QrjJournalsQueryVariables = {
  languageCode: Maybe<LanguageCode>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
  query: Maybe<Scalars['String']>
}

export type QrjJournalsQuery = { __typename?: 'Query' } & {
  qrjJournals: Array<
    { __typename?: 'QrjJournal' } & Pick<QrjJournal, 'id' | 'code'> & {
        translation: Maybe<
          Array<
            Maybe<
              { __typename?: 'QrjJournalTranslation' } & Pick<
                QrjJournalTranslation,
                'name' | 'address'
              >
            >
          >
        >
      }
  >
}

export type QrjPublicationsQueryVariables = {
  languageCode: Maybe<LanguageCode>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
  query: Maybe<QrjPublicationQueryInput>
}

export type QrjPublicationsQuery = { __typename?: 'Query' } & Pick<
  Query,
  'countQrjPublications'
> & {
    qrjPublications: Array<
      { __typename?: 'QrjPublication' } & Pick<
        QrjPublication,
        'id' | 'index' | 'year' | 'number' | 'pages' | 'inputDate'
      > & {
          journal: Maybe<
            { __typename?: 'QrjJournal' } & Pick<QrjJournal, 'code'> & {
                translation: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'QrjJournalTranslation' } & Pick<
                        QrjJournalTranslation,
                        'name'
                      >
                    >
                  >
                >
              }
          >
          oecd: Maybe<
            { __typename?: 'Oecd' } & Pick<Oecd, 'code'> & {
                translation: Maybe<
                  Array<
                    Maybe<
                      { __typename?: 'OecdTranslation' } & Pick<
                        OecdTranslation,
                        'name'
                      >
                    >
                  >
                >
              }
          >
          translation: Maybe<
            Array<
              Maybe<
                { __typename?: 'QrjPublicationTranslation' } & Pick<
                  QrjPublicationTranslation,
                  'title' | 'publicationAuthor' | 'publicationLang' | 'abstract'
                >
              >
            >
          >
        }
    >
  }

export type ResearchProjectsQueryVariables = {
  languageCode: Maybe<LanguageCode>
  first: Maybe<Scalars['Int']>
  skip: Maybe<Scalars['Int']>
  query: Maybe<ResearchProjectQueryInput>
}

export type ResearchProjectsQuery = { __typename?: 'Query' } & Pick<
  Query,
  'countResearchProjects'
> & {
    researchProjects: Array<
      { __typename?: 'ResearchProject' } & Pick<
        ResearchProject,
        | 'id'
        | 'inpDate'
        | 'regDate'
        | 'startDate'
        | 'endDate'
        | 'regNumb'
        | 'research'
        | 'researchDirection'
        | 'researchExecutionBasis'
        | 'abstract'
        | 'annotation'
        | 'budget'
        | 'organizationName'
        | 'organizationShortName'
        | 'organizationCode'
        | 'organizationHead'
        | 'organizationCity'
        | 'organizationAddress'
        | 'organizationIndex'
        | 'organizationTel'
        | 'organizationWeb'
        | 'participatingInstitutionName'
        | 'participatingInstitutionCountryCity'
        | 'participatingInstitutionTel'
        | 'participatingInstitutionEmail'
        | 'participatingInstitutionWeb'
        | 'leaderName'
        | 'leaderPosition'
        | 'leaderAcademicDegree'
        | 'leaderTel'
        | 'leaderMobile'
        | 'leaderEmail'
        | 'researchExecutors'
        | 'financing'
        | 'note'
        | 'pincode'
      > & {
          translation: Maybe<
            Array<
              Maybe<
                { __typename?: 'ResearchProjectTranslation' } & Pick<
                  ResearchProjectTranslation,
                  'title'
                > & {
                    key: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Keyword' } & Pick<Keyword, 'name'>
                        >
                      >
                    >
                  }
              >
            >
          >
          oecds: Maybe<
            Array<
              Maybe<
                { __typename?: 'Oecd' } & Pick<Oecd, 'code'> & {
                    translation: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'OecdTranslation' } & Pick<
                            OecdTranslation,
                            'name'
                          >
                        >
                      >
                    >
                  }
              >
            >
          >
        }
    >
  }

export const ExpertsDocument = gql`
  query Experts(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: expertQueryInput
  ) {
    experts(query: $query, first: $first, skip: $skip) {
      id
      workExperience
      inpDate
      email
      web
      tel
      mobile
      publications
      translation(language: $languageCode) {
        fullName
        qualification
        academicDegree
        specialization
        workingPlace
        position
      }
      oecds {
        code
        translation(language: $languageCode) {
          name
        }
      }
      languages {
        code
        name
      }
    }
    countExperts(query: $query)
  }
`

@Injectable({
  providedIn: 'root',
})
export class ExpertsGQL extends Apollo.Query<
  ExpertsQuery,
  ExpertsQueryVariables
> {
  document = ExpertsDocument
}
export const OecdsDocument = gql`
  query Oecds(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: String
  ) {
    oecds(query: $query, first: $first, skip: $skip) {
      id
      code
      translation(language: $languageCode) {
        name
      }
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class OecdsGQL extends Apollo.Query<OecdsQuery, OecdsQueryVariables> {
  document = OecdsDocument
}
export const QrjJournalsDocument = gql`
  query QrjJournals(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: String
  ) {
    qrjJournals(query: $query, first: $first, skip: $skip) {
      id
      code
      translation(language: $languageCode) {
        name
        address
      }
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class QrjJournalsGQL extends Apollo.Query<
  QrjJournalsQuery,
  QrjJournalsQueryVariables
> {
  document = QrjJournalsDocument
}
export const QrjPublicationsDocument = gql`
  query QrjPublications(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: qrjPublicationQueryInput
  ) {
    qrjPublications(query: $query, first: $first, skip: $skip) {
      id
      index
      year
      number
      pages
      inputDate
      journal {
        code
        translation(language: $languageCode) {
          name
        }
      }
      oecd {
        code
        translation(language: $languageCode) {
          name
        }
      }
      translation(language: $languageCode) {
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
    countQrjPublications(query: $query)
  }
`

@Injectable({
  providedIn: 'root',
})
export class QrjPublicationsGQL extends Apollo.Query<
  QrjPublicationsQuery,
  QrjPublicationsQueryVariables
> {
  document = QrjPublicationsDocument
}
export const ResearchProjectsDocument = gql`
  query ResearchProjects(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: ResearchProjectQueryInput
  ) {
    researchProjects(query: $query, first: $first, skip: $skip) {
      id
      inpDate
      regDate
      startDate
      endDate
      regNumb
      research
      researchDirection
      researchExecutionBasis
      abstract
      annotation
      budget
      organizationName
      organizationShortName
      organizationCode
      organizationHead
      organizationCity
      organizationAddress
      organizationIndex
      organizationTel
      organizationWeb
      participatingInstitutionName
      participatingInstitutionCountryCity
      participatingInstitutionTel
      participatingInstitutionEmail
      participatingInstitutionWeb
      leaderName
      leaderPosition
      leaderAcademicDegree
      leaderTel
      leaderMobile
      leaderEmail
      researchExecutors
      financing
      note
      pincode
      translation(language: $languageCode) {
        title
        key {
          name
        }
      }
      oecds {
        code
        translation(language: $languageCode) {
          name
        }
      }
    }
    countResearchProjects(query: $query)
  }
`

@Injectable({
  providedIn: 'root',
})
export class ResearchProjectsGQL extends Apollo.Query<
  ResearchProjectsQuery,
  ResearchProjectsQueryVariables
> {
  document = ResearchProjectsDocument
}
