import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  {path: '', redirectTo: '/prodcuts', pathMatch: 'full' },
  {path:'cart',component:CartComponent,children:[
    {path:'prodcuts',component:ProductsComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProductsComponent,CartComponent]