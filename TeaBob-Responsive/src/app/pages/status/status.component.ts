import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  
  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService) { }

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

}
