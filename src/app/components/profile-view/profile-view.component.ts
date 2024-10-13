import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UserProfile } from '../../modal/user-profile-modal';
import { find, map, Observable, tap } from 'rxjs';



@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  $userProfile: Observable<any> = this.profileService.getProfile().pipe(map(val =>val.find(el => el.id == 1 ) ));
  constructor(private profileService: ProfileService) { }
}
