import { useState } from "react"

export default function PublishedText(props) {

    const [blogText, setBlogText] = useState(props.blog_text);

    return (
        <>
            {
                props.isEditable ?
                    <input
                        value={blogText}
                        type="text"
                        onChange={ (e) => setBlogText(e.target.value)}
                    />
                    :
                    <p>{blogText}</p>
            }
        </>
    )
}