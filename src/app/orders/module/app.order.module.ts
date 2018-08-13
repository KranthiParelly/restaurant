import { ordersContainerComponent } from './../container/app.order.container.component';
import { OrdersService } from '../service/app.orders.service';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({

    imports : [FormsModule, CommonModule],
    exports : [ordersContainerComponent],
    declarations : [ordersContainerComponent],
    providers: [OrdersService]

})

export class ordersModule{

}