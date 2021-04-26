import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTwoChildComponent } from './heroes-two-child.component';

describe('HeroesTwoChildComponent', () => {
  let component: HeroesTwoChildComponent;
  let fixture: ComponentFixture<HeroesTwoChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTwoChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTwoChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
