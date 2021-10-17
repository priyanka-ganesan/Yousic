import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getUserDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/${id}`).pipe(
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
