import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/jayan.jpg';
  @Input() userDetails: KeycloakProfile;
  configToggle: boolean = false;
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService) { }

  public toggleBar(value) {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */
    if(value==="sidebar"){
      this._globalService.data$.subscribe(data => {
        if (data.ev === 'sidebarToggle') {
          this.sidebarToggle = data.value;
        }
      }, error => {
        console.log('Error: ' + error);
      });
      this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
    }
    else{
      this._globalService.data$.subscribe(data => {
        if (data.ev === 'configToggle') {
          this.configToggle = data.value;
        }
      }, error => {
        console.log('Error: ' + error);
      });
      this._globalService.dataBusChanged('configToggle', !this.configToggle);
    }
    

    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
  public _configToggle() {
    this.configToggle = !this.configToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('configToggle', !this.configToggle);
  }
}
