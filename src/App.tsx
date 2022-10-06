import { Header } from "./components/Header"
import { SwitchTheme } from "./components/SwitchTheme"
import { AppRoutes } from "./Routes"


import './styles/global.scss'
import './styles/colors.scss'

function App() {
  return (
      <div>
        <Header/>
        <SwitchTheme/>
        <AppRoutes/>
      </div>
  )
}

export default App
