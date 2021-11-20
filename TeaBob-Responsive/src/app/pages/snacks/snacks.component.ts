import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullFood();
    this.pullCart();
  }
  
  food: any;

  pullFood(){
    this.ds.sendApiRequest("food", null).subscribe((data: { payload: any; }) => {
    this.food = data.payload;
    })
  }
  prodinfo: any = {};

  async delProd(e: any) {
    this.prodinfo.prod_id = e;

        this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
        });

      this.pullFood();
  }

  prodInfo: any = {};
  title: any;
  info: any;


  addToCart(food:any) {


    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.title = food.title;
    this.prodInfo.description = food.description;
    this.prodInfo.price = food.price;
    this.prodInfo.image_name = food.image_name;
    

    this.ds.sendApiRequest("addCart", JSON.parse(JSON.stringify(this.prodInfo))).subscribe((data: any) => {
    });


    console.log(this.prodInfo);


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

}
