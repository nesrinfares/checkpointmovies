import React from 'react'
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-rating-stars-component';
function Moviescard({el}) {
  return (
    <div>
      <Card className='box' style={{width: '18rem' , margin:"15px" }}>
      <Card.Img variant="top" src={el.posterurl} />
      <Card.Body style={{backgroundColor:"grey", color:"white"}}>
      <Card.Title>{el.name} </Card.Title>
        

        <ReactStars 
        style={{backgroundColor:"grey"}}
        count={5}
  
        size={24}
        activeColor="#ffd700"
        color="black"
        edit={false}
        value={el.rating}
  />


        <Button variant="primary" style={{backgroundColor:"red", color:"white",border:"none"}}>See trailler</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviescard
