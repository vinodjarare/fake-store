import React from 'react'
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';

function CartBtn() {
    const state = useSelector((state) => state.state.addItem)

  return (
    <>
        <NavLink to="/cart" className="btn btn-outline-primary ms-2">
            <span className="fa fa-shopping-cart me-2"></span>Cart({state.length})
        </NavLink>
    </>
  )
}

export default CartBtn