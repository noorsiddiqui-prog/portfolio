import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>May(2023)-Present</span>
                          </h2>
                          <p>
                            I am currently working as <b>MERN Developer</b> at{' '}
                            <a target='_blank' href='https://enseedling.com/'>
                              <b>Enseedling</b>
                            </a>{' '}
                            <i>
                              (Enseedling is a IT technology startup that is building tools and
                              products to simplify recruiting and help organizations engage and
                              retain their employees)
                            </i>{' '}
                            and boosting my professional skills.
                          </p>
                        </div>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Experience <span>January(2023)-May(2023)</span>
                          </h2>
                          <p>
                            I was working as <b>MERN Developer</b> at{' '}
                            <a
                              target='_blank'
                              href='https://www.linkedin.com/company/triconv-technologies-pvt-ltd'
                            >
                              <b>TrivonV</b>
                            </a>{' '}
                            <i>
                              (TrivonV Technologies is a IT technology company that is building
                              tools and products to simplify recruiting and help organizations
                              engage and retain their employees)
                            </i>{' '}
                            and boosting my professional skills.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Graduation at University of Sindh <span> 2018-2021</span>
                          </h2>
                          <p>
                            I completed my graduation in CS (Computer Science) from{' '}
                            <a href='#'>University of Sindh</a>.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2015-2017</span>
                          </h2>
                          <p>
                            I have completed my higher education from Hayat Girls College with major
                            subjects as Physics,Chemistry & Biology in HSC board.{' '}
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Internship</h2>
                          <p>
                            Completed one month Internship in React Js with Ghani Business Solutions
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
