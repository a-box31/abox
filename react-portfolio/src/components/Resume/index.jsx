import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import resume from '../../assets/Internship Resume - Purpose.pdf'

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
              strArray={['M', 'y', ' ', 'R', 'e', 's', 'u', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <object
            className="resume"
            type="application/pdf"
            data={resume}
            // src="https://docs.google.com/document/d/e/2PACX-1vTVPPGlooq-xpmcnC7meFs3UDXhSSXVoenpk_kaddPDuhJzhhKqcMQb_xqO9UfSIRsUBVlcub3cAwQw/pub?embedded=true"
          ></object>
          
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Resume
