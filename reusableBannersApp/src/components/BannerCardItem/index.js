import './index.css'

const BannerCardItem = props => {
  const {bannerCardsDatas} = props
  const {headerText, description, className} = bannerCardsDatas

  return (
    <div className={className}>
      <div className="inside-content">
        <h1 className="heading">{headerText}</h1>
        <p className="content">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </div>
    </div>
  )
}
export default BannerCardItem
