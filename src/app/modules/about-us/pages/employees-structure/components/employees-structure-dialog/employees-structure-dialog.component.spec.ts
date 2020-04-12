import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { EmployeesStructureDialogComponent } from './employees-structure-dialog.component'

describe('EmployeesStructureDialogComponent', () => {
  let component: EmployeesStructureDialogComponent
  let fixture: ComponentFixture<EmployeesStructureDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesStructureDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesStructureDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
