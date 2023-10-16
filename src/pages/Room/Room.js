import { useParams } from 'react-router-dom'
import { useData } from '../../utils/hooks'
import '../../style/Room.scss'
import Slideshow from '../../components/Carousel/Slideshow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import CollapseComponent from '../../components/Collapse/CollapseComponent'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Room() {
  const navigate = useNavigate()
  const range = [1, 2, 3, 4, 5]
  const param = useParams()
  const [openInfo, setOpenInfo] = useState([false, false])
  let data = useData()
  const roomItem = data.find((item) => param.id === item.id)
  useEffect(() => {
    if (roomItem === undefined) navigate('/Error')
  }, [roomItem, navigate])

  return roomItem ? (
    <div>
      <Slideshow pictures={roomItem.pictures} />
      <main className="roominfo">
        <div className="roominfo1">
          <h1 className="roominfo1__title">{roomItem.title}</h1>
          <p className="roominfo1__location">{roomItem.location}</p>
          <ul className="roominfo1__tags">
            {roomItem.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="roominfo2">
          <div className="roominfo2__host">
            <p className="roominfo2__host--name">{roomItem.host.name}</p>
            <div className="roominfo2__host--pic">
              <img src={roomItem.host.picture} alt={roomItem.host.picture} />
            </div>
          </div>
          <div className="roominfo2__rating">
            {' '}
            {range.map((rangeElem) =>
              roomItem.rating >= rangeElem ? (
                <span key={rangeElem.toString()}>
                  <FontAwesomeIcon icon={faStar} className="yestar" />
                </span>
              ) : (
                <span key={rangeElem.toString()}>
                  <FontAwesomeIcon icon={faStar} className="nostar" />
                </span>
              ),
            )}
          </div>
        </div>
      </main>
      <div className="roominfo3">
        <CollapseComponent
          id={0}
          open={openInfo}
          setOpen={setOpenInfo}
          text={<p>{roomItem.description}</p>}
          title="Description"
          className="slideshow"
        />
        <CollapseComponent
          id={1}
          open={openInfo}
          setOpen={setOpenInfo}
          text={roomItem.equipments.map((equip, index) => (
            <p key={index}>{equip}</p>
          ))}
          title="Équipements"
          className="slideshow"
        />
      </div>
    </div>
  ) : null
}
export default Room
