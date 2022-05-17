import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'gmail',
        'template_YeJhZkgb',
        form.current,
        'your-token'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a','t','o']}
              idx={15}
            />
          </h1>
          <p>
       "A advocacia não é profissão de covardes !
       A função da defesa consiste em ser, ao lado do seu acusado,
       inocente ou criminoso, a voz dos seus direitos legais.
      " <b> (Rui Barbosa)</b>
       <br/>
         </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Nome" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                {/* <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li> */}
                <li>
                  <textarea
                    placeholder="Mensagem"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
         
        <div className='midia'>
          <a
            href="https://www.facebook.com/assessoria.raquelfreitas"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        
          <a
            href="http://api.whatsapp.com/send?1=pt_BR&phone=5521982701500"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} color="#4d4d4e" />
          </a>
        
                  
          <a href="https://instagram.com/advocaciafreitasenascimento?igshid=YmMyMTA2M2Y=" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
          </div>
          </div>
          <div className="map-wrap">
            <h2> Minha localização:</h2>
          <MapContainer center={[-22.973519, -43.333252]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-22.973519, -43.333252]}>
              <Popup>Raquel Freitas trabalha aqui, tenho a solução para o seu problema ! :)</Popup>
            </Marker>
          </MapContainer>
          
            </div>
        
      </div>
      
      <Loader type="line-scale" />
    </>
  )
}

export default Contact
