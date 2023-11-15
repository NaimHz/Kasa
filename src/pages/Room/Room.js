import { useParams } from 'react-router-dom'
import { useData } from '../../utils/hooks'
import '../../style/Room.scss'
import Slideshow from '../../components/Carousel/Slideshow'
import CollapseComponent from '../../components/Collapse/CollapseComponent'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StarComponent from '../../components/StarComponent/StarComponent'
import TagComponent from '../../components/TagComponent/TagComponent'

function Room() {
  const navigate = useNavigate()
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
            <TagComponent tags={roomItem.tags} />
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
            <StarComponent roomRating={roomItem.rating} />
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
        />
        <CollapseComponent
          id={1}
          open={openInfo}
          setOpen={setOpenInfo}
          text={
            <ul>
              {roomItem.equipments.map((equip, index) => (
                <li key={index}>{equip}</li>
              ))}
            </ul>
          }
          title="Équipements"
        />
      </div>
    </div>
  ) : null
}
export default Room
