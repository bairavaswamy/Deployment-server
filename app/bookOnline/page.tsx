import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import StickyContactIcons from "../stickyicons/stickyIcons"
import BookOnline from "./BookOnline"

export default function BookOnlinePage() {
    return(
        <>
        <Navbar/>
        <BookOnline/>
        <StickyContactIcons/>
        <Footer />
        </>
    )
};
