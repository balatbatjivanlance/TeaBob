import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-size',
  templateUrl: './update-size.component.html',
  styleUrls: ['./update-size.component.css']
})
export class UpdateSizeComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

}
