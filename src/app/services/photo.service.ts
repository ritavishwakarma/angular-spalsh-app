import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'Uep15VhXbg77H5gnEbxr-LDZY2qg_tn9G89VFDObxaY'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getData(search,perPage,page): Observable<any>{
    console.log(search)
    console.log(perPage)
    console.log(page)
    var client_id ="Uep15VhXbg77H5gnEbxr-LDZY2qg_tn9G89VFDObxaY";

    const url ="https://api.unsplash.com/search/photos/?client_id="+client_id+"&query="+search+"&per_page="+perPage+"&page="+page+""
    return this.http.get<any>(url,httpOptions)
                    .pipe(catchError(this.handleError))
  } 
  handleError(error){
    return throwError(error.message || "server error")
  }


}
