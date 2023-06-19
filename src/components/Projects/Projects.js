import React from 'react';
import classes from './Projects.module.css';
import caterer from './images/caterer.png';
import customer from './images/customer.png';
import vellaVision from './images/vellaVision.png';
import softcity from './images/softcity.png';
import superadmin from './images/superadmin.png';
import amazon from './images/amazon.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://customer-ec.vercel.app/',
    title: 'Customer Website EatCoast',
    techStack: 'Tech Stack: React Js',
    desc: 'It is a Restaurants web app built in a React Js . You can purchase dishes of their best chefs can also see what they are selling.',
    image: customer
  },
  {
    link: '#',
    title: 'Amazon Clone',
    techStack: 'Tech Stack: MERN',
    desc: 'It is a Cloned Amazon web app built in a MERN.',
    image: amazon
  },
  {
    link: 'https://caterer-ec.vercel.app/',
    title: 'Caterer EatCoast',
    techStack: 'Tech Stack- ReactJs',
    desc: 'It is a Restaurants Catering web app built in a React Js . You can get dishes through their caterers.',
    image: caterer
  },
  {
    link: 'https://softcity-dashboard.netlify.app/',
    title: 'Softcity',
    techStack: 'Tech Stack- MERN Stack',
    desc: 'A full stack application to visualize their data on Charts and update them as well.',
    image: softcity
  },
  {
    link: 'https://vella-vision.vercel.app/',
    title: 'Vella Vision',
    techStack: 'Tech Stack- MERN',
    desc: 'Dashboard built with MERN',
    image: vellaVision
  },
  {
    link: 'super-admin-ec.vercel.app',
    title: 'Super Admin EatCoast',
    techStack: 'Tech Stack: ReactJs',
    desc: 'It is a Restaurants web app Dashboard built in a React Js.',
    image: superadmin
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
        {/* <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItemApps.map((item) => {
            return getProjectCard(item);
          })}
        </ul> */}
      </ScrollAnimation>
    </div>
  );
}
