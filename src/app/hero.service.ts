import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
	getHeros(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}  //桩方法
	getHeroesSlowly(): Promise<Hero[]> {
		return new Promise(resolve => {
			setTimeout(()=> resolve(this.getHeros()),2000);
		});
	}
}