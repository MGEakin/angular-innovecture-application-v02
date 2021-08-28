import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Region } from './region';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class RegionService {

  private regionsUrl = 'api/regions';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET regions from the server */
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionsUrl)
      .pipe(
        tap(_ => this.log('fetched regions')),
        catchError(this.handleError<Region[]>('getRegions', []))
      );
  }

  /** GET region by id. Return `undefined` when id not found */
  getRegionNo404<Data>(id: number): Observable<Region> {
    const url = `${this.regionsUrl}/?id=${id}`;
    return this.http.get<Region[]>(url)
      .pipe(
        map(regions => regions[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} region id=${id}`);
        }),
        catchError(this.handleError<Region>(`getRegion id=${id}`))
      );
  }

  /** GET region by id. Will 404 if id not found */
  getRegion(id: number): Observable<Region> {
    const url = `${this.regionsUrl}/${id}`;
    return this.http.get<Region>(url).pipe(
      tap(_ => this.log(`fetched region id=${id} for url=${url}`)),
      catchError(this.handleError<Region>(`getRegion id=${id}`))
    );
  }

  /* GET regions whose name contains search term */
  searchRegions(term: string): Observable<Region[]> {
    if (!term.trim()) {
      // if not search term, return empty region array.
      return of([]);
    }
    return this.http.get<Region[]>(`${this.regionsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found regions matching "${term}"`) :
        this.log(`no regions matching "${term}"`)),
      catchError(this.handleError<Region[]>('searchRegions', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new region to the server */
  addRegion(region: Region): Observable<Region> {
    return this.http.post<Region>(this.regionsUrl, region, this.httpOptions).pipe(
      tap((newRegion: Region) => this.log(`added region w/ id=${newRegion.id}`)),
      catchError(this.handleError<Region>('addRegion'))
    );
  }

  /** DELETE: delete the region from the server */
  deleteRegion(id: number): Observable<Region> {
    const url = `${this.regionsUrl}/${id}`;

    return this.http.delete<Region>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted region id=${id}`)),
      catchError(this.handleError<Region>('deleteRegion'))
    );
  }

  /** PUT: update the region on the server */
  updateRegion(region: Region): Observable<any> {
    return this.http.put(this.regionsUrl, region, this.httpOptions).pipe(
      tap(_ => this.log(`updated region id=${region.id}`)),
      catchError(this.handleError<any>('updateRegion'))
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

      // TODO: better job of transforming error for region consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a RegionService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`RegionService: ${message}`);
  }
}
