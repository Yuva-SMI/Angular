import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    public userName: String;
public user:String;
    constructor(private http: HttpClient) {
       
    }
    public getData(){
      return  this.http.get('/assets/Mock/user.json');
    }
}