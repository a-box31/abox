import './index.scss'
import PersonalPhoto from '../../assets/images/personal_photo.jpeg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            👋 Hello there! I'm Abin, a passionate web developer currently
            pursuing my degree at Pace University. 🎓 💻 Armed with a love for
            coding and a knack for problem-solving, I dived into the world of
            visually appealing user interfaces and implementing robust back-end
            functionalities, I find joy in every line of code I write.
          </p>
          <img src={PersonalPhoto} className='picture' alt="Personal Photo"/>
          <p>
            🌐 My journey into the realm of technology currently resides at Pace
            University, where I am honing my skills and staying ahead of the
            ever-evolving digital landscape. The dynamic environment at Pace has
            not only equipped me with the latest industry knowledge but has also
            fostered a spirit of collaboration and innovation. 🚀
          </p>
          <p>
            🔧 My goal is to leverage my skills and knowledge to contribute
            meaningfully to the ever-expanding world of web development. Let's
            connect and explore the boundless possibilities of the digital
            frontier together!🌐✨
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default About
