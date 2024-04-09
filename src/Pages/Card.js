import React, { useState, useContext } from 'react';
import Carditem from '../Components/Carditem/Carditem';
import { MyContext } from '../Context/My-context';
import Order from '../Components/Order/Order';
import './Card.css'

const Card = () => {
  const [modalShow, setModalShow] = useState(false);

  const onOrder = () => {
    setModalShow(true);
  };

  const { cart, deleteToCard } = useContext(MyContext);

  return (
    <div>
        <button className='btnn' onClick={onOrder}>Оформить Товар</button>
      <div className='d-flex flex-wrap gap-4 mt-4'>
        {
          cart.map((elem, index) => {
            return <Carditem
              key={index}
              {...elem}
              onClick={() => deleteToCard(index)}
              children='Delete To Cart'
            />
          })
        }
            </div>
            <Order show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Card;
