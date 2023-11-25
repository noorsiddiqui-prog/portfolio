import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import classes from './Carousel.module.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'animate.css/animate.min.css'
import { GoProject } from 'react-icons/go'
import { FaArrowCircleDown } from 'react-icons/fa'
import Hello from '../images/Hello.jpg'
import Pencil from '../images/Pencil.jpg'

class CarouselImages extends Component {
  render() {
    return (
      <div className={classes.carousel_container} id="start">
        <Carousel
          className={classes.carousel}
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div className={classes.image_container}>
            <img
              className={classes.image}
              src={
                'https://media.istockphoto.com/id/1399348612/photo/hello-written-rectangular-shaped-yellow-chat-bubble-on-turquoise-background.webp?b=1&s=170667a&w=0&k=20&c=fFfp1GiZhtmyHfcOI3VkdhV8nt9upRhd4x6x947Zs_E='
              }
              alt="myImage"
            />
            <div className={classes.h1}>
              <h1>I'm Noor Ul Ain Siddiqui</h1>
              <a
                href="https://drive.google.com/file/d/1kyKJ-ESd1gT-dvWMru6KiFnlrlKB4-Ep/view?usp=sharing"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW CV <FaArrowCircleDown />
              </a>
            </div>
          </div>
          <div className={classes.image_container}>
            <img
              className={classes.image}
              src={
                'https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="myImage"
            />
            <div className={classes.h2}>
              <h1> I love building</h1>
              <h1>THINGS!!</h1>
              <a
                href="https://github.com/noorsiddiqui-prog"
                rel="opener noreferrer"
                target="_blank"
              >
                VIEW REACT PROJECTS <GoProject />
              </a>
              {/* <div className={classes.secondButton}>
                <a
                  
                  rel='opener noreferrer'
                  target='_blank'
                >
                  VIEW  PROJECTS <GoProject />
                </a>
              </div> */}
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}
export default CarouselImages
