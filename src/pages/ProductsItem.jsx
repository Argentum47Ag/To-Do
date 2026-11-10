import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"
import Loader from "../components/Loader/Loader";

const ProductsItem = () => {
    const {id} = useParams();
    const [single, setSingle] = useState(null);
    const getSingle = async () => {
        try {
            const result = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await result.json()
            setSingle(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getSingle()        
    }, [])
    console.log(single);
  return (
    single     
    ? 
    <div className="single">
        <img src={single.thumbnail} alt="" className="single__img" />
        <div>
            <h2 className="single__title">{single.title}</h2>
            <p className="single__desc">{single.description}</p>
            <Link to="/products">К продукции</Link>
        </div>
    </div>
    : <Loader/>
  )
}

export default ProductsItem