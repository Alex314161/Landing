import React from "react";
import youtube from "../../img/youtube 1 1.svg";
import vk from "../../img/VK1 1.svg";
import facebook from "../../img/facebook1 1.svg";
import instagram from "../../img/inst1 1.svg";
import styles from './css/FooterPageStyles.module.css'

export default function Footer(){
    return(
        <footer className={styles.Contacts}>
            <span> inmuseumrus@gmail.com</span>
            <p><a href="https://in-museum.ru">2019 © Инклюзивный музей</a></p>
            <div className={styles.Contacts__logo}>
                <a href="https://www.youtube.com"><img src={youtube} alt="youtube"/></a>
                <a href="https://vk.com/v_lihachev"><img src={vk} alt="vk"/></a>
                <a href="https://www.facebook.com"><img src={facebook} alt="facebook"/></a>
                <a href="https://www.instagram.com"><img src={instagram} alt="instagram"/></a>
            </div>
        </footer>
    )
}