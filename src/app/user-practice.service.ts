import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserPractice } from './user-practice';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class UserPracticeService {

  private userPracticesUrl = 'api/userPractices';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Practices User belongs to from the server */
  getUserPractices(userId: number): Observable<UserPractice[]> {
    const url = `${this.userPracticesUrl}/?userId=${userId}`;
    return this.http.get<UserPractice[]>(url)
      .pipe(
        tap(_ => this.log(`fetched userPractices`)),
        catchError(this.handleError<UserPractice[]>('getUserPractices', []))
      );
  }

  /** GET Users which belong to a Practices from the server */
  getPracticeUsers(practiceId: number): Observable<UserPractice[]> {
    const url = `${this.userPracticesUrl}/?practiceId=${practiceId}`;
    return this.http.get<UserPractice[]>(url)
      .pipe(
        tap(_ => this.log(`fetched practiceUsers`)),
        catchError(this.handleError<UserPractice[]>('getPracticeUsers', []))
      );
  }

  /** GET userPractice by id. Return `undefined` when id not found */
  getUserPracticeNo404<Data>(id: number): Observable<UserPractice> {
    const url = `${this.userPracticesUrl}/?id=${id}`;
    return this.http.get<UserPractice[]>(url)
      .pipe(
        map(userPractices => userPractices[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} userPractice id=${id}`);
        }),
        catchError(this.handleError<UserPractice>(`getUserPractice id=${id}`))
      );
  }

  /** GET Practice by Userid. Will 404 if id not found */
  getUserPractice(userId: number): Observable<UserPractice> {
    const url = `${this.userPracticesUrl}/${userId}`;
    // const url = `${this.userPracticesUrl}/3`;
    return this.http.get<UserPractice>(url).pipe(
      tap(_ => this.log(`fetched userPractice id=${userId} for url=${url}`)),
      catchError(this.handleError<UserPractice>(`getUserPractice id=${userId} for url=${url}`))
    );
  }

  /* GET userPractices whose name contains search term */
  searchUserPractices(term: string): Observable<UserPractice[]> {
    if (!term.trim()) {
      // if not search term, return empty userPractice array.
      return of([]);
    }
    return this.http.get<UserPractice[]>(`${this.userPracticesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found userPractices matching "${term}"`) :
        this.log(`no userPractices matching "${term}"`)),
      catchError(this.handleError<UserPractice[]>('searchUserPractices', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new userPractice to the server */
  addUserPractice(userPractice: UserPractice): Observable<UserPractice> {
    return this.http.post<UserPractice>(this.userPracticesUrl, userPractice, this.httpOptions).pipe(
      tap((newUserPractice: UserPractice) => this.log(`added userPractice w/ id=${newUserPractice.userId}`)),
      catchError(this.handleError<UserPractice>('addUserPractice'))
    );
  }

  /** DELETE: delete the userPractice from the server */
  deleteUserPractice(id: number): Observable<UserPractice> {
    const url = `${this.userPracticesUrl}/${id}`;

    return this.http.delete<UserPractice>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted userPractice id=${id}`)),
      catchError(this.handleError<UserPractice>('deleteUserPractice'))
    );
  }

  /** PUT: update the userPractice on the server */
  updateUserPractice(userPractice: UserPractice): Observable<any> {
    return this.http.put(this.userPracticesUrl, userPractice, this.httpOptions).pipe(
      tap(_ => this.log(`updated userPractice id=${userPractice.practiceId}`)),
      catchError(this.handleError<any>('updateUserPractice'))
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

      // TODO: better job of transforming error for userPractice consumption
      this.log(`result: ${result as T} ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserPracticeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserPracticeService: ${message}`);
  }
}
