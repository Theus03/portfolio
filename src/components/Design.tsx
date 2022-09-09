import Figma from '../assets/vsCode.png';
import AdobeXD from '../assets/visual-basic.png';
import Canva from '../assets/androidStudio.png';
import FlatIcon from '../assets/pycharm.png';
import Lr from '../assets/sublime.png';
import AfterEffects from "../assets/eclipse.png";
import Photoshop from "../assets/netbeans.png";


export function Design() {
    return (
        <div id="skills">
            <div className="container">
                <div className="header-skills">
                    <h1 className="title-skills">My Skills</h1>
                    <div className="choose-skills">
                        <a href="/skills" className="text-skills">Languages</a>
                        <a href="/skills/editors" className="text-skills">Editors</a>
                        <a href='/skills/design' className="text-skills">Design</a>
                    </div>
                </div>
                <div className="body-skills" id="body-skills">
                    <div className="col-one">
                        <img src={Figma} id="vsCode" alt="Visual Studio Code" />
                        <img src={AdobeXD} alt="Visual Studio" />
                        <img src={Canva} alt="Android Studio" />
                        <img src={FlatIcon} alt="Pycharm" />
                        <img src={Lr} alt="Sublime Text" />
                    </div>
                    <div className="col-two">
                        <img src={AfterEffects} alt="Sublime Text" />
                        <img src={Photoshop} alt="Sublime Text" />
                    </div>
                </div>
            </div>
        </div>
    )
}