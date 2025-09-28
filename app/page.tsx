import Footer from "./footer/footer";
import HomePage from "./home/home";
import Navbar from "./navbar/navbar";
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