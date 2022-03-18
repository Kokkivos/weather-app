import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProvinceItemListComponent } from './components/province-list/province-item-list/province-item-list.component';
import { ProvinceComponent } from './components/province/province.component';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { ListComponent } from './components/list/list.component';
import { ReplacePipe } from './pipes/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceItemListComponent,
    ProvinceComponent,
    ProvinceListComponent,
    ListComponent,
    ReplacePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
