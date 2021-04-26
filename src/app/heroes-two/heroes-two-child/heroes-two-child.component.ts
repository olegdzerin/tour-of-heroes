import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroes-two-child',
  templateUrl: './heroes-two-child.component.html',
  styleUrls: ['./heroes-two-child.component.css']
})
export class HeroesTwoChildComponent implements OnInit {
 @Input()  size: number ;
  @Output() sizeChange = new EventEmitter<number>();
  @Input()  weight: number | string;
  @Output() weightChange = new EventEmitter<number>();

   dec() { this.resize(-1); }
  inc() { this.resize(+1); };

  message: any

  constructor() { }

  ngOnInit(): void {
  }
resize(delta: number) {
   // this.size = Math.min(40, Math.max(8, +this.size + delta));
   this.size -= 20 + delta;
   this.sizeChange.emit(this.size);
  }
  reweight() {
  //  this.weight = Math.min(40, Math.max(8, +this.size ));
  this.message = "all right"
    this.weightChange.emit(this.message);
  }
  changeSize(){
    this.size -= 20;
  }
}
