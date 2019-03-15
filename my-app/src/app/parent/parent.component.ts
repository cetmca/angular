import { Component, OnInit, Input } from '@angular/core';
import {ViewChild,Directive,ElementRef} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {
	@Input() customTitle: string;
	@Input() testVar: string;
	
	@ViewChild('firstNameInput') nameInputRef: ElementRef;
	parentMessage = "this.nameInputRef.nativeElement.value";

  constructor() {
  console.log("Constructor Called");
  console.log('myCustomComponent -- initialized');
   console.log(this.testVar);
  }

  ngOnInit() {
 // console.log(this.customTitle);
  }

  ngOnChanges()
  {
  console.log('myCustomComponent -- ngOnChanges');
  console.log(this.customTitle);
  }

show(lastName: HTMLInputElement){
    console.log(lastName.value);
   
}


}
