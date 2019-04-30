import { Component, OnInit } from '@angular/core';
import { IDetails } from './interface/idetails';
import { studentService } from './service/service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class studentComponent implements OnInit {

  public data: any[] = [];



  constructor(public studentsService: studentService) { }



  public save(data): any {
    console.log(data);
  }


  ngOnInit(): void {
    this.studentsService.getPostDetatils().subscribe((rest: any[]) => {
      this.data = rest;
    })
  }
}
