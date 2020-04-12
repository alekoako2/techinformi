import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeVerticalNavListComponent } from './home-vertical-nav-list.component'

describe('VerticalNavListComponent', () => {
  let component: HomeVerticalNavListComponent
  let fixture: ComponentFixture<HomeVerticalNavListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVerticalNavListComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVerticalNavListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
