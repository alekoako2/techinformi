import gql from 'graphql-tag'

export const researchProjectsQuery = gql`
  query ResearchProjects(
    $languageCode: LanguageCode
    $first: Int
    $skip: Int
    $query: ResearchProjectQueryInput
  ) {
    researchProjects(
      language: $languageCode
      query: $query
      first: $first
      skip: $skip
    ) {
      id
      title
      author
      eWords
      organization
      kvlev_mimart_kodi
      fromYear
      toYear
    }

    countResearchProjects(query: $query)
  }
`

export const researchProjectQuery = gql`
  query ResearchProject($id: String, $languageCode: LanguageCode) {
    researchProject(id: $id, language: $languageCode) {
      id
      toYear
      eWords
      final
      title
      author
      organization
      fromYear
      inp_tarigi
      reg_tarigi
      reg_numb
      geo_dasaxeleba
      eng_dasaxeleba
      kvleva
      kvlev_mimart
      kvlev_mimart_kodi
      kvlev_mimart_kodi2
      kvlev_mimart_kodi3
      geo_key
      eng_key
      safudz
      referati
      anotaciaeng
      start_samushao_tarigi
      end_samushao_tarigi
      biujeti
      org_dasaxeleba
      org_short_dasaxeleba
      org_kodi
      org_ufrosi
      org_qalaqi
      org_misamarti
      org_indexi
      org_telefoni
      org_webi
      tan_dasaxeleba
      tan_qvekana_qalaqi
      tan_telefoni
      tan_email
      tan_webi
      xel_gvari_saxeli
      xel_tanamdeboba
      xel_xarisxi
      xel_bin_telefoni
      xel_sam_telefoni
      xel_email
      shemsruleblebis
      financing
      shenishvna
      PINCODE
      username
      oecd1
      oecd2
      oecd3
      org_dasaxeleba_eng
      org_short_dasaxeleba_eng
      org_email
      xel_gvari_saxeli_eng
    }
  }
`
