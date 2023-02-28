
import './App.css'
import Button from './components/Button'
import Message from './components/Message'
import pharases from './data/phrases.json'
import { useState, useEffect } from 'react'




function App() {


  const backgroundImage = [ "url(/fondo1.jpg)", "url(/fondo2.jpg)", "url(/fondo3.jpg)", "url(/fondo4.jpg)", "url(/fondo5.JPG)", "url(/fondo6.JPG)" ]

  const [index, setIndex] = useState(0)
  const [indexa, setIndexa] = useState(0)

  const changeIndex = () => {
    setIndex(Math.floor(Math.random()*pharases.length))
    setIndexa(Math.floor(Math.random()*backgroundImage.length))
    setIsVisible(!isVisible)
  }

  const [isVisible, setIsVisible] = useState ( true )
  // const prueba = () => {setIsVisible(!isVisible)}

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => {
        setIsVisible(true)
      }, 3000);
    }
  }, [isVisible])


  return (
    <div className="App" style={{backgroundImage: backgroundImage[indexa]}}>
      <div className='container__cookie'>
        <div>
          <h1>GALLETAS DE LA <br/> FORTUNA</h1>
        </div>
      <Message
      dataPharase = { pharases[index].phrase }
      dataAuthor = { pharases[index].author }
      animation = { isVisible ? 'paper' : ' paper animationScale' }/>
      <Button
      change = { changeIndex }
      // pp = { prueba }
       />
      </div>
    </div>
  )
}

export default App
