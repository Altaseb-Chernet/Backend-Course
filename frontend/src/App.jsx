import { useEffect, useState } from "react";
import "./App.css"; 
import { getNotes, createNote, deleteNote, updateNote } from "./api";
import NoteForm from "./components/NoteForm";
import NotesList from "./components/NotesList";

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    const data = await getNotes();
    setNotes(data);
  }

  async function handleAdd(note) {
    await createNote(note);
    loadNotes();
  }

  async function handleDelete(id) {
    await deleteNote(id);
    loadNotes();
  }

  async function handleUpdate(id, note) {
    await updateNote(id, note);
    loadNotes();
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Notes App</h1>
      <NoteForm onAdd={handleAdd} />
      <NotesList notes={notes} onDelete={handleDelete} onUpdate={handleUpdate} />
    </div>
  );
}
