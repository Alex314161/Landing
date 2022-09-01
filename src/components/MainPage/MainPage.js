import React from "react";
import name from "../../img/background_text.png";
import Timer from "../functions/timer/timer";
import ProjectBlock from "../project-block/project-block";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import logo from "../../img/logo.svg";
import organizer2 from "../../img/ICOM_NC_Russia2 1.svg";
import organizer3 from "../../img/logo_for_movie 1.svg";
import suppotslogo1 from "../../img/supportslogo1.svg";
import suppotslogo2 from "../../img/supportslogo2.svg";
import suppotslogo3 from "../../img/supportslogo3.svg";

export default function MainPage(){
    return(
        <div>
            <main className="Content">

                <div className="Stock">
                    <div className="Stock__description">
                        <h2>Всероссийская инклюзивная акция</h2>
                        <img src={name} alt="Stock name"/>
                        <p className="Stock_text_form">Выставки, экскурсии, концерты, театральные квесты
                            и мастер-классы для детей и взрослых, с инвалидностью и без</p>
                        <p className="Stock__date">18-20 апреля 2023</p>
                        <span>До начала осталось: <br/> <span id="Stock__timer"><Timer/> дней</span></span><br/>
                        <button className="orange-button">Афиша мероприятий</button>
                    </div>
                </div>

                <div className="Text">
                    <p>Акция «Музей для всех” пройдет в России в третий раз. В 2017 году акция объединила
                        более 250 российских музеев и 13000 участников, а в 2018 году в ней приняли участие 360 музеев
                        и 16700 человек со всей страны. Мы надеемся, что количество наших единомышленников будет расти!
                        <br/><br/>
                        В рамках акции музеи приглашают посетителей на выставки, экскурсии, концерты, театральные
                        квесты и мастер-классы, адаптированные или созданные с участием людей с инвалидностью.
                        <br/><br/>
                        Задача акции — привлечь внимание широкой общественности к значимости равноправного
                        участия всех людей в культурной жизни. В этот день музеи приглашают всех тех, кто поддерживает
                        развитие инклюзии в нашей стране.</p>
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
                    <button className="orange-button">Афиша мероприятий</button>
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
        </div>
    )
}