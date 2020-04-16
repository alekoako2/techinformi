import gql from 'graphql-tag'

export const qrjPublicationsQuery = gql`
  query QrjPublicationsQuery(
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
