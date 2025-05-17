import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSignal = signal<boolean>(false);
  constructor() { }

  public getValue(){
    return this.loadingSignal()
  }

  public open(){
    this.loadingSignal.set(true);
  }

  public close(){
    this.loadingSignal.set(false);
  }
}
