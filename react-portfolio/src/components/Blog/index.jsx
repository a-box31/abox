import React, { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Blog = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container blog-page webpage">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['M', 'y', ' ', 'B', 'l', 'o', 'g']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <nav>
            <ul>
              <li>
                <a href="#1">Article 1</a>
              </li>
              <li>
                <a href="#2">Article 2</a>
              </li>
              <li>
                <a href="#3">Article 3</a>
              </li>
            </ul>
          </nav>

          <p>
            🚀 Welcome to Abin's Web Wonderland – a cozy corner of the internet
            where coding dreams come to life! Whether you're a coding
            connoisseur or a curious beginner, this blog is your digital diary
            to document the thrilling journey of a web developer. Join me as we
            navigate the ever-changing landscape of web development, where each
            line of code tells a unique story. From the highs of a perfectly
            executed CSS animation to the triumphs of conquering a challenging
            JavaScript function, every post is a glimpse into the world behind
            the screen. 🌐💻✨
          </p>

          <div className="collection">
            <article id="1">
              <h2>
                Unlocking Code: Navigating the Digital Knowledge Oasis of Stack
                Overflow
              </h2>
              <iframe
                src="https://docs.google.com/document/d/14SUyiXS31iPr5lu7Zp39rQWSC3PEHppcc72N0OqHgMA/edit?usp=sharing"
                width="800"
                height="500"
              ></iframe>
            </article>

            <article id="2">
              <h2>
                The Power of Visual Storytelling: Analyzing Human Existence
              </h2>
              <iframe
                src="https://docs.google.com/document/d/1ze3gSlj5z_d5XergE0YL9-G3kBePDRlGu72AuBzBCGg/edit?usp=sharing"
                width="800"
                height="500"
              ></iframe>
            </article>

            <article id="3">
              <h2>Selmer Bot 2023</h2>
              <iframe
                src="https://docs.google.com/presentation/d/1E5NnVq0HG_uJqUtEGgNay1jBtp_8WrN_odrkef_ctMM/edit?usp=sharing"
                width="800"
                height="500"
                focus="{preventScroll: true}"
              ></iframe>
            </article>
          </div>
        </div>
      </div>
      <Loader type="triangle-skew-spin"></Loader>
    </>
  )
}

export default Blog
