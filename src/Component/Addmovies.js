import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';
function Addmovies(movies , setmovies) {
    const [show, setShow] =  useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newmovie, setnewmovie] = useState({
    name:"",
    posterurl:"",
    description:"",
    rating:"",

  })
  const add = () =>{
    setmovies([...movies,newmovie])
  }
  return (
    <div className='addmov' style={{backgroundColor:"red", color:"white"}}>
       
      <Button variant="primary" onClick={handleShow}  style={{backgroundColor:"red" , color:"white", border:"none"}}>
       add movies
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movies </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movies name</Form.Label>
        <Form.Control type="text" placeholder="Enter movies name" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicimage">
        <Form.Label>Movies image</Form.Label>
        <Form.Control type="text" placeholder="Enter movies image" onChange={(e)=>setnewmovie({...newmovie,posterurl:e.target.value})}  />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicdescription">
        <Form.Label>Movies description </Form.Label>
        <Form.Control type="text" placeholder="Enter movies description" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})}  />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRation">
        <Form.Label>Movies Rating</Form.Label>
        <Form.Control type="text" placeholder="Enter movies Rating" onChange={(e)=>setnewmovie({...newmovie,rating:e.target.value})} />
       
      </Form.Group>


    
     
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  style={{backgroundColor:"red", color:"white",border:"none"}}
          onClick={()=> {
            add ();
           handleClose();
          }}
          >
            Add 
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}

export default Addmovies
