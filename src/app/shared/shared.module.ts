import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  exports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
})
export class SharedModule { }