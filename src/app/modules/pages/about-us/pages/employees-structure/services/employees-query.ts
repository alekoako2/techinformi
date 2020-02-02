import gql from 'graphql-tag';

export const employeesQuery = gql`
  query EmployeesQuery($languageCode:LanguageCode){
    employees(query:$query, first:$first, skip:$skip){
      id
      index
      year
      number
      pages
      inputDate
      journal{
        code
        translation(language:$languageCode){
          name
        }
      }
      oecd{
        code
        translation(language:$languageCode){
          name
        }
      }
      translation(language:$languageCode){
        title
        publicationAuthor
        publicationLang
        abstract
      }
    }
  }`;
