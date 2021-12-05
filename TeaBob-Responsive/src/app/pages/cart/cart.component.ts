import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog/cart-dialog.component';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  status: string | undefined;

  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, public dialog:MatDialog,
    route:ActivatedRoute, ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

  ngOnInit(): void {
    this.pullCart();
  }

  
  cartinfo: any={};
  cart:any;
  cartCounter: any;
  delCarts: any = {};
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart/" + localStorage.getItem("id"), null).subscribe((data: { payload: any; }) => {
    this.cart = data.payload;
    console.log(this.cart);
    this.getTotal();

    // if(this.cart != null){

    for (let i = 0; i <= this.cart.length; i++) {
      this.cartCounter = i;
      console.log(this.cartCounter);
    }

    }
    )
  }

  food_info: any = {};
  deleteAddOnsPearl = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_pearl = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }

  deleteAddOnsCpuff = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_cpuff = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }
  
  deleteAddOnsCcheese = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_ccheese = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }
  
  deleteAddOnsCookie = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_cookie = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }
  
  deleteAddOnsSauce = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_sauce = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }
  
  deleteAddOnsSpicy = (id:any) => {
    this.food_info.cart_id = id;
    this.food_info.add_spicy = 'none'
    this.ds.sendApiRequest('removeAddOns/', this.food_info).subscribe((data: any) => { });
    Swal.fire(
      'Removed',
      'Add Ons Removed!',
      'success'
    )
    this.sendMessage();
  }

  prodinfo: any = {};

  async delCart(e: any) {
    this.prodinfo.cart_id = e;
    await this.ds.sendApiRequest("delCarts",this.prodinfo).subscribe((data: any) => { });
    Swal.fire(
      'Deleted',
      'Successfully Removed From Cart!',
      'success'
    )
    this.pullCart();
  }

  code: any;
  checkOut(){
    var seq = (Math.floor(100000000 + Math.random() * 900000000)).toString().substring(1);
    this.code = seq;

    console.log(this.code);
  }

  totalamount= 0;

  getTotal() {
    let total = 0;
    if(this.cart != null){
    for (var i = 0; i < this.cart.length; i++) {
        if (this.cart[i].price) {
          // get total amount of the products inside the cart items
            total += this.cart[i].total_price;
            this.totalamount = total;
        }
    }

    return this.totalamount;
  }
  }

  coInfo: any={};
  coCode: any={};

  cart_id: any;

  checkOutAll()
  {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.cartinfo.user_name = localStorage.getItem("Fullname");
    // this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe(data => 
      // {
    
    var seq = (Math.floor(100000000 + Math.random() * 900000000)).toString().substring(1);
    this.code = seq;
    
    var stat = "Pending";
    this.status = stat;


    this.coCode.code = this.code;
    this.coCode.is_approved = this.status;
    this.coCode.user_id = localStorage.getItem("id");
    this.coCode.user_name = localStorage.getItem("Fullname");
    this.coCode.total_price = this.totalamount;
  

    for (let i = 0; i < this.cart.length; i++){

      this.delCarts.cart_id = this.cart[i].cart_id;

      this.coInfo.prod_desc = this.cart[i].description;
      this.coInfo.prod_name = this.cart[i].title;
      this.coInfo.prod_price = this.cart[i].price;
      this.coInfo.user_id = localStorage.getItem("id");

      this.ds.sendApiRequest("checkOutAll", this.coInfo).subscribe((data: any) => {})
      this.ds.sendApiRequest("delCarts", this.delCarts).subscribe((data: any) => {})
    }
    this.ds.sendApiRequest("checkOutCode", this.coCode).subscribe((data: any) => {})

    // }

  }
  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}
