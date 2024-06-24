import { DeleteIcon, EditIcon, SaveIcon } from '../Icons.jsx'

export default function PublishedButtons(props) {

    const { isEditable, setIsEditable } = props.isEditableState
    
    return (
        <div>
            {isEditable ?
                <button className='App-Button-Save' onClick={() => {
                    props.editEntry(props.index, props.entryData)
                    setIsEditable(false)
                }}>
                    <SaveIcon width='1.5rem' />
                </button>
                :
                <button className='App-Button-Edit' onClick={() => {
                    setIsEditable(true)
                }}>
                    <EditIcon width='1.5rem' />
                </button>
            }

            <button className='App-Button-Delete' onClick={() => props.deleteEntry(props.id)}>
                <DeleteIcon
                    width='1.5rem'
                />
            </button>
        </div>
    )
}