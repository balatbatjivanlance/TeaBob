import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';

import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';


interface LooseObject {[key: string]: any}

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})


export class SalesReportComponent implements OnInit {
 

  

  constructor( private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    // DAILY
    this.deliveryToday();
    this.stocksToday();
    // WEEKLY
    // this.deliveryWeekly();
    // this.stocksWeekly();
    //MONTHLY
    this.deliveryMay();
  }

  user_role = localStorage.getItem("user_role");


  // SIDENAV AND TOOLBAR CODE 

  showFiller = false;
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;



  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 769) {
        return true;
    } else {
        return false;
    }
  }

   
  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.ds.setUserLoggedOut();
    this.router.navigate(['/']);
}


total_deliveries: number = 0;
delivery: any = {};

sales:number =0;
deliveryToday(){
  
  this.ds.sendApiRequest("deliveryToday", null).subscribe((data: { payload: any; }) => {
  this.delivery = data.payload;
  
  this.total_deliveries = this.delivery.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales += data.payload[i].total_price;
    }
    this.keycount();
  });

}

driver_breakdown:any;
driver_final:any;
keycount() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery[i]["driver"]);
  }

  var keyCount : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount[fileLicenses[i]]){
      keyCount[fileLicenses[i]] = 0;
    }
   
      ++keyCount[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount){
    var postdata = { driver: key, number_deliveries: keyCount[key]};
  
    data.push(postdata);
 }

    this.driver_breakdown = data;
}

driver: any;
driverDelivery() {
    this.ds.sendApiRequest("driverDelivery", null).subscribe((data: { payload: any; }) => {
    this.driver = data.payload;
    })
}

drinks:number=0;
snacks:number=0;
addons:number=0;

drinks_sales:number=0;
snacks_sales:number=0;
addons_sales:number=0;
stocks:any;
stocksToday(){
  this.ds.sendApiRequest("stocksToday", null).subscribe((data: { payload: any; }) => {
  this.stocks = data.payload;
  console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks var
        this.drinks+= data.payload[i].food_quantity;

        this.drinks_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
        
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_sales+= (addons.length*10)*data.payload[i].food_quantity;
          this.drinks_sales = this.drinks_sales-((addons.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks var
        this.snacks+= data.payload[i].food_quantity;
        this.snacks_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_sales+= addons.length*10;

        }
        
        
      }
     
    }

    this.items_keycount();
  });

 
}

drinks_breakdown:any;
snacks_breakdown:any;
addons_breakdown:any;

  items_keycount() {
    var drinks = [];
    var snacks2 = [];
    var addons2 = [];

    


    for ( var i = 0, arrLen = this.stocks.length; i < arrLen; ++i ) {
 

      if(this.stocks[i]["cart_addon_name"]){
        let addons =  this.stocks[i].cart_addon_name.split(",");

        for(var j = 0; j < addons.length; j++){
        
                 
          for(var k = 0; k < this.stocks[i]["food_quantity"]; k++){
            addons2.push(addons[j]); 
            
          
          }
        }

      }
        if(this.stocks[i]['size_name']){
            
          for(var j = 0; j < this.stocks[i]["food_quantity"]; j++){
            drinks.push(this.stocks[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks[i]["food_quantity"]; j++){
            snacks2.push(this.stocks[i]["prod_name"]);
          }
          
         }
    }

    var keyCount : LooseObject = {};


    for(i = 0; i < drinks.length; ++i) {
      
      if(!keyCount[drinks[i]]){
        keyCount[drinks[i]] = 0;
      }
    
        ++keyCount[drinks[i]];
    }
  var data = [];
        for(var key in keyCount){
          var drinks_arr = { snack: key, quantity: keyCount[key]};
          
            data.push(drinks_arr);
      }

      this.drinks_breakdown = data;

      var keyCount : LooseObject = {};

      for(i = 0; i < snacks2.length; ++i) {
        
        if(!keyCount[snacks2[i]]){
          keyCount[snacks2[i]] = 0;
        }
      
          ++keyCount[snacks2[i]];
      }
  
    var data = [];
          for(var key in keyCount){
            var snacks_arr = { snack: key, quantity: keyCount[key]};
          
            data.push(snacks_arr);
        }
  
        this.snacks_breakdown = data;

      var keyCount : LooseObject = {};

      for(i = 0; i < addons2.length; ++i) {
        
        if(!keyCount[addons2[i]]){
          keyCount[addons2[i]] = 0;
        }
      
          ++keyCount[addons2[i]];
      }
  
    var data = [];
          for(var key in keyCount){
            var addons_arr = { addons: key, quantity: keyCount[key]};
            
              data.push(addons_arr);
        }
  
  
        this.addons_breakdown = data;

  }

  // ********* MONTHS *********

    
total_deliveriesMay: number = 0;
deliveriesMay: any = {};

salesMay:number =0;
deliveryMay(){
  
  this.ds.sendApiRequest("deliveryMay", null).subscribe((data: { payload: any; }) => {
  this.deliveriesMay = data.payload;
  
  this.total_deliveriesMay = this.deliveriesMay.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesMay += data.payload[i].total_price;
    }
    this.keycountMay();
  });

}

driverMay_breakdown:any;
driverMay_final:any;
keycountMay() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveriesMay.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveriesMay[i]["driverMay"]);
  }

  var keyCountMay : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountMay[fileLicenses[i]]){
      keyCountMay[fileLicenses[i]] = 0;
    }
   
      ++keyCountMay[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountMay){
    var postdata = { driverMay: key, number_deliveriesMay: keyCountMay[key]};
  
    data.push(postdata);
 }

    this.driverMay_breakdown = data; 

}

driverMay: any;
driverDeliveryMay() {
    this.ds.sendApiRequest("driverDeliveryMay", null).subscribe((data: { payload: any; }) => {
    this.driverMay = data.payload;
    })
}

}
