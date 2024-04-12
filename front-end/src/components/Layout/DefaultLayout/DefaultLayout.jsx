import HeaderTop from '../../HeaderTop/HeaderTop';
import HeaderTop2 from '../../HeaderTop-2/HeaderTop-2';
import HeaderBottom from '../../HeaderBottom/HeaderBottom';
import Footer from '../../Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <HeaderTop />
            <HeaderTop2 />
            <HeaderBottom />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
