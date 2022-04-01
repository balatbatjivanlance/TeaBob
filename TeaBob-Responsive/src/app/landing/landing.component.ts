import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  message: any;
  private subs: Subscription;
  
  constructor(private ds: DataService, public dialog:MatDialog,
    route:ActivatedRoute, ) { 
      this.subs = this.ds.getUpdate().subscribe(message => {
        this.message = message;
          route.params.subscribe(val => {
            this.ngOnInit();
          });
      });
    }

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
