import React from "react";
import styles from './css-modules/project-block.module.css'
import line from '../img/Line.svg'

function ProjectBlock(props){
    return(
        <div className={styles.container}>
            <img src={props.img}/>
            <div className={styles.block_bgrnd}>
                <p>{props.text}</p>
                <div className={styles.block}>
                    <img src={line} alt="line"/>
                    <a href="">Узнать больше</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectBlock;