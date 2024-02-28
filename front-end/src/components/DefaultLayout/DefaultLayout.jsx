import HeaderTop from "../HeaderTop/HeaderTop";
import HeaderBottom from "../HeaderBottom/HeaderBottom";
import Footer from "../Footer/Footer";

function DefaultLayout({children}) {
    return ( <>
        <HeaderTop />
        <HeaderBottom />
        {children}
        <Footer/>
    </> );
}

export default DefaultLayout;