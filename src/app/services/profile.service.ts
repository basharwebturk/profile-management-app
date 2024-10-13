import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { UserProfile } from '../modal/user-profile-modal';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  userProfile: Subject<UserProfile> = new Subject();

  constructor() { }

  getProfile(): Observable<UserProfile> {
    return this.userProfile;
  }

  updateProfile(profile: UserProfile): Observable<UserProfile> {
    this.userProfile.next(profile);
    return this.userProfile;
  }
}
