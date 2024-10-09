import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles = [
      { id: 1, name: ' ', email: '', phone: '', address: '' }
    ];
    return { profiles };
  }
}
