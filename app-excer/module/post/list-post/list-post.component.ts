import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { PostService } from '../post.service'
import { Ipost } from '../ipost';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditPostComponent } from '../edit-post/edit-post.component';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  public iposts: Ipost[];
  public displayedColumns: string[] = ['userId', 'id', 'title', 'body', 'buttons'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource;
  public loader: boolean;

  public clients: Observable<any[]>;
  private searchTerms = new Subject<string>();
  public ClientName = '';
  public flag: boolean = true;

  constructor(private postService: PostService, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.loader = true;
    this.postService.getPost()
      .subscribe((data) => {
        this.dataSource = new MatTableDataSource<Ipost[]>(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.loader = false;
      });
  }

  public deletePost(ipost: Ipost) {
    this.postService.deletePost(ipost.userId)
      .subscribe(data => {
        this.iposts = data.filter(u => u.id !== ipost.id)
        this.dataSource = this.iposts;
      });
  }

  public addPost(): void {
    this.router.navigate(['post/addpost']);
  };

  public openDialog(iposts: Ipost): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: { userId: iposts.userId, id: iposts.id, title: iposts.title, body: iposts.body }
    }).afterClosed().subscribe()
  }

  public searchClient(term: string): void {
    this.flag = true;
    this.searchTerms.next(term);
  }
  
  public onselectClient(ClientObj) {
    if (ClientObj.ClientId != 0) {
      this.ClientName = ClientObj.ClientName;
      this.flag = false;
    }
    else {
      return false;
    }
  }

}
