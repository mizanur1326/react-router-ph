import { useLoaderData } from "react-router-dom"


export default function PostDetails() {
    const PostDetails = useLoaderData();
    const {id, title, body} = PostDetails

  return (
    <div className="text-center border-4 m-10 p-8">
        <h1 className="text-3xl bg-slate-800 text-white">PostDetails : {id}</h1>
        <p className="text-xl"> Title: {title}</p>
        <p>{body}</p>
    </div>
  )
}
