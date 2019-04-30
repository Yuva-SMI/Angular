import { Component, OnInit } from '@angular/core';
import { SobservableService } from 'src/app/service/sobservable.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public count : number;

  constructor(private sb : SobservableService) { }

  ngOnInit() {
    this.sb.getCount().subscribe(s=>this.count = s['count']);
  }
  
  public setValue(){
    this.sb.setCount({ count: ++this.count });
  }

}
