import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarUserToolsLanguageComponent } from './header-top-toolbar-user-tools-language.component'

describe('HeaderTopToolbarUserToolsLanguageComponent', () => {
  let component: HeaderTopToolbarUserToolsLanguageComponent
  let fixture: ComponentFixture<HeaderTopToolbarUserToolsLanguageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarUserToolsLanguageComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(
      HeaderTopToolbarUserToolsLanguageComponent
    )
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
