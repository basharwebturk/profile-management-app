import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile-edit-reactive',
  templateUrl: './profile-edit-reactive.component.html',
  styleUrls: ['./profile-edit-reactive.component.css']
})
export class ProfileEditReactiveComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize or fetch data if needed
    this.profileService.getProfile().subscribe(res =>{
      if(res){
        console.log(res);
        this.profileForm.patchValue({
          name: res[0]?.name,
        })
      }
    })
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.getRawValue()).subscribe(res =>{
        // Handle successful update
        console.log('Profile updated successfully.');
      }, error => {
        // Handle error
        console.error('Error updating profile:', error);
      })
    }
  }
}
