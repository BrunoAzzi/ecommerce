import { Component, Input, ViewChild } from "@angular/core"
import { Router } from '@angular/router';
import { AuthService } from "../../../../services/firebase/auth.service"
import { MdMenuTrigger } from "@angular/material"
import { SidenavService } from "../../../../services/sidenav/sidenav.service"

@Component({
    selector: 'topnavbar',
    templateUrl: './topnavbar.template.html',
    styleUrls: ['./topnavbar.component.scss'],
})
export class TopnavbarComponent {

    showNotification: boolean = false;
    logged = false;

    constructor(
      private service: AuthService,
      private router: Router,
      private sidenavService: SidenavService
    ) { }

    ngOnInit() {
      this.service.isLoggedIn().subscribe(isLoggedIn=> this.logged = isLoggedIn);
    }

    logout() {
        this.service.logout();
        this.router.navigate(["/login"]);
    }

    login() {
      this.service.login();
    }

    changeUser() {
      this.login();
    }

    toggleSidenav() {
      this.sidenavService.toggle();
    }

}
