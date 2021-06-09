import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { creatorsMock } from '../mocks/creators.mock';
import { Creator } from '../models/creators.model';

@Injectable()
export class CreatorsService {
  private readonly _creators: BehaviorSubject<Creator[]> = new BehaviorSubject<Creator[]>([]);
  public readonly creators$: Observable<Creator[]> = this._creators.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getCreators()
      .subscribe(({ data }: ApiResponse<Creator>) => this._creators.next(data.results));
  }

  private getCreators(): Observable<ApiResponse<Creator>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Creator>>(
        `${environment.marvel.url}/creators?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Creator>>(creatorsMock);
  }
}
