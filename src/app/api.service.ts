import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(endPoint): Observable<any> {
    return this.http.get(environment.api  + endPoint,this.jwt()).pipe(map(res => res));
  }

  public getMemberId(endPoint): Observable<any> {
    return this.http.get(environment.api  + endPoint,this.jwt()).pipe(map(res => res));
  }

  private jwt() {
    // Hardcoded for testing purpose only
    var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYwNTg1ODEyNX0.4ajAFBVFV6796GnQnNzbY_hIiD7FXli8s-P6rKJXmac'
    let headers = {
        headers: new HttpHeaders(
            {
                'access-token': token
            })
    }
    return headers;
}
}