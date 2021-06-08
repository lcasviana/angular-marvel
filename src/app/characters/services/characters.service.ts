import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MarvelResponse } from 'src/app/shared/models/marvel-response.model';
import { environment } from 'src/environments/environment';
import { charactersGetMock } from '../mocks/characters.mock';
import { Character } from '../models/characters.model';

@Injectable()
export class CharactersService {
  private readonly _characters: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);
  public readonly characters$: Observable<Character[]> = this._characters.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getCharacters()
      .subscribe(({ data }: MarvelResponse<Character>) => this._characters.next(data.results));
  }

  private getCharacters(): Observable<MarvelResponse<Character>> {
    return environment.production
      ? this.httpClient.get<MarvelResponse<Character>>(`${environment.marvel.url}/characters`)
      : of<MarvelResponse<Character>>(charactersGetMock);
  }
}
