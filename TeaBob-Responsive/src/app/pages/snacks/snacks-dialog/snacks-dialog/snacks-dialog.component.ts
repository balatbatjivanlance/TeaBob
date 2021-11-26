import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-snacks-dialog',
  templateUrl: './snacks-dialog.component.html',
  styleUrls: ['./snacks-dialog.component.css']
})
export class SnacksDialogComponent implements OnInit {
  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService, @Inject(MAT_DIALOG_DATA)public data: any) { }

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
  }

  userinfo: any = {};
  user: any;
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;

    }
    )
  }


  foodinfo: any = {};
  foods: any []=[];

  food_name: any;
  food_price: number = 0;
  food_qty: number = 1;
  food_total: number  = 0 ;


  pullFood_perItem() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.foodinfo.food_id = this.data.food_id
    this.ds.sendApiRequest("food_item/", this.foodinfo.food_id).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;

    this.food_name = this.foods[0].food_name;
    this.food_price = this.foods[0].food_price;
    this.food_total = this.food_price;

    });

  }

  plusQty = () =>{
    this.food_qty += 1;
    if (this.food_qty > 10){
      alert('You have reeached the maximum order');
      this.food_qty -= 1;
    }else{
      this.food_total =  this.food_qty * this.food_price;
    }
    this.sendMessage();
  }


  
  minusQty = () =>{
    if (this.food_qty > 1){
      this.food_qty -= 1;
      this.food_total =  this.food_qty * this.food_price;
      this.sendMessage();
    }
  }

  addExtra = () =>{
    var element = <HTMLInputElement> document.getElementById("extraSauce");
    var isChecked = element.checked;
  
    if (isChecked == true){
      let addSauce = 10;
      this.food_total = this.food_total + addSauce;
      console.log(this.food_total);
    }else if (isChecked == false){
        let addSauce =  10;
        this.food_total =  this.food_total - addSauce;
    }
    this.sendMessage();
  }
  
  prodInfo: any = {};
  title: any;
  info: any;


  addToCart() {
    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.title = this.food_name;
    // this.prodInfo.description = fooddescription;
    this.prodInfo.price = this.food_price;
    this.prodInfo.cart_total = this.food_total;
    console.log(this.prodInfo);
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
}
