import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserProfile } from '../modal/user-profile-modal';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles: UserProfile[] = [{id: 1, name: 'trial', email: 'trail@trial.com', phone: '123412341234', address: 'trial' }];
    return { profiles };
  }
}
