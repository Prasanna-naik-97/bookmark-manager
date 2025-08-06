import React,  {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


const BookmarkForm = ({onAdd}) => {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title || !url) return
        console.log({
            id: uuidv4(),
            title,
            url
        })
        onAdd({
            id: uuidv4(),
            title,
            url
        })
        setTitle('')
        setUrl('')
    }

    return (
        <form className="bookmark-form" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Bookmark Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Add</button>
        </form>
    )
}

export default BookmarkForm