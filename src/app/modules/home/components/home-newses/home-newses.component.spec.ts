import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { HomeNewsesComponent } from './home-newses.component'

describe('HomeNewsesComponent', () => {
  let component: HomeNewsesComponent
  let fixture: ComponentFixture<HomeNewsesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewsesComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
