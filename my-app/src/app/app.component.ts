import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "./child.component/child.component.component";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

//
//https://angularfirebase.com/lessons/sharing-data-between-angular-components-four-methods/
//

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    Message: {{ message }}
    <app-child></app-child>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit ,AfterViewInit   {
  title = 'My First Angular App -----';
  myVar = ' variable';
  restItems: any;
  restItemsUrl = 'http://demo7522704.mockable.io/';

  @ViewChild(ChildComponent) child;

  constructor(private http: HttpClient) {}

  message:string;

  ngAfterViewInit() {
    this.message = this.child.message
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

