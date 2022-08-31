import './App.css';
import logo from './img/logo.svg'
import name from './img/background_text.png'
import project1 from './img/project1.png'
import project2 from './img/project2.png'
import project3 from './img/project3.png'
import organizer2 from './img/ICOM_NC_Russia2 1.svg'
import organizer3 from './img/logo_for_movie 1.svg'
import suppotslogo1 from './img/supportslogo1.svg'
import suppotslogo2 from './img/supportslogo2.svg'
import suppotslogo3 from './img/supportslogo3.svg'
import youtube from './img/youtube 1 1.svg'
import vk from './img/VK1 1.svg'
import facebook from './img/facebook1 1.svg'
import instagram from './img/inst1 1.svg'
import ProjectBlock from "./components/project-block";

function App() {
    return (
        <div className="App">
            <header className="Navbar">
                <img src={logo} alt="logo"/>
                <div className="Navbar__list">
                    <a href="">Акция</a>
                    <a href="">Афиша</a>
                    <a href="">Организаторы</a>
                    <a href="">спецпроекты</a>
                    <a href="">партнеры</a>
                </div>
            </header>
            <main className="Content">

                <div className="Stock">
                    <div className="Stock__description">
                        <h2>Всероссийская инклюзивная акция</h2>
                        <img src={name} alt="Stock name"/>
                        <p className="Stock_text_form">Выставки, экскурсии, концерты, театральные квесты
                            и мастер-классы для детей и взрослых, с инвалидностью и без</p>
                        <p className="Stock__date">18-20 апреля 2020</p>
                        <span>До начала осталось: <br/> <span id="Stock__timer">117 дней</span></span><br/>
                        <button>Афиша мероприятий</button>
                    </div>
                </div>

                <div className="Text">
                    <p>Акция «Музей для всех”  пройдет в России  в третий раз. В 2017 году акция объединила
                        более 250 российских музеев и 13000 участников, а в 2018 году в ней приняли участие 360 музеев
                        и 16700 человек со всей страны. Мы надеемся, что количество наших единомышленников будет расти!
                        <br/><br/>
                        В рамках акции музеи приглашают посетителей на выставки, экскурсии, концерты, театральные
                        квесты и мастер-классы, адаптированные или созданные с участием людей с инвалидностью.
                        <br/><br/>
                        Задача акции — привлечь внимание широкой общественности к значимости равноправного
                        участия всех людей в культурной жизни. В этот день музеи приглашают всех тех, кто поддерживает развитие инклюзии в нашей стране.</p>
                </div>

                <div className="Projects">
                    <div className="Projects__caption">
                        <h1>Проекты</h1>
                    </div>
                    <div className="Projects__item">
                        <ProjectBlock img={project1} text="“Неудобные вопросы об инвалидности“"/>
                        <ProjectBlock img={project2} text="“Как я понял, что у меня инвалидность”"/>
                        <ProjectBlock img={project3} text="“Как помогает ваше домашнее животное в жизни“"/>
                    </div>
                </div>

                <div className="Afish">
                    <button>Афиша мероприятий</button>
                </div>

                <div className="Organizers">
                    <h2>Организаторы</h2>
                    <div className="Organizers__logo">
                        <img src={logo} alt="1organizer"/>
                        <img src={organizer2} alt="2organizer"/>
                        <img src={organizer3} alt="3organizer"/>
                    </div>
                    <div className="Organizers__supports">
                        <div className="Supports__logo">
                            <h2>При поддержке</h2>
                            <div className="Supports__logo-center">
                                <img src={suppotslogo1} alt="suppotslogo1"/>
                                <img src={suppotslogo2} alt="suppotslogo2"/>
                                <img src={suppotslogo3} alt="suppotslogo3"/>
                            </div>
                        </div>
                        <div className="Partners__logo">
                            <h2>Партнеры</h2>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="Contacts">
                <p id="contacts-bold">inmuseumrus@gmail.com</p>
                <p>2019 © Инклюзивный музей</p>
                <div className="Contacts__logo">
                    <img src={youtube} alt="youtube"/>
                    <img src={vk} alt="vk"/>
                    <img src={facebook} alt="facebook"/>
                    <img src={instagram} alt="instagram"/>
                </div>
            </footer>
        </div>
    );
}

export default App;
