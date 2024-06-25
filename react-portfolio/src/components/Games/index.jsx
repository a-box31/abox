import {useState, useEffect } from 'react'
import AnimatedLetters from "../AnimatedLetters"
import Loader from 'react-loaders'
import "./index.scss"

const Games = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
      setTimeout(() => {
          return setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

    return (
      <>
        <div className="container games-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={['G', 'a', 'm', 'e', 's']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
          </div>
          <div className="projects-container">
            <iframe
              frameborder="0"
              src="https://itch.io/embed/2778117"
              className='game-iframe'
            >
              <a href="https://abox31.itch.io/abox-rpg">Swamped by abox31</a>
            </iframe>
          </div>
        </div>
        <Loader type="triangle-skew-spin" />
      </>
    )
}

export default Games