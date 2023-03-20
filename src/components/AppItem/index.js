// Write your code here
import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {appName, imageUrl} = eachapp
  return (
    <li className="app-list">
      <img src={imageUrl} alt={appName} className="logo-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
