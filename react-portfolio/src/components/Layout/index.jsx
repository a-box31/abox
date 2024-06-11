import './index.scss'
import SideBar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    <div className="App">

      <SideBar />

      <div>
        <div className="tags top-tags">
          <div className="top-tag-html">&lt;html&gt;</div>
          <br />
          &lt;body&gt;
        </div>

        <div className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <div className="bottom-tag-html">&lt;/html&gt;</div>
        </div>
      </div>

      <div className="page"><Outlet /></div>
      
    </div>
  )
}

export default Layout
