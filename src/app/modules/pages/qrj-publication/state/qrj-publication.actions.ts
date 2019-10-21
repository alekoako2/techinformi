export class LoadQrjPublications {
  static readonly type = '[QrjPublications] Load Publications';

  constructor(public payload:
                {
                  query: { author, title, oecd, qrjJournal },
                  index,
                  limit
                }
  ) {
  }
}
