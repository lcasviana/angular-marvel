import { ApiResponse } from 'src/app/shared/models/response.model';
import { Creator } from '../models/creators.model';

export const creatorsMock: ApiResponse<Creator> = {
  "code": 200,
  "status": "Ok",
  "copyright": "© 2021 MARVEL",
  "attributionText": "Data provided by Marvel. © 2021 MARVEL",
  "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2021 MARVEL</a>",
  "etag": "d01d10ea6a3bbc367a4ef34555a2bba430c5d792",
  "data": {
    "offset": 0,
    "limit": 20,
    "total": 5536,
    "count": 20,
    "results": [
      {
        "id": 13970,
        "firstName": "#O",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "#O",
        "modified": new Date("2019-12-11T17:10:07-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13970",
        "comics": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13970/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8546",
              "name": "Earth X (1999)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/10492",
              "name": "Paradise X (2002)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/15902",
              "name": "Paradise X Vol. 1 (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/11914",
              "name": "Universe X (2000)"
            }
          ],
          "returned": 4
        },
        "series": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13970/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
              "name": "Earth X (1999 - 2000)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2059",
              "name": "Paradise X (2002 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2431",
              "name": "Paradise X Vol. 1 (2007)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2085",
              "name": "Universe X (2000 - 2001)"
            }
          ],
          "returned": 4
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13970/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/25655",
              "name": "interior",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26016",
              "name": "Paradise X Issue 0",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/26318",
              "name": "interior Earth X #O",
              "type": "interiorStory"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13970/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/13970/o?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 13971,
        "firstName": "#X",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "#X",
        "modified": new Date("2019-12-11T17:21:29-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/13971",
        "comics": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13971/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
              "name": "EARTH X TPB [NEW PRINTING] (Trade Paperback)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/8547",
              "name": "Earth X (1999) #13"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/69274",
              "name": "Paradise X (2002)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/11901",
              "name": "Universe X (2000)"
            }
          ],
          "returned": 4
        },
        "series": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13971/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
              "name": "Earth X (1999 - 2000)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
              "name": "EARTH X TPB [NEW PRINTING] (2006)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2059",
              "name": "Paradise X (2002 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2085",
              "name": "Universe X (2000 - 2001)"
            }
          ],
          "returned": 4
        },
        "stories": {
          "available": 4,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13971/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24903",
              "name": "Earth X",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/24941",
              "name": "Earth X Chapter X",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/25632",
              "name": "interior X",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/152331",
              "name": "story from Paradise X (2003) #X",
              "type": "interiorStory"
            }
          ],
          "returned": 4
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/13971/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/13971/x?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 6606,
        "firstName": "A.R.K.",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "A.R.K.",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/6606",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6606/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6606/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6606/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6606/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/6606/ark.?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 1168,
        "firstName": "All Thumbs Creative",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "All Thumbs Creative",
        "modified": new Date("2018-07-24T11:50:20-0400"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/1168",
        "comics": {
          "available": 14,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/1168/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/68960",
              "name": "Marvel Masterworks: Captain America Vol. 10 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28003",
              "name": "Marvel Masterworks: Captain America Vol. 5 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/25797",
              "name": "Marvel Masterworks: Deathlok Vol. 1 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/62853",
              "name": "Marvel Masterworks: Doctor Strange Vol. 8 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60438",
              "name": "Marvel Masterworks: Marvel Two-In-One Vol. 2 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66207",
              "name": "Marvel Masterworks: Marvel Two-In-One Vol. 3 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21816",
              "name": "Marvel Masterworks: The Amazing Spider-Man Vol. 10 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/66777",
              "name": "Marvel Masterworks: The Avengers Vol. 18 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/24297",
              "name": "Marvel Masterworks: The Avengers Vol. 9 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/40080",
              "name": "Marvel Masterworks: The Fantastic Four (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/28021",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 12 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/60444",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 19 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/67357",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 20 (Hardcover)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/64430",
              "name": "Punisher: Back to The War Omnibus (Hardcover)"
            }
          ],
          "returned": 14
        },
        "series": {
          "available": 14,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/1168/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/25021",
              "name": "Marvel Masterworks: Captain America Vol. 10 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8967",
              "name": "Marvel Masterworks: Captain America Vol. 5 (2010 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8031",
              "name": "Marvel Masterworks: Deathlok Vol. 1 (2009 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23051",
              "name": "Marvel Masterworks: Doctor Strange Vol. 8 (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22319",
              "name": "Marvel Masterworks: Marvel Two-In-One Vol. 2 (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24004",
              "name": "Marvel Masterworks: Marvel Two-In-One Vol. 3 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/5398",
              "name": "Marvel Masterworks: The Amazing Spider-Man Vol. 10 (2008)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24158",
              "name": "Marvel Masterworks: The Avengers Vol. 18 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7494",
              "name": "Marvel Masterworks: The Avengers Vol. 9 (2009 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/14879",
              "name": "Marvel Masterworks: The Fantastic Four (2011 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/8985",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 12 (2010 - Present)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/22325",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 19 (2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/24345",
              "name": "Marvel Masterworks: The Fantastic Four Vol. 20 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23460",
              "name": "Punisher: Back to The War Omnibus (2017)"
            }
          ],
          "returned": 14
        },
        "stories": {
          "available": 25,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/1168/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47950",
              "name": "Amazing Spider-Man 88-99",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53831",
              "name": "Avengers 80-88; Hulk 140",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/56854",
              "name": "Interior #56854",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/61249",
              "name": "Interior #61249",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/61285",
              "name": "Interior #61285",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/75266",
              "name": "Interior #75266",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/90430",
              "name": "Cover #90430",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/90431",
              "name": "Interior #90431",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/90936",
              "name": "Interior #90936",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131345",
              "name": "cover from Marvel Masterworks: Marvel Two-in-One (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131346",
              "name": "story from Marvel Masterworks: Marvel Two-in-One (2017)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131357",
              "name": "cover from Marvel Masterworks: The Fantastic Four (2017)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/131358",
              "name": "story from Marvel Masterworks: The Fantastic Four (2017)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/137973",
              "name": "cover from MARVEL MASTERWORKS: DOCTOR STRANGE VOL. 8 HC (2017) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/137974",
              "name": "story from MARVEL MASTERWORKS: DOCTOR STRANGE VOL. 8 HC (2017) #8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/139846",
              "name": "cover from PUNISHER: BACK TO THE WAR OMNIBUS HC SHALVEY COVER (2017) #1 (SHALVEY COVER)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/139847",
              "name": "story from PUNISHER: BACK TO THE WAR OMNIBUS HC SHALVEY COVER (2017) #1 (SHALVEY COVER)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/143541",
              "name": "cover from MARVEL MASTERWORKS: MARVEL TWO-IN-ONE VOL. 3 HC (2018) #3",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/143542",
              "name": "story from MARVEL MASTERWORKS: MARVEL TWO-IN-ONE VOL. 3 HC (2018) #3",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/144709",
              "name": "cover from MARVEL MASTERWORKS: THE AVENGERS VOL. 18 HC (2018) #18",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/1168/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/1168/all_thumbs_creative?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 7470,
        "firstName": "ALSJOERDSMA",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "ALSJOERDSMA",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7470",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7470/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7470/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7470/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7470/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/7470/alsjoerdsma?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 4592,
        "firstName": "Arno",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Arno",
        "modified": new Date("2007-01-01T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/4592",
        "comics": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/4592/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/14224",
              "name": "Wolverine (1988) #99"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/14337",
              "name": "X-Men (1991) #48"
            }
          ],
          "returned": 2
        },
        "series": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/4592/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
              "name": "Wolverine (1988 - 2003)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
              "name": "X-Men (1991 - 2001)"
            }
          ],
          "returned": 2
        },
        "stories": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/4592/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/28967",
              "name": "Cover #28967",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/29228",
              "name": "Divided Minds",
              "type": "cover"
            }
          ],
          "returned": 2
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/4592/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/4592/arno?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 3052,
        "firstName": "Avon",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Avon",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3052",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3052/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17787",
              "name": "West Coast Avengers (1985) #100"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3052/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
              "name": "West Coast Avengers (1985 - 1994)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3052/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/37790",
              "name": "Boys Will Be Boys",
              "type": ""
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3052/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/3052/avon?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 6535,
        "firstName": "B.K.",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "B.K.",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/6535",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6535/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/19764",
              "name": "Marvel Preview (1975) #15"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6535/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3718",
              "name": "Marvel Preview (1975 - 1981)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6535/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/41947",
              "name": "pin-up",
              "type": ""
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6535/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/6535/bk.?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 12958,
        "firstName": "Balak",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Balak",
        "modified": new Date("2016-12-09T17:26:17-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12958",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12958/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/58635",
              "name": "Ghost Rider X-Mas Special Infinite Comic (2016) #1"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12958/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/21405",
              "name": "Ghost Rider X-Mas Special Infinite Comic (2016)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12958/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/127857",
              "name": "story from A Year of Marvels Infinite Comic K (2016) #1",
              "type": "interiorStory"
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12958/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/12958/balak?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 3188,
        "firstName": "Balcells",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Balcells",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3188",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3188/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3188/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3188/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3188/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/3188/balcells?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 12660,
        "firstName": "Batt",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Batt",
        "modified": new Date("1969-12-31T19:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12660",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12660/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29703",
              "name": "Shadowland (2010) #1"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12660/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9934",
              "name": "Shadowland (2010)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12660/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/64551",
              "name": "Interior #64551",
              "type": "interiorStory"
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12660/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/59",
              "name": "Shadowland"
            }
          ],
          "returned": 1
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/12660/batt?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 6613,
        "firstName": "Beatty",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Beatty",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/6613",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6613/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/19817",
              "name": "Marvel Fanfare (1982) #41"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6613/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
              "name": "Marvel Fanfare (1982 - 1992)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6613/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/42324",
              "name": "pin-up",
              "type": ""
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6613/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/6613/beatty?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 6919,
        "firstName": "Beckett",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Beckett",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/6919",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6919/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/20231",
              "name": "Doctor Strange, Sorcerer Supreme (1988) #67"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6919/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
              "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6919/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/43346",
              "name": "The Heart of Saturday Night",
              "type": ""
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/6919/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/6919/beckett?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 8098,
        "firstName": "Bengal",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Bengal",
        "modified": new Date("2016-09-12T10:46:58-0400"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/8098",
        "comics": {
          "available": 23,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/8098/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56424",
              "name": "All-New Wolverine (2015) #1"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56430",
              "name": "All-New Wolverine (2015) #2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56436",
              "name": "All-New Wolverine (2015) #5"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56438",
              "name": "All-New Wolverine (2015) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56439",
              "name": "All-New Wolverine (2015) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56440",
              "name": "All-New Wolverine (2015) #9"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56441",
              "name": "All-New Wolverine (2015) #10"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56442",
              "name": "All-New Wolverine (2015) #11"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/56443",
              "name": "All-New Wolverine (2015) #12"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61342",
              "name": "All-New Wolverine (2015) #13 (Bengal Connecting Variant a)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61345",
              "name": "All-New Wolverine (2015) #14 (Bengal Connecting Variant B)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61346",
              "name": "All-New Wolverine (2015) #15 (Bengal Connecting Variant C)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61347",
              "name": "All-New Wolverine (2015) #16 (Bengal Connecting Variant D)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/61348",
              "name": "All-New Wolverine (2015) #17 (Bengal Connecting Variant E)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/51410",
              "name": "Avengers (2012) #34.2"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/51411",
              "name": "Avengers (2012) #34.2 (Araujo Variant)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/51934",
              "name": "Guardians Team-Up (2015) #8"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/54859",
              "name": "Siege (2015) #1 (BENGAL ANT-SIZED VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55683",
              "name": "Spider-Gwen (2015) #7"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/55684",
              "name": "Spider-Gwen (2015) #8"
            }
          ],
          "returned": 20
        },
        "series": {
          "available": 9,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/8098/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
              "name": "All-New Wolverine (2015 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/16452",
              "name": "Avengers (2012 - 2015)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20448",
              "name": "Black Widow (2016 - 2017)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/19453",
              "name": "Guardians Team-Up (2015)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/19608",
              "name": "Siege (2015)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/20505",
              "name": "Spider-Gwen (2015 - 2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/23871",
              "name": "Spider-Gwen Vol. 2 (2018)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/26022",
              "name": "Spider-Gwen: Ghost-Spider Vol. 2 - Impossible Year (2019)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/19676",
              "name": "Spider-Man & the X-Men (2014 - 2015)"
            }
          ],
          "returned": 9
        },
        "stories": {
          "available": 27,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/8098/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/71285",
              "name": "Interior #71285",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/81864",
              "name": "Sky Doll Space Ship #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/114397",
              "name": "cover from Avengers (2012) #34.2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/114398",
              "name": "story from Avengers (2012) #34.2",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/114400",
              "name": "story from Avengers (2012) #34.2 (ARAUJO VARIANT)",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/115445",
              "name": "cover from Guardians Team-Up (2015) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/115446",
              "name": "story from Guardians Team-Up (2015) #8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/116667",
              "name": "cover from Spider-Man & the X-Men (2014) #1 (BENGAL VARIANT)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/120935",
              "name": "cover from Night Watch of S.H.I.E.L.D. (2015) #1 (TBD ARTIST ANT-SIZED VARIANT)",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122410",
              "name": "story from Spider-Gwen (2015) #7",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/122412",
              "name": "story from Spider-Gwen (2015) #8",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123703",
              "name": "cover from All-New Wolverine (2015) #1",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123715",
              "name": "cover from All-New Wolverine (2015) #2",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123728",
              "name": "story from All-New Wolverine (2015) #5",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123731",
              "name": "cover from All-New Wolverine (2015) #7",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123733",
              "name": "cover from All-New Wolverine (2015) #8",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123735",
              "name": "cover from All-New Wolverine (2015) #9",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123737",
              "name": "cover from All-New Wolverine (2015) #10",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123739",
              "name": "cover from All-New Wolverine (2015) #11",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/123741",
              "name": "cover from All-New Wolverine (2015) #12",
              "type": "cover"
            }
          ],
          "returned": 20
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/8098/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/8098/bengal?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 9716,
        "firstName": "Benjamin",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Benjamin",
        "modified": new Date("2018-07-23T15:12:00-0400"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bb52c198ff2a",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/9716",
        "comics": {
          "available": 2,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/9716/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27398",
              "name": "New Mutants (2009) #1 (BENJAMIN VARIANT)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/27465",
              "name": "New Mutants (2009) #4 (BENJAMIN VARIANT)"
            }
          ],
          "returned": 2
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/9716/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/7455",
              "name": "New Mutants (2009 - 2012)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 3,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/9716/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/53754",
              "name": "Cover #53754",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/60236",
              "name": "Cover #60236",
              "type": "cover"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/81864",
              "name": "Sky Doll Space Ship #1",
              "type": "cover"
            }
          ],
          "returned": 3
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/9716/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/9716/benjamin?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 3178,
        "firstName": "Bernet",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Bernet",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3178",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3178/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3178/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3178/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3178/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/3178/bernet?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 12701,
        "firstName": "BIT",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "BIT",
        "modified": new Date("2015-03-16T15:59:58-0400"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/12701",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12701/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/29754",
              "name": "Black Widow (2010) #7"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12701/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/9706",
              "name": "Black Widow (2010 - 2011)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12701/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/64654",
              "name": "BLACK WIDOW (2010) #7",
              "type": "cover"
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/12701/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/12701/bit?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 3095,
        "firstName": "Blank",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Blank",
        "modified": new Date("2007-01-01T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/3095",
        "comics": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3095/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21594",
              "name": "Skrulls! (2008) #1"
            }
          ],
          "returned": 1
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3095/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/5211",
              "name": "Skrulls! (2008)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3095/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47595",
              "name": "1 of 1",
              "type": "interiorStory"
            }
          ],
          "returned": 1
        },
        "events": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/3095/events",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
              "name": "Secret Invasion"
            }
          ],
          "returned": 1
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/3095/blank?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 7646,
        "firstName": "Blond",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Blond",
        "modified": new Date("2018-07-23T15:26:46-0400"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7646",
        "comics": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7646/comics",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/17592",
              "name": "Ultimate Fantastic Four (2003) #50 (Variant A)"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21332",
              "name": "Ultimate Fantastic Four (2003) #55"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21510",
              "name": "Ultimate Fantastic Four (2003) #56"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/21713",
              "name": "Ultimate Fantastic Four (2003) #57"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22478",
              "name": "Ultimate Fantastic Four (2003) #58"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/22879",
              "name": "Ultimate Fantastic Four (2003) #59"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23581",
              "name": "Ultimate Fantastic Four (2003) #60"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/comics/23582",
              "name": "Ultimate Fantastic Four (2003) #60 (WHITE VARIANT)"
            }
          ],
          "returned": 8
        },
        "series": {
          "available": 1,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7646/series",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/series/702",
              "name": "Ultimate Fantastic Four (2003 - 2009)"
            }
          ],
          "returned": 1
        },
        "stories": {
          "available": 8,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7646/stories",
          "items": [
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/36816",
              "name": "Cosmic Cube 1 of 4",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47113",
              "name": "Namor War 2 of 4",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47426",
              "name": "3 of 4 - Salem Seven",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/47734",
              "name": "4 of 4 - Salem Seven",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/49832",
              "name": "Ultimatum",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/50805",
              "name": "Ultimatum",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/52224",
              "name": "Ultimatum",
              "type": "interiorStory"
            },
            {
              "resourceURI": "http://gateway.marvel.com/v1/public/stories/52226",
              "name": "Ultimatum",
              "type": "interiorStory"
            }
          ],
          "returned": 8
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7646/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/7646/blond?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      },
      {
        "id": 7596,
        "firstName": "Brown",
        "middleName": "",
        "lastName": "",
        "suffix": "",
        "fullName": "Brown",
        "modified": new Date("2007-01-02T00:00:00-0500"),
        "thumbnail": {
          "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
          "extension": "jpg"
        },
        "resourceURI": "http://gateway.marvel.com/v1/public/creators/7596",
        "comics": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7596/comics",
          "items": [],
          "returned": 0
        },
        "series": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7596/series",
          "items": [],
          "returned": 0
        },
        "stories": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7596/stories",
          "items": [],
          "returned": 0
        },
        "events": {
          "available": 0,
          "collectionURI": "http://gateway.marvel.com/v1/public/creators/7596/events",
          "items": [],
          "returned": 0
        },
        "urls": [
          {
            "type": "detail",
            "url": "http://marvel.com/comics/creators/7596/brown?utm_campaign=apiRef&utm_source=89aee1df50faea69134ea9388e9ee23f"
          }
        ]
      }
    ]
  }
};
