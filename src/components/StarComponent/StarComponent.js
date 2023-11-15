import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../../style/Room.scss'

function StarComponent({ roomRating }) {
  const range = [1, 2, 3, 4, 5]
  return (
    <div>
      {range.map((rangeElem) =>
        roomRating >= rangeElem ? (
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
  )
}
export default StarComponent
