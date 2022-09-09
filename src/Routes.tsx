import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home } from "./pages/Home";    
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Resume } from "./pages/Resume";
import { Skills } from "./pages/Skills";
import { Editors } from './components/Editors';
import { Design } from './components/Design';

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/skills" element={<Skills/> }></Route>
                <Route path="/skills/editors" element={<Editors/>}></Route>
                <Route path="/skills/design" element={<Design/>}></Route>
                <Route path="/projects" element={<Projects/> }></Route>
                <Route path="/resume" element={<Resume/> }></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    )
}