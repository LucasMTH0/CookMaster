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
        database.createObjectStore('recipes', { autoIncrement: true })
        database.createObjectStore('favorites', { autoIncrement: true })
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
      const results: number[] = [];
      let completed = 0;
      let hasError: boolean = false
      recipes.forEach((recipe: any) => {
        if (hasError){
          return
        }
        store.add(recipe)
        store.onsuccess = () => {
          completed+=1;
          results.push(store.result);
          if(completed === recipe){
            resolve(results)
          }
        }
        store.onerror = () => {
          hasError = true
        }
      })
    })
  }

  public async getRecipes(){
    return new Promise(async (resolve, reject) => {
      const database: any = await this.initializeDatabase();
      const transaction = database.transaction(['recipes'],   'readwrite');
      const store = transaction.objectStore('recipes');
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    })
  }
}
