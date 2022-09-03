import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnsplashResponse } from './models/unsplash-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  /**
   * Getting all the photos
   */
  public getPhotos(): Observable<UnsplashResponse>{
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random', 
      {
        headers: {
          Authorization: 
          'Client-ID aE0GF5ioAikkHNbU9M9TO7JBbljKuSlNfaDDIjO2bBk'
        }
      }
      );
  }
}
