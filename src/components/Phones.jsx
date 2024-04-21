import { useLoaderData } from "react-router-dom"
import Phone from "./Phone";
import { useState } from "react";

export default function Phones() {
    const phoneData = useLoaderData();

    const [cart, setCart] = useState([])

    const handleAddToCart = phone => {
        // console.log(phone);
        const newCart = [...cart, cart]
        setCart(newCart)
    }


    const phonesContainer = {
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
        <p className="text-center font-extrabold text-xl bg-gray-700 text-white w-10/12 my-6 mx-auto ">Phones: {phoneData.length}</p>
        <h1 className="text-xl text-center font-bold">Cart Added: {cart.length}</h1>
        <div style={phonesContainer} className="mx-auto">
            {phoneData.map(phone => <Phone key={phone.id} phone={phone} handleAddToCart={handleAddToCart}></Phone> )}
        </div>
        
    </div>
  )
}
