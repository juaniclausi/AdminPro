import { NgModule } from "@angular/core";

import { SharedModule } from '../shared/shared.module';
import { PagesRoutesModule } from './pages.routes';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

@NgModule({
  
  declarations: [
    PagesComponent,
    DashboardComponent, 
    ProgressComponent, 
    Graficas1Component
  ],
  exports: [
    PagesComponent,
    DashboardComponent, 
    ProgressComponent, 
    Graficas1Component
  ],
  imports: [
    SharedModule,
    PagesRoutesModule
  ]

})

export class PagesModule {}