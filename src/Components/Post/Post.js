import { useState } from "react";
import "./Post.css";
import { PostAPI } from "../APIs/APIs";


export default function Post() {
  const [info, setInfo] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    rating: "",
  });

  return (
    <div className="form-container">
      <form
        className="post-form"
        onSubmit={(e) => {
          e.preventDefault();
          PostAPI(info)
        }}
      >
        <h2>Make a post</h2>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setInfo({
              ...info,
              title: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Price"
          onChange={(e) => {
            setInfo({
              ...info,
              price: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Image"
          onChange={(e) => {
            setInfo({
              ...info,
              image: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setInfo({
              ...info,
              description: e.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Rating"
          onChange={(e) => {
            setInfo({
              ...info,
              rating: e.target.value,
            });
          }}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
