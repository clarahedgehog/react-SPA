import styles from './header-travel.module.css'
import LogoTravel from '../LogoTravel'
import NavigationTravel from '../NavigationTravel'

const HeaderTravel = ({ updateFunction }) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.header}>
        <LogoTravel />
        <NavigationTravel updateFunction={updateFunction} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}><span>Santorini, </span><span className={styles.secondTitle}>Greece</span></h1>
        <p className={styles.text}>Santorini - one of the Cycladic islands belonging to Greece in the Aegean Sea. The hilly landscape of the island was formed as a result of the strongest volcanic eruption in the XVI century BC.</p>
        <button className={styles.button}>Explore More</button>
      </div>
    </div>

  )
}

export default HeaderTravel