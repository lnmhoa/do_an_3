import HeaderTop from '../HeaderTop/HeaderTop';
import HeaderTop2 from '../HeaderTop-2/HeaderTop-2';
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import Footer from '../Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <>
            <HeaderTop />
            {children.props.title !== 'ProfilePage' && <HeaderTop2 />}
            {children.props.title !== 'ProfilePage' && <HeaderBottom />}
            {children}
            {children.props.title !== 'ProfilePage' && <Footer />}

        </>
    );
}

export default DefaultLayout;
