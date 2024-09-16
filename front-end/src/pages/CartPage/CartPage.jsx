import React from 'react';
import EmptyCart from '../../components/UserCart/EmptyCart';
import NoneEmptyCart from '../../components/UserCart/NoneEmptyCart';
import { Box } from '@mui/material';

function CartPage(props) {
    let defaultTitle = 'Giỏ hàng của bạn';
    const [dateUserCart, setDataUserCart] = React.useState([1]);

    React.useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);

    return (
        <Box
            sx={{
                m: '10px auto',
                width: '1300px',
                padding: '10px 40px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderRadius: '10px',
            }}
        >
            {dateUserCart.length === 0 ? <EmptyCart /> : <NoneEmptyCart />}
        </Box>
    );
}

export default CartPage;
