import gql from 'graphql-tag'

export const qrjJournalsQuery = gql`
  query QrjJournalsQuery(
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
