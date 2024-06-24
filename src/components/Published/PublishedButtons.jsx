import { DeleteIcon, EditIcon } from '../Icons.jsx'

export default function PublishedButtons() {
    return (
        <div>
            <button className='App-Button-Edit'>
                <EditIcon
                    width='1.5rem'
                />
            </button>
            <button className='App-Button-Delete'>
                <DeleteIcon
                    width='1.5rem'
                />
            </button>
        </div>
    )
}