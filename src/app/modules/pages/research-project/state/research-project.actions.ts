export class LoadResearchProjects {
  static readonly type = '[ResearchProjects] Load ResearchProjects';

  constructor(public payload:
                {
                  query: { title, researchExecutors, keyword, organizationName, oecd },
                  index,
                  limit
                }
  ) {
  }
}
