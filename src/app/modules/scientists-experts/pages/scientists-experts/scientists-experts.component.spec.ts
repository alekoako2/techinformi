import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ScientistsExpertsComponent } from './scientists-experts.component'

describe('ScientistsExpertsComponent', () => {
  let component: ScientistsExpertsComponent
  let fixture: ComponentFixture<ScientistsExpertsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScientistsExpertsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ScientistsExpertsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
