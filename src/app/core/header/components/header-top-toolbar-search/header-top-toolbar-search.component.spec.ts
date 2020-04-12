import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarSearchComponent } from './header-top-toolbar-search.component'

describe('HeaderTopToolbarSearchComponent', () => {
  let component: HeaderTopToolbarSearchComponent
  let fixture: ComponentFixture<HeaderTopToolbarSearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarSearchComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopToolbarSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
