import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SobservableService {
  private data: BehaviorSubject<Object> = new BehaviorSubject({ count: 0 });

  constructor() { }

  public setCount(d: Object) {
    this.data.next(d);
  }

  public getCount(): Observable<any> {
    return this.data.asObservable();
  }

}
