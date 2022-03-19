import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ProvinceComponent } from './components/province/province.component';
import { ProvinceListComponent } from './components/province-list/province-list.component';
import { ListComponent } from './components/list/list.component';
import { ReplacePipe } from './pipes/replace.pipe';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinceComponent,
    ProvinceListComponent,
    ListComponent,
    ErrorComponent,
    ReplacePipe,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
