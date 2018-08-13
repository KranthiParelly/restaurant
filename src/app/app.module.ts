import { ordersModule } from './orders/module/app.order.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ordersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
