import styles from './navigation-travel.module.css'

const NavigationTravel = ({ updateFunction }) => {
  return (
    <nav className={styles.menu}>
      <p className={styles.menuItem} onClick={() => updateFunction("")}>Home</p>
      <p className={styles.menuItem}>Fast Go</p>
      <p className={styles.menuItem}>Fresh Bite</p>
      <div className={styles.topnav}>
        <input type="text" placeholder="Search.." />
      </div>
    </nav>
  )
}

export default NavigationTravel