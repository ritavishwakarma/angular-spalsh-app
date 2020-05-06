import { Component } from '@angular/core';
import { PhotoService} from './services/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-spalsh-app';
  search: String;
  data: String[];
  totalImages: Number;
  page: Number=1;
  constructor(private photoService: PhotoService){
    this.photoService.getData(this.search)
  }

  searchPhotos(){
    this.photoService.getData(this.search).subscribe((data) =>{
      console.log(data)
      this.data = data.results
      this.totalImages= data.results.length
      
    },(error)=>{
      console.log(error)
      
    })
  }
}


