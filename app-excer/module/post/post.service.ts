import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Ipost } from './ipost';
import 'rxjs/operators/map';
import { map } from 'rxjs/operators/map';
import { IClient } from './search/iclient';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  public baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  public file: string = 'http://localhost:4200/assets/Mock/client.json';
  observable: Observable<IClient[]>
 

  getPost(): Observable<any> {
    return this.http.get(this.baseUrl + 'posts');
  }

  getPostById(id: number): Observable<any> {
    return this.http.get(this.baseUrl +'posts/'+ id);
  }

  addPost(Post: Ipost): Observable<any> {
    return this.http.put(this.baseUrl + 'posts', Post);
  }

  updatePost(Post: Ipost): Observable<any> {
    return this.http.post(this.baseUrl + 'posts', Post);
  }

  deletePost(id: Number): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.baseUrl + 'posts');
  }
  /*   search(queryString: string) {
      let _URL = this.baseUrl + queryString;
      return this.http.get(this.file);
    } */
  getData( data:String): Observable<IClient[]> {
     this.observable = this.http.get<IClient[]>(this.file);
     return this.observable;
  }
}
