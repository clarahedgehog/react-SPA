import styles from './logo-travel.module.css'
import { AirplaneIcon } from "@phosphor-icons/react"

const LogoTravel = () => {
  return (
    <div className={styles.logo}>
      <AirplaneIcon size={32} color="#faf4f4" />
      <h3 className={styles.logoTitle}>Travel</h3>
    </div>
  )
}

export default LogoTravel