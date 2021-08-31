import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { ClientRegion } from './client-region';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ClientRegionService {

  private clientRegionsUrl = 'api/clientRegions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Regions which belong to a Clients from the server */
  getClientRegions(clientId: number): Observable<ClientRegion[]> {
    const url = `${this.clientRegionsUrl}/?clientId=${clientId}`;
    return this.http.get<ClientRegion[]>(url)
      .pipe(
        tap(_ => this.log(`fetched clientRegions`)),
        catchError(this.handleError<ClientRegion[]>(`getClientRegions with url=${url}`, []))
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

      // TODO: better job of transforming error for ClientRegion consumption
      this.log(`result: ${result as T} ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a ClientRegionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ClientRegionService: ${message}`);
  }
}
