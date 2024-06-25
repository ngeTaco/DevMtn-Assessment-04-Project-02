import express from 'express'
import morgan from 'morgan'
import ViteExpress from 'vite-express'
import userEntryData from './userEntries.js'

const app = express()
const port = '8000'

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

ViteExpress.config({ printViteDevServerHost: true })

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}`))

//API ROUTES
app.get ('/userEntries', (req, res) => {
    res.json(userEntryData)
} )
