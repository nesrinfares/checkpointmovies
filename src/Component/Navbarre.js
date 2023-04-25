import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from 'react-rating-stars-component';


function Navbarre({settext , setrate}) {
  return (
    
    <Navbar bg="dark" expand="dark" >
      <Container fluid style={{display:"flex", justifyContent:"space-around",backgroundColor:"black", height:"70px", color:"white"}} >
        <Navbar.Brand href="#" style={{color:"white",width:"120px",height:"36px"}} >Movies app</Navbar.Brand>
        
        <Navbar.Collapse id="navbarScroll">
          <Nav className="navigation"
            style={{ maxHeight: '60px' }}
            navbarScroll/>
            <Nav.Link href="/">movies</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">contact</Nav.Link>
            
           
             
          <Form className="d-flex">
          <ReactStars 
        style={{backgroundColor:"grey" }}
        count={5}
  
        size={24}
        activeColor="#ffd700"
        color="white"
        onChange={(newRating)=>setrate(newRating)}
  />



            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{width:"180px", height:"30px"}}
              aria-label="Search"
              onChange={(e)=>settext(e.target.value)}
            />
            <Button variant="outline-success" style={{backgroundColor:"red", border:"none" ,color:"white"}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarre
