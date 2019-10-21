export class LoadExperts {
  static readonly type = '[Experts] Load Experts';

  constructor(public payload:
                {
                  query: { fullName, oecd, specialization },
                  index,
                  limit
                }
  ) {
  }
}
