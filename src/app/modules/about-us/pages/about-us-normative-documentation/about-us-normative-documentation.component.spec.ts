import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AboutUsNormativeDocumentationComponent } from './about-us-normative-documentation.component'

describe('AboutUsNormativeDocumentationComponent', () => {
  let component: AboutUsNormativeDocumentationComponent
  let fixture: ComponentFixture<AboutUsNormativeDocumentationComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsNormativeDocumentationComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsNormativeDocumentationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
