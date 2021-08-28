import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Opening } from './opening';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class OpeningService {

  private openingsUrl = 'api/openings';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET openings from the server */
  getOpenings(): Observable<Opening[]> {
    return this.http.get<Opening[]>(this.openingsUrl)
      .pipe(
        tap(_ => this.log('fetched openings')),
        catchError(this.handleError<Opening[]>('getOpenings', []))
      );
  }

  /** GET opening by id. Return `undefined` when id not found */
  getOpeningNo404<Data>(id: number): Observable<Opening> {
    const url = `${this.openingsUrl}/?id=${id}`;
    return this.http.get<Opening[]>(url)
      .pipe(
        map(openings => openings[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} opening id=${id}`);
        }),
        catchError(this.handleError<Opening>(`getOpening id=${id}`))
      );
  }

  /** GET opening by id. Will 404 if id not found */
  getOpening(id: number): Observable<Opening> {
    const url = `${this.openingsUrl}/${id}`;
    return this.http.get<Opening>(url).pipe(
      tap(_ => this.log(`fetched opening id=${id} for url=${url}`)),
      catchError(this.handleError<Opening>(`getOpening id=${id}`))
    );
  }

  /* GET openings whose name contains search term */
  searchOpenings(term: string): Observable<Opening[]> {
    if (!term.trim()) {
      // if not search term, return empty opening array.
      return of([]);
    }
    return this.http.get<Opening[]>(`${this.openingsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found openings matching "${term}"`) :
        this.log(`no openings matching "${term}"`)),
      catchError(this.handleError<Opening[]>('searchOpenings', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new opening to the server */
  addOpening(opening: Opening): Observable<Opening> {
    return this.http.post<Opening>(this.openingsUrl, opening, this.httpOptions).pipe(
      tap((newOpening: Opening) => this.log(`added opening w/ id=${newOpening.id}`)),
      catchError(this.handleError<Opening>('addOpening'))
    );
  }

  /** DELETE: delete the opening from the server */
  deleteOpening(id: number): Observable<Opening> {
    const url = `${this.openingsUrl}/${id}`;

    return this.http.delete<Opening>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted opening id=${id}`)),
      catchError(this.handleError<Opening>('deleteOpening'))
    );
  }

  /** PUT: update the opening on the server */
  updateOpening(opening: Opening): Observable<any> {
    return this.http.put(this.openingsUrl, opening, this.httpOptions).pipe(
      tap(_ => this.log(`updated opening id=${opening.id}`)),
      catchError(this.handleError<any>('updateOpening'))
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

      // TODO: better job of transforming error for opening consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a OpeningService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OpeningService: ${message}`);
  }
}
