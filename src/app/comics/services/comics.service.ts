import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { comicsMock } from '../mocks/comics.mock';
import { Comic } from '../models/comics.model';

@Injectable()
export class ComicsService {
  private readonly _comics: BehaviorSubject<Comic[]> = new BehaviorSubject<Comic[]>([]);
  public readonly comics$: Observable<Comic[]> = this._comics.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getComics()
      .subscribe(({ data }: ApiResponse<Comic>) => this._comics.next(data.results));
  }

  private getComics(): Observable<ApiResponse<Comic>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Comic>>(
        `${environment.marvel.url}/comics?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Comic>>(comicsMock);
  }
}