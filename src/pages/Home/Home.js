import '../../style/Home.scss'
import Banner from '../../components/Banner/Banner'

import RoomComponent from '../../components/RoomComponent/RoomComponent'

function Home() {
  return (
    <div className="Home">
      <Banner />
      <RoomComponent />
    </div>
  )
}

export default Home
