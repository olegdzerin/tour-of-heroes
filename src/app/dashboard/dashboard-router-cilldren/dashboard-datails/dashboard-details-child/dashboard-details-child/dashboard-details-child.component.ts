import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/hero';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-dashboard-details-child',
  templateUrl: './dashboard-details-child.component.html',
  styleUrls: ['./dashboard-details-child.component.css']
})
export class DashboardDetailsChildComponent implements OnInit {

  @Input() hero: Hero;
  name: any;
  id: number;
 constructor(private router: Router, rout: ActivatedRoute) { }

 ngOnInit(): void {
   this.name = this.hero.name
   this.id = this.hero.id
   
 }

  goToDashboardSingle(){
     this.router.navigate([`dashboard/hero/${this.id}`]);
  }

}
