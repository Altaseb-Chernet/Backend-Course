import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Note
      </button>
    </form>
  );
}
