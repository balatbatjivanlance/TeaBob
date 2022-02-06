import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-drinks-dialog',
  templateUrl: './drinks-dialog.component.html',
  styleUrls: ['./drinks-dialog.component.css']
})
export class DrinksDialogComponent implements OnInit {
  user_id = localStorage.getItem("UID");

  constructor(private router: Router, private ds: DataService, @Inject(MAT_DIALOG_DATA)public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
    this.pullSize();
    this.pullAddOnsDrinks();
    // this.pullAddonsDetails();
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

  // addoninfo: any = {};
  // addon_payload: any [] = []; 

  // addon_name: any;
  // addon_price: any;
  // addon_stocks: any;

  // pullAddonsDetails() {
  //   this.addoninfo.addon_id = this.data.addon_id;

  //   this.ds.sendApiRequest("pullAddonsDetails", this.data.addon_id).subscribe((data: { payload: any; }) => {
  //   this.addon_payload = data.payload;
    
  //   this.addon_name = this.addon_payload[0].addon_name;
  //   this.addon_price = this.addon_payload[0].addon_price;
  //   this.addon_stocks = this.addon_payload[0].addon_stocks;
  //   }
  //   )
  // }

  addon: any;
  
  pullAddOnsDrinks() {
    this.ds.sendApiRequest("pullAddOnsDrinks", null).subscribe((data: { payload: any; }) => {
      this.addon = data.payload;
    })
  
}

    
  size: any;
  
  pullSize() {
    this.ds.sendApiRequest("pullSize", null).subscribe((data: { payload: any; }) => {
      this.size = data.payload;
    })
  
}

addOnChecker : boolean = false;
addOnArray: any [] = []
onChangeDemo(event:MatCheckboxChange, name: any){
  // console.log(event.source.value);
  let price: any = parseInt(event.source.value)

  if (event.checked){

  this.food_total = this.food_total + (price * this.food_qty);
  this.addOnChecker = true
  this.addOnArray.push(name);
  sessionStorage.setItem('price', price)
  }else {
  this.food_total = this.food_total - (price * this.food_qty);
  if (this.addOnArray){
    let i = this.addOnArray.indexOf(name);
    this.addOnArray.splice(i,1);
    this.addOnChecker = false
  }

  }
  console.log( this.addOnArray)
}


selectedSize: any ;

selectChangeHandlerSize (event: any){
  this.selectedSize = event.target.value;
  if (this.selectedSize){
    this.food_total = this.food_price + parseInt(this.selectedSize);
   
  }
  console.log(this.selectedSize);
  this.sendMessage();
}



plusQty = () =>{

  this.food_qty += 1;
  if (this.food_qty > 10){
    Swal.fire(
      'Warning job!',
      'You have reached the maximum order',
      'warning'
    )
    this.food_qty -= 1;
  }else{
    if (this.addOnChecker){
      let price : any = sessionStorage.getItem('price')
      this.food_total =  this.food_qty * this.food_price + parseInt(price) * this.food_qty;

    }else {
      this.food_total =  this.food_qty * this.food_price;

    }
  }
  // this.sendMessage();
}


  
minusQty = () =>{
  if (this.food_qty > 1){
    let price : any= sessionStorage.getItem('price');
    this.food_qty -= 1;
    this.food_total = parseInt(price) + (this.food_qty * this.food_price);
    // this.sendMessage();
  }
} 


  extraPearl: number = 0;
  extraCcheese: number = 0;
  extraCPuff: number = 0;
  extraCookie: number = 0;
  savePearl: any;
  saveCcheese: any;
  saveCPuff: any;
  saveCookie: any;
  addOnId : any [] = []
  addPearl( addExtra: boolean, id : any) {
    var isChecked = addExtra;
    this.addOnId.push(id);
    if (isChecked){
      let addPearl = 10 * this.food_qty;
      this.food_total = this.food_total + addPearl;
      this.extraPearl =  10;
      this.prodInfo.addon_id = id;
      // console.log(this.food_total);
    }else{
        let addPearl =  10 * this.food_qty;
        this.food_total =  this.food_total - addPearl;
        this.extraPearl= 0;
        this.prodInfo.addon_id = id;
    }
    this.sendMessage();
  } 

  addCcheese( addExtra: boolean) {
    var isChecked = addExtra;
    if (isChecked){
      let addCcheese = 10 * this.food_qty;
      this.food_total = this.food_total + addCcheese;
      this.extraCcheese = 10;
      this.prodInfo.add_ccheese = this.extraCcheese;
      console.log(this.food_total);
    }else{
        let addCcheese =  10 * this.food_qty;
        this.food_total =  this.food_total - addCcheese;
        this.extraCcheese= 10;
        this.prodInfo.add_ccheese = this.extraCcheese;
    }
    this.sendMessage();
  } 

  addCPuff( addExtra: boolean) {
    var isChecked = addExtra;
    if (isChecked){
      let addCPuff = 10 * this.food_qty;
      this.food_total = this.food_total + addCPuff;
      this.extraCPuff = 10;
      this.prodInfo.add_cpuff = this.extraCPuff;
      console.log(this.food_total);
    }else{
        let addCPuff =  10 * this.food_qty;
        this.food_total =  this.food_total - addCPuff;
        this.extraCPuff= 10;
        this.prodInfo.add_cpuff = this.extraCPuff;
    }
    this.sendMessage();
  } 

  addCookie( addExtra: boolean) {
    var isChecked = addExtra;
    if (isChecked){
      let addCookie = 10 * this.food_qty;
      this.food_total = this.food_total + addCookie;
      this.extraCookie = 10;
      this.prodInfo.add_cookie = this.extraCookie;
      console.log(this.food_total);
    }else{
        let addCookie =  10 * this.food_qty;
        this.food_total =  this.food_total - addCookie;
        this.extraCookie= 10;
        this.prodInfo.add_cookie = this.extraCookie;
    }
    this.sendMessage();
  }

  
  prodInfo: any = {};
  title: any;
  info: any;

  item_size: any;


  addToCart() {

    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.food_id = sessionStorage.getItem("prod_Id");
    this.prodInfo.food_name = this.food_name;
    this.prodInfo.price = this.food_price;
    this.prodInfo.food_quantity = this.food_qty;
    this.prodInfo.cart_total_price = this.food_total;
    this.prodInfo.add_pearl = this.extraPearl;
    this.prodInfo.add_ccheese = this.extraCcheese;
    this.prodInfo.add_cpuff = this.extraCPuff;
    this.prodInfo.add_cookie = this.extraCookie;
    this.prodInfo.add_sauce = 0;
    this.prodInfo.add_spicy = 0;
    console.log(this.prodInfo)

    this.ds.sendApiRequest('addCart/', this.prodInfo).subscribe((data: any) => {
      if (data.remarks === "success"){
        Swal.fire(
          'Nice!',
          'Added to cart successfully!',
          'success'
        )
        this.dialog.closeAll();
        // this.router.navigate(['/cart']);
      }
    });
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }


}
