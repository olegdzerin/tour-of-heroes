import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTwoChildrenComponent } from './heroes-two-children.component';

describe('HeroesTwoChildrenComponent', () => {
  let component: HeroesTwoChildrenComponent;
  let fixture: ComponentFixture<HeroesTwoChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTwoChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTwoChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
