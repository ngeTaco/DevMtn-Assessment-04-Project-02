import './App.css'

function App() {


  return (
    <section className='App-Whole'>
      <header className="App-Header">
        <article>
          <h1>epi.LOG</h1>
          <p>Log your thoughts per Episode</p>
        </article>
      </header>
      <section>

        <article className='App-Episode-Log-Wrapper'>
          <div className='App-Episode-Log-Body'>
            <div className='App-Chosen-Header'>
              <img src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx30-wmNoX3m2qTzz.jpg' />
              <div className='App-Chosen-Title'>
                <h2>Neon Genesis Evangelion</h2>
                <h3>Shin Seiki Evangelion</h3>
                <div className='App-Chosen-Episode'>
                  <p>1995</p>
                  <p>Episode 24 of 26</p>
                </div>
              </div>
            </div>
            <div className='App-Chosen-Text'>
              <p>
                Where did the animation go?
              </p>
            </div>
          </div>
          <button className='App-Button-Edit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
          <button className='App-Button-Delete'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </article>

        <article className='App-Episode-Log-Wrapper'>
          <div className='App-Episode-Log-Body'>
            <div className='App-Chosen-Header'>
              <img src='https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-Dilr312jctdJ.jpg' />
              <div className='App-Chosen-Title'>
                <h2>Fullmetal Alchemist: Brotherhood</h2>
                <h3>Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST</h3>
                <div className='App-Chosen-Episode'>
                  <p>2009</p>
                  <p>Episode 4 of 64</p>
                </div>
              </div>
            </div>
            <div className='App-Chosen-Text'>
              <p>
                A real 2 for 1 special. I really like the part where the guy got punched with a metal fist.
              </p>
            </div>
          </div>
          <button className='App-Button-Edit'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
          <button className='App-Button-Delete'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: '1.5rem', height: '1.5rem' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </article>
      </section>
    </section>
  )
}

export default App
