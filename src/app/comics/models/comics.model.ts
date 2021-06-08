interface TextObject {
  type: string;
  language: string;
  text: string;
}

interface Url {
  type: string;
  url: string;
}

interface Series {
  resourceURI: string;
  name: string;
}

interface Variant {
  resourceURI: string;
  name: string;
}

interface CollectedIssue {
  resourceURI: string;
  name: string;
}

interface Date {
  type: string;
  date: any;
}

interface Price {
  type: string;
  price: number;
}

interface Thumbnail {
  path: string;
  extension: string;
}

interface Image {
  path: string;
  extension: string;
}

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

interface Item2 {
  resourceURI: string;
  name: string;
}

interface Characters {
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

interface Events {
  available: number;
  collectionURI: string;
  items: any[];
  returned: number;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: any;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: any[];
  collectedIssues: CollectedIssue[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}
