import HeaderTravel from '../HeaderTravel'
import CategoryTravel from '../CategoryTravel'
import FooterTravel from '../FooterTravel'

const TravelPage = ({ updateFunction }) => {
  return (
    <>
      <HeaderTravel updateFunction={updateFunction} />
      <CategoryTravel />
      <FooterTravel />
    </>
  )
}

export default TravelPage