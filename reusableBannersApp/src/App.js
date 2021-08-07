import BannerCardItem from './components/BannerCardItem/index'
import './App.css'

const bannerCardsData = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1 card',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2 card',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3 card',
  },
]

const App = () => (
  <div className="container-bg">
    {bannerCardsData.map(eachItem => (
      <BannerCardItem bannerCardsDatas={eachItem} key={eachItem.id} />
    ))}
  </div>
)

export default App
