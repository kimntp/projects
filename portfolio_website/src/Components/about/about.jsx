import React, {useState} from 'react'
import { getImageUrl } from '../../utils'
import styles from "./about.module.css";
import { VscArrowCircleLeft, VscArrowCircleRight } from "react-icons/vsc";

export const About = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
      };
      const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
      };
  return ( 
   
  <section className={styles.container} id= "about">
<h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <div className={styles.reel}>
                <VscArrowCircleLeft 
                onClick={prevSlide} 
                className={`${styles.arrow}  ${styles.arrowLeft}`}/>

                {data.map((pic, index) => {
                return <img className={slide === index ? `${styles.slide}` : `${styles.slide} ${styles.slideHidden}`} 
                src={getImageUrl(pic.imgSrc)} 
                alt={pic.alt} key ={index}/>
            } )}
            <VscArrowCircleRight 
            onClick={nextSlide} 
            className={`${styles.arrow} ${styles.arrowRight}`}/>

            <span className= {styles.buttons}>
                {data.map((_, index)=> {
                    return (<button key ={index} onClick={() => setSlide(index)} 
                    className={slide === index ? styles.button : `${styles.button} ${styles.buttonInactive}`}>
                    </button>
               ) })}
            </span>
            </div> 
         <ul className={styles.aboutItems}>
            <li className={styles.skills}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon"/>
                <div className= {styles.skillsText}>
                    <h3>Student</h3>
                    <p>
                    I am currently enrolled in Data Structures and Systems Programming courses and I actively participate in the ACM-W and Capture the Flag 'CTF' clubs at my school.                    </p>
                </div>
            </li>
            <li className={styles.skills}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon"/>
                <div className={styles.skillsText}>
                    <h3>'Where Innovative Ideas Meet Technical Execution'</h3>
                    <p>
                     My background in software development allows me to effectively bridge the gap between user needs and engineering teams to create valuable products.
                    </p>
                </div>
            </li>
         </ul>
    </div>
  </section>

  )
}
