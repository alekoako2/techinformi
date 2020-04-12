import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjPublicationDetailsComponent } from './qrj-publication-details.component';

describe('QrjPublicationDetailsComponent', () => {
  let component: QrjPublicationDetailsComponent;
  let fixture: ComponentFixture<QrjPublicationDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjPublicationDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
