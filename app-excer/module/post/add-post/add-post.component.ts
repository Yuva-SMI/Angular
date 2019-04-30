import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postservice : PostService, private router : Router) {
    this.addForm = this.formBuilder.group({
      id: [],
      userId: ['', Validators.required],
      // userId: new FormControl(['', Validators.required]),
      title: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  ngOnInit() {

  }

  public onSubmit() {
    if (this.addForm.invalid) {
      alert('not valid');
      return
    }
    this.postservice.addPost(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['post/list']);
      });
  }
}
