import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdInputModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule
  ],
  declarations: [],
  exports: [
    FlexLayoutModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
  ]
})
export class MaterialModule { }
