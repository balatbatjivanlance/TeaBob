import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { StatusDialogComponent } from './status-dialog/status-dialog/status-dialog.component';
import {MatFormField} from '@angular/material/form-field';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

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

  statusinfo: any = {};
  mstatus: any [] = [];
  pullStatus() {
    this.ds.sendApiRequest("status/" + window.localStorage.getItem("id"), null).subscribe((data: { payload: any; }) => {
    this.mstatus = data.payload;
    console.log(this.mstatus);
    }
    )
  }

    
  statusModal() {
    const dialog = this.dialog.open(StatusDialogComponent, {
      autoFocus: false, width:"70%", height:"60%"
    });
    dialog.afterClosed().subscribe( ()=>{
      console.log("closed")
    });
  
  }

  statusupdate: any = {};
  
  updateStatus() {
    
   let id  = localStorage.getItem("id");

   var stat = "Order Received";
   this.status = stat;

   this.statusupdate.status_id =  id;
   this.statusupdate.is_approved =  this.status;
    this.ds.sendApiRequest("updateStatus/" + id, this.statusupdate).subscribe((data: { payload: any; }) => {});
    this.sendMessage();
  }

  sendMessage(): void {
    this.ds.sendUpdate('Message from Sender Component to Receiver Component!')
  }

}
