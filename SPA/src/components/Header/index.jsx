import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'
import LogIn from '../LogIn'

const Header = ({ updateFunction }) => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation updateFunction={updateFunction} />
      <LogIn />
    </header>
  )
}

export default Header