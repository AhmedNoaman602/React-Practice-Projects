import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabId = () => {
    updateTabId(tabId)
  }
  const newclassName = isActive ? 'active-tab-btn' : ' '

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onClickTabId}
        className={`tab-btn ${newclassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
