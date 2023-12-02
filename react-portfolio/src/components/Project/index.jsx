import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'

const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['M', 'y', ' ', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <div className="table-container">
            <div>
              <h2>Open Source</h2>
              <table border="1">
                <tr>
                  <td rowspan="2">Row 1, Cell 1</td>
                  <td colspan="2">Row 1, Cell 2-3</td>
                </tr>
                <tr>
                  <td>Row 2, Cell 2</td>
                  <td>Row 2, Cell 3</td>
                </tr>
                <tr>
                  <td colspan="3">Row 3, Cell 1-3</td>
                </tr>
              </table>
            </div>
            <div>
              <h2>Personal</h2>
              <table border="1">
                <tr>
                  <td>Row 1, Cell 1</td>
                  <td>Row 1, Cell 2</td>
                  <td>Row 1, Cell 3</td>
                  <td>Row 1, Cell 4</td>
                </tr>
                <tr>
                  <td>Row 2, Cell 1</td>
                  <td>Row 2, Cell 2</td>
                  <td>Row 2, Cell 3</td>
                  <td>Row 2, Cell 4</td>
                </tr>
                <tr>
                  <td>Row 3, Cell 1</td>
                  <td>Row 3, Cell 2</td>
                  <td>Row 3, Cell 3</td>
                  <td>Row 3, Cell 4</td>
                </tr>
                <tr>
                  <td>Row 4, Cell 1</td>
                  <td>Row 4, Cell 2</td>
                  <td>Row 4, Cell 3</td>
                  <td>Row 4, Cell 4</td>
                </tr>
                <tr>
                  <td>Row 5, Cell 1</td>
                  <td>Row 5, Cell 2</td>
                  <td>Row 5, Cell 3</td>
                  <td>Row 5, Cell 4</td>
                </tr>
                <caption>Table Caption</caption>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Project
