import React, { Component } from "react";
import "./Sidebar.css";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../images/sam.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {/* <div style={{ color: "black", fontWeight: "bold" }} className="tagtop">
          # programmer_life
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          # hello_world
        </div>
        <div style={{ color: "black", fontWeight: "bold" }} className="">
          # coding
        </div> */}
        <h1>
          <Link smooth to="/#start" className="h1_links">
            Noor Ul Ain Siddiqui
          </Link>
        </h1>

        <img src="https://images.unsplash.com/photo-1510751007277-36932aac9ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tYW4lMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60" />
        <p style={{ color: "black", fontWeight: "bold" }} className="gmail">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL"
            rel="opener noreferrer"
            target="_blank"
            className="fa fa-envelope"
          ></a>{" "}
          noorsiddiqui048@gmail.com
        </p>

        <ul className="sidebar-nav">
          <li className="sidebar-nav-items">
            <Link smooth to="/#projects" className="links">
              Projects
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#about" className="links">
              About
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#interest" className="links">
              Interest
            </Link>
          </li>
          <li className="sidebar-nav-items">
            <Link smooth to="/#education" className="links">
              Education
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className="flip-card-back">
          <ul className="sidebar-nav">
            <li className="sidebar-nav-icons">
              <a
                href="https://github.com/noorsiddiqui-prog"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-github fa-lg"
              ></a>
            </li>
            <li className="sidebar-nav-icons">
              <a
                href="https://www.linkedin.com/in/noor-ul-ain-siddiqui-52404123b/"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-linkedin fa-lg"
              ></a>
            </li>
            {/* <li className='sidebar-nav-icons'>
              <a
                href='#'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-twitter fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='#'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-instagram fa-lg'
              ></a>
            </li> */}
            <li className="sidebar-nav-icons">
              <a
                href="mailto:noorsiddiqui048@gmail.com"
                rel="opener noreferrer"
                target="_blank"
                className="fa fas fa-envelope fa-lg"
              ></a>
            </li>
            {/* <li className='sidebar-nav-icons'>
              <a
                href='#'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-facebook fa-lg'
              ></a>
            </li> */}
          </ul>
        </div>
        <div
          style={{
            color: "black",
            fontWeight: "bold",
            paddingTop: "30%",
          }}
          className="tagtop"
        >
          Made with{" "}
          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="fa fas fa-heart fa-lg"
          ></a>{" "}
          by Noor Ul{" "}
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Summary
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  As a React Js Developer with experience in building web
                  applications using React.js, Node.js, and Redux, I have a
                  strong foundation in frontend development. I have completed
                  internships at Triconv Technologies and Ghani Business
                  Solutions, where I honed my skills in MERN stack development
                  and gained hands-on experience in building dynamic and
                  responsive user interfaces. I recently worked as a React Js
                  Developer at Bitspro, where I contributed to the development
                  of a web application using React.js and Redux. I successfully
                  collaborated with cross-functional teams to deliver
                  high-quality code and meet project deadlines. With a
                  Bachelor's degree in Computer Science from the University of
                  Sindh, I have a solid understanding of software development
                  principles and best practices. I am passionate about
                  continuous learning and staying up-to-date with the latest
                  technologies and trends in the industry. I am now seeking a
                  challenging role as a React Js Developer, where I can leverage
                  my skills and experience to contribute to the development of
                  innovative and user-friendly web applications.
                </div>
              </div>
            </div>
          </div>
          .
        </div>
      </div>
    );
  }
}

export default Sidebar;
