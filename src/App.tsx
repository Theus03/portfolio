import { Header } from "./components/Header"
import { AppRoutes } from "./Routes"

import './styles/global.scss'
import './styles/colors.scss'

function App() {
  return (
    <div>
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export default App
