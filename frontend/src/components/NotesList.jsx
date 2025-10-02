import { useState } from "react";

export default function NotesList({ notes, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  function startEditing(note) {
    setEditingId(note._id);
    setEditTitle(note.title);
    setEditContent(note.content);
  }

  function handleUpdate(id) {
    onUpdate(id, { title: editTitle, content: editContent });
    setEditingId(null);
  }

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} className="border p-3 mb-2 rounded bg-gray-50">
          {editingId === note._id ? (
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border p-1 w-full mb-1 rounded"
              />
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="border p-1 w-full mb-1 rounded"
              />
              <button onClick={() => handleUpdate(note._id)} className="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
              <button onClick={() => setEditingId(null)} className="bg-gray-400 text-white px-2 py-1 rounded">Cancel</button>
            </div>
          ) : (
            <div>
              <h2 className="font-semibold">{note.title}</h2>
              <p>{note.content}</p>
              <button onClick={() => startEditing(note)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button onClick={() => onDelete(note._id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
