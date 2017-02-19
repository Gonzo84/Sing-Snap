import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './folder/home-view/home-view.component';
import { SingViewComponent } from './folder/sing-view/sing-view.component';
import { LoginComponent } from './folder/login/login.component';
import { SignUpComponent } from './folder/sign-up/sign-up.component';
import { FeaturesComponent } from './folder/features/features.component';
import { AboutUsComponent } from './folder/about-us/about-us.component';
import { MoodBoardComponent } from './folder/mood-board/mood-board.component';
import { SearchResultsComponent } from './folder/search-results/search-results.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

import{routing} from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    SingViewComponent,
    LoginComponent,
    SignUpComponent,
    FeaturesComponent,
    AboutUsComponent,
    MoodBoardComponent,
    SearchResultsComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
