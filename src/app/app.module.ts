import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
 
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    routingComponents     
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
