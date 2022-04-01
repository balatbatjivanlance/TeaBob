import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.pullFoodFeatured();
  }

  foods: any[]=[];

  pullFoodFeatured(){
    this.ds.sendApiRequest("foodfeatured/", null).subscribe((data: { payload: any; }) => {
    this.foods = data.payload;
    })
  }

}
