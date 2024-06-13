import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import Emoji from '../../assets/images/emoji.jpg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        'service_mgpkho9',
        'template_yt18h29',
        form.current,
        'xPt6NtiZdJsmXk0dA'
      )
      .then(
        (result) => {
          alert(result.text)
        },
        (error) => {
          alert(error.message)
        }
      )

  };
  

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
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <div className="half-container">
                  <li className="half">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      type="email"
                      name="from_email"
                      placeholder="email"
                      required
                    />
                  </li>
                </div>

                <li>
                  Selection Menu:
                  <select name="relation">
                    <option value="Employer">Employer</option>
                    <option value="Friend">Friend</option>
                    <option value="Associate">Associate</option>
                  </select>
                </li>

                <li>
                  <input
                    placeholder="Subject"
                    name="subject"
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
