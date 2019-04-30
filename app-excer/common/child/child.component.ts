import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() namess: String;
  @Output() cchild = new EventEmitter();
  constructor() { }
onChange(value){
  this.cchild.emit(value);
}
  ngOnInit() {
  }

}
