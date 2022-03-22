import { title } from "process";
import Post from "../models/Post";
import "./PostInList.css";

interface Props {
  post: Post;
  onDelete: () => void;
}

const PostInList = ({ post, onDelete }: Props) => {
  return (
    <li className="PostInList">
      <div>
        <p className="title">{post.title}</p>
        <p className="thought">{post.thought}</p>
      </div>
      <i className="fa-solid fa-trash" onClick={onDelete}></i>
    </li>
  );
};

export default PostInList;
