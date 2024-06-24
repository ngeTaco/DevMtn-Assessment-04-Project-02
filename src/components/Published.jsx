import PublishedButtons from './Published/PublishedButtons.jsx'
import PublishedEpisodeInfo from './Published/PublishedEpisode.jsx'
import PublishedText from './Published/PublishedText.jsx'


export default function Published(props) {
    console.log('published', props);
    const { blog_text } = props.publishedData
    return (
        <article className='App-Episode-Log-Wrapper'>
            <div className='App-Episode-Log-Body'>
                <PublishedEpisodeInfo publishedData={props.publishedData} />
                <div className='App-Chosen-Text'>
                    <PublishedText blog_text={blog_text} />
                </div>
            </div>
            <PublishedButtons />
        </article>
    )
}