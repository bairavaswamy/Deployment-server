import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
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
