import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { services } from '../../Services/Services';
import { MyContext } from '../../Context/My-context';
import './Order.css'

const Order = (props) => {
  const [name, setName] = useState('  ');
  const [phone, setPhone] = useState('  ');
  const [address, setAddress] = useState('  ');
  const { cart } = useContext(MyContext);

  const onOrder = async () => {
    const data = await services.postOrderProducts({
      name,
      phone,
      address,
      title: cart.map((e) => e.title)
    });
    console.log('dataTelegramm:', data);
    props.onHide();
  };

  return (
      <Modal {...props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header closeButton className='bg-dark text-light'>
          <Modal.Title id='contained-modal-title-vcenter bg=danger'>Оформить Товар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <input type="text" onChange={(e) => setPhone(e.target.value)} placeholder='  Mobail Number' />
            <br/>
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder='  Name' />
            <br/>
            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder='  Address' />
          </div>
          {cart.map((elem, i) => {
            return (
              <div key={i} className="d-flex flex-column">
                <p>{elem.title}</p>
              </div>
              )
          })
        }
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Отменить</Button>
          <Button onClick={onOrder} variant='success'>Заказать</Button>
        </Modal.Footer>
      </Modal>
  );
}

export default Order;
