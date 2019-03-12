import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChildComponent } from './child.component/child.component.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChildComponent

  ],
  imports: [
   HttpClientModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
