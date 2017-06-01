import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let dishes = [
      { id: 11, name: 'Chicken Vindaloo' },
      { id: 12, name: 'Butter Chicken' },
      { id: 13, name: 'Palak Paneer' },
      { id: 14, name: 'Chicken Tikka' },
      { id: 15, name: 'Red Devil' },
      { id: 16, name: 'Indian pizza' },
      { id: 17, name: 'Doner Kebab' },
      { id: 18, name: 'Chickenn Karahi' },
      { id: 19, name: 'Shahi Paneer' },
      { id: 20, name: 'Chicken Saag' }
    ];

    return { dishes };
  }
}
