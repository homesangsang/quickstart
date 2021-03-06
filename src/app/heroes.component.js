"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heros';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    ;
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroService.getHeros().then(heroes => this.heroes = heroes);
        this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        template: "\n  \t\t\t<h2>My Heroes</h2>\n  \t\t\t<ul class=\"heroes\">\n  \t\t\t\t<li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n  \t\t\t\t\t<!--each hero goes here -->\n  \t\t\t\t\t<span class=\"badge\">{{hero.id}}</span>{{hero.name}}\n  \t\t\t\t</li>\n  \t\t\t</ul>\n  \t\t\t<hero-detail [hero]=\"selectedHero\"></hero-detail>\n  \t\t\t",
        styles: ["\n  \t.selected {\n  \t\tbackground-color: #CFD8DC !important;\n  \t\tcolor: white;\n  \t}\n  \t.heroes {\n  \t\tmargin: 0 0 2em 0;\n  \t\tlist-style-type: none;\n  \t\tpadding: 0;\n  \t\twidth : 15em;\n  \t}\n  \t.heroes li {\n  \t\tcursor: pointer;\n  \t\tposition: relative;\n  \t\tleft: 0;\n  \t\tbackground-color: #eee;\n  \t\tmargin: 0.5em;\n  \t\tpadding: .3em 0;\n  \t\theight: 1.6em;\n  \t\tborder-radius: 4px;\n  \t}\n  \t.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3px;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  "],
        providers: [],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map