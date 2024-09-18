import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/UserCart/EmptyCart';
import NoneEmptyCart from '../../components/UserCart/NoneEmptyCart';
import { Box } from '@mui/material';

function CartPage(props) {
    let defaultTitle = 'Giỏ hàng của bạn';

    const products = useSelector((state) => state.product);

    React.useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);

    return (
        <Box
            sx={{
                m: '10px auto',
                width: '1200px',
            }}
        >
            {products.length === 0 ? <EmptyCart /> : <NoneEmptyCart />}
        </Box>
    );
}

export default CartPage;
