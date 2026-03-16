import styles from './destinations.module.css'

const Destinations = ({ destination }) => {
  return (
    <div className={styles.destination}>
      <img className={styles.destinationImage} src={destination.image} height="auto" width="100%" />
      <div className={styles.destinationCountry}>{destination.country}</div>
    </div>
  )
}

export default Destinations