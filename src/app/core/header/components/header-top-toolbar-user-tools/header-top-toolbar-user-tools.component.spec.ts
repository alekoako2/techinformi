import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarUserToolsComponent } from './header-top-toolbar-user-tools.component'

describe('HeaderTopToolbarUserToolsComponent', () => {
  let component: HeaderTopToolbarUserToolsComponent
  let fixture: ComponentFixture<HeaderTopToolbarUserToolsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarUserToolsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopToolbarUserToolsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
