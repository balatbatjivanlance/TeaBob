import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { SnacksDialogComponent } from './snacks-dialog/snacks-dialog/snacks-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { DrinksDialogComponent } from './drinks-dialog/drinks-dialog/drinks-dialog.component';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {


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
    this.pullFood();
    this.pullCart();
    this.pullCategory();
  }
  
  food_info: any[] = [];
  category_id: any = "";
  pullFood(){
    this.ds.sendApiRequest(`food/${this.category_id}`, null).subscribe((data: { payload: any; }) => {
      this.food_info = data.payload
    })
  }
  
  filterFood = (data:any) => {
    this.category_id = data.value
    this.category_id  == 0 ? this.category_id = '' : this.pullFood();
    this.sendMessage();
  }

  category_info: any [] = [];
  pullCategory(){
    this.ds.sendApiRequest("category/", null).subscribe((data: { payload: any; }) => {
    this.category_info = data.payload;
    })
   
  }


  prodinfo: any = {};

  async delProd(e: any) {
    this.prodinfo.prod_id = e;

        this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
        });
        this.sendMessage();
  }

  prodInfo: any = {};
  title: any;
  info: any;


  addToCart(food:any) {

    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.title = food.food_name;
    this.prodInfo.description = food.description;
    this.prodInfo.price = food.price;
    this.prodInfo.image_name = food.image_name;
  
    this.ds.sendApiRequest("addCart/", this.prodInfo).subscribe((data: any) => { });
  }

  cartinfo: any={};
  cart:any;
  // cartCounter: any;
  

  pullCart() {
    this.cartinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("cart",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
      this.cart = data.payload; 
    });
  }

  // if category sa taas ay drinks or snacks this.dialog.open(snacks/drinks DialogComponent tulad ng sa baba pero 
  // di ko alam paano tatawagin kasi isang btn lang yung nasa snacks component
  
  // drinksModal() {
  //   const dialog = this.dialog.open(DrinksDialogComponent, {
  //     autoFocus: false, width:"70%", height:"60%"
  //   });
  //   dialog.afterClosed().subscribe( ()=>{
  //     console.log("closed")
  //   });
  
  // }

  snacksModal() {
    const dialog = this.dialog.open(SnacksDialogComponent, {
      autoFocus: false, width:"70%", height:"60%"
    });
    dialog.afterClosed().subscribe( ()=>{
      console.log("closed")
    });
  
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
}
