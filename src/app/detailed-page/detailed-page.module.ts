import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailedPageComponent } from './detailed-page/detailed-page.component';
import { DetailedPageRoutingModule } from './detailed-page-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailedPageComponent,
  ],
  imports: [
    CommonModule,
    DetailedPageRoutingModule,
    FormsModule
  ]
})
export class DetailedPageModule { }
