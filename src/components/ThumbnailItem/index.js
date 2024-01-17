// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {ThumbnailItemDetails, updateImg} = props
  const {id, thumbnailUrl, thumbnailAltText} = ThumbnailItemDetails

  const getId = () => {
    updateImg(id)
  }

  return (
    <div>
      <li className="lists">
        <button type="button" className="button" onClick={getId}>
          <img alt={thumbnailAltText} src={thumbnailUrl} />
        </button>
      </li>
    </div>
  )
}

export default ThumbnailItem
