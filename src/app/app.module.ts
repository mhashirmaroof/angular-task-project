import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThresholdsComponent } from './thresholds/thresholds.component';
import { AddCatagoryComponent } from './thresholds/add-catagory/add-catagory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainThresholdComponent } from './thresholds/main-threshold/main-threshold.component';
import { SubThresholdComponent } from './thresholds/sub-threshold/sub-threshold.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThresholdsComponent,
    AddCatagoryComponent,
    MainThresholdComponent,
    SubThresholdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
