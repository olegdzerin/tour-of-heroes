import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {HEROES} from '../mock-heroes';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail-set',
  templateUrl: './hero-detail-set.component.html',
  styleUrls: ['./hero-detail-set.component.css']
})
export class HeroDetailSetComponent implements OnInit {
   id: any;
   str: string;
   num: number;
   heroes: Hero[] = HEROES
   hero: Hero;
  constructor(private router:Router, private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.params.subscribe(param => {
         this.id = Number(+param.id)
        //  console.log(this.id);
         this.hero = this.heroes.filter(
           (item => {
              return this.id ===item.id
           }))[0];
          //  console.log(this.hero);
    });
  }

}
