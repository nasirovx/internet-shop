import React, {useEffect, useContext} from 'react'
import Carditem from '../Carditem/Carditem'
import { useParams } from 'react-router-dom'
import { services } from '../../Services/Services'
import { MyContext } from '../../Context/My-context'

const Products = () => {
  const {product} = useParams();
  const {data, getCategoryProduct} = useContext(MyContext);
  // console.log(product);

  useEffect(() =>{
    const data = async () =>{
      const result = await services.getCategoryProduct(product)
      // console.log('result>>>', result.data.products);
      getCategoryProduct(result.data.products)
    }
    data()
  }, [product])

  return (
    <div>
      <h1>
        {product} {data.length}
      </h1>
      <div className="d-flex flex-wrap gap-4 mt-4" >
        {
          data.map((elem, i) =>{
            return <Carditem key={i}{...elem} children={'ADD TO CARD'}/>
          })
        }
      </div>
    </div>
  )
}

export default Products