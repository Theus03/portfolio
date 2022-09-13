import myBooks from '../assets/myBooks.png'
import ultraflix from '../assets/ultraflix.png'
import myHouse from '../assets/myHouse.png'

export function Projects() {
    return(
        <div id="projects">
            <div className="container">
                <div className="header-projects">
                        <h1 className="title-projects">Projects</h1>
                        <div className="choose-projects">
                            <p className="text-projects">Front-End</p>
                            <p className="text-projects">UI Design</p>
                        </div>
                    </div>
                </div> 
                <div className="body-projects" id="body-projects">
                    <div className="FrontEnd">
                        <div className="col-one">
                            <img src={myBooks} alt="MyBooks - Project" />
                            <b>MyBooks</b>
                            <a href="https://theus03.github.io/my-books/">https://theus03.github.io/my-books/</a>
                        </div>
                        <div className="col-two">
                            <img src={ultraflix} alt="UltraFlix - Project" />
                            <b>UltraFlix</b>
                            <a href="https://theus03.github.io/ultraflix/">https://theus03.github.io/ultraflix/</a>
                        </div>
                        <div className="col-three">
                            <img src={myHouse} alt="MyHouse - Project" />
                            <b>MyHouse</b>
                            <a href=""></a>
                        </div>
                    </div>
                </div>
        </div>
    )
}