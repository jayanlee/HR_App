import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { KeycloakService } from 'keycloak-angular'; 

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent {

  // isConfigToggle: boolean = false;
  // constructor(private _globalService: GlobalService) { }

  // ngOnInit() { }

  // configToggle() {
  //   this.isConfigToggle = !this.isConfigToggle;
  //   //this._globalService._sidebarToggleState(!this.isConfigToggle);
  //   this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
  // }
  
  constructor(private keycloakService: KeycloakService) {}

  async doLogout() {
    
    await this.keycloakService.logout();
  }
}
