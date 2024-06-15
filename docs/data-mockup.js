[
    {
        id: 0,
        title_eng: 'ONE PIECE',
        title_jpn: 'ONE PIECE',
        season: 'Fall',
        seasonYear: 1999,
        episodes: 1110,
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21-YCDoj1EkAxFn.jpg',
        selected_episode: 37,
        blog_text: 'this is such a great episode'
    },
    {
        id: 0,
        title_eng: 'Neon Genesis Evangelion',
        title_jpn: 'Shin Seiki Evangelion',
        season: 'Fall',
        seasonYear: 1995,
        episodes: 26,
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx30-wmNoX3m2qTzz.jpg',
        selected_episode: 24,
        blog_text: 'Where did the animation go?'
    },
    {
        id: 0,
        title_eng: 'Fullmetal Alchemist: Brotherhood',
        title_jpn: 'Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST',
        season: 'Spring',
        seasonYear: 2009,
        episodes: 64,
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-Dilr312jctdJ.jpg',
        selected_episode: 4,
        blog_text: 'A real 2 for 1 special'
    },
];




//NOTE: AniList API used for basis for this structure

//{ id: 0, title_eng: 'MediaTitle.english', title_jpn: 'MediaTitle.romaji', season: 'MediaSeason', seasonYear: Int, episodes: Int, coverImage: 'MediaCoverImage.medium', selected_episode: 10, blog_text: 'this was a good episode'  }

// title: MediaTitle
// The official titles of the media in various languages

//MediaTitle.english
//MediaTitle.romaji

// season: MediaSeason
// The season the media was initially released in

// seasonYear: Int
// The season year the media was initially released in

// seasonInt: Int
// The year & season the media was initially released in

// episodes: Int
// The amount of episodes the anime has when complete

// coverImage: MediaCoverImage
// The cover images of the media

// MediaCoverImage.medium
// MediaCoverImage.large

// genres: [String]
// The genres of the media
