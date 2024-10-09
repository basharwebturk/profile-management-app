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
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{10}$')]],
      address: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Initialize or fetch data if needed
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Handle form submission
      console.log('Form data:', this.profileForm.value);
    }
  }
}
