import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderTopToolbarComponent } from './header-top-toolbar.component'

describe('TopToolbarComponent', () => {
  let component: HeaderTopToolbarComponent
  let fixture: ComponentFixture<HeaderTopToolbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderTopToolbarComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTopToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
