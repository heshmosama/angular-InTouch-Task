import { Injectable } from '@angular/core';
import { Products } from '../models/product.model';
 
 

@Injectable({ providedIn: 'root' })
export class LocalStorageManagerService {
  private productList: string = 'productList';

  constructor() { }

  store(content: Products[]) {
    localStorage.setItem(this.productList, JSON.stringify(content));
  }

  remove(){
    localStorage.removeItem(this.productList)
  }
  retrieve() {
    var retrievedObject: any = localStorage.getItem(this.productList);
    if (!retrievedObject) throw 'productList';
    return retrievedObject;
  }

}
