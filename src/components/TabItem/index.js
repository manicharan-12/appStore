import './index.css'

const TabItem = props => {
  const {eachtab, updateActiveTabId, isActive} = props
  const {tabId, displayText} = eachtab

  const sendTabid = () => {
    updateActiveTabId(tabId)
  }
  const activeTabItem = isActive ? 'hightlight-color' : 'list-items'
  const bordercolor = isActive ? 'hightlight-color-border' : 'list-items'
  return (
    <li>
      <button type="button" onClick={sendTabid}>
        <h1 className={`${activeTabItem}`}>{displayText}</h1>
      </button>
      <hr className={`${bordercolor}`} />
    </li>
  )
}

export default TabItem
