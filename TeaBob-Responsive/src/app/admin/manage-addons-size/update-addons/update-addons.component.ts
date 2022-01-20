import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-addons',
  templateUrl: './update-addons.component.html',
  styleUrls: ['./update-addons.component.css']
})
export class UpdateAddonsComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
  }

}
