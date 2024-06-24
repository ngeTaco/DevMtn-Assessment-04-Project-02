import { useState } from 'react';
import PublishedButtons from './Published/PublishedButtons.jsx'
import PublishedEpisodeInfo from './Published/PublishedEpisode.jsx'
import PublishedText from './Published/PublishedText.jsx'


export default function Published(props) {

    const { id, blog_text, index } = props.publishedData
    const [isEditable, setIsEditable] = useState(false);
    const [blogText, setBlogText] = useState(blog_text);

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
                    blogState={{blogText, setBlogText}}
                    />
                </div>
            </div>
            <PublishedButtons 
            isEditableState={{isEditable, setIsEditable}}
            deleteEntry={props.deleteEntry}
            editEntry={props.editEntry}
            entryData={{blog_text: blogText}}
            index={index}
            id={id}
            />
        </article>
    )
}