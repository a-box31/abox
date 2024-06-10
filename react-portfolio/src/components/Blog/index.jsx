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
              <li>
                <a href="#4">Article 4</a>
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
              <h2>Selmer Bot 2023</h2>
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRWFf4d9G_W1zkDzRJzL1K-_KptxI0bpyX2OszentrWvS100FcTgGGQQX2Pj057B_52dXg8KvjCY0gH/embed?start=true&loop=true&delayms=1000"
                frameborder="0"
                width="800"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </article>
            <article id="2">
              <h2>
                Unlocking Code: Navigating the Digital Knowledge Oasis of Stack
                Overflow
              </h2>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vQeOjbM2-hzufQ7-Sr1pRJYc5HmhzQgn2FS4BTZ8DXAnsxJZc3aBDuhE8tEvpCzoxPmV3uzhbXplr0-/pub?embedded=true"
                frameborder="0"
                width="800"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </article>

            <article id="3">
              <h2>
                The Power of Visual Storytelling: Analyzing Human Existence
              </h2>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vQAFWsQZ3HXDZiR2mkuRb5tadUoioDiMXth1rG2LSEvsCGMJ3IITpmInC6oKxXCRXe8uDFfBFQ-TVK3/pub?embedded=true"
                frameborder="0"
                width="800"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </article>
            <article id="4">
              <h2>
                The Power of Visual Storytelling: Analyzing Human Existence
              </h2>
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vSXnVea8zjOBOPdtusBw_O95IVxsJ77s6prYVUulBvWmL-hpg0Agc0Z01YSaxZ6o19YwtDSVXh2Jx8I/pub?embedded=true"
                frameborder="0"
                width="800"
                height="500"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
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
