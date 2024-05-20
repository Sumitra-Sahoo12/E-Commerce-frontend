import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
const ProductCardCart=({product})=>{
    const { brand, name, subtitle, image, price, discount } = product;
    const [count, setCount] = useState(1); 
    const incrementCount = () => {
        setCount(count + 1);
    };  
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    return(
        <div className="p-5 shadow-lg border rounded-md mb-3 bg-white">
            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
                    <img className='object-fill w-full h-full object-top' src={image} alt={name} />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">{name}</p>
                    <p className="opacity-70">{subtitle}</p>
                    <p className="opacity-70 mt-2">{brand}</p>
                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold">₹{Math.floor(price-((discount/100)*price))}</p>
                        <p className="opacity-50 line-through">₹{price}</p>
                        <p className="text-green-600 font-semibold">{discount}% OFF</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2">
                        <IconButton className="hover:text-blue-700" onClick={decrementCount}>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <span className="py-1 px-7 border rounded-sm">{count}</span>
                        <IconButton onClick={incrementCount} className="hover:text-blue-700">
                            <AddCircleOutlineIcon/>
                        </IconButton>
                        <div className="w-5"/>
                        <Button sx={{ color: 'black', fontWeight: 'bold' , '&:hover': {backgroundColor: '#4a90e2', color: 'white',}}}>remove</Button>
                    </div>
                    <div>
                        
                    </div>
                </div>
        </div>
    )
}
export default ProductCardCart;