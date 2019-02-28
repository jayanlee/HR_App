import { Component, OnInit } from '@angular/core';
import { GlobalService } from './shared/services/global.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // userDetails: KeycloakProfile;

  // constructor(private keycloakService: KeycloakService) {}

  // async ngOnInit() {
  //   if (await this.keycloakService.isLoggedIn()) {
  //     this.userDetails = await this.keycloakService.loadUserProfile();
  //     console.log(this.userDetails);
  //   }
  // }

  // async doLogout() {
  //   await this.keycloakService.logout();
  // }
  public sidebarToggle = false;
  public configToggle = true;
  userDetails: KeycloakProfile;
  constructor(private _globalService: GlobalService, private keycloakService: KeycloakService) { }

  async ngOnInit() {
    this._sidebarToggle();
    if (await this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
      this._globalService.dataBusChanged('setStorage','');
    }
  }
  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'configToggle') {
        this.configToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('configToggle', !this.configToggle);

    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
