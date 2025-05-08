import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {


  public initializeDatabase(){
    try{
      const requestDB = window.indexedDB.open('CookMasterDB', 1);

      requestDB.onupgradeneeded = (event: any) => {
        const database = event.target.result;
        database.createObjectStore('user')
        database.createObjectStore('recipes', { keyPath: 'id' })
        database.createObjectStore('favorites', { keyPath: 'id' })
      }

      return new Promise((resolve, reject) => {
        requestDB.onsuccess = () => {
          resolve(requestDB.result);
        } 

        requestDB.onerror = (event: any) => {
          reject(`Ocorreu um erro ao conectar o banco de dados: ${event.target.error}`)
        }
      })
    } catch(error: any){
      console.log("erro ao conectar o banco")
      return null
    }
  }

  public async insertRecipe(recipes: any){
    return new Promise(async (resolve, reject) => {
      const DB: any = await this.initializeDatabase();
      console.log("database: ", DB)
      const transaction = DB.transaction(['recipes'], 'readwrite');
      const store = transaction.objectStore('recipes');
      const request = store.put(JSON.stringify(recipes))
      request.onsuccess = () => {
        console.log("fooi")
      }
      request.onerror = (event: any) => {
        reject(`Erro ao cadastrar: ${event.target.error}`)
      }
    })
  }


}
