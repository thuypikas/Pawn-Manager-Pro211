import {NgModule} from '@angular/core';
import {ChartsModule} from 'ng2-charts';

import {ProductComponent} from './product.component';
import {ProductRoutingModule} from './product-routing.module';
import {ModalModule} from 'ngx-bootstrap';
import {CreateProductComponent} from './create-product/create-product.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxBootstrapSliderModule} from 'ngx-bootstrap-slider';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  imports: [
    ProductRoutingModule,
    ChartsModule,
    ModalModule.forRoot(),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxBootstrapSliderModule,
    Ng2SearchPipeModule
  ],
  declarations: [ProductComponent, CreateProductComponent],
  entryComponents: [CreateProductComponent]
})
export class ProductModule {
}
