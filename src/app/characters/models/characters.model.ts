interface Thumbnail {
  path: string;
  extension: string;
}

interface Item {
  resourceURI: string;
  name: string;
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Item2 {
  resourceURI: string;
  name: string;
}

interface Series {
  available: number;
  collectionURI: string;
  items: Item2[];
  returned: number;
}

interface Item3 {
  resourceURI: string;
  name: string;
  type: string;
}

interface Stories {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

interface Item4 {
  resourceURI: string;
  name: string;
}

interface Events {
  available: number;
  collectionURI: string;
  items: Item4[];
  returned: number;
}

interface Url {
  type: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Series;
  stories: Stories;
  events: Events;
  urls: Url[];
}
