import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { ViewOrdersComponent } from '../view-orders/view-orders.component';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  constructor( private ds: DataService , public dialog: MatDialog ) { }

  ngOnInit(): void {

    this.pullProd();
    this.pullCategory();
    this.pullDashboard();
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

  categories: any;
  categCounter: number = 0;

  pullCategory() {

  
      this.ds.sendApiRequest("category", null).subscribe((data: { payload: any; }) => {
        this.categories = data.payload;

        for(let i = 0; i <= this.categories.length; i++) {
          this.categCounter = i;
        }
        
  
      })
    
  }

  dashboard: any;
  
  pullDashboard() {
    this.ds.sendApiRequest("dashboard", null).subscribe((data: { payload: any; }) => {
      this.dashboard = data.payload;

    })
  
}


openCorBreakDown(dashboard: any) {
  // console.log(code);
  const dialogRef = this.dialog.open(ViewOrdersComponent , {
    height: '50%',
    width: '50%',
    data: 
    dashboard
  });
}

}
