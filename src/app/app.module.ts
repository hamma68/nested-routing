import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app.routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatCardModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ProductsComponent,
    ProductComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
