import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { studentService } from '../service/service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  form: FormGroup;
  details = [];
  ngOnInit() {
    this.service.getdetails().subscribe(details => {
      this.details = details;
      this.addTextboxes();
    });
  }
  constructor(private formBuilder: FormBuilder, private service: studentService) {
    this.form = this.formBuilder.group({
      details: new FormArray([])
    });

   
  }

  private addTextboxes() {
    this.details.map((o, i) => {
      const control = new FormControl(o.Id); 
      (this.form.controls.details as FormArray).push(control);
    });
  }

 
  submit() {
    const selectedOrderIds = this.form.value.details
      .map((v, i) => {v ? this.details[i].id : null
      console.log("Id: "+this.details[i].id+" Name: "+this.details[i].name+" Email: "+this.details[i].email)})
      .filter(v =>{ v !== null});
    console.log(this.form.controls.details.value);
  //  console.log('Form : '+this.details.values)
    console.log(this.form.value);
  }
}

