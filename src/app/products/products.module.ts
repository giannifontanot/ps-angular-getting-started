import {NgModule} from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {ConvertToSpacesPipe} from "../shared/convert-to-spaces-pipe";
import {ProductDetailComponent} from "./product-detail.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail.guard";
import {SharedModule} from '../share/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {
        path: 'product/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent
      },
    ]),
  ]
})
export class ProductsModule {
}
