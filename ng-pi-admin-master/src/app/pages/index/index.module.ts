import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
//import { MaterialModule } from '../../shared/Material.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        //MaterialModule,
        routing
    ],
    declarations: [
        IndexComponent
    ]
})
export class IndexModule { }
