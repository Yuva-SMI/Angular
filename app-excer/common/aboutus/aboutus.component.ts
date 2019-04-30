import { Component, OnInit } from '@angular/core';
import { SobservableService } from 'src/app/service/sobservable.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  public count: number;
  public error: boolean;

  constructor(private sb: SobservableService) { }

  ngOnInit() {
    this.sb.getCount().subscribe(s => this.count = s['count']);
  }
 
  public setValue() {
    if (this.count != 0) {
      this.sb.setCount({ count: --this.count });
    }
    else {
     alert('Current count is zero so pls click on increament first..!');
    }
  }
}
