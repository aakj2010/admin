import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function ProductView() {
    const params = useParams()
    console.log(params);

    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log(...searchParams);
  return (
    <h1>{params.Id}</h1>
  )
}

export default ProductView