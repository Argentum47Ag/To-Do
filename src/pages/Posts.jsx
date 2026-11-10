import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    try {
      const result = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await result.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="main">
      <h2 className="main__title">Posts</h2>
      {
        posts 
        ? (
          <div className="products">
            {posts.map((post) => (
              <div key={post.id} className="products__car">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        ) 
        : <Loader />
      }
    </div>
  )
}

export default Posts;