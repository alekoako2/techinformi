import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsEmployeesStructureComponent } from './about-us-employees-structure.component'

describe('AboutUsEmployeesStructureComponent', () => {
  let component: AboutUsEmployeesStructureComponent
  let fixture: ComponentFixture<AboutUsEmployeesStructureComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsEmployeesStructureComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsEmployeesStructureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
