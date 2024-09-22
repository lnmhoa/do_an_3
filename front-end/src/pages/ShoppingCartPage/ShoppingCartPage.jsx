import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/ShoppingCart/EmptyCart';
import NoneEmptyCart from '../../components/ShoppingCart/NoneEmptyCart';

import { Box } from '@mui/material';

function ShoppingCartPage(props) {
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

export default ShoppingCartPage;
