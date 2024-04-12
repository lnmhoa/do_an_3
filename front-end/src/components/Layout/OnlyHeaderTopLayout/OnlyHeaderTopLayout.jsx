import HeaderTop from '../../HeaderTop/HeaderTop';

function OnlyHeaderTopLayout({ children }) {
    return (
        <>
            <HeaderTop />
            {children}
        </>
    );
}

export default OnlyHeaderTopLayout;
