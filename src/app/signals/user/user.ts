import { Injectable, signal } from '@angular/core';
import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class UserSignal {
  private readonly userSignal = signal<User | null>(null)
  clear(){
    this.userSignal.set(null)
  }
  get(){
    return this.userSignal()
  }
  set(user: User){
    this.userSignal.set(user)
  }
}
