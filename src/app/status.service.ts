import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Status } from './status';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class StatusService {

  private statusesUrl = 'api/statuses';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET statuses from the server */
  getStatuses(): Observable<Status[]> {
    return this.http.get<Status[]>(this.statusesUrl)
      .pipe(
        tap(_ => this.log('fetched statuses')),
        catchError(this.handleError<Status[]>('getStatuses', []))
      );
  }

  /** GET status by id. Return `undefined` when id not found */
  getStatusNo404<Data>(id: number): Observable<Status> {
    const url = `${this.statusesUrl}/?id=${id}`;
    return this.http.get<Status[]>(url)
      .pipe(
        map(statuses => statuses[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} status id=${id}`);
        }),
        catchError(this.handleError<Status>(`getStatus id=${id}`))
      );
  }

  /** GET status by id. Will 404 if id not found */
  getStatus(id: number): Observable<Status> {
    const url = `${this.statusesUrl}/${id}`;
    return this.http.get<Status>(url).pipe(
      tap(_ => this.log(`fetched status id=${id} for url=${url}`)),
      catchError(this.handleError<Status>(`getStatus id=${id}`))
    );
  }

  /* GET statuses whose name contains search term */
  searchStatuses(term: string): Observable<Status[]> {
    if (!term.trim()) {
      // if not search term, return empty status array.
      return of([]);
    }
    return this.http.get<Status[]>(`${this.statusesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found statuses matching "${term}"`) :
        this.log(`no statuses matching "${term}"`)),
      catchError(this.handleError<Status[]>('searchStatuses', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new status to the server */
  addStatus(status: Status): Observable<Status> {
    return this.http.post<Status>(this.statusesUrl, status, this.httpOptions).pipe(
      tap((newStatus: Status) => this.log(`added status w/ id=${newStatus.id}`)),
      catchError(this.handleError<Status>('addStatus'))
    );
  }

  /** DELETE: delete the status from the server */
  deleteStatus(id: number): Observable<Status> {
    const url = `${this.statusesUrl}/${id}`;

    return this.http.delete<Status>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted status id=${id}`)),
      catchError(this.handleError<Status>('deleteStatus'))
    );
  }

  /** PUT: update the status on the server */
  updateStatus(status: Status): Observable<any> {
    return this.http.put(this.statusesUrl, status, this.httpOptions).pipe(
      tap(_ => this.log(`updated status id=${status.id}`)),
      catchError(this.handleError<any>('updateStatus'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for status consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StatusService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`StatusService: ${message}`);
  }
}
