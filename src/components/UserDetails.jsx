import { useLoaderData } from 'react-router-dom'
import "./UserDetails.css"
export default function UserDetails() {
    const user = useLoaderData();
    const { id, name, address, email, phone, website, company } = user;
    return (
        <div className='user-details'>
            <h1 className='text-2xl bg-black rounded-xl p-1 text-center text-white'>UserDeatil Component</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <p>Company Name: {company.name}</p>
            <p>Address: {address.street}</p>
        </div>
    )
}
