"use client"
import React, { useEffect } from 'react'
import { getCartTotal } from '@/app/lib/cartTotal'
import { useProductStore } from '@/app/lib/store'
import { Button } from '@/components/ui/button'



function page() {
  const cart = useProductStore((state) => state.cart)
  let totalAmount = getCartTotal(cart);

  // useEffect(() =>{
  //   const query = new URLSearchParams(window.location.search)
  //   if(query.get('success')){
  //     console.log('Order palced! You will receive an email confirmation.')
  //   }
  //   if(query.get('cancelled')){
  //     console.log('Order canceled -- continue to shop around and checkout when you are ready')
  //   }
  // },[])
  return (
    <main className="max-w-6xl mx-auto text-white p-10 text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500 ">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold">Payment Succcessful</h1>
        <h2 className="text-2xl">
          You have completed your purchase of <span className="font-bold">Ksh: {totalAmount}</span>
        </h2>
      </div>
    </main>
  )
}

export default page