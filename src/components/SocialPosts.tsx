import { useState } from "react";
import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    { title: "Happy", thought: "I am happy!" },
    { title: "Sad", thought: "I am sad." },
    { title: "Hungry", thought: "I am hungry!" },
    { title: "Sleepy", thought: "I am sleepy." },
  ]);

  const [showForm, setShowForm] = useState(false);

  const addPost = (post: Post): void => {
    setPosts((prev) => {
      return [post, ...prev];
    });
  };

  const deletePost = (index: number): void => {
    setPosts((prev) => {
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
      // const copy: Post[] = prev.slice(0);
      // copy.splice(index, 1);
      // return copy;
    });
  };

  return (
    <div className="SocialPosts">
      <button className="new-thought-button" onClick={() => setShowForm(true)}>
        New Thought
      </button>
      {showForm && (
        <div className="modal">
          <PostForm onAddPost={addPost} onSetShowForm={setShowForm} />
        </div>
      )}
      <ul className="post-in-list-ul">
        {posts.map((post, index) => (
          <PostInList
            post={post}
            onDelete={() => deletePost(index)}
            key={`${post.title}${index}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;
