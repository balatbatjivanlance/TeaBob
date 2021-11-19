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
  delCarts: any = {};
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.cart = data.payload;

    this.getTotal();

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
            total += this.cart[i].price;
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
    // this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe(data => 
      {
    
    var seq = (Math.floor(100000000 + Math.random() * 900000000)).toString().substring(1);
    this.code = seq;


    this.coCode.code = this.code;

    this.coCode.user_id = localStorage.getItem("id");
    this.coCode.total_price = this.totalamount;


  

    for (let i = 0; i < this.cart.length; i++) 

    {

      this.delCarts.cart_id = this.cart[i].cart_id;

      this.coInfo.prod_desc = this.cart[i].description;
      this.coInfo.prod_name = this.cart[i].title;
      this.coInfo.prod_price = this.cart[i].price;
      this.coInfo.user_id = localStorage.getItem("id");


      console.log(this.coCode);

      this.ds.sendApiRequest("checkOutAll", this.coInfo).subscribe((data: any) => {

      })


      this.ds.sendApiRequest("delCarts", this.delCarts).subscribe((data: any) => {})
    }
    this.ds.sendApiRequest("checkOutCode", this.coCode).subscribe((data: any) => {})

    }



  }

}
