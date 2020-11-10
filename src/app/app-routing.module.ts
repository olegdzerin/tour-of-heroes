import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'
import {HeroesTwoComponent} from './heroes-two/heroes-two.component'
import{HeroesTwoChildrenComponent} from './heroes-two-children/heroes-two-children.component'

const routes: Routes = [
  {
    path:'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes-two',
    component: HeroesTwoComponent,
    children: [
      {
        path: 'children',
        component: HeroesTwoChildrenComponent
      }
    ]
  },
  {
    path: '', redirectTo: '/heroes', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
