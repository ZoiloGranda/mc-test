import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { UsersListService } from './users-list/users-list.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [UsersListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
