import { OnInit, Component, Input, Output} from '@angular/core';
import { Hero } from './hero';
// Keep the Input import for now, you'll remove it later:
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-detail',
	template: `
		<div *ngIf="hero">
  			<h2>{{hero.name}} details!</h2>
  			<div><label>id: </label>{{hero.id}}</div>
  			<div>
  				<label>name: </label>
  				<input [(ngModel)]="hero.name" placeholder="name"/>
  			<div>
  		</div>
	`,
})

export class heroDetailComponent implements OnInit {
	@Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ){}
  ngOnInit(): void {
    
  }
}
