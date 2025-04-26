import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly LOCALSTORAGE_USER = '@cookMaster:user'
  constructor() { }

  getUser(){
    return JSON.parse(localStorage.getItem(this.LOCALSTORAGE_USER) as string)
  }
  setUser(user: any){
    localStorage.setItem(this.LOCALSTORAGE_USER, JSON.stringify(user))
  }
  clear(){
    localStorage.removeItem(this.LOCALSTORAGE_USER)
  }
}
