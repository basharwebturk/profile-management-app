import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { UserProfile } from '../../modal/user-profile-modal';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent {
  $userProfile: Observable<UserProfile> = this.profileService.getProfile();
  constructor(private profileService: ProfileService) { }
}
