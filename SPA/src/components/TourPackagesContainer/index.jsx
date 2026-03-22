import TourPackages from "../TourPackages"
import styles from "./tour-packages-container.module.css"
import { tourPackages } from '../../data/data'

const TourPackagesContainer = () => {
  return (
    <div className={styles.packagesWrapper}>
      <h2 className={styles.packagesTitle}>Our Tour Packages</h2>
      <div className={styles.parentGrid}>
        <div className={styles.firstGrid}>
          <TourPackages tourPackage={tourPackages[0]} />
        </div>
        <div className={styles.secondGrid}>
          <TourPackages tourPackage={tourPackages[1]} />
        </div>
        <div className={styles.thirdGrid}>
          <TourPackages tourPackage={tourPackages[2]} />
        </div>
      </div>
    </div>
  )
}

export default TourPackagesContainer