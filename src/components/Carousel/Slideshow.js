import { useState } from 'react'
import button from '../../assets/CollapseButton.svg'

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevSlide = () => {
    setCurrentIndex((index) => (index === 0 ? pictures.length - 1 : index - 1))
  }

  const goToNextSlide = () => {
    setCurrentIndex((index) => (index === pictures.length - 1 ? 0 : index + 1))
  }
  return (
    <div className="carousel">
      {pictures.length > 1 ? (
        <div>
          <button className="carousel__button next" onClick={goToNextSlide}>
            <img src={button} alt="bouton de carousel" />
          </button>
          <button className="carousel__button prev" onClick={goToPrevSlide}>
            <img src={button} alt="bouton de carousel" />
          </button>{' '}
        </div>
      ) : null}

      <img
        className="carousel__picture"
        src={pictures[currentIndex]}
        alt={pictures[currentIndex]}
      />
      {pictures.length > 1 ? (
        <p className="carousel__page">
          {currentIndex + 1}/{pictures.length}
        </p>
      ) : null}
    </div>
  )
}

export default Slideshow
