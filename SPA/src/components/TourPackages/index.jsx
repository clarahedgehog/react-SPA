import styles from './tour-packages.module.css'

const TourPackages = ({ tourPackage }) => {

  return (
    <div className={styles.packages}>
      <img className={styles.packagesImage} src={tourPackage.image} height="auto" width="100%" />
      <div className={styles.textContainer}>
        <label className={styles.packagesCountry}>{tourPackage.country}</label>
        <label className={styles.packagesRating}>Rating: {tourPackage.rating}</label>
        <label className={styles.packagesPrice}>Price: {tourPackage.price}</label>
      </div>
    </div>
  )
}

export default TourPackages