import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Ensure this is imported
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileEditReactiveComponent } from './components/profile-edit-reactive/profile-edit-reactive.component';
import { ProfileService } from './services/profile.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { ProfileEditNormalComponent } from './components/profile-edit-normal/profile-edit-normal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ProfileEditReactiveComponent,
    ProfileViewComponent,
    ProfileEditNormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  // Ensure this is imported
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
