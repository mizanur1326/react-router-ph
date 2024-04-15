import { Link } from 'react-router-dom';
import './User.css'

export default function User({ user }) {
    const { id, name, address, email, phone, website, company } = user;
    // console.log(user);
    return (
        <div className='root'>
            <div className="user-container">
                <h1 className='text-2xl bg-green-100 rounded text-center'>User Details</h1>
                {/* <p>ID: {id}</p> */}
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <p>Company Name: {company.name}</p>
                <p>Address: {address.street}</p>
                <Link to={`/user/${id}`} className='btn btn-info p-4 m-5'>Show Details</Link>
            </div>
            
        </div>
    )
}
