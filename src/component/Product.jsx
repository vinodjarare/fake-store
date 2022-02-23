import React,{useEffect,useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from './redux/action';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function Product() {
    const {id}=useParams();
    const [product ,setProduct]=useState([]);
    const [loading ,setLoading]= useState (false);
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    useEffect(() => {
        const getProduct = async () =>{
            setLoading(true);
         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          
            setProduct( await response.json());
            setLoading(false);
        }
        getProduct();
        },[]);
    
    const Loading =() => {
        return(
                <>
                <h1>Loading.....</h1>
                </>
        )
    }
const ShowProduct = () =>{
    return(
        <>
            <div className="col-md-6 " key={product.id}>
                <img src={product.image} alt={product.title}  height ="400px" width="400px"/>
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {product.category}
                </h4>
                <h1 className="display-5">{product.title}</h1>
                <p className="lead fw-bolder text-muted">Rating {product.rating && product.rating.rate}
                <i className="fa fa-star"></i></p>
                <h3 className="display-6 fw-bold my-4">
                    ${product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className="btn btn-outline-dark me-3" onClick={() => addProduct(product)}>Add to Cart</button>
                <NavLink to="#" className="btn btn-dark">Go to Cart</NavLink>
            </div>
        </>
    )
}
  return (
    <div>
        <div className="container py-5">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
    </div>
  )
}