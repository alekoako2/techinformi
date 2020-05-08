import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTransferCentersComponent } from './technology-transfer-centers.component';

describe('TechnologyTransferCentersComponent', () => {
  let component: TechnologyTransferCentersComponent;
  let fixture: ComponentFixture<TechnologyTransferCentersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyTransferCentersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyTransferCentersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
