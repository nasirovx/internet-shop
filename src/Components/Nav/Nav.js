import React, { useContext, useEffect } from 'react';
import { services } from '../../Services/Services';
import { MyContext } from '../../Context/My-context';
import { useNavigate } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

  const { getCategoriesState, categories } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const result = await services.getCategories()
      getCategoriesState(result.data)
    }
    data();
  }, []);


  const toggleClick = (title) =>{
    // console.log('toggle click', title);
    navigate(`/product/${title}`)
    // console.log(navigate);
  }

  return (
    <div className="nav-menu">
      <h2>Category Product</h2>
      <ol>
        {
          categories.map((elem, index) => {
            return <li onClick={() => toggleClick(elem)} key={index}>{elem}</li>
          })
        }
      </ol>
    </div>
  )
}

export default Nav;