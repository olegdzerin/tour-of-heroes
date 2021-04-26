import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetailsChildComponent } from './dashboard-details-child.component';

describe('DashboardDetailsChildComponent', () => {
  let component: DashboardDetailsChildComponent;
  let fixture: ComponentFixture<DashboardDetailsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetailsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetailsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
