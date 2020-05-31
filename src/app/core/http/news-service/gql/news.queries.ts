import gql from 'graphql-tag'

export const newsesQuery = gql`
  query Newses(
    $languageCode: LanguageCode
    $query: NewsQueryInput
    $first: Int
    $skip: Int
    $orderBy: String
  ) {
    newses(query: $query, first: $first, skip: $skip, orderBy: $orderBy) {
      id
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
    countNewses(query: $query)
  }
`

export const newsQuery = gql`
  query News($languageCode: LanguageCode, $id: ID) {
    news(id: $id) {
      translation(language: $languageCode) {
        title
        description
        content
      }
    }
  }
`
