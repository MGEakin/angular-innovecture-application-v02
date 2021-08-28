import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserRole } from './user-role';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class UserRoleService {

  private userRolesUrl = 'api/userRoles';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET userRoles from the server */
  getUserRoles(userId: number): Observable<UserRole[]> {
    const url = `${this.userRolesUrl}/?userId=${userId}`;
    return this.http.get<UserRole[]>(url)
      .pipe(
        tap(_ => this.log(`fetched userRoles`)),
        catchError(this.handleError<UserRole[]>('getUserRoles', []))
      );
  }

  /** GET userRole by id. Return `undefined` when id not found */
  getUserRoleNo404<Data>(id: number): Observable<UserRole> {
    const url = `${this.userRolesUrl}/?id=${id}`;
    return this.http.get<UserRole[]>(url)
      .pipe(
        map(userRoles => userRoles[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} userRole id=${id}`);
        }),
        catchError(this.handleError<UserRole>(`getUserRole id=${id}`))
      );
  }

  /** GET Role by Userid. Will 404 if id not found */
  getUserRole(userId: number): Observable<UserRole> {
    const url = `${this.userRolesUrl}/${userId}`;
    // const url = `${this.userRolesUrl}/3`;
    return this.http.get<UserRole>(url).pipe(
      tap(_ => this.log(`fetched userRole id=${userId} for url=${url}`)),
      catchError(this.handleError<UserRole>(`getUserRole id=${userId} for url=${url}`))
    );
  }

  /* GET userRoles whose name contains search term */
  searchUserRoles(term: string): Observable<UserRole[]> {
    if (!term.trim()) {
      // if not search term, return empty userRole array.
      return of([]);
    }
    return this.http.get<UserRole[]>(`${this.userRolesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found userRoles matching "${term}"`) :
        this.log(`no userRoles matching "${term}"`)),
      catchError(this.handleError<UserRole[]>('searchUserRoles', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new userRole to the server */
  addUserRole(userRole: UserRole): Observable<UserRole> {
    return this.http.post<UserRole>(this.userRolesUrl, userRole, this.httpOptions).pipe(
      tap((newUserRole: UserRole) => this.log(`added userRole w/ id=${newUserRole.userId}`)),
      catchError(this.handleError<UserRole>('addUserRole'))
    );
  }

  /** DELETE: delete the userRole from the server */
  deleteUserRole(id: number): Observable<UserRole> {
    const url = `${this.userRolesUrl}/${id}`;

    return this.http.delete<UserRole>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted userRole id=${id}`)),
      catchError(this.handleError<UserRole>('deleteUserRole'))
    );
  }

  /** PUT: update the userRole on the server */
  updateUserRole(userRole: UserRole): Observable<any> {
    return this.http.put(this.userRolesUrl, userRole, this.httpOptions).pipe(
      tap(_ => this.log(`updated userRole id=${userRole.userId}`)),
      catchError(this.handleError<any>('updateUserRole'))
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

      // TODO: better job of transforming error for userRole consumption
      this.log(`result: ${result as T} ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserRoleService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`UserRoleService: ${message}`);
  }
}
