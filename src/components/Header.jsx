export default function Header(props) {
    return (
        <header className="App-Header">
            <article>
                <h1>epi.LOG</h1>
                <p>Log your thoughts per Episode</p>
                <div> <input className="" type="text" placeholder="Kaguya-sama: Love is War" /> </div>
                <button className='App-Search-Button-Proceed' onClick={props.addEntry}>
                    Proceed Search
                </button>
            </article>
        </header>
    )
}