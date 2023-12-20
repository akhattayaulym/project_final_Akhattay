import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"
import YoutubeSearch from './YoutubeSearch.js';

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Get to know the history of our company and the workflow' />

            <p>Once upon a time, in the bustling world of real estate, our journey began. Fueled by passion and driven by a commitment to excellence, we embarked on a mission to redefine the way people experience property transactions.</p>
            <p>In the heart of our narrative lies a dedication to innovation. Embracing new technologies and modern approaches, we constantly evolve to meet the dynamic needs of the real estate landscape. Yet, amidst the changes, our core values remain unwavering – integrity, transparency, and a genuine desire to make dreams come true.</p>

          </div>
          <div className='right row'>
            <img src='./ouragency.jpg' alt='' />
          </div>
          
        </div>
        
        <YoutubeSearch />
      </section>
    </>
  )
}

export default About
