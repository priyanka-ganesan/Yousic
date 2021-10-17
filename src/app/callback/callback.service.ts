import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CallbackService {
  baseUrl = 'http://localhost:3000/api'
  constructor(private http: HttpClient) { }

  login(code: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth`, { code }).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.error(e)
    alert('Error: ' + e)
    return EMPTY;
  }
}
