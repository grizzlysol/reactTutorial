import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');


  return (
    <div className="create">
      <h2>Add New Blog</h2>
      <form>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <label>Blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)} />
        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value='mario'>Mario</option>
          <option value='yoshi'>Yoshi</option>
        </select>
        <button>Add Blog</button>
        <p>Title: {title}</p>
        <p>Body: {body}</p>
        <p>Author: {author}</p>
      </form>
    </div>
  );
}

export default Create;