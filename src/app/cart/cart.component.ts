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
  error = null
  constructor(private localeservice :LocalStorageManagerService) { }

  ngOnInit(): void {
  }

}
