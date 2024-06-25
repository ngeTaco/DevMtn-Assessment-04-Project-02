import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import userEntryData from './userEntries.js'
import generateId from '../src/utils/generateIds.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

ViteExpress.config({ printViteDevServerHost: true })

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}`))

//API ROUTES
app.get('/userEntries', (req, res) => {
    res.json(userEntryData)
})

app.post('/userEntries', (req, res) => {
    const newEntry = {
        id: generateId(userEntryData.animeData),
        title_eng: 'Kaguya-sama: Love is War',
        title_jpn: 'Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen',
        season: 'Winter',
        seasonYear: 2019,
        episodes: 12,
        coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101921-VvdGQy1ZySYf.jpg',
        selected_episode: 12,
        blog_text: 'What a fun show with such a catchy opening and ending song. I really enjoyed it all the way through to the last episode'
    }
    userEntryData.animeData.push(newEntry)

    res.status(200)
})

app.put('/userEntries/:id', (req, res) => {
    const foundUserEntryId = userEntryData.animeData.findIndex(userEntry => userEntry.id === +req.params.id)

    if (foundUserEntryId !== -1) {
        userEntryData.animeData[foundUserEntryId] = {
            ...userEntryData.animeData[foundUserEntryId], 
            blog_text: req.body.blog_text}
        return res.status(200)
    }
    return res.status(400)
})

app.delete('/userEntries/:id', (req, res) => {
    const foundUserEntryId = userEntryData.animeData.findIndex(userEntry => userEntry.id === +req.params.id)

    if (foundUserEntryId !== -1) {
        userEntryData.animeData.splice(foundUserEntryId, 1)
        return res.status(200)
    }
    return res.status(400)
})