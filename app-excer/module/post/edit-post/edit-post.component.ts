import { Component, OnInit, Inject } from '@angular/core';
import { Ipost } from '../ipost';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';
import { first } from 'rxjs/operators';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  ipost: Ipost;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private postService: PostService,
    public dialogRef: MatDialogRef<EditPostComponent>, @Inject(MAT_DIALOG_DATA) public data: Ipost, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      userId: [this.data.userId],
      id: [this.data.id],
      title: [this.data.title, Validators.required],
      body: [this.data.body, Validators.required]
    });
  }

  close(): void {
    this.dialogRef.close();
  }

  save() {
    this.postService.updatePost(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.dialogRef.close();
          this.openSnackBar();
        },
        error => {
          alert(error);
        });

  }
  openSnackBar() {
    this.snackBar.open(
      'Data updated successfully!!!', '', {
        duration: 3000,
      });

  }
}

