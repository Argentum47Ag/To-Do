import { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "../components/Loader/Loader";

const Products = () => {
  const [prod, setProd] = useState(null);
  const [search, setSearch] = useState('');
  const getProducts = async () => {
    try {
      // const result = await fetch('https://dummyjson.com/products');
      const result = await fetch('https://dummyjson.com/products/search?q=' + search);
      const data = await result.json()
      setProd(data.products);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProducts()
  }, [])
  console.log(prod);
  return (
    <div className="main">
      <h2 className="main__title">Products</h2>
      <input 
        type="text" 
        placeholder="Поиск" 
        className="main__input" 
        value={search}
        onChange={(event)=>{ setSearch(event.target.value)}}
      />
      <button className="main__btn" onClick={getProducts}>Найти</button>
      {
        prod 
        ?
        <div className="products">
          {
            prod.map((elem) => (
              <Link to={"/products/" + elem.id} key={elem.id} className="products__car">
                <img src={elem.thumbnail} alt="" />
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
              </Link>
            ))
          }
        </div>
        : <Loader />
      }
    </div>
  )
}

export default Products