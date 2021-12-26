import { Injectable } from '@angular/core';
import { Products } from '../models/product.model';
 
 

@Injectable({ providedIn: 'root' })
export class LocalStorageManagerService {
  private productList: string = 'productList';

  constructor() { }

  async store(content: Products) {
    const products:Products[] = await this.retrieve() as Products[]
    products.push(content)
    localStorage.setItem(this.productList, JSON.stringify(products));
  }

  async remove(content:number){
    const products:Products[] =await this.retrieve() as Products[]
    const productIndex = products.findIndex(i => i.id === content)
    if(productIndex > -1){
      products.splice(productIndex,1)
      localStorage.setItem(this.productList, JSON.stringify(products));
    }
  
  }
  async retrieve() {
    var retrievedObject: any = localStorage.getItem(this.productList);
    if (!retrievedObject) [];
    return retrievedObject;
  }

}
