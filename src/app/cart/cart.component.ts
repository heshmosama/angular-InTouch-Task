import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product.model';
import { LocalStorageManagerService } from '../serivces/local-storage-manager.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  collections: Products[] = [];
  isLoading = false;

  constructor(private localeservice: LocalStorageManagerService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.localeservice.retrieve().then((value) => {
      this.isLoading = false;
      if (value) {
        this.collections = value as Products[];
      }
    })
  }

  onRemoveClicked(id: number) {
    this.isLoading = true;
    this.localeservice.remove(id).then(() => {
      this.isLoading = false
    })
  }
}
