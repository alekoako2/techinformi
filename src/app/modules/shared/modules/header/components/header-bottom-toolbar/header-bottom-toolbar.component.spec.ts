import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderBottomToolbarComponent } from './header-bottom-toolbar.component'

describe('HeaderBottomToolbarComponent', () => {
  let component: HeaderBottomToolbarComponent
  let fixture: ComponentFixture<HeaderBottomToolbarComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBottomToolbarComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBottomToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
