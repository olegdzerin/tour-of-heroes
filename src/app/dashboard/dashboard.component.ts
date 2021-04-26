import { Component, OnInit } from '@angular/core';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  heroes: Hero[] = HEROES;
  constructor() { }

  ngOnInit(): void {
  //  console.log(this.heroes);
  }

}
