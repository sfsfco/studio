import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlaceholderService } from './placeholder.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';


const routes:Routes = 
[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'team',
    component:TeamComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'**',
    component:HomeComponent
  }

] 
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpModule,
    FormsModule
  ],
  providers: [PlaceholderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
