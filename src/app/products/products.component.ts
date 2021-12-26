import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/product.model';
import { LocalStorageManagerService } from '../serivces/local-storage-manager.service';
import { RemoteDataService } from '../serivces/remote-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  collections: Products[] = [];
  isLoading = false;
  error = null

  constructor(private router: Router, private remoteService: RemoteDataService, private localeservice: LocalStorageManagerService) {

  }


  ngOnInit(): void {

    this.isLoading = true;
    this.remoteService.getProducts(50, 1).subscribe(
      response => {
        this.isLoading = false;
        this.collections = response
      }, error => {
        this.isLoading = false
        this.error = error.errorMessage
      }
    )



  }

  onAddClicked(item: Products) {
    this.localeservice.store(item)
    this.localeservice.retrieve().then((value) =>{
      console.log(value as Products[])
    })
 
  }

  onCartClicked() {
    this.router.navigate(['/cart'])
  }

}
