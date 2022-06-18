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
import { MatDateRangePicker } from '@angular/material/datepicker';
import * as XLSX from 'xlsx';



export interface PeriodicElement {
}

interface LooseObject {[key: string]: any}

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})


export class SalesReportComponent implements OnInit {
  fileNamedaily= 'Daily Sales.xlsx';
  fileNameCurrentMonth= 'CurrentMonth Sales.xlsx';
  fileNameJanuary= 'January Sales.xlsx';
  fileNameFebruary= 'February Sales.xlsx';
  fileNameMarch= 'March Sales.xlsx';
  fileNameApril= 'April Sales.xlsx';
  fileNameMay= 'May Sales.xlsx';
  fileNameJune= 'June Sales.xlsx';
  fileNameJuly= 'July Sales.xlsx';
  fileNameAugust= 'August Sales.xlsx';
  fileNameSeptember= 'September Sales.xlsx';
  fileNameOctober= 'October Sales.xlsx';
  fileNameNovember= 'November Sales.xlsx';
  fileNameDecember= 'December Sales.xlsx';
  fileNameCurrentYear= 'CurrentYear Sales.xlsx';
  fileName2022= '2022 Sales.xlsx';
  fileName2023= '2023 Sales.xlsx';
  fileName2024= '2024 Sales.xlsx';
  fileName2025= '2025 Sales.xlsx';
  fileName2026= '2026 Sales.xlsx';
  fileName2027= '2027 Sales.xlsx';

  exportexcel(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('Daily');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNamedaily);
  },1500);
 
  }

  exportexcelCurrentMonth(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('CurrentMonth');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameCurrentMonth);
  },1500);
 
  }

  exportexcelJanuary(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('January');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameJanuary);
  },1500);
 
  }
  exportexcelFebruary(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('February');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameFebruary);
  },1500);
 
  }
  exportexcelMarch(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('March');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameMarch);
  },1500);
 
  }
  exportexcelApril(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('April');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameApril);
  },1500);
 
  }
  exportexcelMay(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('May');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameMay);
  },1500);
 
  }
  exportexcelJune(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('June');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameJune);
  },1500);
 
  }
  exportexcelJuly(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('July');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameJuly);
  },1500);
 
  }
  exportexcelAugust(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('August');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameAugust);
  },1500);
 
  }
  exportexcelSeptember(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('September');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameSeptember);
  },1500);
 
  }
  exportexcelOctober(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('October');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameOctober);
  },1500);
 
  }
  exportexcelNovember(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('November');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameNovember);
  },1500);
 
  }
  exportexcelDecember(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('December');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameDecember);
  },1500);
 
  }

  exportexcelCurrentYear(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('CurrentYear');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileNameCurrentYear);
  },1500);
 
  }

  exportexcel2022(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2022');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2022);
  },1500);
 
  }

  exportexcel2023(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2023');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2023);
  },1500);
 
  }
  exportexcel2024(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2024');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2024);
  },1500);
 
  }
  exportexcel2025(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2025');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2025);
  },1500);
 
  }
  exportexcel2026(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2026');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2026);
  },1500);
 
  }
  exportexcel2027(): void
  {
    this.stocksToday();
    this.driverDeliveryToday();
    this.deliveryToday();

    setTimeout(() =>{
    /* pass here the table id */
    let element = document.getElementById('2027');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName2027);
  },1500);
 
  }
  
 
  month = '0';
  year = '0';
  monthlyyear = '0';

  fromdate: any;
  todate: any;

  constructor( private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    // DAILY
    this.deliveryToday();
    this.stocksToday();
    //MONTHLY
    this.deliveryJanuary();
    this.stocksJanuary();
    this.deliveryCurrentMonth();
    this.stocksCurrentMonth();
    this.deliveryFebruary();
    this.stocksFebruary();
    this.deliveryMarch();
    this.stocksMarch();
    this.deliveryApril();
    this.stocksApril();
    this.deliveryMay();
    this.stocksMay();
    this.deliveryJune();
    this.stocksJune();
    this.deliveryJuly();
    this.stocksJuly();
    this.deliveryAugust();
    this.stocksAugust();
    this.deliverySeptember();
    this.stocksSeptember();
    this.deliveryOctober();
    this.stocksOctober();
    this.deliveryNovember();
    this.stocksNovember();
    this.deliveryDecember();
    this.stocksDecember();
    //YEARLY
    this.deliveryCurrentYear();
    this.stocksCurrentYear();
    this.Delivery2022();
    this.Stocks2022();
    this.Delivery2023();
    this.Stocks2023();
    this.Delivery2024();
    this.Stocks2024();
    this.Delivery2025();
    this.Stocks2025();
    this.Delivery2026();
    this.Stocks2026();
    this.Delivery2027();
    this.Stocks2027();
    
  }

  user_role = localStorage.getItem("user_role");
  Fullname = localStorage.getItem("Fullname");
  Lastname = localStorage.getItem("Lastname");


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

test(){
  console.log(this.fromdate)
  console.log(this.todate)
  console.log(this.year)
  console.log(this.month)

}

showData(){
  this.stocksToday();
  this.driverDeliveryToday();
  this.deliveryToday();
}
//Date Picker

// fromNg: any;
// toNg: any;
// moneymoney
// selectPosBarbersWeekly() {
//   var getDateVar1 = (<HTMLInputElement>document.getElementById("datePick1")).value;
//   var getDateVar2 = (<HTMLInputElement>document.getElementById("datePick2")).value;
//   this.fromNg = (getDateVar1).format('YYYY-MM-DD'); // 2019-04-22
//   this.toNg = (getDateVar2).format('YYYY-MM-DD'); // 2019-04-22
//   this.ds.sendApiRequest("selectPosBarbersServices2/"+"weekly/"+this.fromNg+"/"+this.toNg, null).subscribe((data: { payload: any[]; }) => {
//     this.j = data.payload;
//     for(var i =0; i < this.j.length; i++){
      
//       this.moneymoney += this.j[i].pos_payment;
//       }
    
//   });
// }

//TODAY


total_deliveriestoday: number = 0;
deliverytoday: any = {};
deliveryrequestPayloadtoday:any = {};
salestoday:number =0;
deliveryToday(){
  this.deliveryrequestPayloadtoday.fromDate = this.fromdate;
  this.deliveryrequestPayloadtoday.toDate = this.todate;
  this.deliveryrequestPayloadtoday.conDate = 1;
  this.ds.sendApiRequest("deliveryToday",  JSON.parse(JSON.stringify(this.deliveryrequestPayloadtoday))).subscribe((data: { payload: any; }) => {
  this.deliverytoday = data.payload;
  
  this.total_deliveriestoday = this.deliverytoday.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salestoday += data.payload[i].total_price;
    }
    this.keycountToday();
  });

}

drivertoday_breakdown:any;
drivertoday_final:any;
keycountToday() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverytoday.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverytoday[i]["driver"]);
  }

  var keyCountToday : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountToday[fileLicenses[i]]){
      keyCountToday[fileLicenses[i]] = 0;
    }
   
      ++keyCountToday[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountToday){
    var postdata = { drivertoday: key, number_deliveriestoday: keyCountToday[key]};
  
    data.push(postdata);
 }

    this.drivertoday_breakdown = data;
}

drivertoday: any;
driverrequestPayloadtoday:any = {};
driverDeliveryToday() {
  this.driverrequestPayloadtoday.fromDate = this.fromdate;
  this.driverrequestPayloadtoday.toDate = this.todate;
  this.driverrequestPayloadtoday.conDate = 1;
    this.ds.sendApiRequest("driverDeliveryToday", JSON.parse(JSON.stringify(this.driverrequestPayloadtoday))).subscribe((data: { payload: any; }) => {
    this.drivertoday = data.payload;
    })
}
requestPayload:any = {};
t:any;
stocksDaily() {
  this.requestPayload.fromDate = this.fromdate;
  this.requestPayload.toDate = this.todate;
  this.requestPayload.conDate = 1;
    this.ds.sendApiRequest("stocksDaily", JSON.parse(JSON.stringify(this.requestPayload))).subscribe((data: { payload: any; }) => {
      this.t = data.payload;
      this.drinkstoday = this.t.length;
      console.log(this.t)
    })
}
ts:any;
stocksDaily2() {
  this.requestPayload.monthDate = this.month;
  this.requestPayload.monthyearDate = this.monthlyyear
    this.ds.sendApiRequest("stocksDaily2", this.requestPayload).subscribe((data: { payload: any; }) => {
      this.ts = data.payload;

    })
}



drinkstoday:number=0;
snackstoday:number=0;
addonstoday:number=0;

drinkstoday_sales:number=0;
snackstoday_sales:number=0;
addonstoday_sales:number=0;
stockstoday:any;
requestPayloadtoday:any = {};
stocksToday(){
  this.requestPayloadtoday.fromDate = this.fromdate;
  this.requestPayloadtoday.toDate = this.todate;
  this.requestPayloadtoday.conDate = 1;
  this.ds.sendApiRequest("stocksToday",  JSON.parse(JSON.stringify(this.requestPayloadtoday))).subscribe((data: { payload: any; }) => {
  this.stockstoday = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinkstoday var
        this.drinkstoday+= data.payload[i].food_quantity;

        this.drinkstoday_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonstoday =  data.payload[i].cart_addon_name.split(",");
        
          this.addonstoday += addonstoday.length*data.payload[i].food_quantity;
          this.addonstoday_sales+= (addonstoday.length*10)*data.payload[i].food_quantity;
          this.drinkstoday_sales = this.drinkstoday_sales-((addonstoday.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snackstoday var
        this.snackstoday+= data.payload[i].food_quantity;
        this.snackstoday_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonstoday =  data.payload[i].cart_addon_name.split(",");
          this.addonstoday += addonstoday.length*data.payload[i].food_quantity;
          this.addonstoday_sales+= addonstoday.length*10;

        }
        
        
      }
     
    }

    this.items_keycounttoday();
    this.deliveryToday();
    this.driverDeliveryToday();
  });

 
}




drinkstoday_breakdown:any;
snackstoday_breakdown:any;
addonstoday_breakdown:any;

  items_keycounttoday() {
    var drinkstoday = [];
    var snackstoday2 = [];
    var addonstoday2 = [];

    


    for ( var i = 0, arrLen = this.stockstoday.length; i < arrLen; ++i ) {
 

      if(this.stockstoday[i]["cart_addon_name"]){
        let addonstoday =  this.stockstoday[i].cart_addon_name.split(",");

        for(var j = 0; j < addonstoday.length; j++){
        
                 
          for(var k = 0; k < this.stockstoday[i]["food_quantity"]; k++){
            addonstoday2.push(addonstoday[j]); 
            
          
          }
        }

      }
        if(this.stockstoday[i]['size_name']){
            
          for(var j = 0; j < this.stockstoday[i]["food_quantity"]; j++){
            drinkstoday.push(this.stockstoday[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stockstoday[i]["food_quantity"]; j++){
            snackstoday2.push(this.stockstoday[i]["prod_name"]);
          }
          
         }
    }

    var keyCounttoday : LooseObject = {};


    for(i = 0; i < drinkstoday.length; ++i) {
      
      if(!keyCounttoday[drinkstoday[i]]){
        keyCounttoday[drinkstoday[i]] = 0;
      }
    
        ++keyCounttoday[drinkstoday[i]];
    }
  var data = [];
        for(var key in keyCounttoday){
          var drinkstoday_arr = { snack: key, quantity: keyCounttoday[key]};
          
            data.push(drinkstoday_arr);
      }

      this.drinkstoday_breakdown = data;

      var keyCounttoday : LooseObject = {};

      for(i = 0; i < snackstoday2.length; ++i) {
        
        if(!keyCounttoday[snackstoday2[i]]){
          keyCounttoday[snackstoday2[i]] = 0;
        }
      
          ++keyCounttoday[snackstoday2[i]];
      }
  
    var data = [];
          for(var key in keyCounttoday){
            var snackstoday_arr = { snack: key, quantity: keyCounttoday[key]};
          
            data.push(snackstoday_arr);
        }
  
        this.snackstoday_breakdown = data;

      var keyCounttoday : LooseObject = {};

      for(i = 0; i < addonstoday2.length; ++i) {
        
        if(!keyCounttoday[addonstoday2[i]]){
          keyCounttoday[addonstoday2[i]] = 0;
        }
      
          ++keyCounttoday[addonstoday2[i]];
      }
  
    var data = [];
          for(var key in keyCounttoday){
            var addonstoday_arr = { addonstoday: key, quantity: keyCounttoday[key]};
            
              data.push(addonstoday_arr);
        }
  
  
        this.addonstoday_breakdown = data;

  }

//MONTHS
//January

total_deliveriesjanuary: number = 0;
deliveryjanuary: any = {};

salesjanuary:number =0;
deliveryJanuary(){
  
  this.ds.sendApiRequest("deliveryJanuary", null).subscribe((data: { payload: any; }) => {
  this.deliveryjanuary = data.payload;
  
  this.total_deliveriesjanuary = this.deliveryjanuary.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesjanuary += data.payload[i].total_price;
    }
    this.keycountjanuary();
  });

}

driverjanuary_breakdown:any;
driverjanuary_final:any;
keycountjanuary() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryjanuary.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryjanuary[i]["driver"]);
  }

  var keyCountjanuary : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountjanuary[fileLicenses[i]]){
      keyCountjanuary[fileLicenses[i]] = 0;
    }
   
      ++keyCountjanuary[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountjanuary){
    var postdata = { driverjanuary: key, number_deliveriesjanuary: keyCountjanuary[key]};
  
    data.push(postdata);
 }

    this.driverjanuary_breakdown = data;
}

driverjanuary: any;
driverDeliveryJanuary() {
    this.ds.sendApiRequest("driverDeliveryJanuary", null).subscribe((data: { payload: any; }) => {
    this.driverjanuary = data.payload;
    })
}

drinksjanuary:number=0;
snacksjanuary:number=0;
addonsjanuary:number=0;

drinksjanuary_sales:number=0;
snacksjanuary_sales:number=0;
addonsjanuary_sales:number=0;
stocksjanuary:any;
stocksJanuary(){
  this.ds.sendApiRequest("stocksJanuary", null).subscribe((data: { payload: any; }) => {
  this.stocksjanuary = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksjanuary var
        this.drinksjanuary+= data.payload[i].food_quantity;

        this.drinksjanuary_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsjanuary =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsjanuary += addonsjanuary.length*data.payload[i].food_quantity;
          this.addonsjanuary_sales+= (addonsjanuary.length*10)*data.payload[i].food_quantity;
          this.drinksjanuary_sales = this.drinksjanuary_sales-((addonsjanuary.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksjanuary var
        this.snacksjanuary+= data.payload[i].food_quantity;
        this.snacksjanuary_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsjanuary =  data.payload[i].cart_addon_name.split(",");
          this.addonsjanuary += addonsjanuary.length*data.payload[i].food_quantity;
          this.addonsjanuary_sales+= addonsjanuary.length*10;

        }
        
        
      }
     
    }

    this.items_keycountjanuary();
  });

 
}




drinksjanuary_breakdown:any;
snacksjanuary_breakdown:any;
addonsjanuary_breakdown:any;

  items_keycountjanuary() {
    var drinksjanuary = [];
    var snacksjanuary2 = [];
    var addonsjanuary2 = [];

    


    for ( var i = 0, arrLen = this.stocksjanuary.length; i < arrLen; ++i ) {
 

      if(this.stocksjanuary[i]["cart_addon_name"]){
        let addonsjanuary =  this.stocksjanuary[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsjanuary.length; j++){
        
                 
          for(var k = 0; k < this.stocksjanuary[i]["food_quantity"]; k++){
            addonsjanuary2.push(addonsjanuary[j]); 
            
          
          }
        }

      }
        if(this.stocksjanuary[i]['size_name']){
            
          for(var j = 0; j < this.stocksjanuary[i]["food_quantity"]; j++){
            drinksjanuary.push(this.stocksjanuary[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksjanuary[i]["food_quantity"]; j++){
            snacksjanuary2.push(this.stocksjanuary[i]["prod_name"]);
          }
          
         }
    }

    var keyCountjanuary : LooseObject = {};


    for(i = 0; i < drinksjanuary.length; ++i) {
      
      if(!keyCountjanuary[drinksjanuary[i]]){
        keyCountjanuary[drinksjanuary[i]] = 0;
      }
    
        ++keyCountjanuary[drinksjanuary[i]];
    }
  var data = [];
        for(var key in keyCountjanuary){
          var drinksjanuary_arr = { snack: key, quantity: keyCountjanuary[key]};
          
            data.push(drinksjanuary_arr);
      }

      this.drinksjanuary_breakdown = data;

      var keyCountjanuary : LooseObject = {};

      for(i = 0; i < snacksjanuary2.length; ++i) {
        
        if(!keyCountjanuary[snacksjanuary2[i]]){
          keyCountjanuary[snacksjanuary2[i]] = 0;
        }
      
          ++keyCountjanuary[snacksjanuary2[i]];
      }
  
    var data = [];
          for(var key in keyCountjanuary){
            var snacksjanuary_arr = { snack: key, quantity: keyCountjanuary[key]};
          
            data.push(snacksjanuary_arr);
        }
  
        this.snacksjanuary_breakdown = data;

      var keyCountjanuary : LooseObject = {};

      for(i = 0; i < addonsjanuary2.length; ++i) {
        
        if(!keyCountjanuary[addonsjanuary2[i]]){
          keyCountjanuary[addonsjanuary2[i]] = 0;
        }
      
          ++keyCountjanuary[addonsjanuary2[i]];
      }
  
    var data = [];
          for(var key in keyCountjanuary){
            var addonsjanuary_arr = { addonsjanuary: key, quantity: keyCountjanuary[key]};
            
              data.push(addonsjanuary_arr);
        }
  
  
        this.addonsjanuary_breakdown = data;

  }

//February

total_deliveriesfebruary: number = 0;
deliveryfebruary: any = {};

salesfebruary:number =0;
deliveryFebruary(){
  
  this.ds.sendApiRequest("deliveryFebruary", null).subscribe((data: { payload: any; }) => {
  this.deliveryfebruary = data.payload;
  
  this.total_deliveriesfebruary = this.deliveryfebruary.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesfebruary += data.payload[i].total_price;
    }
    this.keycountfebruary();
  });

}

driverfebruary_breakdown:any;
driverfebruary_final:any;
keycountfebruary() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryfebruary.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryfebruary[i]["driver"]);
  }

  var keyCountfebruary : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountfebruary[fileLicenses[i]]){
      keyCountfebruary[fileLicenses[i]] = 0;
    }
   
      ++keyCountfebruary[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountfebruary){
    var postdata = { driverfebruary: key, number_deliveriesfebruary: keyCountfebruary[key]};
  
    data.push(postdata);
 }

    this.driverfebruary_breakdown = data;
}

driverfebruary: any;
driverDeliveryfebruary() {
    this.ds.sendApiRequest("driverDeliveryfebruary", null).subscribe((data: { payload: any; }) => {
    this.driverfebruary = data.payload;
    })
}

drinksfebruary:number=0;
snacksfebruary:number=0;
addonsfebruary:number=0;

drinksfebruary_sales:number=0;
snacksfebruary_sales:number=0;
addonsfebruary_sales:number=0;
stocksfebruary:any;
stocksFebruary(){
  this.ds.sendApiRequest("stocksFebruary", null).subscribe((data: { payload: any; }) => {
  this.stocksfebruary = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksfebruary var
        this.drinksfebruary+= data.payload[i].food_quantity;

        this.drinksfebruary_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsfebruary =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsfebruary += addonsfebruary.length*data.payload[i].food_quantity;
          this.addonsfebruary_sales+= (addonsfebruary.length*10)*data.payload[i].food_quantity;
          this.drinksfebruary_sales = this.drinksfebruary_sales-((addonsfebruary.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksfebruary var
        this.snacksfebruary+= data.payload[i].food_quantity;
        this.snacksfebruary_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsfebruary =  data.payload[i].cart_addon_name.split(",");
          this.addonsfebruary += addonsfebruary.length*data.payload[i].food_quantity;
          this.addonsfebruary_sales+= addonsfebruary.length*10;

        }
        
        
      }
     
    }

    this.items_keycountfebruary();
  });

 
}




drinksfebruary_breakdown:any;
snacksfebruary_breakdown:any;
addonsfebruary_breakdown:any;

  items_keycountfebruary() {
    var drinksfebruary = [];
    var snacksfebruary2 = [];
    var addonsfebruary2 = [];

    


    for ( var i = 0, arrLen = this.stocksfebruary.length; i < arrLen; ++i ) {
 

      if(this.stocksfebruary[i]["cart_addon_name"]){
        let addonsfebruary =  this.stocksfebruary[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsfebruary.length; j++){
        
                 
          for(var k = 0; k < this.stocksfebruary[i]["food_quantity"]; k++){
            addonsfebruary2.push(addonsfebruary[j]); 
            
          
          }
        }

      }
        if(this.stocksfebruary[i]['size_name']){
            
          for(var j = 0; j < this.stocksfebruary[i]["food_quantity"]; j++){
            drinksfebruary.push(this.stocksfebruary[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksfebruary[i]["food_quantity"]; j++){
            snacksfebruary2.push(this.stocksfebruary[i]["prod_name"]);
          }
          
         }
    }

    var keyCountfebruary : LooseObject = {};


    for(i = 0; i < drinksfebruary.length; ++i) {
      
      if(!keyCountfebruary[drinksfebruary[i]]){
        keyCountfebruary[drinksfebruary[i]] = 0;
      }
    
        ++keyCountfebruary[drinksfebruary[i]];
    }
  var data = [];
        for(var key in keyCountfebruary){
          var drinksfebruary_arr = { snack: key, quantity: keyCountfebruary[key]};
          
            data.push(drinksfebruary_arr);
      }

      this.drinksfebruary_breakdown = data;

      var keyCountfebruary : LooseObject = {};

      for(i = 0; i < snacksfebruary2.length; ++i) {
        
        if(!keyCountfebruary[snacksfebruary2[i]]){
          keyCountfebruary[snacksfebruary2[i]] = 0;
        }
      
          ++keyCountfebruary[snacksfebruary2[i]];
      }
  
    var data = [];
          for(var key in keyCountfebruary){
            var snacksfebruary_arr = { snack: key, quantity: keyCountfebruary[key]};
          
            data.push(snacksfebruary_arr);
        }
  
        this.snacksfebruary_breakdown = data;

      var keyCountfebruary : LooseObject = {};

      for(i = 0; i < addonsfebruary2.length; ++i) {
        
        if(!keyCountfebruary[addonsfebruary2[i]]){
          keyCountfebruary[addonsfebruary2[i]] = 0;
        }
      
          ++keyCountfebruary[addonsfebruary2[i]];
      }
  
    var data = [];
          for(var key in keyCountfebruary){
            var addonsfebruary_arr = { addonsfebruary: key, quantity: keyCountfebruary[key]};
            
              data.push(addonsfebruary_arr);
        }
  
  
        this.addonsfebruary_breakdown = data;

  }

//March

total_deliveriesmarch: number = 0;
deliverymarch: any = {};

salesmarch:number =0;
deliveryMarch(){
  
  this.ds.sendApiRequest("deliveryMarch", null).subscribe((data: { payload: any; }) => {
  this.deliverymarch = data.payload;
  
  this.total_deliveriesmarch = this.deliverymarch.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesmarch += data.payload[i].total_price;
    }
    this.keycountmarch();
  });

}

drivermarch_breakdown:any;
drivermarch_final:any;
keycountmarch() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverymarch.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverymarch[i]["driver"]);
  }

  var keyCountmarch : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountmarch[fileLicenses[i]]){
      keyCountmarch[fileLicenses[i]] = 0;
    }
   
      ++keyCountmarch[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountmarch){
    var postdata = { drivermarch: key, number_deliveriesmarch: keyCountmarch[key]};
  
    data.push(postdata);
 }

    this.drivermarch_breakdown = data;
}

drivermarch: any;
driverDeliveryMarch() {
    this.ds.sendApiRequest("driverDeliveryMarch", null).subscribe((data: { payload: any; }) => {
    this.drivermarch = data.payload;
    })
}

drinksmarch:number=0;
snacksmarch:number=0;
addonsmarch:number=0;

drinksmarch_sales:number=0;
snacksmarch_sales:number=0;
addonsmarch_sales:number=0;
stocksmarch:any;
stocksMarch(){
  this.ds.sendApiRequest("stocksMarch", null).subscribe((data: { payload: any; }) => {
  this.stocksmarch = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksmarch var
        this.drinksmarch+= data.payload[i].food_quantity;

        this.drinksmarch_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsmarch =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsmarch += addonsmarch.length*data.payload[i].food_quantity;
          this.addonsmarch_sales+= (addonsmarch.length*10)*data.payload[i].food_quantity;
          this.drinksmarch_sales = this.drinksmarch_sales-((addonsmarch.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksmarch var
        this.snacksmarch+= data.payload[i].food_quantity;
        this.snacksmarch_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsmarch =  data.payload[i].cart_addon_name.split(",");
          this.addonsmarch += addonsmarch.length*data.payload[i].food_quantity;
          this.addonsmarch_sales+= addonsmarch.length*10;

        }
        
        
      }
     
    }

    this.items_keycountmarch();
  });

 
}




drinksmarch_breakdown:any;
snacksmarch_breakdown:any;
addonsmarch_breakdown:any;

  items_keycountmarch() {
    var drinksmarch = [];
    var snacksmarch2 = [];
    var addonsmarch2 = [];

    


    for ( var i = 0, arrLen = this.stocksmarch.length; i < arrLen; ++i ) {
 

      if(this.stocksmarch[i]["cart_addon_name"]){
        let addonsmarch =  this.stocksmarch[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsmarch.length; j++){
        
                 
          for(var k = 0; k < this.stocksmarch[i]["food_quantity"]; k++){
            addonsmarch2.push(addonsmarch[j]); 
            
          
          }
        }

      }
        if(this.stocksmarch[i]['size_name']){
            
          for(var j = 0; j < this.stocksmarch[i]["food_quantity"]; j++){
            drinksmarch.push(this.stocksmarch[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksmarch[i]["food_quantity"]; j++){
            snacksmarch2.push(this.stocksmarch[i]["prod_name"]);
          }
          
         }
    }

    var keyCountmarch : LooseObject = {};


    for(i = 0; i < drinksmarch.length; ++i) {
      
      if(!keyCountmarch[drinksmarch[i]]){
        keyCountmarch[drinksmarch[i]] = 0;
      }
    
        ++keyCountmarch[drinksmarch[i]];
    }
  var data = [];
        for(var key in keyCountmarch){
          var drinksmarch_arr = { snack: key, quantity: keyCountmarch[key]};
          
            data.push(drinksmarch_arr);
      }

      this.drinksmarch_breakdown = data;

      var keyCountmarch : LooseObject = {};

      for(i = 0; i < snacksmarch2.length; ++i) {
        
        if(!keyCountmarch[snacksmarch2[i]]){
          keyCountmarch[snacksmarch2[i]] = 0;
        }
      
          ++keyCountmarch[snacksmarch2[i]];
      }
  
    var data = [];
          for(var key in keyCountmarch){
            var snacksmarch_arr = { snack: key, quantity: keyCountmarch[key]};
          
            data.push(snacksmarch_arr);
        }
  
        this.snacksmarch_breakdown = data;

      var keyCountmarch : LooseObject = {};

      for(i = 0; i < addonsmarch2.length; ++i) {
        
        if(!keyCountmarch[addonsmarch2[i]]){
          keyCountmarch[addonsmarch2[i]] = 0;
        }
      
          ++keyCountmarch[addonsmarch2[i]];
      }
  
    var data = [];
          for(var key in keyCountmarch){
            var addonsmarch_arr = { addonsmarch: key, quantity: keyCountmarch[key]};
            
              data.push(addonsmarch_arr);
        }
  
  
        this.addonsmarch_breakdown = data;

  }

//April

total_deliveriesapril: number = 0;
deliveryapril: any = {};

salesapril:number =0;
deliveryApril(){
  
  this.ds.sendApiRequest("deliveryApril", null).subscribe((data: { payload: any; }) => {
  this.deliveryapril = data.payload;
  
  this.total_deliveriesapril = this.deliveryapril.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesapril += data.payload[i].total_price;
    }
    this.keycountapril();
  });

}

driverapril_breakdown:any;
driverapril_final:any;
keycountapril() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryapril.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryapril[i]["driver"]);
  }

  var keyCountapril : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountapril[fileLicenses[i]]){
      keyCountapril[fileLicenses[i]] = 0;
    }
   
      ++keyCountapril[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountapril){
    var postdata = { driverapril: key, number_deliveriesapril: keyCountapril[key]};
  
    data.push(postdata);
 }

    this.driverapril_breakdown = data;
}

driverapril: any;
driverDeliveryApril() {
    this.ds.sendApiRequest("driverDeliveryApril", null).subscribe((data: { payload: any; }) => {
    this.driverapril = data.payload;
    })
}

drinksapril:number=0;
snacksapril:number=0;
addonsapril:number=0;

drinksapril_sales:number=0;
snacksapril_sales:number=0;
addonsapril_sales:number=0;
stocksapril:any;
stocksApril(){
  this.ds.sendApiRequest("stocksApril", null).subscribe((data: { payload: any; }) => {
  this.stocksapril = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksapril var
        this.drinksapril+= data.payload[i].food_quantity;

        this.drinksapril_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsapril =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsapril += addonsapril.length*data.payload[i].food_quantity;
          this.addonsapril_sales+= (addonsapril.length*10)*data.payload[i].food_quantity;
          this.drinksapril_sales = this.drinksapril_sales-((addonsapril.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksapril var
        this.snacksapril+= data.payload[i].food_quantity;
        this.snacksapril_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsapril =  data.payload[i].cart_addon_name.split(",");
          this.addonsapril += addonsapril.length*data.payload[i].food_quantity;
          this.addonsapril_sales+= addonsapril.length*10;

        }
        
        
      }
     
    }

    this.items_keycountapril();
  });

 
}




drinksapril_breakdown:any;
snacksapril_breakdown:any;
addonsapril_breakdown:any;

  items_keycountapril() {
    var drinksapril = [];
    var snacksapril2 = [];
    var addonsapril2 = [];

    


    for ( var i = 0, arrLen = this.stocksapril.length; i < arrLen; ++i ) {
 

      if(this.stocksapril[i]["cart_addon_name"]){
        let addonsapril =  this.stocksapril[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsapril.length; j++){
        
                 
          for(var k = 0; k < this.stocksapril[i]["food_quantity"]; k++){
            addonsapril2.push(addonsapril[j]); 
            
          
          }
        }

      }
        if(this.stocksapril[i]['size_name']){
            
          for(var j = 0; j < this.stocksapril[i]["food_quantity"]; j++){
            drinksapril.push(this.stocksapril[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksapril[i]["food_quantity"]; j++){
            snacksapril2.push(this.stocksapril[i]["prod_name"]);
          }
          
         }
    }

    var keyCountapril : LooseObject = {};


    for(i = 0; i < drinksapril.length; ++i) {
      
      if(!keyCountapril[drinksapril[i]]){
        keyCountapril[drinksapril[i]] = 0;
      }
    
        ++keyCountapril[drinksapril[i]];
    }
  var data = [];
        for(var key in keyCountapril){
          var drinksapril_arr = { snack: key, quantity: keyCountapril[key]};
          
            data.push(drinksapril_arr);
      }

      this.drinksapril_breakdown = data;

      var keyCountapril : LooseObject = {};

      for(i = 0; i < snacksapril2.length; ++i) {
        
        if(!keyCountapril[snacksapril2[i]]){
          keyCountapril[snacksapril2[i]] = 0;
        }
      
          ++keyCountapril[snacksapril2[i]];
      }
  
    var data = [];
          for(var key in keyCountapril){
            var snacksapril_arr = { snack: key, quantity: keyCountapril[key]};
          
            data.push(snacksapril_arr);
        }
  
        this.snacksapril_breakdown = data;

      var keyCountapril : LooseObject = {};

      for(i = 0; i < addonsapril2.length; ++i) {
        
        if(!keyCountapril[addonsapril2[i]]){
          keyCountapril[addonsapril2[i]] = 0;
        }
      
          ++keyCountapril[addonsapril2[i]];
      }
  
    var data = [];
          for(var key in keyCountapril){
            var addonsapril_arr = { addonsapril: key, quantity: keyCountapril[key]};
            
              data.push(addonsapril_arr);
        }
  
  
        this.addonsapril_breakdown = data;

  }

//May

total_deliveriesmay: number = 0;
deliverymay: any = {};

salesmay:number =0;
deliveryMay(){
  
  this.ds.sendApiRequest("deliveryMay", null).subscribe((data: { payload: any; }) => {
  this.deliverymay = data.payload;
  
  this.total_deliveriesmay = this.deliverymay.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesmay += data.payload[i].total_price;
    }
    this.keycountmay();
  });

}

drivermay_breakdown:any;
drivermay_final:any;
keycountmay() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverymay.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverymay[i]["driver"]);
  }

  var keyCountmay : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountmay[fileLicenses[i]]){
      keyCountmay[fileLicenses[i]] = 0;
    }
   
      ++keyCountmay[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountmay){
    var postdata = { drivermay: key, number_deliveriesmay: keyCountmay[key]};
  
    data.push(postdata);
 }

    this.drivermay_breakdown = data;
}

drivermay: any;
driverDeliveryMay() {
    this.ds.sendApiRequest("driverDeliveryMay", null).subscribe((data: { payload: any; }) => {
    this.drivermay = data.payload;
    })
}

drinksmay:number=0;
snacksmay:number=0;
addonsmay:number=0;

drinksmay_sales:number=0;
snacksmay_sales:number=0;
addonsmay_sales:number=0;
stocksmay:any;
stocksMay(){
  this.ds.sendApiRequest("stocksMay", null).subscribe((data: { payload: any; }) => {
  this.stocksmay = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksmay var
        this.drinksmay+= data.payload[i].food_quantity;

        this.drinksmay_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsmay =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsmay += addonsmay.length*data.payload[i].food_quantity;
          this.addonsmay_sales+= (addonsmay.length*10)*data.payload[i].food_quantity;
          this.drinksmay_sales = this.drinksmay_sales-((addonsmay.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksmay var
        this.snacksmay+= data.payload[i].food_quantity;
        this.snacksmay_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsmay =  data.payload[i].cart_addon_name.split(",");
          this.addonsmay += addonsmay.length*data.payload[i].food_quantity;
          this.addonsmay_sales+= addonsmay.length*10;

        }
        
        
      }
     
    }

    this.items_keycountmay();
  });

 
}




drinksmay_breakdown:any;
snacksmay_breakdown:any;
addonsmay_breakdown:any;

  items_keycountmay() {
    var drinksmay = [];
    var snacksmay2 = [];
    var addonsmay2 = [];

    


    for ( var i = 0, arrLen = this.stocksmay.length; i < arrLen; ++i ) {
 

      if(this.stocksmay[i]["cart_addon_name"]){
        let addonsmay =  this.stocksmay[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsmay.length; j++){
        
                 
          for(var k = 0; k < this.stocksmay[i]["food_quantity"]; k++){
            addonsmay2.push(addonsmay[j]); 
            
          
          }
        }

      }
        if(this.stocksmay[i]['size_name']){
            
          for(var j = 0; j < this.stocksmay[i]["food_quantity"]; j++){
            drinksmay.push(this.stocksmay[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksmay[i]["food_quantity"]; j++){
            snacksmay2.push(this.stocksmay[i]["prod_name"]);
          }
          
         }
    }

    var keyCountmay : LooseObject = {};


    for(i = 0; i < drinksmay.length; ++i) {
      
      if(!keyCountmay[drinksmay[i]]){
        keyCountmay[drinksmay[i]] = 0;
      }
    
        ++keyCountmay[drinksmay[i]];
    }
  var data = [];
        for(var key in keyCountmay){
          var drinksmay_arr = { snack: key, quantity: keyCountmay[key]};
          
            data.push(drinksmay_arr);
      }

      this.drinksmay_breakdown = data;

      var keyCountmay : LooseObject = {};

      for(i = 0; i < snacksmay2.length; ++i) {
        
        if(!keyCountmay[snacksmay2[i]]){
          keyCountmay[snacksmay2[i]] = 0;
        }
      
          ++keyCountmay[snacksmay2[i]];
      }
  
    var data = [];
          for(var key in keyCountmay){
            var snacksmay_arr = { snack: key, quantity: keyCountmay[key]};
          
            data.push(snacksmay_arr);
        }
  
        this.snacksmay_breakdown = data;

      var keyCountmay : LooseObject = {};

      for(i = 0; i < addonsmay2.length; ++i) {
        
        if(!keyCountmay[addonsmay2[i]]){
          keyCountmay[addonsmay2[i]] = 0;
        }
      
          ++keyCountmay[addonsmay2[i]];
      }
  
    var data = [];
          for(var key in keyCountmay){
            var addonsmay_arr = { addonsmay: key, quantity: keyCountmay[key]};
            
              data.push(addonsmay_arr);
        }
  
  
        this.addonsmay_breakdown = data;

  }

//June

total_deliveriesjune: number = 0;
deliveryjune: any = {};

salesjune:number =0;
deliveryJune(){
  
  this.ds.sendApiRequest("deliveryJune", null).subscribe((data: { payload: any; }) => {
  this.deliveryjune = data.payload;
  
  this.total_deliveriesjune = this.deliveryjune.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesjune += data.payload[i].total_price;
    }
    this.keycountjune();
  });

}

driverjune_breakdown:any;
driverjune_final:any;
keycountjune() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryjune.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryjune[i]["driver"]);
  }

  var keyCountjune : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountjune[fileLicenses[i]]){
      keyCountjune[fileLicenses[i]] = 0;
    }
   
      ++keyCountjune[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountjune){
    var postdata = { driverjune: key, number_deliveriesjune: keyCountjune[key]};
  
    data.push(postdata);
 }

    this.driverjune_breakdown = data;
}

driverjune: any;
driverDeliveryJune() {
    this.ds.sendApiRequest("driverDeliveryJune", null).subscribe((data: { payload: any; }) => {
    this.driverjune = data.payload;
    })
}

drinksjune:number=0;
snacksjune:number=0;
addonsjune:number=0;

drinksjune_sales:number=0;
snacksjune_sales:number=0;
addonsjune_sales:number=0;
stocksjune:any;
stocksJune(){
  this.ds.sendApiRequest("stocksJune", null).subscribe((data: { payload: any; }) => {
  this.stocksjune = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksjune var
        this.drinksjune+= data.payload[i].food_quantity;

        this.drinksjune_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsjune =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsjune += addonsjune.length*data.payload[i].food_quantity;
          this.addonsjune_sales+= (addonsjune.length*10)*data.payload[i].food_quantity;
          this.drinksjune_sales = this.drinksjune_sales-((addonsjune.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksjune var
        this.snacksjune+= data.payload[i].food_quantity;
        this.snacksjune_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsjune =  data.payload[i].cart_addon_name.split(",");
          this.addonsjune += addonsjune.length*data.payload[i].food_quantity;
          this.addonsjune_sales+= addonsjune.length*10;

        }
        
        
      }
     
    }

    this.items_keycountjune();
  });

 
}




drinksjune_breakdown:any;
snacksjune_breakdown:any;
addonsjune_breakdown:any;

  items_keycountjune() {
    var drinksjune = [];
    var snacksjune2 = [];
    var addonsjune2 = [];

    


    for ( var i = 0, arrLen = this.stocksjune.length; i < arrLen; ++i ) {
 

      if(this.stocksjune[i]["cart_addon_name"]){
        let addonsjune =  this.stocksjune[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsjune.length; j++){
        
                 
          for(var k = 0; k < this.stocksjune[i]["food_quantity"]; k++){
            addonsjune2.push(addonsjune[j]); 
            
          
          }
        }

      }
        if(this.stocksjune[i]['size_name']){
            
          for(var j = 0; j < this.stocksjune[i]["food_quantity"]; j++){
            drinksjune.push(this.stocksjune[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksjune[i]["food_quantity"]; j++){
            snacksjune2.push(this.stocksjune[i]["prod_name"]);
          }
          
         }
    }

    var keyCountjune : LooseObject = {};


    for(i = 0; i < drinksjune.length; ++i) {
      
      if(!keyCountjune[drinksjune[i]]){
        keyCountjune[drinksjune[i]] = 0;
      }
    
        ++keyCountjune[drinksjune[i]];
    }
  var data = [];
        for(var key in keyCountjune){
          var drinksjune_arr = { snack: key, quantity: keyCountjune[key]};
          
            data.push(drinksjune_arr);
      }

      this.drinksjune_breakdown = data;

      var keyCountjune : LooseObject = {};

      for(i = 0; i < snacksjune2.length; ++i) {
        
        if(!keyCountjune[snacksjune2[i]]){
          keyCountjune[snacksjune2[i]] = 0;
        }
      
          ++keyCountjune[snacksjune2[i]];
      }
  
    var data = [];
          for(var key in keyCountjune){
            var snacksjune_arr = { snack: key, quantity: keyCountjune[key]};
          
            data.push(snacksjune_arr);
        }
  
        this.snacksjune_breakdown = data;

      var keyCountjune : LooseObject = {};

      for(i = 0; i < addonsjune2.length; ++i) {
        
        if(!keyCountjune[addonsjune2[i]]){
          keyCountjune[addonsjune2[i]] = 0;
        }
      
          ++keyCountjune[addonsjune2[i]];
      }
  
    var data = [];
          for(var key in keyCountjune){
            var addonsjune_arr = { addonsjune: key, quantity: keyCountjune[key]};
            
              data.push(addonsjune_arr);
        }
  
  
        this.addonsjune_breakdown = data;

  }

//July

total_deliveriesjuly: number = 0;
deliveryjuly: any = {};

salesjuly:number =0;
deliveryJuly(){
  
  this.ds.sendApiRequest("deliveryJuly", null).subscribe((data: { payload: any; }) => {
  this.deliveryjuly = data.payload;
  
  this.total_deliveriesjuly = this.deliveryjuly.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesjuly += data.payload[i].total_price;
    }
    this.keycountjuly();
  });

}

driverjuly_breakdown:any;
driverjuly_final:any;
keycountjuly() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryjuly.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryjuly[i]["driver"]);
  }

  var keyCountjuly : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountjuly[fileLicenses[i]]){
      keyCountjuly[fileLicenses[i]] = 0;
    }
   
      ++keyCountjuly[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountjuly){
    var postdata = { driverjuly: key, number_deliveriesjuly: keyCountjuly[key]};
  
    data.push(postdata);
 }

    this.driverjuly_breakdown = data;
}

driverjuly: any;
driverDeliveryJuly() {
    this.ds.sendApiRequest("driverDeliveryJuly", null).subscribe((data: { payload: any; }) => {
    this.driverjuly = data.payload;
    })
}

drinksjuly:number=0;
snacksjuly:number=0;
addonsjuly:number=0;

drinksjuly_sales:number=0;
snacksjuly_sales:number=0;
addonsjuly_sales:number=0;
stocksjuly:any;
stocksJuly(){
  this.ds.sendApiRequest("stocksJuly", null).subscribe((data: { payload: any; }) => {
  this.stocksjuly = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksjuly var
        this.drinksjuly+= data.payload[i].food_quantity;

        this.drinksjuly_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsjuly =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsjuly += addonsjuly.length*data.payload[i].food_quantity;
          this.addonsjuly_sales+= (addonsjuly.length*10)*data.payload[i].food_quantity;
          this.drinksjuly_sales = this.drinksjuly_sales-((addonsjuly.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksjuly var
        this.snacksjuly+= data.payload[i].food_quantity;
        this.snacksjuly_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsjuly =  data.payload[i].cart_addon_name.split(",");
          this.addonsjuly += addonsjuly.length*data.payload[i].food_quantity;
          this.addonsjuly_sales+= addonsjuly.length*10;

        }
        
        
      }
     
    }

    this.items_keycountjuly();
  });

 
}




drinksjuly_breakdown:any;
snacksjuly_breakdown:any;
addonsjuly_breakdown:any;

  items_keycountjuly() {
    var drinksjuly = [];
    var snacksjuly2 = [];
    var addonsjuly2 = [];

    


    for ( var i = 0, arrLen = this.stocksjuly.length; i < arrLen; ++i ) {
 

      if(this.stocksjuly[i]["cart_addon_name"]){
        let addonsjuly =  this.stocksjuly[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsjuly.length; j++){
        
                 
          for(var k = 0; k < this.stocksjuly[i]["food_quantity"]; k++){
            addonsjuly2.push(addonsjuly[j]); 
            
          
          }
        }

      }
        if(this.stocksjuly[i]['size_name']){
            
          for(var j = 0; j < this.stocksjuly[i]["food_quantity"]; j++){
            drinksjuly.push(this.stocksjuly[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksjuly[i]["food_quantity"]; j++){
            snacksjuly2.push(this.stocksjuly[i]["prod_name"]);
          }
          
         }
    }

    var keyCountjuly : LooseObject = {};


    for(i = 0; i < drinksjuly.length; ++i) {
      
      if(!keyCountjuly[drinksjuly[i]]){
        keyCountjuly[drinksjuly[i]] = 0;
      }
    
        ++keyCountjuly[drinksjuly[i]];
    }
  var data = [];
        for(var key in keyCountjuly){
          var drinksjuly_arr = { snack: key, quantity: keyCountjuly[key]};
          
            data.push(drinksjuly_arr);
      }

      this.drinksjuly_breakdown = data;

      var keyCountjuly : LooseObject = {};

      for(i = 0; i < snacksjuly2.length; ++i) {
        
        if(!keyCountjuly[snacksjuly2[i]]){
          keyCountjuly[snacksjuly2[i]] = 0;
        }
      
          ++keyCountjuly[snacksjuly2[i]];
      }
  
    var data = [];
          for(var key in keyCountjuly){
            var snacksjuly_arr = { snack: key, quantity: keyCountjuly[key]};
          
            data.push(snacksjuly_arr);
        }
  
        this.snacksjuly_breakdown = data;

      var keyCountjuly : LooseObject = {};

      for(i = 0; i < addonsjuly2.length; ++i) {
        
        if(!keyCountjuly[addonsjuly2[i]]){
          keyCountjuly[addonsjuly2[i]] = 0;
        }
      
          ++keyCountjuly[addonsjuly2[i]];
      }
  
    var data = [];
          for(var key in keyCountjuly){
            var addonsjuly_arr = { addonsjuly: key, quantity: keyCountjuly[key]};
            
              data.push(addonsjuly_arr);
        }
  
  
        this.addonsjuly_breakdown = data;

  }

//August

total_deliveriesaugust: number = 0;
deliveryaugust: any = {};

salesaugust:number =0;
deliveryAugust(){
  
  this.ds.sendApiRequest("deliveryAugust", null).subscribe((data: { payload: any; }) => {
  this.deliveryaugust = data.payload;
  
  this.total_deliveriesaugust = this.deliveryaugust.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesaugust += data.payload[i].total_price;
    }
    this.keycountaugust();
  });

}

driveraugust_breakdown:any;
driveraugust_final:any;
keycountaugust() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryaugust.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryaugust[i]["driver"]);
  }

  var keyCountaugust : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountaugust[fileLicenses[i]]){
      keyCountaugust[fileLicenses[i]] = 0;
    }
   
      ++keyCountaugust[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountaugust){
    var postdata = { driveraugust: key, number_deliveriesaugust: keyCountaugust[key]};
  
    data.push(postdata);
 }

    this.driveraugust_breakdown = data;
}

driveraugust: any;
driverDeliveryaugust() {
    this.ds.sendApiRequest("driverDeliveryaugust", null).subscribe((data: { payload: any; }) => {
    this.driveraugust = data.payload;
    })
}

drinksaugust:number=0;
snacksaugust:number=0;
addonsaugust:number=0;

drinksaugust_sales:number=0;
snacksaugust_sales:number=0;
addonsaugust_sales:number=0;
stocksaugust:any;
stocksAugust(){
  this.ds.sendApiRequest("stocksAugust", null).subscribe((data: { payload: any; }) => {
  this.stocksaugust = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksaugust var
        this.drinksaugust+= data.payload[i].food_quantity;

        this.drinksaugust_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsaugust =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsaugust += addonsaugust.length*data.payload[i].food_quantity;
          this.addonsaugust_sales+= (addonsaugust.length*10)*data.payload[i].food_quantity;
          this.drinksaugust_sales = this.drinksaugust_sales-((addonsaugust.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksaugust var
        this.snacksaugust+= data.payload[i].food_quantity;
        this.snacksaugust_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsaugust =  data.payload[i].cart_addon_name.split(",");
          this.addonsaugust += addonsaugust.length*data.payload[i].food_quantity;
          this.addonsaugust_sales+= addonsaugust.length*10;

        }
        
        
      }
     
    }

    this.items_keycountaugust();
  });

 
}




drinksaugust_breakdown:any;
snacksaugust_breakdown:any;
addonsaugust_breakdown:any;

  items_keycountaugust() {
    var drinksaugust = [];
    var snacksaugust2 = [];
    var addonsaugust2 = [];

    


    for ( var i = 0, arrLen = this.stocksaugust.length; i < arrLen; ++i ) {
 

      if(this.stocksaugust[i]["cart_addon_name"]){
        let addonsaugust =  this.stocksaugust[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsaugust.length; j++){
        
                 
          for(var k = 0; k < this.stocksaugust[i]["food_quantity"]; k++){
            addonsaugust2.push(addonsaugust[j]); 
            
          
          }
        }

      }
        if(this.stocksaugust[i]['size_name']){
            
          for(var j = 0; j < this.stocksaugust[i]["food_quantity"]; j++){
            drinksaugust.push(this.stocksaugust[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksaugust[i]["food_quantity"]; j++){
            snacksaugust2.push(this.stocksaugust[i]["prod_name"]);
          }
          
         }
    }

    var keyCountaugust : LooseObject = {};


    for(i = 0; i < drinksaugust.length; ++i) {
      
      if(!keyCountaugust[drinksaugust[i]]){
        keyCountaugust[drinksaugust[i]] = 0;
      }
    
        ++keyCountaugust[drinksaugust[i]];
    }
  var data = [];
        for(var key in keyCountaugust){
          var drinksaugust_arr = { snack: key, quantity: keyCountaugust[key]};
          
            data.push(drinksaugust_arr);
      }

      this.drinksaugust_breakdown = data;

      var keyCountaugust : LooseObject = {};

      for(i = 0; i < snacksaugust2.length; ++i) {
        
        if(!keyCountaugust[snacksaugust2[i]]){
          keyCountaugust[snacksaugust2[i]] = 0;
        }
      
          ++keyCountaugust[snacksaugust2[i]];
      }
  
    var data = [];
          for(var key in keyCountaugust){
            var snacksaugust_arr = { snack: key, quantity: keyCountaugust[key]};
          
            data.push(snacksaugust_arr);
        }
  
        this.snacksaugust_breakdown = data;

      var keyCountaugust : LooseObject = {};

      for(i = 0; i < addonsaugust2.length; ++i) {
        
        if(!keyCountaugust[addonsaugust2[i]]){
          keyCountaugust[addonsaugust2[i]] = 0;
        }
      
          ++keyCountaugust[addonsaugust2[i]];
      }
  
    var data = [];
          for(var key in keyCountaugust){
            var addonsaugust_arr = { addonsaugust: key, quantity: keyCountaugust[key]};
            
              data.push(addonsaugust_arr);
        }
  
  
        this.addonsaugust_breakdown = data;

  }

//September

total_deliveriesseptember: number = 0;
deliveryseptember: any = {};

salesseptember:number =0;
deliverySeptember(){
  
  this.ds.sendApiRequest("deliverySeptember", null).subscribe((data: { payload: any; }) => {
  this.deliveryseptember = data.payload;
  
  this.total_deliveriesseptember = this.deliveryseptember.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesseptember += data.payload[i].total_price;
    }
    this.keycountseptember();
  });

}

driverseptember_breakdown:any;
driverseptember_final:any;
keycountseptember() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryseptember.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryseptember[i]["driver"]);
  }

  var keyCountseptember : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountseptember[fileLicenses[i]]){
      keyCountseptember[fileLicenses[i]] = 0;
    }
   
      ++keyCountseptember[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountseptember){
    var postdata = { driverseptember: key, number_deliveriesseptember: keyCountseptember[key]};
  
    data.push(postdata);
 }

    this.driverseptember_breakdown = data;
}

driverseptember: any;
driverDeliverySeptember() {
    this.ds.sendApiRequest("driverDeliverySeptember", null).subscribe((data: { payload: any; }) => {
    this.driverseptember = data.payload;
    })
}

drinksseptember:number=0;
snacksseptember:number=0;
addonsseptember:number=0;

drinksseptember_sales:number=0;
snacksseptember_sales:number=0;
addonsseptember_sales:number=0;
stocksseptember:any;
stocksSeptember(){
  this.ds.sendApiRequest("stocksSeptember", null).subscribe((data: { payload: any; }) => {
  this.stocksseptember = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksseptember var
        this.drinksseptember+= data.payload[i].food_quantity;

        this.drinksseptember_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsseptember =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsseptember += addonsseptember.length*data.payload[i].food_quantity;
          this.addonsseptember_sales+= (addonsseptember.length*10)*data.payload[i].food_quantity;
          this.drinksseptember_sales = this.drinksseptember_sales-((addonsseptember.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksseptember var
        this.snacksseptember+= data.payload[i].food_quantity;
        this.snacksseptember_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsseptember =  data.payload[i].cart_addon_name.split(",");
          this.addonsseptember += addonsseptember.length*data.payload[i].food_quantity;
          this.addonsseptember_sales+= addonsseptember.length*10;

        }
        
        
      }
     
    }

    this.items_keycountseptember();
  });

 
}




drinksseptember_breakdown:any;
snacksseptember_breakdown:any;
addonsseptember_breakdown:any;

  items_keycountseptember() {
    var drinksseptember = [];
    var snacksseptember2 = [];
    var addonsseptember2 = [];

    


    for ( var i = 0, arrLen = this.stocksseptember.length; i < arrLen; ++i ) {
 

      if(this.stocksseptember[i]["cart_addon_name"]){
        let addonsseptember =  this.stocksseptember[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsseptember.length; j++){
        
                 
          for(var k = 0; k < this.stocksseptember[i]["food_quantity"]; k++){
            addonsseptember2.push(addonsseptember[j]); 
            
          
          }
        }

      }
        if(this.stocksseptember[i]['size_name']){
            
          for(var j = 0; j < this.stocksseptember[i]["food_quantity"]; j++){
            drinksseptember.push(this.stocksseptember[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksseptember[i]["food_quantity"]; j++){
            snacksseptember2.push(this.stocksseptember[i]["prod_name"]);
          }
          
         }
    }

    var keyCountseptember : LooseObject = {};


    for(i = 0; i < drinksseptember.length; ++i) {
      
      if(!keyCountseptember[drinksseptember[i]]){
        keyCountseptember[drinksseptember[i]] = 0;
      }
    
        ++keyCountseptember[drinksseptember[i]];
    }
  var data = [];
        for(var key in keyCountseptember){
          var drinksseptember_arr = { snack: key, quantity: keyCountseptember[key]};
          
            data.push(drinksseptember_arr);
      }

      this.drinksseptember_breakdown = data;

      var keyCountseptember : LooseObject = {};

      for(i = 0; i < snacksseptember2.length; ++i) {
        
        if(!keyCountseptember[snacksseptember2[i]]){
          keyCountseptember[snacksseptember2[i]] = 0;
        }
      
          ++keyCountseptember[snacksseptember2[i]];
      }
  
    var data = [];
          for(var key in keyCountseptember){
            var snacksseptember_arr = { snack: key, quantity: keyCountseptember[key]};
          
            data.push(snacksseptember_arr);
        }
  
        this.snacksseptember_breakdown = data;

      var keyCountseptember : LooseObject = {};

      for(i = 0; i < addonsseptember2.length; ++i) {
        
        if(!keyCountseptember[addonsseptember2[i]]){
          keyCountseptember[addonsseptember2[i]] = 0;
        }
      
          ++keyCountseptember[addonsseptember2[i]];
      }
  
    var data = [];
          for(var key in keyCountseptember){
            var addonsseptember_arr = { addonsseptember: key, quantity: keyCountseptember[key]};
            
              data.push(addonsseptember_arr);
        }
  
  
        this.addonsseptember_breakdown = data;

  }

//October

total_deliveriesoctober: number = 0;
deliveryoctober: any = {};

salesoctober:number =0;
deliveryOctober(){
  
  this.ds.sendApiRequest("deliveryOctober", null).subscribe((data: { payload: any; }) => {
  this.deliveryoctober = data.payload;
  
  this.total_deliveriesoctober = this.deliveryoctober.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesoctober += data.payload[i].total_price;
    }
    this.keycountoctober();
  });

}

driveroctober_breakdown:any;
driveroctober_final:any;
keycountoctober() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliveryoctober.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliveryoctober[i]["driver"]);
  }

  var keyCountoctober : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountoctober[fileLicenses[i]]){
      keyCountoctober[fileLicenses[i]] = 0;
    }
   
      ++keyCountoctober[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountoctober){
    var postdata = { driveroctober: key, number_deliveriesoctober: keyCountoctober[key]};
  
    data.push(postdata);
 }

    this.driveroctober_breakdown = data;
}

driveroctober: any;
driverDeliveryOctober() {
    this.ds.sendApiRequest("driverDeliveryOctober", null).subscribe((data: { payload: any; }) => {
    this.driveroctober = data.payload;
    })
}

drinksoctober:number=0;
snacksoctober:number=0;
addonsoctober:number=0;

drinksoctober_sales:number=0;
snacksoctober_sales:number=0;
addonsoctober_sales:number=0;
stocksoctober:any;
stocksOctober(){
  this.ds.sendApiRequest("stocksOctober", null).subscribe((data: { payload: any; }) => {
  this.stocksoctober = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksoctober var
        this.drinksoctober+= data.payload[i].food_quantity;

        this.drinksoctober_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsoctober =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsoctober += addonsoctober.length*data.payload[i].food_quantity;
          this.addonsoctober_sales+= (addonsoctober.length*10)*data.payload[i].food_quantity;
          this.drinksoctober_sales = this.drinksoctober_sales-((addonsoctober.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksoctober var
        this.snacksoctober+= data.payload[i].food_quantity;
        this.snacksoctober_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsoctober =  data.payload[i].cart_addon_name.split(",");
          this.addonsoctober += addonsoctober.length*data.payload[i].food_quantity;
          this.addonsoctober_sales+= addonsoctober.length*10;

        }
        
        
      }
     
    }

    this.items_keycountoctober();
  });

 
}




drinksoctober_breakdown:any;
snacksoctober_breakdown:any;
addonsoctober_breakdown:any;

  items_keycountoctober() {
    var drinksoctober = [];
    var snacksoctober2 = [];
    var addonsoctober2 = [];

    


    for ( var i = 0, arrLen = this.stocksoctober.length; i < arrLen; ++i ) {
 

      if(this.stocksoctober[i]["cart_addon_name"]){
        let addonsoctober =  this.stocksoctober[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsoctober.length; j++){
        
                 
          for(var k = 0; k < this.stocksoctober[i]["food_quantity"]; k++){
            addonsoctober2.push(addonsoctober[j]); 
            
          
          }
        }

      }
        if(this.stocksoctober[i]['size_name']){
            
          for(var j = 0; j < this.stocksoctober[i]["food_quantity"]; j++){
            drinksoctober.push(this.stocksoctober[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksoctober[i]["food_quantity"]; j++){
            snacksoctober2.push(this.stocksoctober[i]["prod_name"]);
          }
          
         }
    }

    var keyCountoctober : LooseObject = {};


    for(i = 0; i < drinksoctober.length; ++i) {
      
      if(!keyCountoctober[drinksoctober[i]]){
        keyCountoctober[drinksoctober[i]] = 0;
      }
    
        ++keyCountoctober[drinksoctober[i]];
    }
  var data = [];
        for(var key in keyCountoctober){
          var drinksoctober_arr = { snack: key, quantity: keyCountoctober[key]};
          
            data.push(drinksoctober_arr);
      }

      this.drinksoctober_breakdown = data;

      var keyCountoctober : LooseObject = {};

      for(i = 0; i < snacksoctober2.length; ++i) {
        
        if(!keyCountoctober[snacksoctober2[i]]){
          keyCountoctober[snacksoctober2[i]] = 0;
        }
      
          ++keyCountoctober[snacksoctober2[i]];
      }
  
    var data = [];
          for(var key in keyCountoctober){
            var snacksoctober_arr = { snack: key, quantity: keyCountoctober[key]};
          
            data.push(snacksoctober_arr);
        }
  
        this.snacksoctober_breakdown = data;

      var keyCountoctober : LooseObject = {};

      for(i = 0; i < addonsoctober2.length; ++i) {
        
        if(!keyCountoctober[addonsoctober2[i]]){
          keyCountoctober[addonsoctober2[i]] = 0;
        }
      
          ++keyCountoctober[addonsoctober2[i]];
      }
  
    var data = [];
          for(var key in keyCountoctober){
            var addonsoctober_arr = { addonsoctober: key, quantity: keyCountoctober[key]};
            
              data.push(addonsoctober_arr);
        }
  
  
        this.addonsoctober_breakdown = data;

  }

//November

total_deliveriesnovember: number = 0;
deliverynovember: any = {};

salesnovember:number =0;
deliveryNovember(){
  
  this.ds.sendApiRequest("deliveryNovember", null).subscribe((data: { payload: any; }) => {
  this.deliverynovember = data.payload;
  
  this.total_deliveriesnovember = this.deliverynovember.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesnovember += data.payload[i].total_price;
    }
    this.keycountnovember();
  });

}

drivernovember_breakdown:any;
drivernovember_final:any;
keycountnovember() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverynovember.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverynovember[i]["driver"]);
  }

  var keyCountnovember : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountnovember[fileLicenses[i]]){
      keyCountnovember[fileLicenses[i]] = 0;
    }
   
      ++keyCountnovember[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountnovember){
    var postdata = { drivernovember: key, number_deliveriesnovember: keyCountnovember[key]};
  
    data.push(postdata);
 }

    this.drivernovember_breakdown = data;
}

drivernovember: any;
driverDeliveryNovember() {
    this.ds.sendApiRequest("driverDeliveryNovember", null).subscribe((data: { payload: any; }) => {
    this.drivernovember = data.payload;
    })
}

drinksnovember:number=0;
snacksnovember:number=0;
addonsnovember:number=0;

drinksnovember_sales:number=0;
snacksnovember_sales:number=0;
addonsnovember_sales:number=0;
stocksnovember:any;
stocksNovember(){
  this.ds.sendApiRequest("stocksNovember", null).subscribe((data: { payload: any; }) => {
  this.stocksnovember = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksnovember var
        this.drinksnovember+= data.payload[i].food_quantity;

        this.drinksnovember_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsnovember =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsnovember += addonsnovember.length*data.payload[i].food_quantity;
          this.addonsnovember_sales+= (addonsnovember.length*10)*data.payload[i].food_quantity;
          this.drinksnovember_sales = this.drinksnovember_sales-((addonsnovember.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksnovember var
        this.snacksnovember+= data.payload[i].food_quantity;
        this.snacksnovember_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsnovember =  data.payload[i].cart_addon_name.split(",");
          this.addonsnovember += addonsnovember.length*data.payload[i].food_quantity;
          this.addonsnovember_sales+= addonsnovember.length*10;

        }
        
        
      }
     
    }

    this.items_keycountnovember();
  });

 
}




drinksnovember_breakdown:any;
snacksnovember_breakdown:any;
addonsnovember_breakdown:any;

  items_keycountnovember() {
    var drinksnovember = [];
    var snacksnovember2 = [];
    var addonsnovember2 = [];

    


    for ( var i = 0, arrLen = this.stocksnovember.length; i < arrLen; ++i ) {
 

      if(this.stocksnovember[i]["cart_addon_name"]){
        let addonsnovember =  this.stocksnovember[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsnovember.length; j++){
        
                 
          for(var k = 0; k < this.stocksnovember[i]["food_quantity"]; k++){
            addonsnovember2.push(addonsnovember[j]); 
            
          
          }
        }

      }
        if(this.stocksnovember[i]['size_name']){
            
          for(var j = 0; j < this.stocksnovember[i]["food_quantity"]; j++){
            drinksnovember.push(this.stocksnovember[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksnovember[i]["food_quantity"]; j++){
            snacksnovember2.push(this.stocksnovember[i]["prod_name"]);
          }
          
         }
    }

    var keyCountnovember : LooseObject = {};


    for(i = 0; i < drinksnovember.length; ++i) {
      
      if(!keyCountnovember[drinksnovember[i]]){
        keyCountnovember[drinksnovember[i]] = 0;
      }
    
        ++keyCountnovember[drinksnovember[i]];
    }
  var data = [];
        for(var key in keyCountnovember){
          var drinksnovember_arr = { snack: key, quantity: keyCountnovember[key]};
          
            data.push(drinksnovember_arr);
      }

      this.drinksnovember_breakdown = data;

      var keyCountnovember : LooseObject = {};

      for(i = 0; i < snacksnovember2.length; ++i) {
        
        if(!keyCountnovember[snacksnovember2[i]]){
          keyCountnovember[snacksnovember2[i]] = 0;
        }
      
          ++keyCountnovember[snacksnovember2[i]];
      }
  
    var data = [];
          for(var key in keyCountnovember){
            var snacksnovember_arr = { snack: key, quantity: keyCountnovember[key]};
          
            data.push(snacksnovember_arr);
        }
  
        this.snacksnovember_breakdown = data;

      var keyCountnovember : LooseObject = {};

      for(i = 0; i < addonsnovember2.length; ++i) {
        
        if(!keyCountnovember[addonsnovember2[i]]){
          keyCountnovember[addonsnovember2[i]] = 0;
        }
      
          ++keyCountnovember[addonsnovember2[i]];
      }
  
    var data = [];
          for(var key in keyCountnovember){
            var addonsnovember_arr = { addonsnovember: key, quantity: keyCountnovember[key]};
            
              data.push(addonsnovember_arr);
        }
  
  
        this.addonsnovember_breakdown = data;

  }

//December

total_deliveriesdecember: number = 0;
deliverydecember: any = {};

salesdecember:number =0;
deliveryDecember(){
  
  this.ds.sendApiRequest("deliveryDecember", null).subscribe((data: { payload: any; }) => {
  this.deliverydecember = data.payload;
  
  this.total_deliveriesdecember = this.deliverydecember.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salesdecember += data.payload[i].total_price;
    }
    this.keycountdecember();
  });

}

driverdecember_breakdown:any;
driverdecember_final:any;
keycountdecember() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverydecember.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverydecember[i]["driver"]);
  }

  var keyCountdecember : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountdecember[fileLicenses[i]]){
      keyCountdecember[fileLicenses[i]] = 0;
    }
   
      ++keyCountdecember[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountdecember){
    var postdata = { driverdecember: key, number_deliveriesdecember: keyCountdecember[key]};
  
    data.push(postdata);
 }

    this.driverdecember_breakdown = data;
}

driverdecember: any;
driverDeliveryDecember() {
    this.ds.sendApiRequest("driverDeliveryDecember", null).subscribe((data: { payload: any; }) => {
    this.driverdecember = data.payload;
    })
}

drinksdecember:number=0;
snacksdecember:number=0;
addonsdecember:number=0;

drinksdecember_sales:number=0;
snacksdecember_sales:number=0;
addonsdecember_sales:number=0;
stocksdecember:any;
stocksDecember(){
  this.ds.sendApiRequest("stocksDecember", null).subscribe((data: { payload: any; }) => {
  this.stocksdecember = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinksdecember var
        this.drinksdecember+= data.payload[i].food_quantity;

        this.drinksdecember_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonsdecember =  data.payload[i].cart_addon_name.split(",");
        
          this.addonsdecember += addonsdecember.length*data.payload[i].food_quantity;
          this.addonsdecember_sales+= (addonsdecember.length*10)*data.payload[i].food_quantity;
          this.drinksdecember_sales = this.drinksdecember_sales-((addonsdecember.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacksdecember var
        this.snacksdecember+= data.payload[i].food_quantity;
        this.snacksdecember_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonsdecember =  data.payload[i].cart_addon_name.split(",");
          this.addonsdecember += addonsdecember.length*data.payload[i].food_quantity;
          this.addonsdecember_sales+= addonsdecember.length*10;

        }
        
        
      }
     
    }

    this.items_keycountdecember();
  });

 
}




drinksdecember_breakdown:any;
snacksdecember_breakdown:any;
addonsdecember_breakdown:any;

  items_keycountdecember() {
    var drinksdecember = [];
    var snacksdecember2 = [];
    var addonsdecember2 = [];

    


    for ( var i = 0, arrLen = this.stocksdecember.length; i < arrLen; ++i ) {
 

      if(this.stocksdecember[i]["cart_addon_name"]){
        let addonsdecember =  this.stocksdecember[i].cart_addon_name.split(",");

        for(var j = 0; j < addonsdecember.length; j++){
        
                 
          for(var k = 0; k < this.stocksdecember[i]["food_quantity"]; k++){
            addonsdecember2.push(addonsdecember[j]); 
            
          
          }
        }

      }
        if(this.stocksdecember[i]['size_name']){
            
          for(var j = 0; j < this.stocksdecember[i]["food_quantity"]; j++){
            drinksdecember.push(this.stocksdecember[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocksdecember[i]["food_quantity"]; j++){
            snacksdecember2.push(this.stocksdecember[i]["prod_name"]);
          }
          
         }
    }

    var keyCountdecember : LooseObject = {};


    for(i = 0; i < drinksdecember.length; ++i) {
      
      if(!keyCountdecember[drinksdecember[i]]){
        keyCountdecember[drinksdecember[i]] = 0;
      }
    
        ++keyCountdecember[drinksdecember[i]];
    }
  var data = [];
        for(var key in keyCountdecember){
          var drinksdecember_arr = { snack: key, quantity: keyCountdecember[key]};
          
            data.push(drinksdecember_arr);
      }

      this.drinksdecember_breakdown = data;

      var keyCountdecember : LooseObject = {};

      for(i = 0; i < snacksdecember2.length; ++i) {
        
        if(!keyCountdecember[snacksdecember2[i]]){
          keyCountdecember[snacksdecember2[i]] = 0;
        }
      
          ++keyCountdecember[snacksdecember2[i]];
      }
  
    var data = [];
          for(var key in keyCountdecember){
            var snacksdecember_arr = { snack: key, quantity: keyCountdecember[key]};
          
            data.push(snacksdecember_arr);
        }
  
        this.snacksdecember_breakdown = data;

      var keyCountdecember : LooseObject = {};

      for(i = 0; i < addonsdecember2.length; ++i) {
        
        if(!keyCountdecember[addonsdecember2[i]]){
          keyCountdecember[addonsdecember2[i]] = 0;
        }
      
          ++keyCountdecember[addonsdecember2[i]];
      }
  
    var data = [];
          for(var key in keyCountdecember){
            var addonsdecember_arr = { addonsdecember: key, quantity: keyCountdecember[key]};
            
              data.push(addonsdecember_arr);
        }
  
  
        this.addonsdecember_breakdown = data;

  }
//Current Month

total_deliveriescurrentmonth: number = 0;
deliverycurrentmonth: any = {};

salescurrentmonth:number =0;
deliveryCurrentMonth(){
  
  this.ds.sendApiRequest("deliveryCurrentMonth", null).subscribe((data: { payload: any; }) => {
  this.deliverycurrentmonth = data.payload;
  
  this.total_deliveriescurrentmonth = this.deliverycurrentmonth.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salescurrentmonth += data.payload[i].total_price;
    }
    this.keycountcurrentmonth();
  });

}

drivercurrentmonth_breakdown:any;
drivercurrentmonth_final:any;
keycountcurrentmonth() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverycurrentmonth.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverycurrentmonth[i]["driver"]);
  }

  var keyCountcurrentmonth : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountcurrentmonth[fileLicenses[i]]){
      keyCountcurrentmonth[fileLicenses[i]] = 0;
    }
   
      ++keyCountcurrentmonth[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountcurrentmonth){
    var postdata = { drivercurrentmonth: key, number_deliveriescurrentmonth: keyCountcurrentmonth[key]};
  
    data.push(postdata);
 }

    this.drivercurrentmonth_breakdown = data;
}

drivercurrentmonth: any;
driverDeliveryCurrentMonth() {
    this.ds.sendApiRequest("driverDeliveryCurrentMonth", null).subscribe((data: { payload: any; }) => {
    this.drivercurrentmonth = data.payload;
    })
}

drinkscurrentmonth:number=0;
snackscurrentmonth:number=0;
addonscurrentmonth:number=0;

drinkscurrentmonth_sales:number=0;
snackscurrentmonth_sales:number=0;
addonscurrentmonth_sales:number=0;
stockscurrentmonth:any;
stocksCurrentMonth(){
  this.ds.sendApiRequest("stocksCurrentMonth", null).subscribe((data: { payload: any; }) => {
  this.stockscurrentmonth = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinkscurrentmonth var
        this.drinkscurrentmonth+= data.payload[i].food_quantity;

        this.drinkscurrentmonth_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonscurrentmonth =  data.payload[i].cart_addon_name.split(",");
        
          this.addonscurrentmonth += addonscurrentmonth.length*data.payload[i].food_quantity;
          this.addonscurrentmonth_sales+= (addonscurrentmonth.length*10)*data.payload[i].food_quantity;
          this.drinkscurrentmonth_sales = this.drinkscurrentmonth_sales-((addonscurrentmonth.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snackscurrentmonth var
        this.snackscurrentmonth+= data.payload[i].food_quantity;
        this.snackscurrentmonth_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonscurrentmonth =  data.payload[i].cart_addon_name.split(",");
          this.addonscurrentmonth += addonscurrentmonth.length*data.payload[i].food_quantity;
          this.addonscurrentmonth_sales+= addonscurrentmonth.length*10;

        }
        
        
      }
     
    }

    this.items_keycountcurrentmonth();
  });

 
}




drinkscurrentmonth_breakdown:any;
snackscurrentmonth_breakdown:any;
addonscurrentmonth_breakdown:any;

  items_keycountcurrentmonth() {
    var drinkscurrentmonth = [];
    var snackscurrentmonth2 = [];
    var addonscurrentmonth2 = [];

    


    for ( var i = 0, arrLen = this.stockscurrentmonth.length; i < arrLen; ++i ) {
 

      if(this.stockscurrentmonth[i]["cart_addon_name"]){
        let addonscurrentmonth =  this.stockscurrentmonth[i].cart_addon_name.split(",");

        for(var j = 0; j < addonscurrentmonth.length; j++){
        
                 
          for(var k = 0; k < this.stockscurrentmonth[i]["food_quantity"]; k++){
            addonscurrentmonth2.push(addonscurrentmonth[j]); 
            
          
          }
        }

      }
        if(this.stockscurrentmonth[i]['size_name']){
            
          for(var j = 0; j < this.stockscurrentmonth[i]["food_quantity"]; j++){
            drinkscurrentmonth.push(this.stockscurrentmonth[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stockscurrentmonth[i]["food_quantity"]; j++){
            snackscurrentmonth2.push(this.stockscurrentmonth[i]["prod_name"]);
          }
          
         }
    }

    var keyCountcurrentmonth : LooseObject = {};


    for(i = 0; i < drinkscurrentmonth.length; ++i) {
      
      if(!keyCountcurrentmonth[drinkscurrentmonth[i]]){
        keyCountcurrentmonth[drinkscurrentmonth[i]] = 0;
      }
    
        ++keyCountcurrentmonth[drinkscurrentmonth[i]];
    }
  var data = [];
        for(var key in keyCountcurrentmonth){
          var drinkscurrentmonth_arr = { snack: key, quantity: keyCountcurrentmonth[key]};
          
            data.push(drinkscurrentmonth_arr);
      }

      this.drinkscurrentmonth_breakdown = data;

      var keyCountcurrentmonth : LooseObject = {};

      for(i = 0; i < snackscurrentmonth2.length; ++i) {
        
        if(!keyCountcurrentmonth[snackscurrentmonth2[i]]){
          keyCountcurrentmonth[snackscurrentmonth2[i]] = 0;
        }
      
          ++keyCountcurrentmonth[snackscurrentmonth2[i]];
      }
  
    var data = [];
          for(var key in keyCountcurrentmonth){
            var snackscurrentmonth_arr = { snack: key, quantity: keyCountcurrentmonth[key]};
          
            data.push(snackscurrentmonth_arr);
        }
  
        this.snackscurrentmonth_breakdown = data;

      var keyCountcurrentmonth : LooseObject = {};

      for(i = 0; i < addonscurrentmonth2.length; ++i) {
        
        if(!keyCountcurrentmonth[addonscurrentmonth2[i]]){
          keyCountcurrentmonth[addonscurrentmonth2[i]] = 0;
        }
      
          ++keyCountcurrentmonth[addonscurrentmonth2[i]];
      }
  
    var data = [];
          for(var key in keyCountcurrentmonth){
            var addonscurrentmonth_arr = { addonscurrentmonth: key, quantity: keyCountcurrentmonth[key]};
            
              data.push(addonscurrentmonth_arr);
        }
  
  
        this.addonscurrentmonth_breakdown = data;

  }

  //currentyear

total_deliveriescurrentyear: number = 0;
deliverycurrentyear: any = {};

salescurrentyear:number =0;
deliveryCurrentYear(){
  
  this.ds.sendApiRequest("deliveryCurrentYear", null).subscribe((data: { payload: any; }) => {
  this.deliverycurrentyear = data.payload;
  
  this.total_deliveriescurrentyear = this.deliverycurrentyear.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.salescurrentyear += data.payload[i].total_price;
    }
    this.keycountcurrentyear();
  });

}

drivercurrentyear_breakdown:any;
drivercurrentyear_final:any;
keycountcurrentyear() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.deliverycurrentyear.length; i < arrLen; ++i ) {
      fileLicenses.push(this.deliverycurrentyear[i]["driver"]);
  }

  var keyCountcurrentyear : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCountcurrentyear[fileLicenses[i]]){
      keyCountcurrentyear[fileLicenses[i]] = 0;
    }
   
      ++keyCountcurrentyear[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCountcurrentyear){
    var postdata = { drivercurrentyear: key, number_deliveriescurrentyear: keyCountcurrentyear[key]};
  
    data.push(postdata);
 }

    this.drivercurrentyear_breakdown = data;
}

drivercurrentyear: any;
driverDeliveryCurrentYear() {
    this.ds.sendApiRequest("driverDeliveryCurrentYear", null).subscribe((data: { payload: any; }) => {
    this.drivercurrentyear = data.payload;
    })
}

drinkscurrentyear:number=0;
snackscurrentyear:number=0;
addonscurrentyear:number=0;

drinkscurrentyear_sales:number=0;
snackscurrentyear_sales:number=0;
addonscurrentyear_sales:number=0;
stockscurrentyear:any;
stocksCurrentYear(){
  this.ds.sendApiRequest("stocksCurrentYear", null).subscribe((data: { payload: any; }) => {
  this.stockscurrentyear = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinkscurrentyear var
        this.drinkscurrentyear+= data.payload[i].food_quantity;

        this.drinkscurrentyear_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addonscurrentyear =  data.payload[i].cart_addon_name.split(",");
        
          this.addonscurrentyear += addonscurrentyear.length*data.payload[i].food_quantity;
          this.addonscurrentyear_sales+= (addonscurrentyear.length*10)*data.payload[i].food_quantity;
          this.drinkscurrentyear_sales = this.drinkscurrentyear_sales-((addonscurrentyear.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snackscurrentyear var
        this.snackscurrentyear+= data.payload[i].food_quantity;
        this.snackscurrentyear_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addonscurrentyear =  data.payload[i].cart_addon_name.split(",");
          this.addonscurrentyear += addonscurrentyear.length*data.payload[i].food_quantity;
          this.addonscurrentyear_sales+= addonscurrentyear.length*10;

        }
        
        
      }
     
    }

    this.items_keycountcurrentyear();
  });

 
}




drinkscurrentyear_breakdown:any;
snackscurrentyear_breakdown:any;
addonscurrentyear_breakdown:any;

  items_keycountcurrentyear() {
    var drinkscurrentyear = [];
    var snackscurrentyear2 = [];
    var addonscurrentyear2 = [];

    


    for ( var i = 0, arrLen = this.stockscurrentyear.length; i < arrLen; ++i ) {
 

      if(this.stockscurrentyear[i]["cart_addon_name"]){
        let addonscurrentyear =  this.stockscurrentyear[i].cart_addon_name.split(",");

        for(var j = 0; j < addonscurrentyear.length; j++){
        
                 
          for(var k = 0; k < this.stockscurrentyear[i]["food_quantity"]; k++){
            addonscurrentyear2.push(addonscurrentyear[j]); 
            
          
          }
        }

      }
        if(this.stockscurrentyear[i]['size_name']){
            
          for(var j = 0; j < this.stockscurrentyear[i]["food_quantity"]; j++){
            drinkscurrentyear.push(this.stockscurrentyear[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stockscurrentyear[i]["food_quantity"]; j++){
            snackscurrentyear2.push(this.stockscurrentyear[i]["prod_name"]);
          }
          
         }
    }

    var keyCountcurrentyear : LooseObject = {};


    for(i = 0; i < drinkscurrentyear.length; ++i) {
      
      if(!keyCountcurrentyear[drinkscurrentyear[i]]){
        keyCountcurrentyear[drinkscurrentyear[i]] = 0;
      }
    
        ++keyCountcurrentyear[drinkscurrentyear[i]];
    }
  var data = [];
        for(var key in keyCountcurrentyear){
          var drinkscurrentyear_arr = { snack: key, quantity: keyCountcurrentyear[key]};
          
            data.push(drinkscurrentyear_arr);
      }

      this.drinkscurrentyear_breakdown = data;

      var keyCountcurrentyear : LooseObject = {};

      for(i = 0; i < snackscurrentyear2.length; ++i) {
        
        if(!keyCountcurrentyear[snackscurrentyear2[i]]){
          keyCountcurrentyear[snackscurrentyear2[i]] = 0;
        }
      
          ++keyCountcurrentyear[snackscurrentyear2[i]];
      }
  
    var data = [];
          for(var key in keyCountcurrentyear){
            var snackscurrentyear_arr = { snack: key, quantity: keyCountcurrentyear[key]};
          
            data.push(snackscurrentyear_arr);
        }
  
        this.snackscurrentyear_breakdown = data;

      var keyCountcurrentyear : LooseObject = {};

      for(i = 0; i < addonscurrentyear2.length; ++i) {
        
        if(!keyCountcurrentyear[addonscurrentyear2[i]]){
          keyCountcurrentyear[addonscurrentyear2[i]] = 0;
        }
      
          ++keyCountcurrentyear[addonscurrentyear2[i]];
      }
  
    var data = [];
          for(var key in keyCountcurrentyear){
            var addonscurrentyear_arr = { addonscurrentyear: key, quantity: keyCountcurrentyear[key]};
            
              data.push(addonscurrentyear_arr);
        }
  
  
        this.addonscurrentyear_breakdown = data;

  }

//2022

total_deliveries2022: number = 0;
delivery2022: any = {};

sales2022:number =0;
Delivery2022(){
  
  this.ds.sendApiRequest("Delivery2022", null).subscribe((data: { payload: any; }) => {
  this.delivery2022 = data.payload;
  
  this.total_deliveries2022 = this.delivery2022.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2022 += data.payload[i].total_price;
    }
    this.keycount2022();
  });

}

driver2022_breakdown:any;
driver2022_final:any;
keycount2022() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2022.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2022[i]["driver"]);
  }

  var keyCount2022 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2022[fileLicenses[i]]){
      keyCount2022[fileLicenses[i]] = 0;
    }
   
      ++keyCount2022[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2022){
    var postdata = { driver2022: key, number_deliveries2022: keyCount2022[key]};
  
    data.push(postdata);
 }

    this.driver2022_breakdown = data;
}

driver2022: any;
driverDelivery2022() {
    this.ds.sendApiRequest("driverDelivery2022", null).subscribe((data: { payload: any; }) => {
    this.driver2022 = data.payload;
    })
}

drinks2022:number=0;
snacks2022:number=0;
addons2022:number=0;

drinks2022_sales:number=0;
snacks2022_sales:number=0;
addons2022_sales:number=0;
stocks2022:any;
Stocks2022(){
  this.ds.sendApiRequest("Stocks2022", null).subscribe((data: { payload: any; }) => {
  this.stocks2022 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2022 var
        this.drinks2022+= data.payload[i].food_quantity;

        this.drinks2022_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2022 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2022 += addons2022.length*data.payload[i].food_quantity;
          this.addons2022_sales+= (addons2022.length*10)*data.payload[i].food_quantity;
          this.drinks2022_sales = this.drinks2022_sales-((addons2022.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2022 var
        this.snacks2022+= data.payload[i].food_quantity;
        this.snacks2022_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2022 =  data.payload[i].cart_addon_name.split(",");
          this.addons2022 += addons2022.length*data.payload[i].food_quantity;
          this.addons2022_sales+= addons2022.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2022();
  });

 
}




drinks2022_breakdown:any;
snacks2022_breakdown:any;
addons2022_breakdown:any;

  items_keycount2022() {
    var drinks2022 = [];
    var snacks20222 = [];
    var addons20222 = [];

    


    for ( var i = 0, arrLen = this.stocks2022.length; i < arrLen; ++i ) {
 

      if(this.stocks2022[i]["cart_addon_name"]){
        let addons2022 =  this.stocks2022[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2022.length; j++){
        
                 
          for(var k = 0; k < this.stocks2022[i]["food_quantity"]; k++){
            addons20222.push(addons2022[j]); 
            
          
          }
        }

      }
        if(this.stocks2022[i]['size_name']){
            
          for(var j = 0; j < this.stocks2022[i]["food_quantity"]; j++){
            drinks2022.push(this.stocks2022[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2022[i]["food_quantity"]; j++){
            snacks20222.push(this.stocks2022[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2022 : LooseObject = {};


    for(i = 0; i < drinks2022.length; ++i) {
      
      if(!keyCount2022[drinks2022[i]]){
        keyCount2022[drinks2022[i]] = 0;
      }
    
        ++keyCount2022[drinks2022[i]];
    }
  var data = [];
        for(var key in keyCount2022){
          var drinks2022_arr = { snack: key, quantity: keyCount2022[key]};
          
            data.push(drinks2022_arr);
      }

      this.drinks2022_breakdown = data;

      var keyCount2022 : LooseObject = {};

      for(i = 0; i < snacks20222.length; ++i) {
        
        if(!keyCount2022[snacks20222[i]]){
          keyCount2022[snacks20222[i]] = 0;
        }
      
          ++keyCount2022[snacks20222[i]];
      }
  
    var data = [];
          for(var key in keyCount2022){
            var snacks2022_arr = { snack: key, quantity: keyCount2022[key]};
          
            data.push(snacks2022_arr);
        }
  
        this.snacks2022_breakdown = data;

      var keyCount2022 : LooseObject = {};

      for(i = 0; i < addons20222.length; ++i) {
        
        if(!keyCount2022[addons20222[i]]){
          keyCount2022[addons20222[i]] = 0;
        }
      
          ++keyCount2022[addons20222[i]];
      }
  
    var data = [];
          for(var key in keyCount2022){
            var addons2022_arr = { addons2022: key, quantity: keyCount2022[key]};
            
              data.push(addons2022_arr);
        }
  
  
        this.addons2022_breakdown = data;

  }

//2023



total_deliveries2023: number = 0;
delivery2023: any = {};

sales2023:number =0;
Delivery2023(){
  
  this.ds.sendApiRequest("Delivery2023", null).subscribe((data: { payload: any; }) => {
  this.delivery2023 = data.payload;
  
  this.total_deliveries2023 = this.delivery2023.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2023 += data.payload[i].total_price;
    }
    this.keycount2023();
  });

}

driver2023_breakdown:any;
driver2023_final:any;
keycount2023() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2023.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2023[i]["driver"]);
  }

  var keyCount2023 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2023[fileLicenses[i]]){
      keyCount2023[fileLicenses[i]] = 0;
    }
   
      ++keyCount2023[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2023){
    var postdata = { driver2023: key, number_deliveries2023: keyCount2023[key]};
  
    data.push(postdata);
 }

    this.driver2023_breakdown = data;
}

driver2023: any;
driverDelivery2023() {
    this.ds.sendApiRequest("driverDelivery2023", null).subscribe((data: { payload: any; }) => {
    this.driver2023 = data.payload;
    })
}

drinks2023:number=0;
snacks2023:number=0;
addons2023:number=0;

drinks2023_sales:number=0;
snacks2023_sales:number=0;
addons2023_sales:number=0;
stocks2023:any;
Stocks2023(){
  this.ds.sendApiRequest("Stocks2023", null).subscribe((data: { payload: any; }) => {
  this.stocks2023 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2023 var
        this.drinks2023+= data.payload[i].food_quantity;

        this.drinks2023_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2023 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2023 += addons2023.length*data.payload[i].food_quantity;
          this.addons2023_sales+= (addons2023.length*10)*data.payload[i].food_quantity;
          this.drinks2023_sales = this.drinks2023_sales-((addons2023.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2023 var
        this.snacks2023+= data.payload[i].food_quantity;
        this.snacks2023_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2023 =  data.payload[i].cart_addon_name.split(",");
          this.addons2023 += addons2023.length*data.payload[i].food_quantity;
          this.addons2023_sales+= addons2023.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2023();
  });

 
}




drinks2023_breakdown:any;
snacks2023_breakdown:any;
addons2023_breakdown:any;

  items_keycount2023() {
    var drinks2023 = [];
    var snacks20232 = [];
    var addons20232 = [];

    


    for ( var i = 0, arrLen = this.stocks2023.length; i < arrLen; ++i ) {
 

      if(this.stocks2023[i]["cart_addon_name"]){
        let addons2023 =  this.stocks2023[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2023.length; j++){
        
                 
          for(var k = 0; k < this.stocks2023[i]["food_quantity"]; k++){
            addons20232.push(addons2023[j]); 
            
          
          }
        }

      }
        if(this.stocks2023[i]['size_name']){
            
          for(var j = 0; j < this.stocks2023[i]["food_quantity"]; j++){
            drinks2023.push(this.stocks2023[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2023[i]["food_quantity"]; j++){
            snacks20232.push(this.stocks2023[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2023 : LooseObject = {};


    for(i = 0; i < drinks2023.length; ++i) {
      
      if(!keyCount2023[drinks2023[i]]){
        keyCount2023[drinks2023[i]] = 0;
      }
    
        ++keyCount2023[drinks2023[i]];
    }
  var data = [];
        for(var key in keyCount2023){
          var drinks2023_arr = { snack: key, quantity: keyCount2023[key]};
          
            data.push(drinks2023_arr);
      }

      this.drinks2023_breakdown = data;

      var keyCount2023 : LooseObject = {};

      for(i = 0; i < snacks20232.length; ++i) {
        
        if(!keyCount2023[snacks20232[i]]){
          keyCount2023[snacks20232[i]] = 0;
        }
      
          ++keyCount2023[snacks20232[i]];
      }
  
    var data = [];
          for(var key in keyCount2023){
            var snacks2023_arr = { snack: key, quantity: keyCount2023[key]};
          
            data.push(snacks2023_arr);
        }
  
        this.snacks2023_breakdown = data;

      var keyCount2023 : LooseObject = {};

      for(i = 0; i < addons20232.length; ++i) {
        
        if(!keyCount2023[addons20232[i]]){
          keyCount2023[addons20232[i]] = 0;
        }
      
          ++keyCount2023[addons20232[i]];
      }
  
    var data = [];
          for(var key in keyCount2023){
            var addons2023_arr = { addons2023: key, quantity: keyCount2023[key]};
            
              data.push(addons2023_arr);
        }
  
  
        this.addons2023_breakdown = data;

  }

//2024

total_deliveries2024: number = 0;
delivery2024: any = {};

sales2024:number =0;
Delivery2024(){
  
  this.ds.sendApiRequest("Delivery2024", null).subscribe((data: { payload: any; }) => {
  this.delivery2024 = data.payload;
  
  this.total_deliveries2024 = this.delivery2024.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2024 += data.payload[i].total_price;
    }
    this.keycount2024();
  });

}

driver2024_breakdown:any;
driver2024_final:any;
keycount2024() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2024.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2024[i]["driver"]);
  }

  var keyCount2024 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2024[fileLicenses[i]]){
      keyCount2024[fileLicenses[i]] = 0;
    }
   
      ++keyCount2024[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2024){
    var postdata = { driver2024: key, number_deliveries2024: keyCount2024[key]};
  
    data.push(postdata);
 }

    this.driver2024_breakdown = data;
}

driver2024: any;
driverDelivery2024() {
    this.ds.sendApiRequest("driverDelivery2024", null).subscribe((data: { payload: any; }) => {
    this.driver2024 = data.payload;
    })
}

drinks2024:number=0;
snacks2024:number=0;
addons2024:number=0;

drinks2024_sales:number=0;
snacks2024_sales:number=0;
addons2024_sales:number=0;
stocks2024:any;
Stocks2024(){
  this.ds.sendApiRequest("Stocks2024", null).subscribe((data: { payload: any; }) => {
  this.stocks2024 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2024 var
        this.drinks2024+= data.payload[i].food_quantity;

        this.drinks2024_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2024 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2024 += addons2024.length*data.payload[i].food_quantity;
          this.addons2024_sales+= (addons2024.length*10)*data.payload[i].food_quantity;
          this.drinks2024_sales = this.drinks2024_sales-((addons2024.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2024 var
        this.snacks2024+= data.payload[i].food_quantity;
        this.snacks2024_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2024 =  data.payload[i].cart_addon_name.split(",");
          this.addons2024 += addons2024.length*data.payload[i].food_quantity;
          this.addons2024_sales+= addons2024.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2024();
  });

 
}




drinks2024_breakdown:any;
snacks2024_breakdown:any;
addons2024_breakdown:any;

  items_keycount2024() {
    var drinks2024 = [];
    var snacks20242 = [];
    var addons20242 = [];

    


    for ( var i = 0, arrLen = this.stocks2024.length; i < arrLen; ++i ) {
 

      if(this.stocks2024[i]["cart_addon_name"]){
        let addons2024 =  this.stocks2024[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2024.length; j++){
        
                 
          for(var k = 0; k < this.stocks2024[i]["food_quantity"]; k++){
            addons20242.push(addons2024[j]); 
            
          
          }
        }

      }
        if(this.stocks2024[i]['size_name']){
            
          for(var j = 0; j < this.stocks2024[i]["food_quantity"]; j++){
            drinks2024.push(this.stocks2024[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2024[i]["food_quantity"]; j++){
            snacks20242.push(this.stocks2024[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2024 : LooseObject = {};


    for(i = 0; i < drinks2024.length; ++i) {
      
      if(!keyCount2024[drinks2024[i]]){
        keyCount2024[drinks2024[i]] = 0;
      }
    
        ++keyCount2024[drinks2024[i]];
    }
  var data = [];
        for(var key in keyCount2024){
          var drinks2024_arr = { snack: key, quantity: keyCount2024[key]};
          
            data.push(drinks2024_arr);
      }

      this.drinks2024_breakdown = data;

      var keyCount2024 : LooseObject = {};

      for(i = 0; i < snacks20242.length; ++i) {
        
        if(!keyCount2024[snacks20242[i]]){
          keyCount2024[snacks20242[i]] = 0;
        }
      
          ++keyCount2024[snacks20242[i]];
      }
  
    var data = [];
          for(var key in keyCount2024){
            var snacks2024_arr = { snack: key, quantity: keyCount2024[key]};
          
            data.push(snacks2024_arr);
        }
  
        this.snacks2024_breakdown = data;

      var keyCount2024 : LooseObject = {};

      for(i = 0; i < addons20242.length; ++i) {
        
        if(!keyCount2024[addons20242[i]]){
          keyCount2024[addons20242[i]] = 0;
        }
      
          ++keyCount2024[addons20242[i]];
      }
  
    var data = [];
          for(var key in keyCount2024){
            var addons2024_arr = { addons2024: key, quantity: keyCount2024[key]};
            
              data.push(addons2024_arr);
        }
  
  
        this.addons2024_breakdown = data;

  }

//2025

total_deliveries2025: number = 0;
delivery2025: any = {};

sales2025:number =0;
Delivery2025(){
  
  this.ds.sendApiRequest("Delivery2025", null).subscribe((data: { payload: any; }) => {
  this.delivery2025 = data.payload;
  
  this.total_deliveries2025 = this.delivery2025.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2025 += data.payload[i].total_price;
    }
    this.keycount2025();
  });

}

driver2025_breakdown:any;
driver2025_final:any;
keycount2025() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2025.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2025[i]["driver"]);
  }

  var keyCount2025 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2025[fileLicenses[i]]){
      keyCount2025[fileLicenses[i]] = 0;
    }
   
      ++keyCount2025[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2025){
    var postdata = { driver2025: key, number_deliveries2025: keyCount2025[key]};
  
    data.push(postdata);
 }

    this.driver2025_breakdown = data;
}

driver2025: any;
driverDelivery2025() {
    this.ds.sendApiRequest("driverDelivery2025", null).subscribe((data: { payload: any; }) => {
    this.driver2025 = data.payload;
    })
}

drinks2025:number=0;
snacks2025:number=0;
addons2025:number=0;

drinks2025_sales:number=0;
snacks2025_sales:number=0;
addons2025_sales:number=0;
stocks2025:any;
Stocks2025(){
  this.ds.sendApiRequest("Stocks2025", null).subscribe((data: { payload: any; }) => {
  this.stocks2025 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2025 var
        this.drinks2025+= data.payload[i].food_quantity;

        this.drinks2025_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2025 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2025 += addons2025.length*data.payload[i].food_quantity;
          this.addons2025_sales+= (addons2025.length*10)*data.payload[i].food_quantity;
          this.drinks2025_sales = this.drinks2025_sales-((addons2025.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2025 var
        this.snacks2025+= data.payload[i].food_quantity;
        this.snacks2025_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2025 =  data.payload[i].cart_addon_name.split(",");
          this.addons2025 += addons2025.length*data.payload[i].food_quantity;
          this.addons2025_sales+= addons2025.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2025();
  });

 
}




drinks2025_breakdown:any;
snacks2025_breakdown:any;
addons2025_breakdown:any;

  items_keycount2025() {
    var drinks2025 = [];
    var snacks20252 = [];
    var addons20252 = [];

    


    for ( var i = 0, arrLen = this.stocks2025.length; i < arrLen; ++i ) {
 

      if(this.stocks2025[i]["cart_addon_name"]){
        let addons2025 =  this.stocks2025[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2025.length; j++){
        
                 
          for(var k = 0; k < this.stocks2025[i]["food_quantity"]; k++){
            addons20252.push(addons2025[j]); 
            
          
          }
        }

      }
        if(this.stocks2025[i]['size_name']){
            
          for(var j = 0; j < this.stocks2025[i]["food_quantity"]; j++){
            drinks2025.push(this.stocks2025[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2025[i]["food_quantity"]; j++){
            snacks20252.push(this.stocks2025[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2025 : LooseObject = {};


    for(i = 0; i < drinks2025.length; ++i) {
      
      if(!keyCount2025[drinks2025[i]]){
        keyCount2025[drinks2025[i]] = 0;
      }
    
        ++keyCount2025[drinks2025[i]];
    }
  var data = [];
        for(var key in keyCount2025){
          var drinks2025_arr = { snack: key, quantity: keyCount2025[key]};
          
            data.push(drinks2025_arr);
      }

      this.drinks2025_breakdown = data;

      var keyCount2025 : LooseObject = {};

      for(i = 0; i < snacks20252.length; ++i) {
        
        if(!keyCount2025[snacks20252[i]]){
          keyCount2025[snacks20252[i]] = 0;
        }
      
          ++keyCount2025[snacks20252[i]];
      }
  
    var data = [];
          for(var key in keyCount2025){
            var snacks2025_arr = { snack: key, quantity: keyCount2025[key]};
          
            data.push(snacks2025_arr);
        }
  
        this.snacks2025_breakdown = data;

      var keyCount2025 : LooseObject = {};

      for(i = 0; i < addons20252.length; ++i) {
        
        if(!keyCount2025[addons20252[i]]){
          keyCount2025[addons20252[i]] = 0;
        }
      
          ++keyCount2025[addons20252[i]];
      }
  
    var data = [];
          for(var key in keyCount2025){
            var addons2025_arr = { addons2025: key, quantity: keyCount2025[key]};
            
              data.push(addons2025_arr);
        }
  
  
        this.addons2025_breakdown = data;

  }

//2026

total_deliveries2026: number = 0;
delivery2026: any = {};

sales2026:number =0;
Delivery2026(){
  
  this.ds.sendApiRequest("Delivery2026", null).subscribe((data: { payload: any; }) => {
  this.delivery2026 = data.payload;
  
  this.total_deliveries2026 = this.delivery2026.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2026 += data.payload[i].total_price;
    }
    this.keycount2026();
  });

}

driver2026_breakdown:any;
driver2026_final:any;
keycount2026() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2026.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2026[i]["driver"]);
  }

  var keyCount2026 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2026[fileLicenses[i]]){
      keyCount2026[fileLicenses[i]] = 0;
    }
   
      ++keyCount2026[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2026){
    var postdata = { driver2026: key, number_deliveries2026: keyCount2026[key]};
  
    data.push(postdata);
 }

    this.driver2026_breakdown = data;
}

driver2026: any;
driverDelivery2026() {
    this.ds.sendApiRequest("driverDelivery2026", null).subscribe((data: { payload: any; }) => {
    this.driver2026 = data.payload;
    })
}

drinks2026:number=0;
snacks2026:number=0;
addons2026:number=0;

drinks2026_sales:number=0;
snacks2026_sales:number=0;
addons2026_sales:number=0;
stocks2026:any;
Stocks2026(){
  this.ds.sendApiRequest("Stocks2026", null).subscribe((data: { payload: any; }) => {
  this.stocks2026 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2026 var
        this.drinks2026+= data.payload[i].food_quantity;

        this.drinks2026_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2026 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2026 += addons2026.length*data.payload[i].food_quantity;
          this.addons2026_sales+= (addons2026.length*10)*data.payload[i].food_quantity;
          this.drinks2026_sales = this.drinks2026_sales-((addons2026.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2026 var
        this.snacks2026+= data.payload[i].food_quantity;
        this.snacks2026_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2026 =  data.payload[i].cart_addon_name.split(",");
          this.addons2026 += addons2026.length*data.payload[i].food_quantity;
          this.addons2026_sales+= addons2026.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2026();
  });

 
}




drinks2026_breakdown:any;
snacks2026_breakdown:any;
addons2026_breakdown:any;

  items_keycount2026() {
    var drinks2026 = [];
    var snacks20262 = [];
    var addons20262 = [];

    


    for ( var i = 0, arrLen = this.stocks2026.length; i < arrLen; ++i ) {
 

      if(this.stocks2026[i]["cart_addon_name"]){
        let addons2026 =  this.stocks2026[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2026.length; j++){
        
                 
          for(var k = 0; k < this.stocks2026[i]["food_quantity"]; k++){
            addons20262.push(addons2026[j]); 
            
          
          }
        }

      }
        if(this.stocks2026[i]['size_name']){
            
          for(var j = 0; j < this.stocks2026[i]["food_quantity"]; j++){
            drinks2026.push(this.stocks2026[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2026[i]["food_quantity"]; j++){
            snacks20262.push(this.stocks2026[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2026 : LooseObject = {};


    for(i = 0; i < drinks2026.length; ++i) {
      
      if(!keyCount2026[drinks2026[i]]){
        keyCount2026[drinks2026[i]] = 0;
      }
    
        ++keyCount2026[drinks2026[i]];
    }
  var data = [];
        for(var key in keyCount2026){
          var drinks2026_arr = { snack: key, quantity: keyCount2026[key]};
          
            data.push(drinks2026_arr);
      }

      this.drinks2026_breakdown = data;

      var keyCount2026 : LooseObject = {};

      for(i = 0; i < snacks20262.length; ++i) {
        
        if(!keyCount2026[snacks20262[i]]){
          keyCount2026[snacks20262[i]] = 0;
        }
      
          ++keyCount2026[snacks20262[i]];
      }
  
    var data = [];
          for(var key in keyCount2026){
            var snacks2026_arr = { snack: key, quantity: keyCount2026[key]};
          
            data.push(snacks2026_arr);
        }
  
        this.snacks2026_breakdown = data;

      var keyCount2026 : LooseObject = {};

      for(i = 0; i < addons20262.length; ++i) {
        
        if(!keyCount2026[addons20262[i]]){
          keyCount2026[addons20262[i]] = 0;
        }
      
          ++keyCount2026[addons20262[i]];
      }
  
    var data = [];
          for(var key in keyCount2026){
            var addons2026_arr = { addons2026: key, quantity: keyCount2026[key]};
            
              data.push(addons2026_arr);
        }
  
  
        this.addons2026_breakdown = data;

  }

//2027

total_deliveries2027: number = 0;
delivery2027: any = {};

sales2027:number =0;
Delivery2027(){
  
  this.ds.sendApiRequest("Delivery2027", null).subscribe((data: { payload: any; }) => {
  this.delivery2027 = data.payload;
  
  this.total_deliveries2027 = this.delivery2027.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.sales2027 += data.payload[i].total_price;
    }
    this.keycount2027();
  });

}

driver2027_breakdown:any;
driver2027_final:any;
keycount2027() {

  var fileLicenses = [];

  for ( var i = 0, arrLen = this.delivery2027.length; i < arrLen; ++i ) {
      fileLicenses.push(this.delivery2027[i]["driver"]);
  }

  var keyCount2027 : LooseObject = {};


  for(i = 0; i < fileLicenses.length; ++i) {
    
    if(!keyCount2027[fileLicenses[i]]){
      keyCount2027[fileLicenses[i]] = 0;
    }
   
      ++keyCount2027[fileLicenses[i]];
  }


var data = [];

  for(var key in keyCount2027){
    var postdata = { driver2027: key, number_deliveries2027: keyCount2027[key]};
  
    data.push(postdata);
 }

    this.driver2027_breakdown = data;
}

driver2027: any;
driverDelivery2027() {
    this.ds.sendApiRequest("driverDelivery2027", null).subscribe((data: { payload: any; }) => {
    this.driver2027 = data.payload;
    })
}

drinks2027:number=0;
snacks2027:number=0;
addons2027:number=0;

drinks2027_sales:number=0;
snacks2027_sales:number=0;
addons2027_sales:number=0;
stocks2027:any;
Stocks2027(){
  this.ds.sendApiRequest("Stocks2027", null).subscribe((data: { payload: any; }) => {
  this.stocks2027 = data.payload;
  // //console.log(data.payload)

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks2027 var
        this.drinks2027+= data.payload[i].food_quantity;

        this.drinks2027_sales += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons2027 =  data.payload[i].cart_addon_name.split(",");
        
          this.addons2027 += addons2027.length*data.payload[i].food_quantity;
          this.addons2027_sales+= (addons2027.length*10)*data.payload[i].food_quantity;
          this.drinks2027_sales = this.drinks2027_sales-((addons2027.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks2027 var
        this.snacks2027+= data.payload[i].food_quantity;
        this.snacks2027_sales+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons2027 =  data.payload[i].cart_addon_name.split(",");
          this.addons2027 += addons2027.length*data.payload[i].food_quantity;
          this.addons2027_sales+= addons2027.length*10;

        }
        
        
      }
     
    }

    this.items_keycount2027();
  });

 
}




drinks2027_breakdown:any;
snacks2027_breakdown:any;
addons2027_breakdown:any;

  items_keycount2027() {
    var drinks2027 = [];
    var snacks20272 = [];
    var addons20272 = [];

    


    for ( var i = 0, arrLen = this.stocks2027.length; i < arrLen; ++i ) {
 

      if(this.stocks2027[i]["cart_addon_name"]){
        let addons2027 =  this.stocks2027[i].cart_addon_name.split(",");

        for(var j = 0; j < addons2027.length; j++){
        
                 
          for(var k = 0; k < this.stocks2027[i]["food_quantity"]; k++){
            addons20272.push(addons2027[j]); 
            
          
          }
        }

      }
        if(this.stocks2027[i]['size_name']){
            
          for(var j = 0; j < this.stocks2027[i]["food_quantity"]; j++){
            drinks2027.push(this.stocks2027[i]["prod_name"]);
          }
        }
        else{

          for(var j = 0; j < this.stocks2027[i]["food_quantity"]; j++){
            snacks20272.push(this.stocks2027[i]["prod_name"]);
          }
          
         }
    }

    var keyCount2027 : LooseObject = {};


    for(i = 0; i < drinks2027.length; ++i) {
      
      if(!keyCount2027[drinks2027[i]]){
        keyCount2027[drinks2027[i]] = 0;
      }
    
        ++keyCount2027[drinks2027[i]];
    }
  var data = [];
        for(var key in keyCount2027){
          var drinks2027_arr = { snack: key, quantity: keyCount2027[key]};
          
            data.push(drinks2027_arr);
      }

      this.drinks2027_breakdown = data;

      var keyCount2027 : LooseObject = {};

      for(i = 0; i < snacks20272.length; ++i) {
        
        if(!keyCount2027[snacks20272[i]]){
          keyCount2027[snacks20272[i]] = 0;
        }
      
          ++keyCount2027[snacks20272[i]];
      }
  
    var data = [];
          for(var key in keyCount2027){
            var snacks2027_arr = { snack: key, quantity: keyCount2027[key]};
          
            data.push(snacks2027_arr);
        }
  
        this.snacks2027_breakdown = data;

      var keyCount2027 : LooseObject = {};

      for(i = 0; i < addons20272.length; ++i) {
        
        if(!keyCount2027[addons20272[i]]){
          keyCount2027[addons20272[i]] = 0;
        }
      
          ++keyCount2027[addons20272[i]];
      }
  
    var data = [];
          for(var key in keyCount2027){
            var addons2027_arr = { addons2027: key, quantity: keyCount2027[key]};
            
              data.push(addons2027_arr);
        }
  
  
        this.addons2027_breakdown = data;

  }





selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

nativeSelectFormControl = new FormControl('vaild',[Validators.required, Validators.pattern('valid')]);

x:any;
y:any;
a:any;
b:any;
c:any;
d:any;
e:any;
f:any;
print(){
    setTimeout(() =>{
      this.x = document.getElementById("hide");
      this.y = document.getElementById("hide2");
      this.a = document.getElementById("hide3");
      this.b = document.getElementById("hide4");
      this.c = document.getElementById("hide5");
      this.d = document.getElementById("hide6");
      this.e = document.getElementById("month");
      this.f = document.getElementById("month-label");

      // this.x.style.display = "none";
      this.y.style.display = "none";
      this.a.style.display = "none";
      // this.e.style.display = "none";
      // this.f.style.display = "none";
      // this.b.style.display = "none";
      // this.c.style.display = "none";
      // this.d.style.display = "none";

      window.print();
      // this.x.style.display = "block";
      // this.y.style.display = "block";
      // this.a.style.display = "block";
      // this.b.style.display = "block";
      // this.c.style.display = "block";
      // this.d.style.display = "block";
      // this.e.style.display = "block";
      // this.f.style.display = "block";
      // document.title = 'My new title';
      window.location.reload();
    },1500);
    
}

}

