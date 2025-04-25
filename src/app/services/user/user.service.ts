import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private readonly API = 'https://cook-master-jm9lilci6-crvglucas-projects.vercel.app'
  private readonly API = 'http://localhost:3009'

  private http = inject(HttpClient)

  create(user: any){
    return this.http.post(this.API+'/user/register', user)
  }

  login(user: any){
    return this.http.post(this.API+'/user/login', user)
  }
}
