import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterBackToTopComponent } from './footer-back-to-top.component'

describe('FooterBackToTopComponent', () => {
  let component: FooterBackToTopComponent
  let fixture: ComponentFixture<FooterBackToTopComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterBackToTopComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBackToTopComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
