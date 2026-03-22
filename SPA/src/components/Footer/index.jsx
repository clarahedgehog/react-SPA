import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNavigation}>
        <img className={styles.logo} src="../../images/FASTGO-VIT.png" alt="logo" width="20%" height="auto" />
        <p>Your trusted partner for seamless travel bookings - flights, hotels, and unforgettable destinations</p>
        <img className={styles.socials} src="../../images/instagram.svg" alt="instagram" width="5%" height="auto" />
        <img className={styles.socials} src="../../images/linkedin.svg" alt="linkedin" width="5%" height="auto" />
        <p>&copy;2025 Fastgo, all rights reserved</p>
      </div>
      <div className={styles.footerMenu}>
        <h3>Menu</h3>
        <p>Destinations</p>
        <p>Experiences</p>
        <p>Travel Deals</p>
        <p>Blog</p>
        <p>About Us</p>
        <p>Contact</p>
      </div>
      <div className={styles.footerLinks}>
        <h3>Quick Links</h3>
        <p>FAQs</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Support Center</p>
        <p>Careers</p>
      </div>
    </div>

  )
}

export default Footer