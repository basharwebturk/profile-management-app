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
    // Initialize the form group and controls
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch data from service and populate the form if needed
    this.profileService.getProfile().subscribe(profile => {
      this.profileForm.patchValue({
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        address: profile.address
      });
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Log the form data to ensure it's correct
      console.log('Submitting form with values:', this.profileForm.value);
      
      // Send the form data to the service
      this.profileService.updateProfile(this.profileForm.value).subscribe(
        response => {
          console.log('Profile updated successfully!', response);
          // Optionally show a success message or navigate to another page
        },
        error => {
          console.error('Error updating profile:', error);
          // Handle the error (show a notification, etc.)
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
