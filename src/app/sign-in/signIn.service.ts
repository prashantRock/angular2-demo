import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class SignInService {

  constructor(private http: HttpClient) {
  }

  signInUser(food) {
    let body = JSON.stringify(food);
    return this.http.post('/api/food/', body, httpOptions);
  }
}
