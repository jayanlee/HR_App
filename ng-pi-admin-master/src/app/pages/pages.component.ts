import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit{ 
  public sidebarToggle = false;
  public configToggle = true;
  constructor(private _globalService: GlobalService) { }
  ngOnInit() {
    this._sidebarToggle();
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
