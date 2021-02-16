import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxComponent } from './tax/tax.component';
import {ProformaInvoiceComponent} from './proforma-invoice/proforma-invoice.component';
import { SettingComponent } from './setting/setting.component';
import { ReportsComponent } from './reports/reports.component';
import { DashComponent } from './dash/dash.component'
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  {
    path:'dashboard',
    component:DashComponent
  },
  {
    path: 'tax',
    component:TaxComponent
  },
  {
    path:'proforma-invoice',
    component:ProformaInvoiceComponent
  },
  {
   path:'setting',
   component:SettingComponent 
  },{
    path:'reports',
    component:ReportsComponent
  },{
    path:'currency',
    component:CurrencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
