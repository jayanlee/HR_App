import { Component, OnInit,  AfterViewChecked, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, ViewChildren,QueryList } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';
import { TodolistComponent } from '../../../app/shared/components/todolist/todolist.component';
import { ProfileComponent } from '../../../app/shared/components/profile/profile.component';
import { WeatherComponent } from '../../../app/shared/components/weather/weather.component';
import { GlobalService } from '../../shared/services/global.service';
import {CdkDragDrop, moveItemInArray,copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit, AfterViewChecked {
  showloading: boolean = false;
  @ViewChildren('messagecontainer', { read: ViewContainerRef }) entry: QueryList<ViewContainerRef>;
  // @ViewChildren('messagecontainer') displayFlag;
  // prevContainerData;
  // prevContainerIndex;
  obj={
    "todolist":TodolistComponent,
    "profile":ProfileComponent,
    "weather":WeatherComponent
  }
  // copyFlag: boolean = false;
  constructor(private resolver: ComponentFactoryResolver, private _chartsService: ChartsService, private _globalService: GlobalService) { }
  public AnimationBarOption;
  // onItemDrop(e: any) {
  //   // Get the dropped data here
  //   console.log(e);
  // }
  done = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(this.done);
    } 
    else {
      // console.log("before copy",this.done);
      // console.log("before copy",this.entry.toArray().length);
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // this.copyFlag = true;
    //   console.log("after copy",this.done);
    // if(this.entry)
    // console.log("after copy",this.entry.toArray().length);
      // this.prevContainerData = event.previousContainer.data;
      // this.prevContainerIndex = event.previousIndex;
      setTimeout(()=>{    //<<<---    using ()=> syntax
        this._globalService.createComponent(this.resolver,this.obj[event.previousContainer.data[event.previousIndex].toLowerCase()],this.entry);
      }, 500);
      // this._globalService.createComponent(this.resolver,this.obj[event.previousContainer.data[event.previousIndex].toLowerCase()],this.entry);
    }
  }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
  // ngAfterViewChecked(){
  //   if(this.done.length>0 && this.copyFlag){
  //     console.log("after copy in view init",this.done);
  //     if(this.entry)
  //     console.log("after copy in view init",this.entry.toArray().length);
  //     this._globalService.createComponent(this.resolver,this.obj[this.prevContainerData[this.prevContainerIndex].toLowerCase()],this.entry);
  //     this.copyFlag = false;
  //   }
    
    // this.displayFlag.toArray().forEach(item => {
    //   if(item.nativeElement.nextSibling==null){
    //     item.nativeElement.parentElement.style.display = "none";
    //   }
    // }); Failed in a successful way
  //}
}
