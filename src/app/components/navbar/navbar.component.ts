import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logoutService:LogoutService,private router:Router, private session:SessionStorageService) { }

  ngOnInit(): void {
  }

  logout():any{

    this.logoutService.logout(this.session.retrieve("token")).subscribe(response=>
      {
        console.log(response);
          this.session.clear("username");
          this.session.clear("token");
          this.router.navigate(['/login']);
      })
  }

  
}
