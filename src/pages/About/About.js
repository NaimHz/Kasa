import '../../style/About.scss'
import { useState } from 'react'
import { Collapse } from 'react-collapse'
import button from '../../assets/CollapseButton.svg'

function About() {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  return (
    <div className="About">
      <div className="banner"></div>
      <div className="aboutelements">
        <div className="aboutelement">
          <p>Fiabilité</p>
          <button
            className={`aboutelement__button ${open ? 'activebutton' : ``}`}
            onClick={() => {
              setOpen(!open)
            }}
          >
            <img
              className="button--logo"
              src={button}
              alt="button de colapse"
            />
          </button>
        </div>
        <Collapse
          isOpened={open}
          style={{
            height: open ? 'auto' : 'auto',
            animation: '3s ease 1s 2',
            overflow: 'hidden',
          }}
        >
          <p className={`aboutelement__text ${open ? 'visible' : ``}`}>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
      </div>
      <div className="aboutelements">
        <div className="aboutelement">
          <p>Respect</p>
          <button
            className="aboutelement__button"
            onClick={() => setOpen2(!open2)}
          >
            <img
              className="button--logo"
              src={button}
              alt="button de colapse"
            />
          </button>
        </div>
        <Collapse isOpened={open2}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
      </div>
      <div className="aboutelements">
        <div className="aboutelement">
          <p>Service</p>
          <button
            className="aboutelement__button"
            onClick={() => setOpen3(!open3)}
          >
            <img
              className="button--logo"
              src={button}
              alt="button de colapse"
            />
          </button>
        </div>
        <Collapse isOpened={open3}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
      </div>
      <div className="aboutelements">
        <div className="aboutelement">
          <p>Sécurité</p>
          <button
            className="aboutelement__button"
            onClick={() => setOpen4(!open4)}
          >
            <img
              className="button--logo"
              src={button}
              alt="button de colapse"
            />
          </button>
        </div>
        <Collapse isOpened={open4}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </div>
    </div>
  )
}
export default About
