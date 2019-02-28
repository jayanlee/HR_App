import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from '../../shared/material.module';
import { TodolistComponent } from '../../shared/components/todolist/todolist.component';
import { ProfileComponent } from '../../shared/components/profile/profile.component';
import { WeatherComponent } from '../../shared/components/weather/weather.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        MaterialModule,
        routing
    ],
    declarations: [
        IndexComponent
    ],
    entryComponents: [TodolistComponent,ProfileComponent,WeatherComponent]
    
})
export class IndexModule { }
