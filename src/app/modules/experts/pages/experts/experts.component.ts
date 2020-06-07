import { Component, OnInit } from '@angular/core'

import { ExpertsQuery } from '@graphql'
import { ProgressBarService } from '@services/progress-bar-service'
import { ExpertsService } from '@http/scientists-experts-service'
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.scss'],
})
export class ExpertsComponent implements OnInit {
  data: ExpertsQuery

  skeleton = true

  pageIndex = 0
  pageSize = 10

  expertsForm: FormGroup

  constructor(
    private expertsService: ExpertsService,
    private progressBarService: ProgressBarService,
    private fb: FormBuilder
  ) {
    this.progressBarService.show(true)
  }

  ngOnInit(): void {
    this.buildForm()
    this.loadExperts()
  }

  buildForm = (): void => {
    this.expertsForm = this.fb.group({
      author: [null],
      oecd: [null],
      specialization: [null],
    })
  }

  loadExperts = (): void => {
    this.skeleton = true

    this.expertsService
      .loadExperts(
        {
          oecd: this.expertsForm.get('oecd').value,
          translation: {
            fullName: this.expertsForm.get('author').value,
            specialization: this.expertsForm.get('specialization').value,
          },
        },
        this.pageIndex,
        this.pageSize
      )
      .subscribe((res: ExpertsQuery) => {
        this.data = res
        this.skeleton = false
        this.progressBarService.show(false)
      })
  }

  loadPressed(event): void {
    this.pageIndex = event.pageIndex
    this.pageSize = event.pageSize
    this.loadExperts()
  }

  searchPressed(): void {
    this.pageIndex = 0
    this.loadExperts()
  }

  transformUrl(expert): string {
    return expert.translation[0].fullName.split(' ').join('-') + '/' + expert.id
  }
}
