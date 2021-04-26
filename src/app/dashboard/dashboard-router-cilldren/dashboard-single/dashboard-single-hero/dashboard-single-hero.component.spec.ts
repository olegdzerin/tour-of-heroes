import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSingleHeroComponent } from './dashboard-single-hero.component';

describe('DashboardSingleHeroComponent', () => {
  let component: DashboardSingleHeroComponent;
  let fixture: ComponentFixture<DashboardSingleHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSingleHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSingleHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
