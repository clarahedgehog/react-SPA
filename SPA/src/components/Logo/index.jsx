import styles from './logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImage} src="../../images/FASTGO.png" alt="logo" width="10%" height="auto" />
    </div>
  )
}

export default Logo