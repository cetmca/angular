import { Component, OnInit } from '@angular/core';

import { MonitorComponent } from '../monitor/monitor.component';
import { KeyboardComponent } from '../keyboard/keyboard.component';


@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})



export class ComputerComponent { 
 constructor(public monitor: MonitorComponent,  public keyboard: KeyboardComponent) {}
 public description = 'This Matrix computer test';
  complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors and ${this.keyboard.keyboardNo} keyboard.`;
  }
}


/*
export class ComputerComponent  {
  public monitor: MonitorComponent;
  public keyboard: KeyboardComponent;
   constructor() {
    this.monitor = new MonitorComponent();
    this.keyboard = new KeyboardComponent();
  }

 public description = 'This Matrix computer test';


    complete() {
    return `${this.description} has ` +
      `${this.monitor.monitorNo} monitors,  ${this.keyboard.keyboardNo} keyboard.`;
  }

}
*/

