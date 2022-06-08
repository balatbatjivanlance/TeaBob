import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog} from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AdminRegisterComponent } from '../admin-register/admin-register.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-admin',
  templateUrl: './manage-admin.component.html',
  styleUrls: ['./manage-admin.component.css']
})
export class ManageAdminComponent implements OnInit {

  constructor( private ds: DataService ,public router: Router, public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.pullUserAdmin();
  }

  user_role = localStorage.getItem("user_role");
  searchadmin: any;


  // SIDENAV AND TOOLBAR CODE 

  showFiller = false;
  sidenav!: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 769) {
        return true;
    } else {
        return false;
    }
  }

  
  logout(){
    localStorage.clear();
    window.localStorage.removeItem('id');
    this.ds.setUserLoggedOut();
    this.router.navigate(['/']);
}

admin: any;

pullUserAdmin() {
this.ds.sendApiRequest("pullUserAdmin", null).subscribe((data: { payload: any; }) => {
  this.admin = data.payload;

})

}

adminInfo: any  = {};

async delAdmin(e:any) {
  
  Swal.fire({
    title: 'Are you sure to fire this Admin?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      
      this.adminInfo.user_id = e;

      this.ds.sendApiRequest("delAdmin", JSON.parse(JSON.stringify(this.adminInfo))).subscribe((data: any) => {

      });
      window.location.reload();
      
      Swal.fire(
        'Deleted!',
        'The Admin has been Deleted.',
        'success'
      )
    }
  })

}


openModalAdmin() {

    const dialog = this.dialog.open(AdminRegisterComponent, {
      autoFocus: false, width:"50%", height:"70%",
    });
    dialog.afterClosed().subscribe( ()=>{
    });
  

}


}
