import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {Hero} from '../hero'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()  hero;
  @Output()  ev = new EventEmitter();
  constructor() { };
 

  eventChildren = function(){
    this.ev.emit()
  }

  ngOnInit(): void {
  }

}
