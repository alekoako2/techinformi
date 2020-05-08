import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarLogoComponent } from './header-top-toolbar-logo.component'

describe('HeaderTopToolbarLogoComponent', () => {
  let component: HeaderTopToolbarLogoComponent
  let fixture: ComponentFixture<HeaderTopToolbarLogoComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarLogoComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopToolbarLogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
