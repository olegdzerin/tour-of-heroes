import { Component, OnInit } from '@angular/core';
import {NavigationExtras, ActivatedRoute,  Router} from '@angular/router';

@Component({
  selector: 'app-heroes-two-children',
  templateUrl: './heroes-two-children.component.html',
  styleUrls: ['./heroes-two-children.component.css']
})
export class HeroesTwoChildrenComponent implements OnInit {
   route;
   router;
   relativeTo;
  constructor(route:ActivatedRoute, router:Router) {
    this.route = route;
    this.router = router;
    // this.relativeTo = relativeTo
   }
  useNavExrFn(){
      this.router.navigate(['/heroes']);
    }
  ngOnInit(): void {
    
  }

}
