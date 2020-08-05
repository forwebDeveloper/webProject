import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    IonicModule,
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
