import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private http = inject(HttpClient)
  private readonly API = 'http://localhost:3009'
  list(){
    return this.http.get(this.API+'/category')
  }
}
