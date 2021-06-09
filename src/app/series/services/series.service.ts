import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { seriesMock } from '../mocks/series.mock';
import { Serie } from '../models/series.model';

@Injectable()
export class SeriesService {
  private readonly _series: BehaviorSubject<Serie[]> = new BehaviorSubject<Serie[]>([]);
  public readonly series$: Observable<Serie[]> = this._series.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getSeries()
      .subscribe(({ data }: ApiResponse<Serie>) => this._series.next(data.results));
  }

  private getSeries(): Observable<ApiResponse<Serie>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Serie>>(
        `${environment.marvel.url}/series?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Serie>>(seriesMock);
  }
}
