import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './views/login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./modules/material/material.module";
import { BasicLayout } from "./components/layouts/basic/layout/layout.component"
import { NavigationComponent } from "./components/layouts/basic/navigation/navigation.component"
import { TopnavbarComponent } from "./components/layouts/basic/topnavbar/topnavbar.component"
import { BlankLayout } from "./components/layouts/blank/blank.component";
import { OverviewComponent } from './views/overview/overview.component'

@NgModule({
  declarations: [
    AppComponent,

    // Layouts
    BlankLayout,
    BasicLayout,
    NavigationComponent,
    TopnavbarComponent,

    // Views
    OverviewComponent,
    LoginComponent,

  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
