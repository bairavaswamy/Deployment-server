import Footer from "./Footer/Footer"
import HomePage from "./home/home";
import Navbar from "./Navbar/Navbar";
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