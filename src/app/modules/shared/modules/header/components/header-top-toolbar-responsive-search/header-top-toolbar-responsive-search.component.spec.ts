import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarResponsiveSearchComponent } from './header-top-toolbar-responsive-search.component'

describe('ResponsiveSearchComponent', () => {
  let component: HeaderTopToolbarResponsiveSearchComponent
  let fixture: ComponentFixture<HeaderTopToolbarResponsiveSearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarResponsiveSearchComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopToolbarResponsiveSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
