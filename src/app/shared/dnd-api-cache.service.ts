import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DndApiCacheService {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    const cached = sessionStorage.getItem(url);
    if (cached) {
      console.log('cached', url);
      return of(JSON.parse(cached));
    }
    return new Observable<T>(observer => {
      this.http.get<T>(url).subscribe({
        next: data => {
          console.log('fetched', url);
          sessionStorage.setItem(url, JSON.stringify(data));
          observer.next(data);
          observer.complete();
        },
        error: err => observer.error(err)
      });
    });
  }
}
