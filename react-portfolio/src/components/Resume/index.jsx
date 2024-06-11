import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container resume-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <iframe className="resume" src="https://docs.google.com/document/d/e/2PACX-1vTVPPGlooq-xpmcnC7meFs3UDXhSSXVoenpk_kaddPDuhJzhhKqcMQb_xqO9UfSIRsUBVlcub3cAwQw/pub?embedded=true"></iframe>

        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Resume