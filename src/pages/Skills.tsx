import Img from 'react-image';

import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import csharp from '../assets/c-sharp.png';
import java from '../assets/java.png';
import php from "../assets/php.png";
import python from "../assets/python.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql-server.png";
import node from "../assets/node-js.png";

import vsCode from '../assets/vsCode.png';
import visualStudio from '../assets/visual-basic.png';
import androidStudio from '../assets/androidStudio.png';
import Pycharm from '../assets/pycharm.png';
import SublimeText from '../assets/sublime.png';
import Eclipse from "../assets/eclipse.png";
import Netbeans from "../assets/netbeans.png";

export function Skills() {
    return (
        <div id="skills">
            <div className="container">
                <div className="header-skills">
                    <h1 className="title-skills">My Skills</h1>
                    <div className="choose-skills">
                        <p className="text-skills">Languages</p>
                        <p className="text-skills">Editors</p>
                        <p className="text-skills">Design</p>
                    </div>
                </div>

            </div>
            <div id="skills">
                <div className="container">
                    <div className="header-skills">
                        <h1 className="title-skills">My Skills</h1>
                        <div className="choose-skills">
                            <a href="/skills" className="text-skills">Languages</a>
                            <a href="/skills/editors" className="text-skills">Editors</a>
                            <p className="text-skills">Design</p>
                        </div>
                    </div>
                    <div className="body-skills" id="body-skills">
                        <div className="Languages">
                            <div className="col-one">
                                <img src={html} id="html5" alt="HTML 5" />
                                <img src={css} alt="CSS 3" />
                                <img src={js} alt="JavaScript" />
                                <img src={csharp} alt="C-Sharp" />
                                <img src={java} alt="Java" />
                            </div>
                            <div className="col-two">
                                <img src={php} alt="PHP" />
                                <img src={python} alt="Python" />
                                <img src={mysql} alt="MySql" />
                                <img src={sql} alt="Sql" />
                                <img src={node} alt="NodeJS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
