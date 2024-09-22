import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../../components/ShoppingCart/EmptyCart';
import NoneEmptyCart from '../../components/ShoppingCart/ShoppingCart';

import { Box, Breadcrumbs } from '@mui/material';
import BreadcumbsCustom from '../../components/BreadcumbsCustom/BreadcumbsCustom';

function ShoppingCartPage(props) {
    let defaultTitle = 'Giỏ hàng của bạn';
    React.useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);

    const products = useSelector((state) => state.product.productData);

    return (
        <Box
            sx={{
                m: '0px auto 30px',
                width: '1200px',
            }}
        >
            <BreadcumbsCustom />
            {products.length === 0 ? <EmptyCart /> : <NoneEmptyCart />}
        </Box>
    );
}

export default ShoppingCartPage;
