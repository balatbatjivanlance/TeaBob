import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { UpdateFoodComponent } from '../update-food/update-food.component';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {

  constructor( private ds: DataService , public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.adminPullFood();
  }

  adminfood: any;

  adminPullFood() {
      this.ds.sendApiRequest("adminfood", null).subscribe((data: { payload: any; }) => {
        this.adminfood = data.payload;
        
        console.log(this.adminfood);
      })
    
  }

  
openCorBreakDown(adminfood: any) {
  // console.log(code);
  const dialogRef = this.dialog.open(UpdateFoodComponent , {
    height: '50%',
    width: '50%',
    data: 
    adminfood
  });
}

}
