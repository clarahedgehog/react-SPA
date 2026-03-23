import TourPackages from "../TourPackages"
import styles from "./tour-packages-container.module.css"
import { tourPackages } from '../../data/data'

const TourPackagesContainer = () => {
  return (
    <div className={styles.packagesWrapper}>
      <h2 className={styles.packagesTitle}>Our Tour Packages</h2>
      <div className={styles.packagesContainer}>
        {tourPackages.map((packages, index) =>
          <TourPackages key={index} packages={packages} />
        )}
      </div>
    </div>
  )
}

export default TourPackagesContainer