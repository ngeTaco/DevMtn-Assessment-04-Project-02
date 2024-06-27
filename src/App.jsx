import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Published from './components/Published.jsx'
import axios from 'axios'

function App() {

  const [entryData, setEntryData] = useState({ animeData: [] })

  const getUserEntries = () => {
    axios.get('/userEntries')
    .then(res => {setEntryData({ ...res.data })
    })
  }
  useEffect(() => {
    getUserEntries()
  }, [])


  const addEntry = () => {
    axios.post('/userEntries')
      .then(() => {
        getUserEntries()
      })
  }

  const deleteEntry = (id) => {
    axios.delete(`/userEntries/${id}`)
      .then(res => {
        getUserEntries()
      })
  }

  const editEntry = (index, newBlogText) => {
    axios.put(`/userEntries/${index}`, { blog_text: newBlogText.blog_text })
      .then(() => {
        getUserEntries()
      })
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