import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './common/pagenotfound/pagenotfound.component';
import { LeadComponent } from './product/crm/components/lead-page/lead/lead.component';
import { AccountComponent } from './product/crm/components/accounts-page/account/account.component';
import { CampaignComponent } from './product/crm/components/campaigns-page/campaign/campaign.component';
import { ContactComponent } from './product/crm/components/contact-page/contact/contact.component';
import { DashboardComponent } from './product/crm/components/dashboard-page/dashboard/dashboard.component';
import { EmailComponent } from './product/crm/components/emails-page/email/email.component';
import { ReportsComponent } from './product/crm/components/report-page/reports/reports.component';
import { CalendarComponent } from './product/crm/components/calendar-page/calendar/calendar.component';
import { TasksComponent } from './product/crm/components/tasks-page/tasks/tasks.component';
import { OpportunitiesComponent } from './product/crm/components/opportunities-page/opportunities/opportunities.component';
import { AddressComponent } from './product/crm/shared/components/address-page/address/address.component';
import { Address1Component } from './product/crm/shared/components/address-page/address1/address1.component';
import { HomeComponent } from './product/crm/components/home-page/home/home.component';
import { AssetComponent } from './product/crm/components/asset-page/asset/asset.component';
import { CaseComponent } from './product/crm/components/case-page/case/case.component';
import { ContractComponent } from './product/crm/components/contracts-page/contract/contract.component';
import { ProductComponent } from './product/crm/components/products-page/product/product.component';

export const ROUTES: Routes = [
  { path: 'opportunities', component: OpportunitiesComponent },
  { path: 'campaigns', component: CampaignComponent },
  { path: 'email', component: EmailComponent },
  { path: 'leads', component: LeadComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'contacts', component: ContactComponent },
  { path: 'dashboards', component: DashboardComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'asset', component: AssetComponent } ,     /*import modules in Product.modules.ts */
  { path: 'case', component: CaseComponent },
  { path: 'contract', component: ContractComponent },
  { path: 'product', component: ProductComponent }

  //  { path:'pagenotfound',component:PageNotFoundComponent}
  // { path:'dashboards',component:DashboardsComponent},
  // { path:'',
  //   redirectTo:'/Dashboards',
  //   pathMatch:'full'},
  // { path:'**',component:PageNotFoundComponent},
];
