import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from './client';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class ClientService {

  private clientsUrl = 'api/clients';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET clients from the server */
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl)
      .pipe(
        tap(_ => this.log('fetched clients')),
        catchError(this.handleError<Client[]>('getClients', []))
      );
  }

  /** GET client by id. Return `undefined` when id not found */
  getClientNo404<Data>(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/?id=${id}`;
    return this.http.get<Client[]>(url)
      .pipe(
        map(clients => clients[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} client id=${id}`);
        }),
        catchError(this.handleError<Client>(`getClient id=${id}`))
      );
  }

  /** GET client by id. Will 404 if id not found */
  getClient(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url).pipe(
      tap(_ => this.log(`fetched client id=${id} for url=${url}`)),
      catchError(this.handleError<Client>(`getClient id=${id}`))
    );
  }

  /* GET clients whose name contains search term */
  searchClients(term: string): Observable<Client[]> {
    if (!term.trim()) {
      // if not search term, return empty client array.
      return of([]);
    }
    return this.http.get<Client[]>(`${this.clientsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found clients matching "${term}"`) :
        this.log(`no clients matching "${term}"`)),
      catchError(this.handleError<Client[]>('searchClients', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new client to the server */
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, this.httpOptions).pipe(
      tap((newClient: Client) => this.log(`added client w/ id=${newClient.id}`)),
      catchError(this.handleError<Client>('addClient'))
    );
  }

  /** DELETE: delete the client from the server */
  deleteClient(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;

    return this.http.delete<Client>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted client id=${id}`)),
      catchError(this.handleError<Client>('deleteClient'))
    );
  }

  /** PUT: update the client on the server */
  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, this.httpOptions).pipe(
      tap(_ => this.log(`updated client id=${client.id}`)),
      catchError(this.handleError<any>('updateClient'))
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

      // TODO: better job of transforming error for client consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ClientService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ClientService: ${message}`);
  }
}
