/**
 * songs.js
 *
 * The app's songs
 */

window.songs = [
  {
    songID: 1, // primary key
    artistID: 4, // foreign key
    title: "Paint The Town Red",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/05/a1/62/05a162ca-d0f8-462a-a033-474a019e506f/196871274111.jpg/600x600bb.jpg",
    audio: "url",
    explicit: true,
    albumName: "Scarlet",
    duration: "3:51",
    year: 2023
  },
  {
    songID: 2, // primary key
    artistID: 4, // foreign key
    title: "Skull and Bones",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/05/a1/62/05a162ca-d0f8-462a-a033-474a019e506f/196871274111.jpg/600x600bb.jpg",
    audio: "url",
    explicit: true,
    albumName: "Scarlet",
    duration: "4:08",
    year: 2023
  },
  {
    songID: 3, // primary key
    artistID: 4, // foreign key
    title: "Love Life",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/05/a1/62/05a162ca-d0f8-462a-a033-474a019e506f/196871274111.jpg/600x600bb.jpg",
    audio: "url",
    explicit: true,
    albumName: "Scarlet",
    duration: "3:56",
    year: 2023
  },
  {
    songID: 4, // primary key
    artistID: 1, // foreign key
    title: "Away From Home",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/50/ee/2150ee84-62c3-4190-7dfa-da30abd98ac8/23UM1IM09862.rgb.jpg/600x600bb.jpg",
    audio: "url",
    explicit: true,
    albumName: "For All The Dogs",
    duration: "4:18",
    year: 2023
  },
  {
    songID: 5, // primary key
    artistID: 1, // foreign key
    title: "First Person Shooter",
    albumCover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/21/50/ee/2150ee84-62c3-4190-7dfa-da30abd98ac8/23UM1IM09862.rgb.jpg/600x600bb.jpg",
    audio: "url",
    // features: "J. Cole",
    explicit: true,
    albumName: "For All The Dogs",
    duration: "4:18",
    year: 2023
  },
];
