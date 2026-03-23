import styles from './footer-travel.module.css'

const FooterTravel = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerText}>
        <h3 className={styles.footerTitle}>Subscribe to our newsletter</h3>
        <p className={styles.footerInformation}>Copyright &copy; 2017 - 2022 "TRAVEL". All rights reserved</p>
      </div>
    </div>

  )
}

export default FooterTravel