import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsEmployeesStructureDialogComponent } from './about-us-employees-structure-dialog.component'

describe('EmployeesStructureDialogComponent', () => {
  let component: AboutUsEmployeesStructureDialogComponent
  let fixture: ComponentFixture<AboutUsEmployeesStructureDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsEmployeesStructureDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsEmployeesStructureDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
