import { Component, OnInit } from '@angular/core';
import { PartialObserver } from 'rxjs';
import { SobservableService } from 'src/app/service/sobservable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public count: number;

  ngOnInit() {
    this.sb.getCount().subscribe(s => this.count = s['count']);
  }

  constructor(private sb: SobservableService) { }

  public setValue() {
    this.sb.setCount({ count: ++this.count });
  }
}
