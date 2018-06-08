import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { modalcontent } from './modalcontent/modalcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    modalcontent
  ],
  entryComponents: [modalcontent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
