import { OrdersService } from './../service/app.orders.service';
import { orderModel } from './../model/app.order.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector :"orders-container",
    templateUrl:"./../component/app.order.component.html",
    styleUrls:[]
})

export class ordersContainerComponent implements OnInit{
    

    order : orderModel[]  
   constructor(private ordersService: OrdersService){
       console.log("Order = "+ this.order)
       
   }

    ngOnInit() {
         this.order = this.ordersService.getOrder();
    }
}