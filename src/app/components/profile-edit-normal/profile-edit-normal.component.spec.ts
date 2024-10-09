import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditNormalComponent } from './profile-edit-normal.component';

describe('ProfileEditNormalComponent', () => {
  let component: ProfileEditNormalComponent;
  let fixture: ComponentFixture<ProfileEditNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileEditNormalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileEditNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
