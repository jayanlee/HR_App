import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'gtn-header',
  templateUrl: './gtn-header.component.html',
  styleUrls: ['./gtn-header.component.scss'],
})

export class GtnHeaderComponent {
  tip = { ring: true, email: true };
  configToggle: boolean = true;
  constructor(private _globalService: GlobalService) { }
  public _configToggle() {
    this.configToggle = !this.configToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
    this._globalService.dataBusChanged('configToggle', !this.configToggle);
  }
}