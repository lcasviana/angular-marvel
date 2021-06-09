import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { charactersMock } from '../mocks/characters.mock';
import { Character } from '../models/characters.model';

@Injectable()
export class CharactersService {
  private readonly _characters: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);
  public readonly characters$: Observable<Character[]> = this._characters.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getCharacters()
      .subscribe(({ data }: ApiResponse<Character>) => this._characters.next(data.results));
  }

  private getCharacters(): Observable<ApiResponse<Character>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Character>>(
        `${environment.marvel.url}/characters?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Character>>(charactersMock);
  }
}
