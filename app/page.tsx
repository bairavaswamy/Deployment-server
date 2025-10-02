import Footer from "./footer/Footer"
import HomePage from "./home/home";
import Navbar from "./navbar/Navbar";
import StickyContactIcons from "./stickyicons/stickyIcons";

const Home =()=> {
  return(
    <>
      <Navbar/>
      <HomePage/>
      <StickyContactIcons/>
      <Footer/>
      </>
  )
}

export default Home;