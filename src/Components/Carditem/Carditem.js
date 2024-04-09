import React from 'react'
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import './Carditem.css'

const Carditem = (props) => {

  const {title, images, description, children, price, brand, onClick} = props;
  return (
    <div>
      <Card className='card' style={{width: '18rem'}}>
        <Card.Img className='img' style={{width: '16.7rem'}} variant='top' src={images[0]} />
        <Card.Body>
          <div className="title d-flex gap-2 justify-content-around">
            <Card.Title>{title}</Card.Title>
            <Card.Title>{brand}</Card.Title>
          </div>
          <div className="description">
            <Card.Text>{description}</Card.Text>
          </div>
          <div className="btn d-flex align-items-center justify-content-between">
            <span>{price} $</span>
            <Button onClick={onClick}>{children}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Carditem
