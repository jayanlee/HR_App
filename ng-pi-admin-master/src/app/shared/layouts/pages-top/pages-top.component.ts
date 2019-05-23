import { Component, Input,OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, CdkDragStart} from '@angular/cdk/drag-drop';
import { GlobalService } from '../../services/global.service';
import { KeycloakProfile } from 'keycloak-js';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent implements OnInit{
  avatarImgSrc: string = 'assets/images/jayan.jpg';
  userDetails: object;
  configToggle: boolean = false;
  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };
  todo = [];
  todoContent = [
    'todolist',
    'profile',
    'weather'
  ];
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  dragStart(event:CdkDragStart){
    const tempTodo = event.source.dropContainer.data.slice();
    const indexValue = tempTodo.indexOf(event.source.element.nativeElement.innerText);
    const movableValue = tempTodo.splice(indexValue,1).join();
    // this.todo = tempTodo.slice();
    event.source.dropContainer.data.splice(indexValue, 0, movableValue);
    //this.todo.splice(0, 0, "todolist");
  }
  constructor(private _globalService: GlobalService) {   }
  async ngOnInit() {
    this.todo = this.todoContent.slice();
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'setStorage') {
        this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
      }
    }, error => {
      console.log('Storage setting failed: ' + error);
    });
    // this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    // console.log(this.userDetails);
  }
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
