import React from 'react'
import UseFetch from './UseFetch'

const FetchData = () => {
    const [data] = UseFetch('https://api.npoint.io/9045c260b1565daa9e15')
    console.log(data);
  return (
    <>
     
    </>
  )
}

export default FetchData