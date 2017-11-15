import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; 
import { AppComponent }  from './app.component';
import { heroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService }   from  './hero.service';

@NgModule({
  imports: [ 
  	BrowserModule ,
  	BrowserModule,
  	FormsModule,
  ],
  declarations: [ 
  	AppComponent,
  	heroDetailComponent ,
  	HeroesComponent

  ],
  providers: [
  	HeroService
  ],
  bootstrap: [ 
 	AppComponent 
  ]
})
export class AppModule { }
