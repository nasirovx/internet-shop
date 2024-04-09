import React, {useEffect, useContext} from 'react';
import Carditem from '../Components/Carditem/Carditem';
import { services } from '../Services/Services';
import { MyContext } from '../Context/My-context';

const Home = () => {

  const {products, getAllProductsState, addToCard} = useContext(MyContext);

  useEffect(() =>{
    const data = async () =>{
      const product = await services.allProducts();
      console.log("Product", product);
      getAllProductsState(product.data.products)
    }
    data()
  }, []);

  return (
    <div className='d-flex flex-wrap gap-4 mt-4'>
      {
        products.map((product, index) => {
          return <Carditem
          key={index}
          {...product}
          onClick={() => addToCard(product.id)}
          children = "ADD TO CARD"
          />
        })
      }
      </div>
  )
}

export default Home