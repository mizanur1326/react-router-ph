import { useLoaderData } from 'react-router-dom'
import Post from './Post';

export default function Posts() {
    const posts = useLoaderData();

    const postsContainer = {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        // border: "2px solid red",
        margin: "0 auto",
        justifyContent: "center", // Centering the grid container horizontally
        width: "fit-content" // Setting width to fit the content
    }

  return (
    <div>
        <h1 className="text-3xl">Total Posts: {posts.length}</h1>
        <div style={postsContainer}>
            {posts.map(post => <Post key={post.id} post={post}></Post>)}
        </div>
    </div>
  )
}
