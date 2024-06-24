export default function PublishedEpisodeNum(props) {
    return (
        <>
            {
                props.isEditable ?
                    <p>Episode 0 of {props.episodes}</p>
                    :
                    <p>Episode {props.selected_episode} of {props.episodes}</p>
            }
        </>
    )
}