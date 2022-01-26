import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  approved:any;

  constructor(public ds: DataService, private _router: Router) { }

  ngOnInit() {
    console.log("hello");
    this.getApproved();
  }

  getApproved(){
    this.ds.sendApiRequest("getApproved", null).subscribe((data: { payload: any; }) => {
      this.approved = data.payload;

      console.log(this.approved);

    })

  }

  viewOrder(approved:any){

    // console.log(approved);
    this._router.navigate(['/view-order'], {state: approved});
  }

}
