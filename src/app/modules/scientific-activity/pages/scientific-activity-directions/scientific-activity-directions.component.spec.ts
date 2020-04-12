import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ScientificActivityDirectionsComponent } from './scientific-activity-directions.component'

describe('ScientificDirectionsComponent', () => {
  let component: ScientificActivityDirectionsComponent
  let fixture: ComponentFixture<ScientificActivityDirectionsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScientificActivityDirectionsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientificActivityDirectionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
