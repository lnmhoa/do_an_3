import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderTop2 from '../HeaderTop-2/HeaderTop-2';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Footer from '../Footer/Footer';

function DefaultLayout({ children }) {
    const isShowFooter = children.props.isShowFooter !== undefined ? children.props.isShowFooter : true;
    return (
        <>
            <HeaderTop />
            {isShowFooter && <HeaderTop2 />}
            {isShowFooter && <HeaderBottom />}
            {children}
            {isShowFooter && <Footer />}
        </>
    );
}

export default DefaultLayout;
