import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeSlickCarouselComponent } from './home-slick-carousel.component'

describe('HomeSlickCarouselComponent', () => {
  let component: HomeSlickCarouselComponent
  let fixture: ComponentFixture<HomeSlickCarouselComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSlickCarouselComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlickCarouselComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
