import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';
import { ViewOrdersOnlyComponent } from '../view-orders-only/view-orders-only.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface LooseObject {
  [key: string]: any
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor( private ds: DataService , public dialog: MatDialog, public router: Router ) { }

  ngOnInit(): void {

    this.pullProd();
    this.pullOrders();
    this.pullUsers();
    this.pullSales();
    this.pullPending();
    this.pullApprovedOrders();
    this.pullOndelivery();
    this.pullDeliveredToday();
    this.stocksToday();
    this.deliveryToday();
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
    this.router.navigate(['/login']);
}


  products: any;
  prodCounter: number = 0;

  pullProd() {

  
      this.ds.sendApiRequest("food", null).subscribe((data: { payload: any; }) => {
        this.products = data.payload;

        for(let i = 0; i <= this.products.length; i++) {
          this.prodCounter = i;
        }

  
      })
    
  }

  orders: any;
  ordersCounter: number = 0;

  pullOrders() {

  
      this.ds.sendApiRequest("orders", null).subscribe((data: { payload: any; }) => {
        this.orders = data.payload;

        for(let i = 0; i <= this.orders.length; i++) {
          this.ordersCounter = i;
        }
        
  
      })
    
  }

  
  users: any;
  userCounter: number = 0;

  pullUsers() {

  
      this.ds.sendApiRequest("usercount", null).subscribe((data: { payload: any; }) => {
        this.users = data.payload;

        for(let i = 0; i <= this.users.length; i++) {
          this.userCounter = i;
        }
        
  
      })
    
  }

  pending: any; 
  pendingCounter: number = 0;
  pullPending() {
    this.ds.sendApiRequest("pending", null).subscribe((data: { payload: any; }) => {
      this.pending = data.payload;
      
      for(let i = 0; i <= this.pending.length; i++) {
        this.pendingCounter = i;
      }

    })
}



approved: any; 
pullApprovedOrders() {
  this.ds.sendApiRequest("approved", null).subscribe((data: { payload: any; }) => {
    this.approved = data.payload;

  })
}
ondelivery: any; 
pullOndelivery() {
  this.ds.sendApiRequest("ondelivery", null).subscribe((data: { payload: any; }) => {
    this.ondelivery = data.payload;

  })
}
delivered: any; 
pullDeliveredToday() {
  this.ds.sendApiRequest("deliveredToday", null).subscribe((data: { payload: any; }) => {
    this.delivered = data.payload;

  })
}

sales: any;
  
pullSales() {
  this.ds.sendApiRequest("pullSales", null).subscribe((data: { payload: any; }) => {
    this.sales = data.payload;

  })

}


ViewandApproved(dashboard: any) {
  
  const dialogRef = this.dialog.open(ViewOrdersComponent , {
    height: '70%',
    width: '60%',
    data: 
    dashboard
  });
}

ViewOrdersOnly(dashboard: any) {
  
  const dialogRef = this.dialog.open(ViewOrdersOnlyComponent , {
    height: '70%',
    width: '60%',
    data: 
    dashboard
  });
}

orderInfo: any  = {};

async delorder(e:any) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {

      this.orderInfo.cocode = e;

      this.ds.sendApiRequest("delOrder", JSON.parse(JSON.stringify(this.orderInfo))).subscribe((data: any) => {
     
      });

      Swal.fire(
        'Deleted!',
        'File has been Deleted',
        'success'
      )
    }
  })

}


total_deliveries: number = 0;
delivery: any = {};

profit:number =0;
deliveryToday(){
  
  this.ds.sendApiRequest("deliveryToday", null).subscribe((data: { payload: any; }) => {
  this.delivery = data.payload;
  
  this.total_deliveries = this.delivery.length;

    for (let i = 0; i < data.payload.length; i++) {

      this.profit += data.payload[i].total_price;
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

drinks:number=0;
snacks:number=0;
addons:number=0;

drinks_profit:number=0;
snacks_profit:number=0;
addons_profit:number=0;
stocks:any;
stocksToday(){
  this.ds.sendApiRequest("stocksToday", null).subscribe((data: { payload: any; }) => {
  this.stocks = data.payload;

    // Loop of all  obj in json
    for (let i = 0; i < data.payload.length; i++) {

      if(data.payload[i].size_name){
        //add  drinks var
        this.drinks+= data.payload[i].food_quantity;

        this.drinks_profit += data.payload[i].prod_price;
    
        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
        
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_profit+= (addons.length*10)*data.payload[i].food_quantity;
          this.drinks_profit = this.drinks_profit-((addons.length*10)*data.payload[i].food_quantity);
          
         
        }
      }
      else{
        //add snacks var
        this.snacks+= data.payload[i].food_quantity;
        this.snacks_profit+= data.payload[i].prod_price;

        if(data.payload[i].cart_addon_name != ""){
          let addons =  data.payload[i].cart_addon_name.split(",");
          this.addons += addons.length*data.payload[i].food_quantity;
          this.addons_profit+= addons.length*10;

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

}
