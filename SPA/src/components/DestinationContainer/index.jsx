import Destinations from "../Destinations"
import styles from "./destination-container.module.css"
import { popularDestinations } from '../../data/data'

const DestinationContainer = () => {
  return (
    <div className={styles.destinationWrapper}>
      <h2 className={styles.destinationTitle}>Popular Destinations</h2>
      <div className={styles.destinationContainer}>
        {popularDestinations.map((destination, index) => (
          <Destinations key={index} destination={destination} />)
        )}
      </div>
    </div>
  )
}

export default DestinationContainer