import styles from './tour-packages.module.css'

const TourPackages = ({ packages }) => {

  return (
    <div className={styles.packages}>
      <img className={styles.packagesImage} src={packages.image} height="auto" width="100%" />
      <div className={styles.textContainer}>
        <label className={styles.packagesCountry}>{packages.country}</label>
        <label className={styles.packagesRating}>Rating: {packages.rating}</label>
        <label className={styles.packagesPrice}>Price: {packages.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</label>
      </div>
    </div>
  )
}

export default TourPackages