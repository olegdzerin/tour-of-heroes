import { Component, OnInit } from '@angular/core';
import {HeroesService} from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = "Herous";
  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    
    this.heroesService.newHeroes = this.heroesService.heroes.concat({id:9999, name: "ole"}) ;

 //   console.log(this.heroesService.newHeroes);

  }

}