"use client"
import { Product } from '@prisma/client'
import { IoAdd } from "react-icons/io5";
import { useProductStore } from '@/app/lib/store';
import React from 'react'
import { Button } from './ui/button';
import RemoveFromCart from './RemoveFromCart';

function AddToCart ({product}:{product:Product}) {
  const cart = useProductStore((state) => state.cart);
  const addToCart = useProductStore((state) => state.addToCart)

  const itemsInCart = cart.length
  console.log("Items in the cart",itemsInCart)

  if (itemsInCart > 0){
     return(
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product}/>
        <span>{itemsInCart}</span>
        <Button 
      onClick={() => addToCart(product)}
      className="bg-sky-600 w-1/3">
      <IoAdd />
    </Button>
      </div>
     )
  }
  
  return (
    <Button data-test="add-to-cart"
    onClick={() => addToCart(product)}
    className="bg-sky-600 w-full">
        <IoAdd />Add to cart
    </Button>
  )
}

export default AddToCart