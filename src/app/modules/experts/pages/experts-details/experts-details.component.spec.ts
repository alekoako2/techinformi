import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ExpertsDetailsComponent } from './experts-details.component'

describe('ExpertsDetailsComponent', () => {
  let component: ExpertsDetailsComponent
  let fixture: ComponentFixture<ExpertsDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertsDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
