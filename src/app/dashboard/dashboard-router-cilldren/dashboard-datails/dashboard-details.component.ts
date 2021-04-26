import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import { HeroesService } from 'src/app/heroes.service';
@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.css']
})
export class DashboardDetailsComponent implements OnInit {

  heroes: Hero[];
  name: any;
 constructor(private heroesService: HeroesService) { }

 ngOnInit(): void {
   this.heroes = this.heroesService.getData();
  // console.log(this.heroes);
 }

}
