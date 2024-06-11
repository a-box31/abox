import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Emoji from '../../assets/images/emoji.jpg'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <img src={Emoji} className="picture" alt="emote" />
          <p>
            📬 Get in touch , I'm all ears. Feel free to drop me a message using
            the form below, and I'll get back to you as soon as possible. Your
            ideas and inquiries are not just welcomed but encouraged. Let's turn
            your vision into a digital reality! 🌐💡
          </p>
          <div className="contact-form">
            <form>
              <ul>
                <div className="half-container">
                  <li className="half">
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      required
                    />
                  </li>
                </div>

                <li>
                  Selection Menu:
                  <select name="selectmenu">
                    <option value="Employer">Employer</option>
                    <option value="Friend">Friend</option>
                    <option value="Associate">Associate</option>
                  </select>
                </li>

                <li>
                  <input
                    placeholder="Subject"
                    name="Subject"
                    type="text"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="checkbox" name="agree" /> I agree to the terms
                  and conditions
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Contact //
