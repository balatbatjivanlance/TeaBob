import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-snacks-dialog',
  templateUrl: './snacks-dialog.component.html',
  styleUrls: ['./snacks-dialog.component.css']
})
export class SnacksDialogComponent implements OnInit {
  user_id = localStorage.getItem("UID");

  constructor(private router: Router,private ds: DataService, @Inject(MAT_DIALOG_DATA)public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
    this.pullAddOnsSnacks();
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

  addon: any;
  
  pullAddOnsSnacks() {
    this.ds.sendApiRequest("pullAddOnsSnacks", null).subscribe((data: { payload: any; }) => {
      this.addon = data.payload;
    })
  
}

  extraSauce: number = 0;
  spicySauce:  any = "none";
  addExtras:any;
  isChecked: boolean = false
  addExtra( addExtra: boolean) {
     this.isChecked = addExtra;
    if (this.isChecked){
      
      let addSauce = 10 * this.food_qty;

      this.food_total = this.food_total + addSauce;
      this.extraSauce =  10;
      this.prodInfo.add_sauce = addSauce;
      console.log(this.food_total);
    }else{
        let addSauce =  10 * this.food_qty;
        this.food_total =  this.food_total - addSauce;
        this.extraSauce=  10;
        this.prodInfo.add_sauce = this.extraSauce;
    }
    this.sendMessage();
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


  saveSpice: any
  saveExtras: any
  addSpicy(addSpice: boolean) {
    var isChecked = addSpice;
    if (isChecked == true){
      this.spicySauce = 'Spicy';
      this.prodInfo.add_spicy = this.spicySauce;
      console.log(this.food_total);
    }else if (isChecked == false){
        this.spicySauce = 'none';
        this.prodInfo.add_spicy = this.spicySauce;
    }
    this.sendMessage();
  }
  
  prodInfo: any = {};
  title: any;
  info: any;


  addToCart() {
    const obj = Object.assign({}, this.addOnArray);
    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.food_id = sessionStorage.getItem("prod_Id");
    this.prodInfo.food_name = this.food_name;
    // this.prodInfo.addOns = obj;
    this.prodInfo.price = this.food_price;
    this.prodInfo.food_quantity = this.food_qty;
    this.prodInfo.cart_total_price = this.food_total;
    this.prodInfo.add_sauce = this.extraSauce;
    this.prodInfo.add_spicy = this.spicySauce;
    this.prodInfo.add_pearl = 0;
    this.prodInfo.add_ccheese = 0;
    this.prodInfo.add_cpuff = 0;
    this.prodInfo.add_cookie = 0;
    console.log(this.prodInfo)
    this.ds.sendApiRequest('addCart/', this.prodInfo).subscribe((data: any) => {
      if (data.remarks === "success"){
        Swal.fire(
          'Nice!',
          'Added to cart successfully!',
          'success'
        )
        this.dialog.closeAll();
      }
      // this.router.navigate(['/cart']);
    });
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


  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
}
