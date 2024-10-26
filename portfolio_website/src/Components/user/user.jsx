import React from 'react'
import styles from "./user.module.css";
import { getImageUrl } from '../../utils'

export const User = () => {
  return (
   <section className={styles.container}>
    <div className={styles.content}>

        <h1 className={styles.title}>
            Hello, I'm Kim Nguyen.
        </h1>
            <p className={styles.description}>
            I'm a second year CS student. 
            Check out my work!
            </p>

    </div>

    <img src= {getImageUrl("user/pic_of_kim.png")} 
    className={styles.userImg} alt="pic of me"/>

    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
   </section>
  )
}
