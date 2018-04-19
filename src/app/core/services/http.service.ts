import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    httpOptions: {};

    constructor(private http: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    }

    getData(url) {
        return this.http.get(url, this.httpOptions);
    }

    postData(url, data) {
        return this.http.post(url, data, this.httpOptions);
    }
}
