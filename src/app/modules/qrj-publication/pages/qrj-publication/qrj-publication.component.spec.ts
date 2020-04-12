import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrjPublicationComponent } from './qrj-publication.component';

describe('QrjPublicationComponent', () => {
  let component: QrjPublicationComponent;
  let fixture: ComponentFixture<QrjPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrjPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrjPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
