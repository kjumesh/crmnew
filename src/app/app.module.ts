import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.route';

// import { PageNotFoundComponent } from './common/pagenotfound/pagenotfound.component';

import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES), ProductModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
