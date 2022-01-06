import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { StatusDialogComponent } from './status-dialog/status-dialog/status-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

import { OrdersModalComponent } from 'src/app/orders-modal/orders-modal.component';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  status: string | undefined;
  
  user_id = localStorage.getItem("UID");

  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, route:ActivatedRoute, public dialog: MatDialog ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

  ngOnInit(): void {
    
    this.pullUsers();
    this.pullStatus();
  }

  userinfo: any = {};
  user: any;
  
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users/",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;
    }
    )
  }

  
  status_payload: any [] = []; 

  is_approved: any;

  pullStatus() {
    this.ds.sendApiRequest("status/", localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.status_payload = data.payload;
    
    console.log(this.is_approved)
    }
    )
  }

  statusinfo: any = {};

  updateStatus() {
    
     Swal.fire({
      title: 'Are you sure to cancel your orders?',
      showDenyButton: true,
      confirmButtonText: 'Yes!',
      denyButtonText: `No!`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        let id  = localStorage.getItem("id");
 
    this.statusinfo.user_id =  id;
    this.statusinfo.is_approved =  2
     this.ds.sendApiRequest("updateStatus/" + id, this.statusinfo).subscribe((data: { payload: any; }) => {});
     this.sendMessage();

        Swal.fire('Order Cancelled', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Thank you for your fast update', '', 'info')
      }
    })
     this.dialog.closeAll();
   }


    
  // statusModal() {
  //   const dialog = this.dialog.open(StatusDialogComponent, {
  //     autoFocus: false, width:"70%", height:"60%"
  //   });
  //   dialog.afterClosed().subscribe( ()=>{
  //     console.log("closed")
  //   });
  
  // }

 

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }


  openCorBreakDown(status: any) {
    // console.log(code);
    const dialogRef = this.dialog.open(OrdersModalComponent , {
      height: '50%',
      width: '50%',
      data: 
      status
    });
  }

  orderInfo: any  = {};

  async delorder(e:any) {
    this.orderInfo.cocode = e;

        this.ds.sendApiRequest("delOrder", JSON.parse(JSON.stringify(this.orderInfo))).subscribe((data: any) => {
          alert('Order Removed');
          // this.pullOrders();
        });

  }




}
