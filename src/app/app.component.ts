import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UserSignal } from './signals/user/user';
import { LocalStorageService } from './services/localStorage/local-storage.service';
import { IndexedDBService } from './services/indexedDB/indexed-db.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected userSignal = inject(UserSignal)
  private localStorageService = inject(LocalStorageService)
  private database = inject(IndexedDBService)

  constructor(){
    this.loadDB()
    if(this.localStorageService.getUser() !== null){
      this.userSignal.set(this.localStorageService.getUser())
    } else {
      this.userSignal.clear()
    }
  }

  async loadDB(){
    const DB = await this.database.initializeDatabase()
  }
}
