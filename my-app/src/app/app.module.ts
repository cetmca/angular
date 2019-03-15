import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChildComponent } from './child.component/child.component.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { MonitorComponent } from './monitor/monitor.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ComputerComponent } from './computer/computer.component';




const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'heroes', component: HeroListComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChildComponent,
    CrisisListComponent,
    HeroListComponent,
    PageNotFoundComponent,
    ParentComponent,
    MonitorComponent,
    KeyboardComponent,
    ComputerComponent,
  ],
  imports: [
   HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
   providers: [MonitorComponent,KeyboardComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
