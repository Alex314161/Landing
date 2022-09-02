import React from "react";
import styles from './project-block.module.css'
import line from '../../img/Line.svg'

function ProjectBlock(props){
    return(
        <div className={styles.container}>
            <img src={props.img} alt="img"/>
            <div className={styles.block_bgrnd}>
                <p>{props.text}</p>
                <div className={styles.block}>
                    <img src={line} alt="line"/>
                    <a href="1">Узнать больше</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectBlock;