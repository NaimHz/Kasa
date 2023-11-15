import '../../style/Room.scss'
function TagComponent({ tags }) {
  return (
    <div>
      {tags.map((tag, index) => (
        <li key={index}>{tag}</li>
      ))}
    </div>
  )
}
export default TagComponent
