import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class studentService {

    constructor(public http: HttpClient) { }
    
    getPostDetatils(): any {
        return this.http.get('/assets/mock/Details.json');
    }

}