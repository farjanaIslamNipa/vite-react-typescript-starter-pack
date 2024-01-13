import axios from "axios";
import {useEffect, useState} from "react";

const Home = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(data => setProducts(data))
    const controller = new AbortController
  
    const fetchProducts = async() => {
      try{
        const {data} =  await axios.get('https://dummyjson.com/products', {signal: controller.signal})
        setProducts(data.products)
      }catch(err){
        // console.log(err)
      }
    }

    fetchProducts()

    return() => {
      controller.abort()
    }

    // setProducts(productData)
  }, [])

  return (
    <div>
     
    </div>
  );
};

export default Home;