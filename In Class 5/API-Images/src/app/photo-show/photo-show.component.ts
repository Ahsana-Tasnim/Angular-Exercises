import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo-show',
  templateUrl: './photo-show.component.html',
  styleUrls: ['./photo-show.component.css']
})
export class PhotoShowComponent implements OnInit {

  photoUrl: string;

  constructor(private photoService: PhotosService) { }

  ngOnInit(): void {
    this.fetchPhoto();
  }

  fetchPhoto(){
    this.photoService.getPhotos().subscribe(photos =>{
      this.photoUrl = photos.urls.regular;
    })
  }

}
