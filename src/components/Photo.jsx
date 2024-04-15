import "./Photo.css"

export default function Photo({ photo }) {
    const { id, title, url, thumbnailUrl } = photo;
    return (
        <div className="photo-container">
            <p>ID: {id}</p>
            <p>Title: {title}</p>
            <img className="photo" src={url} alt="" />
        </div>
    )
}
