import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailSetComponent } from './hero-detail-set.component';

describe('HeroDetailSetComponent', () => {
  let component: HeroDetailSetComponent;
  let fixture: ComponentFixture<HeroDetailSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
