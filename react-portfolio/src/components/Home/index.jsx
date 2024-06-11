import './index.scss'
import LogoTitle from '../../assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['b', 'i', 'n', ' ', 'T', 'h', 'o', 'm', 'a', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(()=>{
      return setLetterClass('text-animate-hover')
    },4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Comp Sci Student / Seidenberg School / Web Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />

      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Home
