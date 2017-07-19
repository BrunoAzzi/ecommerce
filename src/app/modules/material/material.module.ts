import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdListModule, MdMenuModule, MdSidenavModule,
  MdToolbarModule,
} from "@angular/material"
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule
  ]
})
export class MaterialModule { }
