import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer"
import HeaderTop from "../components/Header/HeaderTop";
import RowList from "../components/Rows/RowList/RowList";

function Home() {
  return (
    <>
        <HeaderTop />
        <Banner />
        <RowList/>
        <Footer />
    </>
  )
}

export default Home