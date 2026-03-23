import styles from './category-travel.module.css'
import { CameraIcon } from "@phosphor-icons/react"
import { IslandIcon } from "@phosphor-icons/react"
import { BoatIcon } from "@phosphor-icons/react"
import { PersonSimpleSkiIcon } from "@phosphor-icons/react"
import { ShoppingBagOpenIcon } from "@phosphor-icons/react"
import { HeartbeatIcon } from "@phosphor-icons/react"

const CategoryTravel = () => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.camera}>
        <CameraIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Excursions</h3>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.beach}>
        <IslandIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Beach Vacations</h3>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.boat}>
        <BoatIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Cruises</h3>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.ski}>
        <PersonSimpleSkiIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Alpine Skiing</h3>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.shopping}>
        <ShoppingBagOpenIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Shopping</h3>
        <button className={styles.button}>Explore</button>
      </div>
      <div className={styles.health}>
        <HeartbeatIcon size={120} weight="light" />
        <h3 className={styles.infoText}>Health</h3>
        <button className={styles.button}>Explore</button>
      </div>
    </div>

  )
}

export default CategoryTravel