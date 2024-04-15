import { useLoaderData } from 'react-router-dom'
import Photo from './Photo';
import "./Photos.css"

export default function Photos() {
    const photos = useLoaderData();
  return (
    <div>
        <p>Photos : {photos.length}</p>
        <p>This data load by React Hook called useLoaderData()</p>
        <div className='photos-container'>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}></Photo>)
            }
        </div>
    </div>
  )
}
