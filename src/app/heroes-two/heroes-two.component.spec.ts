import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTwoComponent } from './heroes-two.component';

describe('HeroesTwoComponent', () => {
  let component: HeroesTwoComponent;
  let fixture: ComponentFixture<HeroesTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
