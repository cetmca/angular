import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "./child.component/child.component.component";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ComputerComponent } from './computer/computer.component';

import { MonitorComponent } from './monitor/monitor.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
//
//https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
//
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit ,AfterViewInit   {
  title = 'My First Angular App -----';
  myVar = ' variable';
  restItems: any;
  restItemsUrl = 'http://demo7522704.mockable.io/';

 public computer: ComputerComponent;



  @ViewChild(ChildComponent) child;
  constructor(private http: HttpClient) {
  this.computer = new ComputerComponent(new MonitorComponent(), new KeyboardComponent());
  }

  

  makeComputer(){
  console.log("helloo in Make Computer");
    return this.computer.complete();
  }



  message:string;
  ngAfterViewInit() {
    //this.message = this.child.message;
  }

  ngOnInit() {
    this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this.restItemsServiceGetRestItems()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(restItems);
        }
      )
  }

  // Rest Items Service: Read all REST Items
  restItemsServiceGetRestItems() {
    return this.http
      .get<any[]>(this.restItemsUrl)
      .pipe(map(data => data));
  }
}

