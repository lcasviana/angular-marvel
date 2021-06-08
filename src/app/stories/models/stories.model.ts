interface Item {
  resourceURI: string;
  name: string;
  role: string;
}

interface Creators {
  available: number;
  collectionURI: string;
  items: Item[];
  returned: number;
}

interface Characters {
  available: number;
  collectionURI: string;
  items: any[];
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
}

interface Comics {
  available: number;
  collectionURI: string;
  items: Item3[];
  returned: number;
}

interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

interface OriginalIssue {
  resourceURI: string;
  name: string;
}

export interface Storie {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date | string;
  thumbnail?: any;
  creators: Creators;
  characters: Characters;
  series: Series;
  comics: Comics;
  events: Events;
  originalIssue: OriginalIssue;
}
