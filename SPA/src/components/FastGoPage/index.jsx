import Header from '../Header'
import BackgroundImage from '../BackgroundImage'
import DestinationContainer from '../DestinationContainer'
import TourPackagesContainer from '../TourPackagesContainer'
import Footer from '../Footer'

const FastGoPage = ({ updateFunction }) => {
  return (
    <>
      <Header updateFunction={updateFunction} />
      <BackgroundImage />
      <DestinationContainer />
      <TourPackagesContainer />
      <Footer />
    </>
  )
}

export default FastGoPage