import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Published from './components/Published.jsx'
import phData from './data/userEntries.js'
import generateId from './utils/generateIds.js'
import axios from 'axios'

function App() {

  //FIXME: replacing phdata with an empty object breaks the whole site, I am missing a step here.
  const [entryData, setEntryData] = useState(phData)

  const getUserEntries = () => {
    axios.get('/userEntries').then(res => {
      setEntryData({...res.data})
    })
  }

  useEffect(() => {
    getUserEntries()
  }, [])

  const deleteEntry = (id) => {
    // const newData = { ...entryData };
    // const index = newData.animeData.findIndex((entry) => {
    //   return entry.id === id
    // });
    // newData.animeData.splice(index, 1)
    // setEntryData(newData)
    axios.delete(`/userEntries/${id}`).then(res => {
    })
  }

  // const addEntry = (id) => {
  //   const newEntryData = { ...entryData };

  //   const newId = generateId(newEntryData.animeData);

  //   newEntryData.animeData.push(
  //     {
  //       id: newId,
  //       title_eng: 'Kaguya-sama: Love is War',
  //       title_jpn: 'Kaguya-sama wa Kokurasetai: Tensaitachi no Renai Zunousen',
  //       season: 'Winter',
  //       seasonYear: 2019,
  //       episodes: 12,
  //       coverImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx101921-VvdGQy1ZySYf.jpg',
  //       selected_episode: 12,
  //       blog_text: 'What a fun show with such a catchy opening and ending song. I really enjoyed it all the way through to the last episode'
  //     }
  //   )
  //   setEntryData(newEntryData)
  // }
  const addEntry = () => {
      axios.post('/userEntries', newEntry).then(() => {
        props.getUserEntries()
      })
  }


  // const editEntry = (index, newBlogText) => {

  //   const newEntryData = { ...entryData };
  //   const newBlogEntryData = Object.assign(newEntryData.animeData[index], newBlogText)
  //   newEntryData.animeData[index] = newBlogEntryData
  //   setEntryData(newEntryData)
  // }
  const editEntry = (index, newBlogText) => {

    axios.put(`/userEntries/${index}`, {blog_text: newBlogText.blog_text})
    .then(() => props.getUserEntries())
  }


  return (
    <section className='App-Whole'>
      <Header addEntry={addEntry} />
      <section className='App-Whole'>
        {entryData.animeData.map((entries, index) => {
          return (
            <Published
              key={entries.id}
              publishedData={{ ...entries, index }}
              deleteEntry={deleteEntry}
              editEntry={editEntry}
            />
          )
        })}
      </section>
    </section>
  )
}

export default App