import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcFishesChildComponent } from './components/detectchanges/dc-fishes-child/dc-fishes-child.component';
import { DcFishesComponent } from './components/detectchanges/dc-fishes/dc-fishes.component';
import { DcMainComponent } from './components/detectchanges/dc-main/dc-main.component';
import { DcSeafoodsChildComponent } from './components/detectchanges/dc-seafoods-child/dc-seafoods-child.component';
import { DcSeafoodsComponent } from './components/detectchanges/dc-seafoods/dc-seafoods.component';

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatInputModule,
  MatListModule,
  MatFormFieldModule,
];
@NgModule({
  declarations: [
    AppComponent,
    DcMainComponent,
    DcSeafoodsComponent,
    DcFishesComponent,
    DcSeafoodsChildComponent,
    DcFishesChildComponent,
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
