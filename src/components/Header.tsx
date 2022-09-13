import { Link } from "react-router-dom"

export function Header() {
    return(
        <div id="header">
            <h1 className="title">Matheus Souza</h1>
            <h2 className="subTitle">Front-End Software Developer</h2>
            <nav>
                <ul>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>    
                </ul>
            </nav>
        </div>
    )
}