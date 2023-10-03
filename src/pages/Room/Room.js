import { useParams } from 'react-router-dom'
import { useData } from '../../utils/hooks'
import '../../style/Room.scss'

function Room() {
  const param = useParams()
  let data = useData()
  const roomItem = data.find((item) => param.id === item.id)

  return <div></div>
}
export default Room
