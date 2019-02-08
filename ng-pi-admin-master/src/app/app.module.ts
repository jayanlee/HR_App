import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';
import { LayoutModule } from './shared/layout.module';
import { initializer } from './app-init';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    LayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    KeycloakAngularModule,
    routing
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
