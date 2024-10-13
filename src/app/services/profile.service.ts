import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserProfile } from '../modal/user-profile-modal';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = 'api/profiles'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserProfile[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  updateProfile(profile: any): Observable<UserProfile> {
    return this.http.put<any>(this.apiUrl, profile).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
