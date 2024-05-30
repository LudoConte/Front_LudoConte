import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GreetingComponent } from './greeting/greeting.component';
import { PromptComponent } from './prompt/prompt.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GreetingComponent,
    PromptComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
