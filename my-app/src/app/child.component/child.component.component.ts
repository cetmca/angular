import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.component.html',
  styleUrls: ['./child.component.component.css']
})

export class ChildComponent implements OnInit {
message = 'Hola Mundo!';

  constructor() { }

  ngOnInit() {
  }

}
