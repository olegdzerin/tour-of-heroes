import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
 heroes: Hero[] = HEROES;
newHeroes: Hero[];
  constructor() { }


getData(){
  return this.newHeroes;
}
}
