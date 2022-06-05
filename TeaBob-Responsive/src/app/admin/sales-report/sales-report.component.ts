import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatAccordion } from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';

import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { FormControl, Validators } from '@angular/forms';

export interface PeriodicElement {
}

interface LooseObject {[key: string]: any}

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})


export class SalesReportComponent implements OnInit {
 
  month = '0';
  year = '0';

  constructor( private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    // DAILY
    this.deliveryToday();
    this.stocksToday();
    // WEEKLY
    // this.deliveryWeekly();
    // this.stocksWeekly();
    //MONTHLY
    this.deliveryJanuary();
    this.driverDeliverySnacksJanuary();
    this.driverDeliveryDrinksJanuary();
    this.deliveryFebruary();
    this.driverDeliverySnacksFebruary();
    this.driverDeliveryDrinksFebruary();
    this.deliveryMarch();
    this.driverDeliverySnacksMarch();
    this.driverDeliveryDrinksMarch();
    this.deliveryApril();
    this.driverDeliverySnacksApril();
    this.driverDeliveryDrinksApril();
    this.deliveryMay();
    this.driverDeliverySnacksMay();
    this.driverDeliveryDrinksMay();
    this.deliveryJune();
    this.driverDeliverySnacksJune();
    this.driverDeliveryDrinksJune();
    this.deliveryJuly();
    this.driverDeliverySnacksJuly();
    this.driverDeliveryDrinksJuly();
    this.deliveryAugust();
    this.driverDeliverySnacksAugust();
    this.driverDeliveryDrinksAugust();
    this.deliverySeptember();
    // this.deliveryOctober();
    // this.deliveryNovember();
    // this.deliveryDecember();
    this.deliveryCurrentYear();
    this.DeliverySnacksCurrentYear();
    this.DeliveryDrinksCurrentYear();
    this.delivery2022();
    this.DeliverySnacks2022();
    this.DeliveryDrinks2022();
    this.delivery2023();
    this.DeliverySnacks2023();
    this.DeliveryDrinks2023();
    this.delivery2024();
    this.DeliverySnacks2024();
    this.DeliveryDrinks2024();
    this.delivery2025();
    this.DeliverySnacks2025();
    this.DeliveryDrinks2025();
    this.delivery2026();
    this.DeliverySnacks2026();
    this.DeliveryDrinks2026();
    this.delivery2027();
    this.DeliverySnacks2027();
    this.DeliveryDrinks2027();
    this.deliveryCurrentMonth();
    this.DeliverySnacksCurrentMonth();
    this.DeliveryDrinksCurrentMonth();
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
  // //console.log(data.payload)

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

  total_deliveriesJanuary: number = 0;
deliveriesJanuary: any = {};

salesJanuary:number =0;
deliveryJanuary(){
  
  this.ds.sendApiRequest("deliveryJanuary", null).subscribe((data: { payload: any; }) => {
  this.deliveriesJanuary = data.payload;
  
  this.total_deliveriesJanuary = this.deliveriesJanuary.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesJanuary += data.payload[i].total_price;
    }
  });

}

saleSnacksJanuary: any = {};
salesSnacksJanuary:number =0;
driverDeliverySnacksJanuary(){
  this.ds.sendApiRequest("driverDeliverySnacksJanuary", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksJanuary = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksJanuary += data.payload[i].prod_price;
    }});
}
saleDrinksJanuary: any = {};
salesDrinksJanuary:number =0;
driverDeliveryDrinksJanuary(){
  this.ds.sendApiRequest("driverDeliveryDrinksJanuary", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksJanuary = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksJanuary += data.payload[i].prod_price;
    }});
}

total_deliveriesFebruary: number = 0;
deliveriesFebruary: any = {};

salesFebruary:number =0;
deliveryFebruary(){
  
  this.ds.sendApiRequest("deliveryFebruary", null).subscribe((data: { payload: any; }) => {
  this.deliveriesFebruary = data.payload;
  
  this.total_deliveriesFebruary = this.deliveriesFebruary.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesFebruary += data.payload[i].total_price;
    }
  });

}

saleSnacksFebruary: any = {};
salesSnacksFebruary:number =0;
driverDeliverySnacksFebruary(){
  this.ds.sendApiRequest("driverDeliverySnacksFebruary", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksFebruary = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksFebruary += data.payload[i].prod_price;
    }});
}
saleDrinksFebruary: any = {};
salesDrinksFebruary:number =0;
driverDeliveryDrinksFebruary(){
  this.ds.sendApiRequest("driverDeliveryDrinksFebruary", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksFebruary = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksFebruary += data.payload[i].prod_price;
    }});
}

total_deliveriesMarch: number = 0;
deliveriesMarch: any = {};

salesMarch:number =0;
deliveryMarch(){
  
  this.ds.sendApiRequest("deliveryMarch", null).subscribe((data: { payload: any; }) => {
  this.deliveriesMarch = data.payload;
  
  this.total_deliveriesMarch = this.deliveriesMarch.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesMarch += data.payload[i].total_price;
    }
  });

}


saleSnacksMarch: any = {};
salesSnacksMarch:number =0;
driverDeliverySnacksMarch(){
  this.ds.sendApiRequest("driverDeliverySnacksMarch", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksMarch = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksMarch += data.payload[i].prod_price;
    }});
}
saleDrinksMarch: any = {};
salesDrinksMarch:number =0;
driverDeliveryDrinksMarch(){
  this.ds.sendApiRequest("driverDeliveryDrinksMarch", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksMarch = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksMarch += data.payload[i].prod_price;
    }});
}

total_deliveriesApril: number = 0;
deliveriesApril: any = {};

salesApril:number =0;
deliveryApril(){
  
  this.ds.sendApiRequest("deliveryApril", null).subscribe((data: { payload: any; }) => {
  this.deliveriesApril = data.payload;
  
  this.total_deliveriesApril = this.deliveriesApril.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesApril += data.payload[i].total_price;
    }
  });

}

saleSnacksApril: any = {};
salesSnacksApril:number =0;
driverDeliverySnacksApril(){
  this.ds.sendApiRequest("driverDeliverySnacksApril", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksApril = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksApril += data.payload[i].prod_price;
    }});
}
saleDrinksApril: any = {};
salesDrinksApril:number =0;
driverDeliveryDrinksApril(){
  this.ds.sendApiRequest("driverDeliveryDrinksApril", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksApril = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksApril += data.payload[i].prod_price;
    }});
}

    
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
  });

}

saleSnacksMay: any = {};
salesSnacksMay:number =0;
driverDeliverySnacksMay(){
  this.ds.sendApiRequest("driverDeliverySnacksMay", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksMay = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksMay += data.payload[i].prod_price;
    }});
}
saleDrinksMay: any = {};
salesDrinksMay:number =0;
driverDeliveryDrinksMay(){
  this.ds.sendApiRequest("driverDeliveryDrinksMay", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksMay = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksMay += data.payload[i].prod_price;
    }});
}

total_deliveriesJune: number = 0;
deliveriesJune: any = {};

salesJune:number =0;
deliveryJune(){
  
  this.ds.sendApiRequest("deliveryJune", null).subscribe((data: { payload: any; }) => {
  this.deliveriesJune = data.payload;
  
  this.total_deliveriesJune = this.deliveriesJune.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesJune += data.payload[i].total_price;
    }
  });

}


saleSnacksJune: any = {};
salesSnacksJune:number =0;
driverDeliverySnacksJune(){
  this.ds.sendApiRequest("driverDeliverySnacksJune", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksJune = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksJune += data.payload[i].prod_price;
    }});
}
saleDrinksJune: any = {};
salesDrinksJune:number =0;
driverDeliveryDrinksJune(){
  this.ds.sendApiRequest("driverDeliveryDrinksJune", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksJune = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksJune += data.payload[i].prod_price;
    }});
}

total_deliveriesJuly: number = 0;
deliveriesJuly: any = {};

salesJuly:number =0;
deliveryJuly(){
  
  this.ds.sendApiRequest("deliveryJuly", null).subscribe((data: { payload: any; }) => {
  this.deliveriesJuly = data.payload;
  
  this.total_deliveriesJuly = this.deliveriesJuly.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesJuly += data.payload[i].total_price;
    }
  });

}
saleSnacksJuly: any = {};
salesSnacksJuly:number =0;
driverDeliverySnacksJuly(){
  this.ds.sendApiRequest("driverDeliverySnacksJuly", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksJuly = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksJuly += data.payload[i].prod_price;
    }});
}
saleDrinksJuly: any = {};
salesDrinksJuly:number =0;
driverDeliveryDrinksJuly(){
  this.ds.sendApiRequest("driverDeliveryDrinksJuly", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksJuly = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksJuly += data.payload[i].prod_price;
    }});
}

total_deliveriesAugust: number = 0;
deliveriesAugust: any = {};

salesAugust:number =0;
deliveryAugust(){
  
  this.ds.sendApiRequest("deliveryAugust", null).subscribe((data: { payload: any; }) => {
  this.deliveriesAugust = data.payload;
  
  this.total_deliveriesAugust = this.deliveriesAugust.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesAugust += data.payload[i].total_price;
    }
  });

}

saleSnacksAugust: any = {};
salesSnacksAugust:number =0;
driverDeliverySnacksAugust(){
  this.ds.sendApiRequest("driverDeliverySnacksAugust", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksAugust = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksAugust += data.payload[i].prod_price;
    }});
}
saleDrinksAugust: any = {};
salesDrinksAugust:number =0;
driverDeliveryDrinksAugust(){
  this.ds.sendApiRequest("driverDeliveryDrinksAugust", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksAugust = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksAugust += data.payload[i].prod_price;
    }});
}

total_deliveriesSeptember: number = 0;
deliveriesSeptember: any = {};

salesSeptember:number =0;
deliverySeptember(){
  
  this.ds.sendApiRequest("deliverySeptember", null).subscribe((data: { payload: any; }) => {
  this.deliveriesSeptember = data.payload;
  
  this.total_deliveriesSeptember = this.deliveriesSeptember.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesSeptember += data.payload[i].total_price;
    }
  });

}



total_deliveriesYear: number = 0;
deliveriesYear: any = {};

salesYear:number =0;
deliveryCurrentYear(){
  
  this.ds.sendApiRequest("deliveryCurrentYear", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear = data.payload;
  //console.log(this.deliveriesYear)
  
  this.total_deliveriesYear = this.deliveriesYear.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear += data.payload[i].total_price;
    }
  });

}
saleSnacksYear: any = {};
salesSnacksYear:number =0;
DeliverySnacksCurrentYear(){
  this.ds.sendApiRequest("DeliverySnacksCurrentYear", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear += data.payload[i].prod_price;
    }});
}
saleDrinksYear: any = {};
salesDrinksYear:number =0;
DeliveryDrinksCurrentYear(){
  this.ds.sendApiRequest("DeliveryDrinksCurrentYear", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear += data.payload[i].prod_price;
    }});
}



total_deliveriesYear2022: number = 0;
deliveriesYear2022: any = {};

salesYear2022:number =0;
delivery2022(){
  
  this.ds.sendApiRequest("delivery2022", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2022 = data.payload;
  //console.log(this.deliveriesYear)
  
  this.total_deliveriesYear2022 = this.deliveriesYear2022.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2022 += data.payload[i].total_price;
    }
  });

}

saleSnacksYear2022: any = {};
salesSnacksYear2022:number =0;
DeliverySnacks2022(){
  this.ds.sendApiRequest("DeliverySnacks2022", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2022 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2022 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2022: any = {};
salesDrinksYear2022:number =0;
DeliveryDrinks2022(){
  this.ds.sendApiRequest("DeliveryDrinks2022", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2022 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2022 += data.payload[i].prod_price;
    }});
}

total_deliveriesYear2023: number = 0;
deliveriesYear2023: any = {};

salesYear2023:number =0;
delivery2023(){
  
  this.ds.sendApiRequest("delivery2023", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2023 = data.payload;
  //console.log(this.deliveriesYear2023)
  
  this.total_deliveriesYear2023 = this.deliveriesYear2023.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2023 += data.payload[i].total_price;
    }
  });

}

saleSnacksYear2023: any = {};
salesSnacksYear2023:number =0;
DeliverySnacks2023(){
  this.ds.sendApiRequest("DeliverySnacks2023", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2023 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2023 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2023: any = {};
salesDrinksYear2023:number =0;
DeliveryDrinks2023(){
  this.ds.sendApiRequest("DeliveryDrinks2023", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2023 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2023 += data.payload[i].prod_price;
    }});
}

total_deliveriesYear2024: number = 0;
deliveriesYear2024: any = {};

salesYear2024:number =0;
delivery2024(){
  
  this.ds.sendApiRequest("delivery2024", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2024 = data.payload;
  //console.log(this.deliveriesYear2024)
  
  this.total_deliveriesYear2024 = this.deliveriesYear2024.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2024 += data.payload[i].total_price;
    }
  });

}
saleSnacksYear2024: any = {};
salesSnacksYear2024:number =0;
DeliverySnacks2024(){
  this.ds.sendApiRequest("DeliverySnacks2024", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2024 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2024 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2024: any = {};
salesDrinksYear2024:number =0;
DeliveryDrinks2024(){
  this.ds.sendApiRequest("DeliveryDrinks2024", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2024 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2024 += data.payload[i].prod_price;
    }});
}

total_deliveriesYear2025: number = 0;
deliveriesYear2025: any = {};

salesYear2025:number =0;
delivery2025(){
  
  this.ds.sendApiRequest("delivery2025", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2025 = data.payload;
  //console.log(this.deliveriesYear2025)
  
  this.total_deliveriesYear2025 = this.deliveriesYear2025.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2025 += data.payload[i].total_price;
    }
  });

}
saleSnacksYear2025: any = {};
salesSnacksYear2025:number =0;
DeliverySnacks2025(){
  this.ds.sendApiRequest("DeliverySnacks2025", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2025 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2025 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2025: any = {};
salesDrinksYear2025:number =0;
DeliveryDrinks2025(){
  this.ds.sendApiRequest("DeliveryDrinks2025", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2025 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2025 += data.payload[i].prod_price;
    }});
}


total_deliveriesYear2026: number = 0;
deliveriesYear2026: any = {};

salesYear2026:number =0;
delivery2026(){
  
  this.ds.sendApiRequest("delivery2026", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2026 = data.payload;
  //console.log(this.deliveriesYear2026)
  
  this.total_deliveriesYear2026 = this.deliveriesYear2026.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2026 += data.payload[i].total_price;
    }
  });

}
saleSnacksYear2026: any = {};
salesSnacksYear2026:number =0;
DeliverySnacks2026(){
  this.ds.sendApiRequest("DeliverySnacks2026", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2026 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2026 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2026: any = {};
salesDrinksYear2026:number =0;
DeliveryDrinks2026(){
  this.ds.sendApiRequest("DeliveryDrinks2026", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2026 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2026 += data.payload[i].prod_price;
    }});
}


total_deliveriesYear2027: number = 0;
deliveriesYear2027: any = {};

salesYear2027:number =0;
delivery2027(){
  
  this.ds.sendApiRequest("delivery2027", null).subscribe((data: { payload: any; }) => {
  this.deliveriesYear2027 = data.payload;
  //console.log(this.deliveriesYear2027)
  
  this.total_deliveriesYear2027 = this.deliveriesYear2027.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesYear2027 += data.payload[i].total_price;
    }
  });

}
saleSnacksYear2027: any = {};
salesSnacksYear2027:number =0;
DeliverySnacks2027(){
  this.ds.sendApiRequest("DeliverySnacks2027", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksYear2027 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksYear2027 += data.payload[i].prod_price;
    }});
}
saleDrinksYear2027: any = {};
salesDrinksYear2027:number =0;
DeliveryDrinks2027(){
  this.ds.sendApiRequest("DeliveryDrinks2027", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksYear2027 = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksYear2027 += data.payload[i].prod_price;
    }});
}

total_deliveriesCurrentMonth: number = 0;
deliveriesCurrentMonth: any = {};

salesCurrentMonth:number =0;
deliveryCurrentMonth(){
  
  this.ds.sendApiRequest("deliveryCurrentMonth", null).subscribe((data: { payload: any; }) => {
  this.deliveriesCurrentMonth = data.payload;
  //console.log(this.deliveriesCurrentMonth)
  
  this.total_deliveriesCurrentMonth = this.deliveriesCurrentMonth.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesCurrentMonth += data.payload[i].total_price;
    }
  });

}
saleSnacksCurrentMonth: any = {};
salesSnacksCurrentMonth:number =0;
DeliverySnacksCurrentMonth(){
  this.ds.sendApiRequest("DeliverySnacksCurrentMonth", null).subscribe((data: { payload: any; }) => {
  this.saleSnacksCurrentMonth = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesSnacksCurrentMonth += data.payload[i].prod_price;
    }});
}
saleDrinksCurrentMonth: any = {};
salesDrinksCurrentMonth:number =0;
DeliveryDrinksCurrentMonth(){
  this.ds.sendApiRequest("DeliveryDrinksCurrentMonth", null).subscribe((data: { payload: any; }) => {
  this.saleDrinksCurrentMonth = data.payload;
    for (let i = 0; i < data.payload.length; i++) {
      this.salesDrinksCurrentMonth += data.payload[i].prod_price;
    }});
}

selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

nativeSelectFormControl = new FormControl('vaild',[Validators.required, Validators.pattern('valid')]);

}
