import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostService } from '../post.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { IClient } from './iclient';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public queryField: FormControl = new FormControl();
  public results: object[];
  public search: string;
  constructor(private postservice: PostService) { }

  ngOnInit() {
    this.queryField.valueChanges.pipe(debounceTime(400),
      distinctUntilChanged(),
      switchMap((queryField) => this.postservice.getData(this.queryField.value)))

      .subscribe(result => {
        this.results = result.filter(t => t.clientName.toLocaleLowerCase().startsWith(this.queryField.value))
      });

  }

}
