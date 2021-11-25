import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-snacks-dialog',
  templateUrl: './snacks-dialog.component.html',
  styleUrls: ['./snacks-dialog.component.css']
})
export class SnacksDialogComponent implements OnInit {
  user_id = localStorage.getItem("UID");

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullUsers();
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


  
  prodInfo: any = {};
  title: any;
  info: any;


  addToCart(food:any) {


    this.prodInfo.user_id = localStorage.getItem("id");
    this.prodInfo.title = food.title;
    this.prodInfo.description = food.description;
    this.prodInfo.price = food.price;
    this.prodInfo.image_name = food.image_name;
    

    this.ds.sendApiRequest("addCart", JSON.parse(JSON.stringify(this.prodInfo))).subscribe((data: any) => {
    });


    console.log(this.prodInfo);


  }
}
