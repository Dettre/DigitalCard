import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>  
      <div className="container about-page">
        <div className="text-zone" >
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 's', 'p', 'e', 'c','i','a','l','i','d','a','d','e','s',' ',':']}
              idx={15}
            />
          </h1>
          
      </div>            
      <div className='images'>
            
          <img src={img1} alt='civel'/>
          <img src={img2} alt='trabalhista'/>
           
        
          </div>
           
           </div>
      <Loader type="line-scale" />
    </>
  )
}

export default About
