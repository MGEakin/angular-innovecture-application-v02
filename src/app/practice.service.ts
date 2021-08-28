import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Practice } from './practice';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class PracticeService {

  private practicesUrl = 'api/practices';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET practices from the server */
  getPractices(): Observable<Practice[]> {
    return this.http.get<Practice[]>(this.practicesUrl)
      .pipe(
        tap(_ => this.log('fetched practices')),
        catchError(this.handleError<Practice[]>('getPractices', []))
      );
  }

  /** GET practice by id. Return `undefined` when id not found */
  getPracticeNo404<Data>(id: number): Observable<Practice> {
    const url = `${this.practicesUrl}/?id=${id}`;
    return this.http.get<Practice[]>(url)
      .pipe(
        map(practices => practices[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} practice id=${id}`);
        }),
        catchError(this.handleError<Practice>(`getPractice id=${id}`))
      );
  }

  /** GET practice by id. Will 404 if id not found */
  getPractice(id: number): Observable<Practice> {
    const url = `${this.practicesUrl}/${id}`;
    return this.http.get<Practice>(url).pipe(
      tap(_ => this.log(`fetched practice id=${id}`)),
      catchError(this.handleError<Practice>(`getPractice id=${id}`))
    );
  }

  /* GET practices whose name contains search term */
  searchPractices(term: string): Observable<Practice[]> {
    if (!term.trim()) {
      // if not search term, return empty practice array.
      return of([]);
    }
    return this.http.get<Practice[]>(`${this.practicesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found practices matching "${term}"`) :
        this.log(`no practices matching "${term}"`)),
      catchError(this.handleError<Practice[]>('searchPractices', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new practice to the server */
  addPractice(practice: Practice): Observable<Practice> {
    return this.http.post<Practice>(this.practicesUrl, practice, this.httpOptions).pipe(
      tap((newPractice: Practice) => this.log(`added practice w/ id=${newPractice.id}`)),
      catchError(this.handleError<Practice>('addPractice'))
    );
  }

  /** DELETE: delete the practice from the server */
  deletePractice(id: number): Observable<Practice> {
    const url = `${this.practicesUrl}/${id}`;

    return this.http.delete<Practice>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted practice id=${id}`)),
      catchError(this.handleError<Practice>('deletePractice'))
    );
  }

  /** PUT: update the practice on the server */
  updatePractice(practice: Practice): Observable<any> {
    return this.http.put(this.practicesUrl, practice, this.httpOptions).pipe(
      tap(_ => this.log(`updated practice id=${practice.id}`)),
      catchError(this.handleError<any>('updatePractice'))
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

      // TODO: better job of transforming error for practice consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a PracticeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PracticeService: ${message}`);
  }
}
