import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId} = props
  const {displayText, tabId} = tabDetails
  const onClickTabId = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" onClick={onClickTabId} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
