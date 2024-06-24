
export default function PublishedText(props) {

    const { blogText, setBlogText } = props.blogState

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