import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScientificActivityPublicationsComponent } from './scientific-activity-publications.component'

describe('ScientificActivityPublicationsComponent', () => {
  let component: ScientificActivityPublicationsComponent
  let fixture: ComponentFixture<ScientificActivityPublicationsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScientificActivityPublicationsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificActivityPublicationsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
