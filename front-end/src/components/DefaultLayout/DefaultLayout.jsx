import HeaderTop from "../HeaderTop/HeaderTop";
// import HeaderBottom from "../HeaderBottom/HeaderBottom";
// import Slide from "../Slides/index";
import Footer from "../Footer/Footer";

function DefaultLayout({children}) {
    return ( <>
        <HeaderTop />
        {/* <HeaderBottom /> */}
        {/* <Slide /> */}
        {children}
        <Footer/>
    </> );
}

export default DefaultLayout;