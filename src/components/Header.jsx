export default function Header(props) {
    return (
        <header className="App-Header">
            <article>
                <h1>epi.LOG</h1>
                <p>Log your thoughts per Episode</p>
                <button className='App-Search-Button-Proceed' onClick={props.addEntry}>
                    Proceed Search
                </button>
            </article>
        </header>
    )
}