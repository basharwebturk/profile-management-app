import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';



@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  profile: any = {};

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }
}
