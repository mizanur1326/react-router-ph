import { Link } from "react-router-dom";

export default function Post({post}) {
const {id, title,body} = post

const fullBody = body;

const first10Words = body.split(' ').slice(0, 10).join(' ');

const postContainer ={
    border: "2px solid red",
    padding: "20px",
    margin: "10px",
}
  return (
    <div style={postContainer}>
        <p>Post ID: {id}</p>
        <h1 className="text-2xl">{title}</h1>       
        <p className="mb-4">{first10Words}</p>
        <Link to={`/post/${id}`} className="text-xl bg-sky-500 rounded-xl p-2 text-white">See more</Link>
        
    </div>
  )
}
