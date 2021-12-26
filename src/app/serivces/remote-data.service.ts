import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
 
 

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {
 
  constructor(private http : HttpClient){}

  getProducts(limit:number, offset:number) : Observable<any>{
    let params = new HttpParams();
    params = params.append('limit', limit);
    params = params.append('offset', offset);
    return this.http.get('http://localhost:3000/products',{observe:'body', params:params})
    .pipe(
      retry(3)
    );
    
  }

 
}
