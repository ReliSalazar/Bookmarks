import React, { useState, useEffect } from "react";
import linkService from "./services/links";
import Link from "./components/Link";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newType, setNewType] = useState("");

  useEffect(() => {
    linkService.getAll().then((initialLinks) => setBookmarks(initialLinks));
  }, []);

  const addBookmark = (e) => {
    e.preventDefault();
    const linkObject = {
      name: newName,
      url: newUrl,
      type: newType,
    };

    linkService
      .create(linkObject)
      .then((returnedBookmark) => {
        setNewName("");
        setNewUrl("");
        setNewType("");
        setBookmarks(bookmarks.concat(returnedBookmark));
      })
      .catch((error) => {
        console.error(error);
        setNewName("");
        setNewUrl("");
        setNewType("");
      });
  };

  const handleName = (e) => setNewName(e.target.value);
  const handleUrl = (e) => setNewUrl(e.target.value);
  const handleType = (e) => setNewType(e.target.value);

  const daily = bookmarks.filter((bookmark) => bookmark.type === "daily");
  const utility = bookmarks.filter((bookmark) => bookmark.type === "utility");
  const social = bookmarks.filter((bookmark) => bookmark.type === "social");

  return (
    <div className="app">
      <div className="container">
        <Form
          onSubmit={addBookmark}
          name={newName}
          handleName={handleName}
          ulr={newUrl}
          handleUrl={handleUrl}
          type={newType}
          handleType={handleType}
        />

        <div className="links">
          <h2>daily use</h2>
          {daily.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.id} />
          ))}
        </div>

        <div className="links">
          <h2>utility</h2>
          {utility.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.id} />
          ))}
        </div>
        
        <div className="links">
          <h2>social</h2>
          {social.map((bookmark) => (
            <Link name={bookmark.name} url={bookmark.url} key={bookmark.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
