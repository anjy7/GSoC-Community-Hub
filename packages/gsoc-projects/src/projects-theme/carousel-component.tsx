"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const CarouselComponent = ({  }) => {

  const videoProperties = [
    {
      id: 1,
      title: "Video 1",
      src: "https://youtu.be/7IKYd8bj57g?si=QsBWwJjBbUKJhQgM",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 2,
      title: "Video 2",
      src: "https://youtu.be/5cSzi2wLztw?si=yBuwxngnwrnaLiVJ",
      credit: "Video by cottonbro from Pexels",
    },
    {
      id: 3,
      title: "Video 3",
      src: "https://youtu.be/Nc3cuBDYeD4?si=Zu8c0huMVg5h5f99",
      credit: "Video by cottonbro from Pexels",
    },
  ];

  return (
     <div>
      <Carousel style={{maxWidth:"40rem" , margin: "auto"}}>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.src}
                // pip={true}
                controls={true}
              
              />
              
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <p>{videoObj.credit}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    
    </div>
  );
};


export default CarouselComponent;