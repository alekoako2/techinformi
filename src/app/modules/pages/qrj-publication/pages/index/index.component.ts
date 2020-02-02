import {Component, OnInit} from '@angular/core';
import {QrjPublicationService} from '../../services/qrj-publication.service';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {
    OecdsQuery_oecds,
    QrjJournalsQuery_qrjJournals,
    QrjPublicationsQuery_qrjPublications
} from '../../../../../types/operation-result-types';
import {LoadQrjPublications} from '../../state/qrj-publication.actions';
import {OecdService} from '../../../../../shared/services/oecd/oecd.service';
import {QrjJournalService} from '../../../../../shared/services/qrj-journal/qrj-journal.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
    @Select(state => state.qrjPublication.qrjPublications) qrjPublications$: Observable<QrjPublicationsQuery_qrjPublications[]>;
    @Select(state => state.qrjPublication.count) countQrjPublications$: Observable<number>;
    @Select(state => state.qrjPublication.showSpinner) showSpinner$: Observable<boolean>;

    oecdList: OecdsQuery_oecds[];
    qrjJournalList: QrjJournalsQuery_qrjJournals[];

    author: string;
    title: string;
    oecd: string;
    qrjJournal: string;

    constructor(private store: Store, private oecdService: OecdService, private qrjJournalService: QrjJournalService) {
    }

    ngOnInit() {

        this.loadQrjPublications();
        this.oecdService.loadOecds('', 0, 999).subscribe(res => {
            this.oecdList = res.oecds;
        });
        this.qrjJournalService.loadQrjJournals('', 0, 999).subscribe(res => {
            this.qrjJournalList = res.qrjJournals;
        });
    }

    loadQrjPublications(index = 0, limit = 12) {
        this.store.dispatch(new LoadQrjPublications({
            query: {
                author: this.author,
                title: this.title,
                oecd: this.oecd,
                qrjJournal: this.qrjJournal
            }, index, limit
        }));
    }

}
