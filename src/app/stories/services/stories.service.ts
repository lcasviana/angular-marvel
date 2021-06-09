import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { storiesMock } from '../mocks/stories.mock';
import { Storie } from '../models/stories.model';

@Injectable()
export class StoriesService {
  private readonly _stories: BehaviorSubject<Storie[]> = new BehaviorSubject<Storie[]>([]);
  public readonly stories$: Observable<Storie[]> = this._stories.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getStories()
      .subscribe(({ data }: ApiResponse<Storie>) => this._stories.next(data.results));
  }

  private getStories(): Observable<ApiResponse<Storie>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Storie>>(
        `${environment.marvel.url}/stories?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Storie>>(storiesMock);
  }
}
