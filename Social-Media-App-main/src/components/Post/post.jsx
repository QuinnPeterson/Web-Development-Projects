import { useEffect, useState } from "react";
import { supabase } from "../../supabaseInit";
import "./Post.css"; // Ensure CSS styling is imported

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("post_id", postId)
        .order("timestamp", { ascending: false });

      if (error) console.error("Error fetching comments:", error);
      else setComments(data);
    };

    if (postId) fetchComments();
  }, [postId]);

  const postComment = async (e) => {
    e.preventDefault();

    const newComment = {
      post_id: postId,
      text: comment,
      username: user.displayName || username, // Set the username correctly
      timestamp: new Date(),
    };

    const { error } = await supabase.from("comments").insert(newComment);

    if (error) {
      console.error("Error posting comment:", error);
    } else {
      // Clear the comment input and update the local comments array
      setComment("");
      setComments((prevComments) => [
        { ...newComment, username: user.displayName || username },
        ...prevComments,
      ]);
    }
  };

  return (
    <div className="post">
      <h4 className="post__username">{username}</h4>
      <h3 className="post__caption">{caption}</h3>

      <img src={imageUrl} alt="Post" className="post__image" />

      <div className="post__comments">
        {comments.map((comm, index) => (
          <p key={index} className="post__comment">
            <strong>{comm.username}</strong> {comm.text}
          </p>
        ))}
      </div>

      <form onSubmit={postComment} className="post__commentForm">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="post__input"
        />
        <button type="submit" className="post__button">
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;
