import './App.css'
import Header from './components/Header.jsx'
import Published from './components/Published.jsx'
import entryData from './data/userEntries.js'

function App() {
  return (
    <section className='App-Whole'>
      <Header />
      <section className='App-Whole'>
        {entryData.animeData.map((entries) => {
          return (
            <Published
              key={entries.id}
              publishedData={entries}
              />
          )
        })}
      </section>
    </section>
  )
}

export default App