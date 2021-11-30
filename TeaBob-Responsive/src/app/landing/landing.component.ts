import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

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
    this.pullFoodFeatured();
    // this.pullCart();
  }
  
  foods: any[]=[];

  pullFoodFeatured(){
    this.ds.sendApiRequest("foodfeatured/", null).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;
    })
  }


  // prodinfo: any = {};

  // async delProd(e: any) {
  //   this.prodinfo.prod_id = e;

  //       this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
  //       });

  //     this.pullFood();
  // }

  // prodInfo: any = {};
  // title: any;
  // info: any;


  // addToCart(food:any) {


  //   this.prodInfo.user_id = localStorage.getItem("id");
  //   this.prodInfo.title = food.title;
  //   this.prodInfo.description = food.description;
  //   this.prodInfo.price = food.price;
    

  //   this.ds.sendApiRequest("addCart", JSON.parse(JSON.stringify(this.prodInfo))).subscribe((data: any) => {
  //   });


  //   console.log(this.prodInfo);


  // }

  // cartinfo: any={};
  // cart:any;
  // cartCounter: any;
  

  // pullCart() {
  //   this.cartinfo.user_id = localStorage.getItem("id");
  //   this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
  //   this.cart = data.payload;

  //   // this.getTotal();

  //   // if(this.cart != null){

  //   for (let i = 0; i <= this.cart.length; i++) {
  //     this.cartCounter = i;
  //     console.log(this.cartCounter);
  //   }
  //   }
  //   )
  // }

}
