import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import {useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

import OscarLogo from '../../assets/images/oscar_handyman.svg'
import PhoenixLogo from '../../assets/images/phoenix_bionics.png'
import JeanJacketLogo from '../../assets/images/arte.svg'
import BowowLogo from '../../assets/images/bowow.jfif'

const Projects = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect( () => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
      <>
        <div className="container projects-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
          </div>
          <div className="projects-container">
            <ProjectCard
              href="https://oscar-handyman.onrender.com/"
              title="Oscar Handyman"
              imgSrc={OscarLogo}
              description="Implemented a full stack EJS-Express website and 
                           a google business profile for a Latino owned sole 
                           propreitorship."
            />
            <ProjectCard
              href="https://phoenixbionics.onrender.com/#"
              title="Phoenix Bionics"
              imgSrc={PhoenixLogo}
              description="Open Source Hand Project implementing Machine Learning
                           from piezoelectric sensors into a mechanical output, 
                           and the website was built using React"
            />
            <ProjectCard
              href="https://arte-qz7j.onrender.com/"
              title="Arte"
              imgSrc={JeanJacketLogo}
              description="Implemented a full stack EJS-Express website and 
                           a online e-commerce storefront and backend with stripe
                           for another Latino owned sole propreitorship selling 
                           templates to paint on jean jackets"
            />
            <ProjectCard
              href="https://official-bowow-music.onrender.com/"
              title="Bowow Music"
              imgSrc={BowowLogo}
              description="Implemented a full stack EJS-Express website with 
                           parallax scroll and AI generated images for a 
                           Music Producer and DJ, allowing users to play his 
                           music."
            />
          </div>
        </div>
        <Loader type="triangle-skew-spin" />
      </>
    )
}

export default Projects