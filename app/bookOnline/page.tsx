import Footer from "../footer/footer"
import Navbar from "../navbar/navbar"
import StickyContactIcons from "../stickyicons/stickyIcons"
import BookOnline  from "./bookOnline"

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
