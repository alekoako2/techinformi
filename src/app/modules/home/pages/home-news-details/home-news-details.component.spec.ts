import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsDetailsComponent } from './home-news-details.component';

describe('HomeNewsDetailsComponent', () => {
  let component: HomeNewsDetailsComponent;
  let fixture: ComponentFixture<HomeNewsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
