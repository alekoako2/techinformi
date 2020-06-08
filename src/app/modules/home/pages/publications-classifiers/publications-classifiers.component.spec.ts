import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PublicationsClassifiersComponent } from './publications-classifiers.component'

describe('PublicationsClassifiersComponent', () => {
  let component: PublicationsClassifiersComponent
  let fixture: ComponentFixture<PublicationsClassifiersComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationsClassifiersComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsClassifiersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
