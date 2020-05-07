import { Component } from '@angular/core';
import { PhotoService} from './services/photo.service';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-spalsh-app';
  search: String;
  data: String[];
  totalImages: Number[];
  perPage: Number;
  page:Number=1;
  constructor(private photoService: PhotoService){
    this.photoService.getData(this.search,this.perPage,this.page)
  }
  searchPhotos(){
    this.photoService.getData(this.search,this.perPage,this.page).subscribe((data) =>{
      console.log(data)
      this.data = data.results
      this.totalImages= data.results.length
      this.perPage = data.results
      this.page = data.results.length+1      
    },(error)=>{
      console.log(error)
      
    })
  }
}


