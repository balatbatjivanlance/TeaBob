import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullCart();
  }

  
  cartinfo: any={};
  cart:any;
  cartCounter: any;
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.cart = data.payload;

    // this.getTotal();

    // if(this.cart != null){

    for (let i = 0; i <= this.cart.length; i++) {
      this.cartCounter = i;
      console.log(this.cartCounter);
    }
    }
    )
  }

  prodinfo: any = {};

  async delCart(e: any) {
    this.prodinfo.cart_id = e;

        this.ds.sendApiRequest("delCarts", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
        });

      this.pullCart();
  }

}
