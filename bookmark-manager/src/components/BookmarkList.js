const BookmarkList = ({ bookmarks }) => {
  if (bookmarks.length === 0) {
    return <p className="no-bookmarks">No bookmarks added yet.</p>;
  }
  return (
    <ul className="bookmark-list">
      {bookmarks.map((bookmark) => {
        return (
          <li key={bookmark.id} className="bookmark-item">
            <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
              {bookmark.title} - {bookmark.url}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default BookmarkList;
