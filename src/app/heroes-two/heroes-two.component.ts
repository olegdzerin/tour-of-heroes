import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router' 

@Component({
  selector: 'app-heroes-two',
  templateUrl: './heroes-two.component.html',
  styleUrls: ['./heroes-two.component.css']
})
export class HeroesTwoComponent implements OnInit {
  weight: number = 100;
  size:number;
  fontSizePx: any = 20
  weightFromParent: number
  
  constructor(private rout: ActivatedRoute, private router: Router) {
    this.rout = rout;
    
  }
    
  ngOnInit(): void {
    this.rout.paramMap.subscribe(param => {
      console.log(param)
    });
  }
  goToHome() {
     this.router.navigate(['/']);
  }
  reweightParent(arg: any){
    var arg = arg
    this.weightFromParent = arg;
  };
  changeFontSizePx(){
    this.fontSizePx += 20;
  }
}
