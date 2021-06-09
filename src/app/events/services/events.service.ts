import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/response.model';
import { environment } from 'src/environments/environment';
import { eventsMock } from '../mocks/events.mock';
import { Event } from '../models/events.model';

@Injectable()
export class EventsService {
  private readonly _events: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  public readonly events$: Observable<Event[]> = this._events.asObservable();

  constructor(private httpClient: HttpClient) {
    this.getEvents()
      .subscribe(({ data }: ApiResponse<Event>) => this._events.next(data.results));
  }

  private getEvents(): Observable<ApiResponse<Event>> {
    return environment.production
      ? this.httpClient.get<ApiResponse<Event>>(
        `${environment.marvel.url}/events?ts=${environment.marvel.salt}&apikey=${environment.marvel.publicKey}&hash=${environment.marvel.hash}`)
      : of<ApiResponse<Event>>(eventsMock);
  }
}
