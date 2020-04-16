import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsGeneralComponent } from './about-us-general.component'

describe('AboutUsGeneralComponent', () => {
  let component: AboutUsGeneralComponent
  let fixture: ComponentFixture<AboutUsGeneralComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsGeneralComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsGeneralComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
