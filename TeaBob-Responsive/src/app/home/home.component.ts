import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullFood();
  }

  food: any;

  pullFood(){
    this.ds.sendApiRequest("food", null).subscribe((data: { payload: any; }) => {
    this.food = data.payload;
    })
  }
  prodinfo: any = {};

  async delProd(e: any) {
    this.prodinfo.prod_id = e;

        this.ds.sendApiRequest("delProd", JSON.parse(JSON.stringify(this.prodinfo))).subscribe((data: any) => {
        });

      this.pullFood();
  }
}
