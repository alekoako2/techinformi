import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScientificActivityProjectsComponent } from './scientific-activity-projects.component'

describe('ProjectsComponent', () => {
  let component: ScientificActivityProjectsComponent
  let fixture: ComponentFixture<ScientificActivityProjectsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScientificActivityProjectsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificActivityProjectsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
