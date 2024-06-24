import PublishedEpisodeNum from './EpisodeInfo/PublishedEpisodeNum.jsx'
import PublishedPoster from './EpisodeInfo/PublishedPoster.jsx'
import PublishedEngTitle from './EpisodeInfo/PublishedTitleEng.jsx'
import PublishedJPNTitle from './EpisodeInfo/PublishedTitleJpn.jsx';
import PublishedYear from './EpisodeInfo/PublishedYear.jsx'

export default function PublishedEpisodeInfo (props) {

    const {title_eng, title_jpn, seasonYear, episodes, coverImage, selected_episode} = props.publishedData
    return (
        <div className='App-Chosen-Header'>
                    <PublishedPoster coverImage={coverImage}/>
                    <div className='App-Chosen-Title'>
                        <PublishedEngTitle title_eng={title_eng}/>
                        <PublishedJPNTitle title_jpn={title_jpn} />
                        <div className='App-Chosen-Episode'>
                            <PublishedYear seasonYear={seasonYear}/>
                            {/* NOTE: Need to figure out usestate for dropdown */}
                            <PublishedEpisodeNum
                            episodes={episodes}
                            selected_episode={selected_episode}
                            />
                        </div>
                    </div>
                </div>
    )
}