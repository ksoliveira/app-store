import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './orders/order/order.component';
import { FavoriteComponent } from './products/favorite/favorite.component';
import { ProductComponent } from './products/product/product.component';
import { CartComponent } from './shopping-cart/cart/cart.component';

const routes: Routes = [
  {path: 'produtos', component: ProductComponent},
  {path: 'favoritos', component: FavoriteComponent},
  {path: 'carrinho', component: CartComponent},
  {path: 'pedidos', component: OrderComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
