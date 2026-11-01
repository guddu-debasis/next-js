import React from 'react'
export const instant = false
const  Productpage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>Product Page: {id?.join('/') || 'All Products (Base Route)'}</div>
  )
}

export default Productpage