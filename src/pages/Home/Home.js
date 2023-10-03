import { Link } from 'react-router-dom'
import '../../style/Home.scss'
import { useData } from '../../utils/hooks'

function Home() {
  let data = useData()

  return (
    <div className="Home">
      <div className="banner">
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </div>
      <div className="main">
        <ul className="main__rooms">
          {data.map((item) => (
            <div key={item.id} className="main__rooms--room">
              <Link to={`Room/${item.id}`}>
                <p className="room--title">{item.title}</p>
                <img
                  className="room--cover"
                  src={item.cover}
                  alt={item.title}
                />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
