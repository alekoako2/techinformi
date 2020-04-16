import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import { ProgressBarService } from '@services/progress-bar-service'
import { SidenavService } from '@services/sidenav-service'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  @ViewChild('sidenav') sidenav: MatSidenav

  title = 'techinformi'
  progressBar$ = this.progressBarService.progressBar

  constructor(
    private sidenavService: SidenavService,
    private progressBarService: ProgressBarService
  ) {}

  ngOnInit(): void {
    this.sidenavService.sidenav.subscribe(() => this.sidenav.toggle())
  }

  consolelog() {
    console.log('asdasd')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.consolelog()
  }
}
