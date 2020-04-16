import gql from 'graphql-tag'

export const expertsQuery = gql`
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
