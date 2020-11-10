import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router' 

@Component({
  selector: 'app-heroes-two',
  templateUrl: './heroes-two.component.html',
  styleUrls: ['./heroes-two.component.css']
})
export class HeroesTwoComponent implements OnInit {
  rout;
  constructor(rout: ActivatedRoute) {
    this.rout = rout;
  }
    
  ngOnInit(): void {
    this.rout.queryParams.subscribe(param => {
      console.log(param)
    });
  }

}
