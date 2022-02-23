import React from 'react'
import Products from './Products';

export default function Home() {
  return (
    <div>
        <div className="card card-bg  text-white">
 <div className="container">
 <div className="card-img-overlay d-flex flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEOSON ARRIVAL </h5>
    <p className="card-text">CHECK OUT ALL THE TRENDS</p>
 
  </div>
 </div>
</div>
 <Products />
    </div>
  )
}
