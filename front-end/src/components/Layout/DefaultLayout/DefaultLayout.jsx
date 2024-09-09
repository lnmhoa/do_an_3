import HeaderTop from '../../HeaderTop/HeaderTop';
import Footer from '../../Footer/Footer';
import { Box } from '@mui/material';

function DefaultLayout({ children }) {
    return (
        <>
            <HeaderTop />
            <Box
                sx={{
                    mt: '90px'
                }}
            >{children}</Box>
            <Footer />
        </>
    );
}

export default DefaultLayout;
