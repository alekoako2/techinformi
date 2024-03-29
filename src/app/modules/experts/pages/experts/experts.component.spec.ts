import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { ExpertsComponent } from './'

describe('ExpertsComponent', () => {
  let component: ExpertsComponent
  let fixture: ComponentFixture<ExpertsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
