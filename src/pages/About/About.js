import '../../style/About.scss'
import { useState } from 'react'
import CollapseComponent from '../../components/Collapse/CollapseComponent'

function About() {
  const [open, setOpen] = useState([false, false, false])
  return (
    <div className="About">
      <div className="aboutbanner"></div>
      <CollapseComponent
        id={0}
        open={open}
        setOpen={setOpen}
        text={
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        }
        title={'Fiabilité'}
      />
      <CollapseComponent
        id={1}
        open={open}
        setOpen={setOpen}
        text={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
        title={'Respect'}
      />
      <CollapseComponent
        id={2}
        open={open}
        setOpen={setOpen}
        text={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
        title={'Service'}
      />
      <CollapseComponent
        id={3}
        open={open}
        setOpen={setOpen}
        text={
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        }
        title={'Sécurité'}
      />
    </div>
  )
}
export default About
