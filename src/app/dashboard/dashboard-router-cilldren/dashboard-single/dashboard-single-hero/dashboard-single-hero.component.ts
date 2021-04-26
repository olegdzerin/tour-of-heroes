import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Hero } from 'src/app/hero';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-dashboard-single-hero',
  templateUrl: './dashboard-single-hero.component.html',
  styleUrls: ['./dashboard-single-hero.component.css']
})
export class DashboardSingleHeroComponent implements OnInit {
  hero: Hero;
  
  constructor(private router: Router,
              private rout: ActivatedRoute,
              private heroesService: HeroesService) {

   }

  ngOnInit(): void {
    this.rout.params.subscribe(param => {
      this.hero = this.heroesService.getData().filter((item) => {
          return item.id === Number(param.id);
      })[0];
   //   console.log(this.hero);
    })
    
  
  }
 showByInput(arg){
  // console.log(arg);
  this.hero.name = arg;
 };
 showByClick(){
  // return this.hero.name;
  console.log("show");
 };
 
 aplay(){
   this.heroesService.newHeroes.map((item) => {
     if(item === this.hero) return this.hero;
     return item;
     });
     console.log(this. heroesService.newHeroes);
 }

}
