import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { Ng2TableModule } from "ng2-table/ng2-table";
import { PaginationModule } from "ng2-bootstrap/ng2-bootstrap";

import { LeadComponent } from "./crm/components/lead-page/lead/lead.component";
import { AccountComponent } from "./crm/components/accounts-page/account/account.component";
import { CampaignComponent } from "./crm/components/campaigns-page/campaign/campaign.component";
import { ContactComponent } from "./crm/components/contact-page/contact/contact.component";
import { DashboardComponent } from "./crm/components/dashboard-page/dashboard/dashboard.component";
import { EmailComponent } from "./crm/components/emails-page/email/email.component";
import { ReportsComponent } from "./crm/components/report-page/reports/reports.component";
import { CalendarComponent } from "./crm/components/calendar-page/calendar/calendar.component";
import { TasksComponent } from "./crm/components/tasks-page/tasks/tasks.component";
import { OpportunitiesComponent } from "./crm/components/opportunities-page/opportunities/opportunities.component";
import { AddressComponent } from "./crm/shared/components/address-page/address/address.component";
import { Address1Component } from "./crm/shared/components/address-page/address1/address1.component";
import { HomeComponent } from "./crm/components/home-page/home/home.component";
import { AssetComponent } from "./crm/components/asset-page/asset/asset.component";
import { CaseComponent } from "./crm/components/case-page/case/case.component";
import { ContractComponent } from "./crm/components/contracts-page/contract/contract.component";
import { ProductComponent } from "./crm/components/products-page/product/product.component";
import { PageNotFoundComponent } from "../common/pagenotfound/pagenotfound.component";
import { LogcallComponent } from "./crm/shared/components/activity-page/logcall/logcall.component";
import { NewtaskComponent } from "./crm/shared/components/activity-page/newtask/newtask.component";
import { PageNotFoundComponentclsComponent } from "../page-not-found-componentcls/page-not-found-componentcls.component";
import { Ng2GoogleChartsModule } from "ng2-google-charts/google-charts.module";

@NgModule({
  declarations: [
    OpportunitiesComponent,
    CampaignComponent,
    EmailComponent,
    LeadComponent,
    TasksComponent,
    AccountComponent,
    ContactComponent,
    DashboardComponent,
    ReportsComponent,
    CalendarComponent,
    AddressComponent,
    Address1Component,
    HomeComponent,
    AssetComponent,
    CaseComponent,
    ContractComponent,
    ProductComponent,
    PageNotFoundComponent,
    LogcallComponent,
    NewtaskComponent,
    PageNotFoundComponentclsComponent
  ],
  imports: [
    NgbModule.forRoot(),
    FormsModule,
    PaginationModule.forRoot(),
    Ng2GoogleChartsModule,
    Ng2TableModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule {}
