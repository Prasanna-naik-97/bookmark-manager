import logo from './logo.svg';
import './style.css';
import BookmarkForm from './components/BookmarkForm';
import { useEffect, useState } from 'react';
import BookmarkList from './components/BookmarkList';

function App() {
  const [bookmarks, setBookMarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
  }, bookmarks)

  const addBookmark = (bookmark) => {
    setBookMarks((prevBookmark) => [...prevBookmark, bookmark])
  }
  return (
    <div className="app">
        <h1>Bookmark Manager</h1>
        <BookmarkForm onAdd={addBookmark}/>
        <BookmarkList bookmarks={bookmarks} />
    </div>
  );
}

export default App;
