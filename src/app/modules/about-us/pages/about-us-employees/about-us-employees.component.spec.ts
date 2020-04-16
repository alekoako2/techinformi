import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsEmployeesComponent } from './about-us-employees.component'

describe('AboutUsEmployeesComponent', () => {
  let component: AboutUsEmployeesComponent
  let fixture: ComponentFixture<AboutUsEmployeesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsEmployeesComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsEmployeesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
