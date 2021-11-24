import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { StatusDialogComponent } from './status-dialog/status-dialog/status-dialog.component';
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService, public dialog:MatDialog) { }

  ngOnInit(): void {
    
    this.pullUsers();
    this.pullStatus();
  }

  userinfo: any = {};
  user: any;
  
  pullUsers() {
    this.userinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("users",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
    this.user = data.payload;

    console.log(this.user);

    }
    )
  }

  statusinfo: any = {};
  mstatus: any;
  pullStatus() {
    this.statusinfo.user_id = localStorage.getItem("id");
    this.ds.sendApiRequest("status",localStorage.getItem("id")).subscribe((data: { payload: any; }) => {
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

}
