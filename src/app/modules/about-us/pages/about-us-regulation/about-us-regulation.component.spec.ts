import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsRegulationComponent } from './about-us-regulation.component'

describe('AboutUsRegulationComponent', () => {
  let component: AboutUsRegulationComponent
  let fixture: ComponentFixture<AboutUsRegulationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsRegulationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsRegulationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
