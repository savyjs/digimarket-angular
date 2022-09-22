import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  public getProduct(id: number): Observable<any> {
    return this.http.get(environment.apiUrl + '/products/' + id)
  }
}