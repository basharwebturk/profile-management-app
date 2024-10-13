import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-profile-edit-normal',
  templateUrl: './profile-edit-normal.component.html',
  styleUrls: ['./profile-edit-normal.component.css']
})
export class ProfileEditNormalComponent implements OnInit {
  profile: any = {}; // Define profile object

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    // Fetch profile data and initialize 'profile' object
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile[0];
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.profileService.updateProfile(this.profile).subscribe(() => {
        // Handle successful update
        console.log('Profile updated successfully.');
      }, error => {
        // Handle error
        console.error('Error updating profile:', error);
      });
    }
  }
}
