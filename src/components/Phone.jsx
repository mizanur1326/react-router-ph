import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Phone({ phone, handleAddToCart }) {
    const { name, model, ram, rom, camera, processorName, price, image } = phone;




    const phoneContainer = {
        border: "2px solid red",
        padding: "20px",
        margin: "10px",
        // width: "400px"
    }
    const imageCss = {
        height: "280px",
        width: "270px",
    }

    return (
        <div style={phoneContainer}>
            <p>Phone Name: {name}</p>
            <p>Phone Model: {model}</p>
            <p>Phone Ram: {ram}</p>
            <p>Phone Rom: {rom}</p>
            <p>Phone Camera: {camera}</p>
            <p className='mb-6'>Processor: {processorName}</p>
            <img style={imageCss} className='mb-6' src={image} alt="" />
            <p className='text-center text-white bg-gray-500 m-4 w-[150px] mx-auto rounded-xl'>Phone Price: {price}</p>
            <p className='text-center'>
                <button onClick={()=>handleAddToCart()} className='btn btn-success text-white font-bold mr-6'>Add to Cart</button>
                <button className='btn btn-success text-white font-bold'>Buy Now</button>
            </p>            
        </div>
    )
}

Phone.propTypes = {
    phone: PropTypes.shape({
        name: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        ram: PropTypes.string.isRequired,
        rom: PropTypes.string.isRequired,
        camera: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        processorName: PropTypes.string.isRequired,
    }).isRequired
};
