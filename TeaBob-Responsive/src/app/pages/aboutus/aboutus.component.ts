import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import Swal from 'sweetalert2'
import { Router } from '@angular/router'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private ds: DataService,
    public dialog: MatDialog,
    public router: Router,
    route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
  }
  user_role = localStorage.getItem('user_role')

   // SIDENAV AND TOOLBAR CODE

   showFiller = false
   sidenav!: MatSidenav
   isExpanded = true
   showSubmenu: boolean = false
   isShowing = false
   showSubSubMenu: boolean = false
 
   mouseenter() {
     if (!this.isExpanded) {
       this.isShowing = true
     }
   }
 
   mouseleave() {
     if (!this.isExpanded) {
       this.isShowing = false
     }
   }
 
   isLargeScreen() {
     const width =
       window.innerWidth ||
       document.documentElement.clientWidth ||
       document.body.clientWidth
     if (width > 769) {
       return true
     } else {
       return false
     }
   }
 
   logout() {
     localStorage.clear()
     window.localStorage.removeItem('id')
     this.ds.setUserLoggedOut();
     this.router.navigate(['/'])
   }
 
   // END OF SIDENAV AND TOOLBAR CODE
 
   //INSERT YOUR NEW TS CODE HERE
 

}
