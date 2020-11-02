import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Interior Design Porn';
  image1 = 'https://i.pinimg.com/originals/91/ec/5a/91ec5ab3c523d42f33f2aa9e8035e2fb.jpg';
  image2 = 'https://i.pinimg.com/564x/be/1f/2f/be1f2f59943ab642337cbc5f406877d2.jpg';
  image3 = 'https://i.pinimg.com/originals/f7/40/77/f7407720ac3cc373a06a0b11e7915614.jpg';

  constructor() { }

  ngOnInit() {
  }

}