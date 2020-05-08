import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WosDialogComponent } from './wos-dialog.component';

describe('WosDialogComponent', () => {
  let component: WosDialogComponent;
  let fixture: ComponentFixture<WosDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WosDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
