import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { PostRoutingModule } from './post-routing.module';
import { ListPostComponent } from './list-post/list-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatSortModule, MatRippleModule, MatFormFieldModule, MatDialogModule, MatInputModule, MatTooltipModule, MatSnackBarModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material';

import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [ListPostComponent, AddPostComponent, EditPostComponent, SearchComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class PostModule { }
