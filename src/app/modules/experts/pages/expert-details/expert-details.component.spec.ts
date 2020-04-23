import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ExpertDetailsComponent } from './'

describe('ExpertDetailsComponent', () => {
  let component: ExpertDetailsComponent
  let fixture: ComponentFixture<ExpertDetailsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExpertDetailsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDetailsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
