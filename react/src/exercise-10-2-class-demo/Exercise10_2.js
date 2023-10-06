import React, { useEffect, useState } from 'react'

export default function Exercise10_2() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    console.log("Use effect called")

    // send the http request to the api
    // Class exercise, users: https://dummyjson.com/users
    fetch("https://dummyjson.com/products")
    // get the response -> the new quote
      .then(response => response.json())
      .then(data => {
        // update the state with the new quote
        setProducts(data.products)
      })
  }, [])
  return (
    <div>{ products.map(product => <div>{product.title}, ${product.price}</div>)}</div>
  )
}
