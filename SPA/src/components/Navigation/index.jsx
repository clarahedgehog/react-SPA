import styles from './navigation.module.css'

const Navigation = ({ updateFunction }) => {
  return (
    <nav className={styles.menu}>
      <p className={styles.menuItem} onClick={() => updateFunction("")}>Home</p>
      <p className={styles.menuItem} onClick={() => updateFunction("FastGo")}>Fast Go</p>
      <p className={styles.menuItem} onClick={() => updateFunction("Travel")}>Travel</p>
    </nav>
  )
}

export default Navigation