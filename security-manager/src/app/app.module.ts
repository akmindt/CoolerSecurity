import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user/user-service';
import {GroupService} from './services/group/group-service';
import { AppComponent } from './app.component';
import { Sidebar } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatExpansionModule, MatTabsModule, MatSidenavModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, Sidebar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
