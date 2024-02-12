

import './App.css'
import Page from './component/page/Page'
import Sidebar from './component/sidebar/Sidebar'

function App() {


  return (
    <>
      <div className="d-flex app">
        <Sidebar />
        <Page />
      </div>

    </>
  )
}

export default App
