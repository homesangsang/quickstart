import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  			<h2>{{hero.name}} details!</h2>
  			<div><label>id: </label>{{hero.id}}</div>
  			<div><label>name: </label>{{hero.name}}</div>
  			<div>
  				<label>name: </label>
  				<input [(ngModel)]="hero.name" placeholder="name"/>
  			</div>
  			`
})
//[[ngModel]] 是一个angular语法，用与把hero.name 绑定到输入框中
//他的数据流是双向的：从属性到输入框，并从输入框回到属性
export class AppComponent  { 
	title = 'Tour of Heros';
	hero : Hero ={
		id: 1,
		name: 'Windstorm'
	};
}
export class Hero {
	id : number;
	name : string;
}
const HEROES: Hero[] = [
	{id:11, name: 'Mr. Nice'},
	{id:12, name: 'Narco'},
	{id:13, name: 'Bombasto'},
	{id:14, name: 'Celeritas'},
	{id:15, name: 'Magneta'},
	{id:16, name: 'RubberMan'},
	{id:17, name: 'Dynama'},
	{id:18, name: 'Dr IQ'},
	{id:19, name: 'Magma'},
	{id:20, name: 'Tornodo'},
];