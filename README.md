# epiLOG

developed by _ngeTACO_

## What is epiLOG?

**epiLOG** is similar to mini daily micro-blog for watching TV shows. The purpose of this is to help people review or write their thoughts on a per episode basis and eventually publish those thoughts to different social media.

## How it works?

**epiLOG** is meant to show you episodic microblogs in a timeline manner, with the newest entries at the top. Users search for their show, select the episode number they are reviewing, and enter their thoughts or review. After that users can edit or delete entries.

## Contributing

This is a personal School Project in this current stage of development, contributing to the project in its current state is not allowed. This may change in the future when I decide to fully develop this app.

## What I used

- axios
- express
- morgan
- nodemon,
- react
- vite-express

## Roadmap

- **Version 1** _(Current Status)_
    - Static Data
    - Store Changes (JSON, Session, Cookies)
    - Search Component generates New Entry section
    - Existing entries can be edited and deleted

- Version 2
    - Episode Selection Dropdown generated with API data or static data
    - New entry component in between search and existing published entries
    - Connect to API
        - Options
        - MyAnimeList API
            - https://myanimelist.net/apiconfig/references/api/v2
        - AniList API
            - https://github.com/AniList/ApiV2-GraphQL-Docs
            - https://anilist.github.io/ApiV2-GraphQL-Docs/

- Version 3
    - Allow user to give user rating to episode
        - Out of 10
    - Time Stamp generated for created date
    - Time Stamp generated for edit date

- Version 4
    - Surface Genres from API
    - Filter using Genre, Year, and Title

- Version 5
    - Publish to Twitter.
        - Text entry should be delivered as text
        - Episode information should be compiled and added as an image
            - English and Japanese Title
            - Episode of Episode Total
            - User Rating
            - Genre
            - Show Poster