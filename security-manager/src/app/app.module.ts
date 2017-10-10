import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {UserService} from './services/user/user-service';
import {GroupService} from './services/group/group-service';
import { AppComponent } from './app.component';
import { Sidebar } from './app.component';
import { Search } from './components/search/search';
import { TabHeaderComponent } from './components/tab-header/tab-header';
import { UserClusterComponent } from './components/user-cluster/user-cluster.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,
  MatExpansionModule, MatTabsModule, MatSidenavModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    TabHeaderComponent,
    UserClusterComponent,
    Search
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
    MatSidenavModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
