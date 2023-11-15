import { Link } from 'react-router-dom'
import { useData } from '../../utils/hooks'

function RoomComponent() {
  let data = useData()
  return (
    <div className="main">
      <ul className="main__rooms">
        {data.map((item) => (
          <div key={item.id} className="main__rooms--room">
            <Link to={`Room/${item.id}`}>
              <p className="room--title">{item.title}</p>
              <img className="room--cover" src={item.cover} alt={item.title} />
            </Link>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default RoomComponent
