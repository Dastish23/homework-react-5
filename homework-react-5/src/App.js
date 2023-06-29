

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/postsReducer.js";
import { fetchComments } from "./store/commentsReducer.js";
import {useState} from "react";

function App() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const comments = useSelector((state) => state.comments.comments);
  const [clickedButton, setClickedButton] = useState(0)
  console.log( posts)

  const showPosts = () => {
    dispatch(fetchPosts());
  };

  const showComments = (postId) => {
    if(clickedButton === postId) setClickedButton(0)
    else {
      dispatch(fetchComments(postId));
      setClickedButton(postId);
    }

  };

  return (
      <>
        <button onClick={showPosts}>Показать посты</button>

        {posts && (
            <>
              <h3>Посты</h3>
              <ul>
                {posts.slice(0,10).map((post) => (
                    <li key={post.id}>
                      {post.title}
                      <button onClick={() => showComments(post.id)}>
                        Показать комментарий
                      </button>

                      { post.id === clickedButton &&
                          comments[post.id] && (
                              <ul>
                                <li key={comments[post.id][0].id}>
                                  {comments[post.id][0].body}
                                </li>
                              </ul>
                          )}
                    </li>
                ))}
              </ul>
            </>
        )}
      </>
  );
}

export default App;





