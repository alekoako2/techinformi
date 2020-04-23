import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ResearchProjectDetailsComponent } from './research-project-details.component'

describe('ResearchProjectDetailsComponent', () => {
  let component: ResearchProjectDetailsComponent
  let fixture: ComponentFixture<ResearchProjectDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchProjectDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchProjectDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
