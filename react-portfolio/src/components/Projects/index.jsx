import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from "../AnimatedLetters"
import {useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'

import OscarLogo from '../../assets/images/oscar_handyman.svg'
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
              href="https://bistate-carpentry-llc.onrender.com/"
              title="Bistate Carpentry LLC"
              imgSrc={OscarLogo}
              description="Implemented a full stack EJS-Express website and 
                           a google business profile for a Latino owned sole 
                           propreitorship."
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
            <ProjectCard
              href="https://cloudpulse.duckdns.org/"
              title="CloudPulse"
              description="Personal cloud service that implemented a full stack Next.js website that connects
                           to a local Express server to serve out files, upload,
                           download, and delete files from a local directory from 
                           your computer."
            />
          </div>
        </div>
        <Loader type="triangle-skew-spin" />
      </>
    )
}

export default Projects