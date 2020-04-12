import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { QrjDescriptionComponent } from './qrj-description.component'

describe('DescriptionComponent', () => {
  let component: QrjDescriptionComponent
  let fixture: ComponentFixture<QrjDescriptionComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QrjDescriptionComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjDescriptionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
