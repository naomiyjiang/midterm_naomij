import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const App = () => {
  const [note, setNotes] = useState(notes);
  const [newNote, setNewNote] = useState({ title: "", content: "" });

  const addNote = () => {
    if (newNote.title.trim() !== "" && newNote.content.trim() !== "") {
      const newNoteObject = {
        key: note.length + 1,
        title: newNote.title,
        content: newNote.content
      };
      setNotes((prevNotes) => [...prevNotes, newNoteObject]);
      setNewNote({ title: "", content: "" });
    }
  };

  const deleteNote = (key) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== key));
  };

  const handleTitleChange = (e) => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const handleContentChange = (e) => {
    setNewNote({ ...newNote, content: e.target.value });
  };

  return (
    <div>
      <Header />
      <div className="note">
        <input
          type="text"
          placeholder="This is the note title"
          value={newNote.title}
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="This is the note content"
          value={newNote.content}
          onChange={handleContentChange}
        />
        <button onClick={addNote}>Add</button>
      </div>

      {note.map((note) => (
        <Note
          key={note.key}
          title={note.title}
          content={note.content}
          onDelete={() => deleteNote(note.key)}
        />
      ))}

      <Footer />
    </div>
  );
};

export default App;
