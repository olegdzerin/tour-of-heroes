import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesTwoComponent } from './heroes-two/heroes-two.component';
import { HeroesTwoChildrenComponent } from './heroes-two/heroes-two-children/heroes-two-children.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardDetailComponent } from '../zzz/dashboard-detail/dashboard-detail.component';
import { HeroDetailSetComponent } from './hero-detail-set/hero-detail-set.component';
// import { DashboardSingleItemComponent } from '../zzz/dashboard-single-item/dashboard-single-item.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-router-cilldren/dashboard-datails/dashboard-details.component';
import { DashboardDetailsChildComponent } from './dashboard/dashboard-router-cilldren/dashboard-datails/dashboard-details-child/dashboard-details-child/dashboard-details-child.component';
import { DashboardSingleHeroComponent } from './dashboard/dashboard-router-cilldren/dashboard-single/dashboard-single-hero/dashboard-single-hero.component';
import { HomeComponent } from './home/home.component';
import { HeroesTwoChildComponent } from './heroes-two/heroes-two-child/heroes-two-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroesTwoComponent,
    HeroesTwoChildrenComponent,
    DashboardComponent,
  //  DashboardDetailComponent,
    HeroDetailSetComponent,
  //  DashboardSingleItemComponent,
    DashboardDetailsComponent,
    DashboardDetailsChildComponent,
    DashboardSingleHeroComponent,
    HomeComponent,
    HeroesTwoChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
