import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ProductComponent } from './products/product/product.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FavoriteComponent } from './products/favorite/favorite.component';
import { CartComponent } from './shopping-cart/cart/cart.component';
import { OrderComponent } from './orders/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MainMenuComponent,
    FavoriteComponent,
    CartComponent,
    OrderComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
