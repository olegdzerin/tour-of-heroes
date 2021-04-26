import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component'
import {HeroesTwoComponent} from './heroes-two/heroes-two.component'
import{HeroesTwoChildrenComponent} from './heroes-two/heroes-two-children/heroes-two-children.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailSetComponent } from './hero-detail-set/hero-detail-set.component';
//import { DashboardDetailComponent } from '../zzz/dashboard-detail/dashboard-detail.component';
//import { DashboardSingleItemComponent } from '../zzz/dashboard-single-item/dashboard-single-item.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-router-cilldren/dashboard-datails/dashboard-details.component';
import { DashboardSingleHeroComponent } from './dashboard/dashboard-router-cilldren/dashboard-single/dashboard-single-hero/dashboard-single-hero.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
    
      {
        path: '',
        component: DashboardDetailsComponent
      },
      {
        path: 'hero/:id',
        component: DashboardSingleHeroComponent
      }
    ]
  },
  {
    path: 'hero/:id', component:HeroDetailSetComponent
  },
  {
    path: 'dashboardd',
    component: DashboardComponent,
    // children: [
    
    //   {
    //     path: ':id',
    //     component: DashboardSingleItemComponent
    //   }
    // ]
  },
  {
    path: 'heroes/:id',
    component: HeroDetailSetComponent
  },
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
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
