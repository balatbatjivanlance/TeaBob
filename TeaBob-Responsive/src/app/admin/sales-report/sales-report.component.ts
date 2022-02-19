import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  constructor( private ds: DataService , public dialog: MatDialog, public router: Router) { }

  ngOnInit(): void {
    this.cancelledToday();
    this.deliveryToday();
    this.stocksToday();
    this.driverDelivery();
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
    this.router.navigate(['/login']);
}


total_deliveries: number = 0;
delivery: any = {};

profit:number =0;
deliveryToday(){
  
  this.ds.sendApiRequest("deliveryToday", null).subscribe((data: { payload: any; }) => {
  this.delivery = data.payload;
  console.log("delivery:",this.delivery);
  
  this.total_deliveries = this.delivery.length;

    for (let i = 0; i < data.payload.length; i++) {
      console.log(data.payload[i]);

      this.profit += data.payload[i].total_price;
    }
  })

  
}

// driver_deliveries : number = 0;
driver: any;
driverDelivery() {
    this.ds.sendApiRequest("driverDelivery", null).subscribe((data: { payload: any; }) => {
    this.driver = data.payload;
    console.log(this.driver);
    
    // var keyCount  = Object.keys(data.payload).length;
      
    // this.driver_deliveries = keyCount;
    })
}

total_cancelled: number = 0;
cancelled: any = {};
cancelledToday(){
  
  this.ds.sendApiRequest("cancelledToday", null).subscribe((data: { payload: any; }) => {
  this.cancelled = data.payload;
  console.log(this.cancelled);
  
this.total_cancelled = this.cancelled.length;
  })

  
}


drinks:number=0;
snacks:number=0;
addons:number=0;
stocksToday(){
  // dito niyo nalagn din kunin profit sa drinks snacks addons modify niyo nalang code para madalian kayo hahha
  this.ds.sendApiRequest("stocksToday", null).subscribe((data: { payload: any; }) => {
  // console.log(data.payload);

    // Loop lahat ng obj sa json
    for (let i = 0; i < data.payload.length; i++) {
      // console.log(data.payload[i]);

      // check if may sizename
      //inassume ko na pag may sizename drink pag wala, snack
      if(data.payload[i].size_name){
        //add sa drinks var
        this.drinks+= data.payload[i].food_quantity;
       
        // check if may laman si addon
        //pag meron split pag may nakita na ',' then store sa arr variable tas count length
        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
        
          this.addons += addons.length;
        }
      }
      else{
        //add sa snacks var
        this.snacks+= data.payload[i].food_quantity;

        // check if may laman si addon
        //pag meron split pag may nakita na ',' then store sa arr variable tas count length
        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
          this.addons += addons.length;

          // oks na jo
        }
        
        
      }
     
    }
  });
}

}
