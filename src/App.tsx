import { Header } from "./components/Header"
import ThemeSwitcher  from "./components/SwitchTheme";
import { AppRoutes } from "./Routes"


import './styles/global.scss'
import './styles/colors.scss'
import dark from "./themes/dark"
import light from "./themes/light"
import { Home } from "./pages/Home";

export {dark, light};

function App() {    
    return (
        <div>
          <Header/>
          <AppRoutes/>
        </div>
    )
  }

export default App
