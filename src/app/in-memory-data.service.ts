import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Roadhog' },
      { id: 13, name: 'Junkrat' },
      { id: 14, name: 'Bastion' },
      { id: 15, name: 'Windowmaker' },
      { id: 16, name: 'Ganondorf' },
      { id: 17, name: 'Mr. Smith' },
      { id: 19, name: 'Mercy' },
      { id: 20, name: 'Baptiste' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
