import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <p><h4 style={{textAlign:"center", color:"#1C06BD"}}>"Without libraries what have we? We have no past and no future"</h4></p>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/3133075.jpg"
          alt="First slide"
        />
        <Carousel.Caption>   
        </Carousel.Caption>
        <p style={{textAlign:"center", color:"#0D0447"}}><h1>"Today a reader, tomorrow a leader"</h1></p>
      </Carousel.Item>
      </Carousel>

  );
}

export default Home