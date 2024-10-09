import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileEditReactiveComponent } from './components/profile-edit-reactive/profile-edit-reactive.component';
import { ProfileEditNormalComponent } from './components/profile-edit-normal/profile-edit-normal.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'edit-reactive', component: ProfileEditReactiveComponent },
  { path: 'edit-normal', component: ProfileEditNormalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
