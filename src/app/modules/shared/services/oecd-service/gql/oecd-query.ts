import gql from 'graphql-tag'

export const oecdsQuery = gql`
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
