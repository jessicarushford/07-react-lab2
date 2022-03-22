import { FormEvent, useState } from "react";
import Post from "../models/Post";
import "./PostForm.css";

interface Props {
  onAddPost: (post: Post) => void;
  onSetShowForm: (boolean: boolean) => void;
}

const PostForm = ({ onAddPost, onSetShowForm }: Props) => {
  const [title, setTitle] = useState("");
  const [thought, setThought] = useState("");

  const submitForm = (e: FormEvent): void => {
    e.preventDefault();
    onAddPost({ title, thought });
    onSetShowForm(false);
    // making the object IN LINE^
    // LONG way to write the same thing as ^
    // const newPost: Post = {title: title, thought: thought};
    // onSubmit(newPost)
  };

  return (
    <form className="PostForm" onSubmit={submitForm}>
      <i
        className="fa-solid fa-circle-xmark"
        onClick={() => onSetShowForm(false)}
      ></i>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="thought">Thought</label>
      <input
        type="text"
        name="thought"
        id="thought"
        value={thought}
        onChange={(e) => setThought(e.target.value)}
      />
      <button className="add-post-button">Add Post</button>
    </form>
  );
};

export default PostForm;
