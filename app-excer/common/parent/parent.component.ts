import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userservice';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public cchild: String;
  constructor(public userService : UserService) {
    
   }

  ngOnInit() {
  }

}
