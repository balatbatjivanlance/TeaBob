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
  user_role = localStorage.getItem("user_role");

  constructor(private router: Router,private ds: DataService, @Inject(MAT_DIALOG_DATA)public data: any, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pullUsers();
    this.pullFood_perItem();
    this.pullAddOnsSnacks();
    sessionStorage.removeItem('price')
    sessionStorage.removeItem('addonname')
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
  food_stocks: number = 0;
  food_qty: number = 1;
  food_total: number  = 0 ;


  pullFood_perItem() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.foodinfo.food_id = this.data.food_id
    this.ds.sendApiRequest("food_item/", this.foodinfo.food_id).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;

    this.food_name = this.foods[0].food_name;
    this.food_price = this.foods[0].food_price;
    this.food_stocks = this.foods[0].food_stocks;
    this.food_total = this.food_price;

    console.log(this.foodinfo.food_id)

    });

  }

  addon: any;
  
  pullAddOnsSnacks() {
    this.ds.sendApiRequest("pullAddOnsSnacks", null).subscribe((data: { payload: any; }) => {
      this.addon = data.payload;
    })
  
}

  addOnChecker : boolean = false;
  addOnArray: any [] = []
  priceArr : any [] = []

  onChangeDemo(event:MatCheckboxChange, name: any, pricey: any){
    let price: any = parseInt(event.source.value)
    if (event.checked){
      this.priceArr.push(pricey);
    if (this.priceArr.length <  1){
      price = this.priceArr.reduce((a, b) => a + b, 0)
    }

    this.food_total = this.food_total + (price * this.food_qty);
    this.addOnChecker = true
    this.addOnArray.push(name);
    sessionStorage.setItem('price', this.priceArr.reduce((a, b) => a + b, 0))
    }else {
    this.food_total = this.food_total - (price * this.food_qty);
    this.priceArr = [];
    let newPrice: any = sessionStorage.getItem('price');

    let lastPrice: any = parseInt(newPrice) - parseInt(pricey);

    sessionStorage.removeItem('price')

    sessionStorage.setItem('price', lastPrice);
    if (this.addOnArray){
      let i = this.addOnArray.indexOf(name);
      this.addOnArray.splice(i,1);
      this.addOnChecker = false
    }

    }
    let arr = this.addOnArray.toString()
    sessionStorage.setItem('addonname', arr)
  }

  
  prodInfo: any = {};
  cocodeInfo: any = {};
  title: any;
  info: any;


  addToCart() {

    if(this.food_stocks == 0){
      Swal.fire(this.food_name,"out of Stock")
    }else{

      let addons: any = sessionStorage.getItem('addonname');
    
      this.prodInfo.user_id = localStorage.getItem("id");
      this.prodInfo.food_id = sessionStorage.getItem("prod_Id");
      this.prodInfo.food_name = this.food_name;
      this.prodInfo.price = this.food_price;
      this.prodInfo.food_quantity = this.food_qty;
      this.prodInfo.cart_total_price = this.food_total;
      this.prodInfo.cart_addon_name = addons;
      this.ds.sendApiRequest('addCart/', this.prodInfo).subscribe((data: any) => {
        if (data.remarks === "success"){
          Swal.fire(
            'Great!',
            'Added to cart successfully!',
            'success'
          )
          this.dialog.closeAll();
        }
      });
    }

  }

  plusQty = () =>{

    this.food_qty += 1;
    if (this.food_qty > this.food_stocks){

      this.food_qty -= 1;
    }else{
      if (this.addOnChecker){
        let price : any = sessionStorage.getItem('price')
        this.food_total =  this.food_qty * this.food_price + parseInt(price) * this.food_qty;

      }else {
        this.food_total =  this.food_qty * this.food_price;

      }
    }
  }

  minusQty = () =>{
    if(this.food_qty > 1){
      this.food_qty -= 1;
    }

    if  (this.addOnChecker){
      let price : any= sessionStorage.getItem('price');
      this.food_total =  this.food_qty * this.food_price + parseInt(price) * this.food_qty;
    }
    else {

      this.food_total =  this.food_qty * this.food_price;
    }
  }

  code: any;
  remarks: any;
  fullname: any;
  lastname: any;

  async CheckoutOneItem() {

    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Landmark Near You',
      inputPlaceholder: 'Ex: color of gate, near school, etc.',
      inputAttributes: {
        'aria-label': 'Type your message here'
      },
      showCancelButton: true
    })

    if (text) {
      this.remarks = text;

      var seq = Math.floor(100000000 + Math.random() * 900000000).toString().substring(1)
    this.code = seq

    //checkout info
      let addons: any = sessionStorage.getItem('addonname');
      this.prodInfo.user_id = localStorage.getItem("id");
      this.prodInfo.prod_name = this.food_name;
      this.prodInfo.prod_price = this.food_price;
      this.prodInfo.food_quantity = this.food_qty;
      this.prodInfo.cart_addon_name = addons;
      this.prodInfo.code = this.code;

      //cocode info
      
      this.fullname = localStorage.getItem("Fullname")
      this.lastname = localStorage.getItem("Lastname") 

      this.cocodeInfo.code = this.code;
      this.cocodeInfo.user_name =  this.fullname + " " +  this.lastname;
      this.cocodeInfo.user_id = localStorage.getItem("id")
      this.cocodeInfo.user_contact = localStorage.getItem('user_Contact')
      this.cocodeInfo.user_address = localStorage.getItem('user_Address')
      this.cocodeInfo.total_price = this.food_total;
      this.cocodeInfo.remarks = this.remarks;

      // update food stocks
      let id  =  this.data.food_id;

      this.foodinfo.food_id =  id;
      this.foodinfo.food_stocks =  this.food_stocks - this.food_qty;
      

      this.ds.sendApiRequest('CheckoutOneItem/', this.prodInfo).subscribe((data: any) => {
        if (data.remarks === "success"){
          Swal.fire(
            'Great!',
            'Successfully Checked Out!',
            'success'
          )
          Swal.fire({
            title: 'Scan this QR Code You can pay via G-Cash',
            text: 'Dont forget to save your Receipt and show it to the Delivery Rider',
            imageUrl: './assets/gcash.jpg',
            imageWidth: 400,
            imageHeight: 450,
            imageAlt: 'Custom image',
          })
        }
          this.dialog.closeAll();
        
      });

      this.ds.sendApiRequest('CheckoutCodeOneItem/', this.cocodeInfo).subscribe((data: any) => {});

      this.ds.sendApiRequest('UpdateStocksOneItem/' + id, this.foodinfo).subscribe((data: any) => {});

    
    }
  } 


  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }
  
}
