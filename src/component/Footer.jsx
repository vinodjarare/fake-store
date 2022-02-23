import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div>


<div className="container">
  <footer className="pt-5">
    <div className="row">
        <div className="col-3">
            <h5>Contact us</h5>
            <ul className="nav flex-column">
          <li className="nav-item mb-2 text-muted"><i className='fa fa-map-marker me-2'></i>N9 cidco Aurangabad</li>
          <li className="nav-item mb-2 text-muted"><i className="fa fa-phone me-2"></i> 9876543210</li>
          <li className="nav-item mb-2 text-muted"><i className="fa fa-envelope me-2"></i>vsjarare@gmail.com</li>
         
        </ul>
        </div>
      <div className="col-2">
        <h5>Links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/products" className="nav-link p-0 text-muted">Products</Link></li>
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-muted">About</Link></li>
          <li className="nav-item mb-2"><Link to="/contact  " className="nav-link p-0 text-muted">Contact</Link></li>
          
        </ul>
      </div>

      <div className="col-2 text-center">
        <h5>Connect Us</h5>
        <ul className="nav flex-column">
          <li className="nav-item fa-lg mb-2"><Link to="" className="nav-link p-0 "><i className='fa fa-facebook text-primary'></i></Link></li>
          <li className="nav-item mb-2 "><Link to="" className="nav-link p-0"><i className='fa fa-instagram text-danger'></i></Link></li>
          <li className="nav-item mb-2"><Link to="" className="nav-link p-0"><i className='fa fa-github text-dark'></i></Link></li>
          <li className="nav-item mb-2"><Link to="" className="nav-link p-0"><i className='fa fa-linkedin text-primary'></i></Link></li>
        </ul>
      </div>

      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p className='text-muted'>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-1">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-outline-dark" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="text-center justify-content-between  py-4 mt-4 border-top">
      <p >&copy; 2022 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer