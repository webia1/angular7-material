import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AddressService {
  private api = 'http://api.zippopotam.us/de/';
  constructor(private http: HttpClient) {}

  checkPlzExists(value: number): Observable<any> {
    return this.http.get(this.api + value);
  }
}
