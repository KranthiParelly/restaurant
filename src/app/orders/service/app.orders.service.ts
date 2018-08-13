import { orderModel } from '../model/app.order.model';

export class OrdersService{

     // Anonymous function
     Total= function(price:number, quantity:number) { return price*quantity; };
     customerOrderArray : orderModel[] =[{
         order_id: 1,
         user_name: "Lebron James",
         item: "Steak",
         price: 19.99,
         quantity: 2,
         totalPrice: this.Total //(this.customerOrderArray[].price,this.customerOrderArray[0].quantity) //this.customerOrder.price,this.customerOrder.quantity)
     },
     {
         order_id: 1,
         user_name: "Lebron James",
         item: "Lamb chops",
         price: 12.99,
         quantity: 1,
         totalPrice: this.Total //(this.customerOrderArray[1].price,this.customerOrderArray[1].quantity) //this.customerOrder.price,this.customerOrder.quantity)
     },
     {
         order_id: 1,
         user_name: "Lebron James",
         item: "Fried Chicken",
         price: 8,
         quantity: 2,
         totalPrice: this.Total //(this.customerOrderArray[2].price,this.customerOrderArray[2].quantity) //this.customerOrder.price,this.customerOrder.quantity)
     }
 ]
     //  private Total(price:number, quantity:number): number {
     //      console.log("In Total");
     //      console.log("price= " +price);
     //      return price*quantity;
     //  }
    getOrder() : orderModel[] {
        return this.customerOrderArray;
    }
}