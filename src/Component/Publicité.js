import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Publicité() {
  return (
    <div>
      <Carousel style={{width:"100%",height:"30px"}}>
      <Carousel.Item>
        <img
          className="d-block-w-100"
          src="https://images.affiches-et-posters.com//albums/3/48400/medium/affiche-film-titanic.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>TITANIC</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-100"
          src="https://galeries.be/wp-content/uploads/2020/02/1288239_dachracelluloiddreams_717938.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Dachra</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block-w-100"
          src="https://fr.web.img4.acsta.net/pictures/23/02/08/11/38/0974783.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>les complices</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Publicité
