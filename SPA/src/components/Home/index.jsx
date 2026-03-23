import styles from './home.module.css'

const Home = ({ updateFunction }) => {
  return (
    <div className={styles.backgroundImage}>
      <h1 className={styles.title}>Assignment 3</h1>
      <h2 className={styles.subTitle}>React SPA</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => updateFunction("FastGo")}>FastGo</button>
        <button className={styles.button} onClick={() => updateFunction("Travel")}>Travel</button>
      </div>
    </div>
  )
}

export default Home