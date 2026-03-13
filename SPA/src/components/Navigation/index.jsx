import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.menu}>
      <p className={styles.menuItem}>Home</p>
      <p className={styles.menuItem}>Fast Go</p>
      <p className={styles.menuItem}>Fresh Bite</p>
    </nav>
  )
}

export default Navigation