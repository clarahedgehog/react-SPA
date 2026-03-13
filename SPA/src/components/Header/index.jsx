import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'
import LogIn from '../LogIn'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <LogIn />
    </header>
  )
}

export default Header