import { useState } from 'react';
import PublishedButtons from './Published/PublishedButtons.jsx'
import PublishedEpisodeInfo from './Published/PublishedEpisode.jsx'
import PublishedText from './Published/PublishedText.jsx'


export default function Published(props) {

    const [isEditable, setIsEditable] = useState(false);

    const { id, blog_text } = props.publishedData
    return (
        <article className='App-Episode-Log-Wrapper'>
            <div className='App-Episode-Log-Body'>
                <PublishedEpisodeInfo
                publishedData={props.publishedData}
                isEditableState={{isEditable, setIsEditable}}
                />
                <div className='App-Chosen-Text'>
                    <PublishedText 
                    blog_text={blog_text}
                    isEditable={isEditable}
                    />
                </div>
            </div>
            <PublishedButtons 
            isEditableState={{isEditable, setIsEditable}}
            deleteEntry={props.deleteEntry}
            id={id}
            />
        </article>
    )
}