import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { MaterialModule } from '../shared/Material.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        MaterialModule,
        routing,
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ]
})
export class PagesModule { }
