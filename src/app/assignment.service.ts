import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Assignment } from './assignment';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class AssignmentService {

  private assignmentsUrl = 'api/assignments';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET assignments from the server */
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.assignmentsUrl)
      .pipe(
        tap(_ => this.log('fetched assignments')),
        catchError(this.handleError<Assignment[]>('getAssignments', []))
      );
  }

  /** GET assignment by id. Return `undefined` when id not found */
  getAssignmentNo404<Data>(id: number): Observable<Assignment> {
    const url = `${this.assignmentsUrl}/?id=${id}`;
    return this.http.get<Assignment[]>(url)
      .pipe(
        map(assignments => assignments[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} assignment id=${id}`);
        }),
        catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
      );
  }

  /** GET assignment by id. Will 404 if id not found */
  getAssignment(id: number): Observable<Assignment> {
    const url = `${this.assignmentsUrl}/${id}`;
    return this.http.get<Assignment>(url).pipe(
      tap(_ => this.log(`fetched assignment id=${id} for url=${url}`)),
      catchError(this.handleError<Assignment>(`getAssignment id=${id}`))
    );
  }

  /* GET assignments whose name contains search term */
  searchAssignments(term: string): Observable<Assignment[]> {
    if (!term.trim()) {
      // if not search term, return empty assignment array.
      return of([]);
    }
    return this.http.get<Assignment[]>(`${this.assignmentsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found assignments matching "${term}"`) :
        this.log(`no assignments matching "${term}"`)),
      catchError(this.handleError<Assignment[]>('searchAssignments', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new assignment to the server */
  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.assignmentsUrl, assignment, this.httpOptions).pipe(
      tap((newAssignment: Assignment) => this.log(`added assignment w/ id=${newAssignment.id}`)),
      catchError(this.handleError<Assignment>('addAssignment'))
    );
  }

  /** DELETE: delete the assignment from the server */
  deleteAssignment(id: number): Observable<Assignment> {
    const url = `${this.assignmentsUrl}/${id}`;

    return this.http.delete<Assignment>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted assignment id=${id}`)),
      catchError(this.handleError<Assignment>('deleteAssignment'))
    );
  }

  /** PUT: update the assignment on the server */
  updateAssignment(assignment: Assignment): Observable<any> {
    return this.http.put(this.assignmentsUrl, assignment, this.httpOptions).pipe(
      tap(_ => this.log(`updated assignment id=${assignment.id}`)),
      catchError(this.handleError<any>('updateAssignment'))
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

      // TODO: better job of transforming error for assignment consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AssignmentService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`AssignmentService: ${message}`);
  }
}
