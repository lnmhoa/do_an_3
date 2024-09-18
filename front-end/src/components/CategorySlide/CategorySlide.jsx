import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import Slider from 'react-slick';
import { useTheme } from '@emotion/react';

const StyledBox = styled(Box)(({ theme }) => ({
    padding: '8px',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5px',
    transition: 'transform 0.2s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.boxShadow.hover,
    },
}));

const products = [
    {
        id: 1,
        name: 'Laptop',
        image: 'https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png',
    },
    {
        id: 2,
        name: 'Điện Thoại',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/Tren_20_trieu_cate_thumb_9464481b81.png',
    },
    {
        id: 3,
        name: 'Máy Tính Bảng',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_tinh_bang_cate_thumb_00e3b3eefa.png',
    },
    {
        id: 4,
        name: 'Tivi',
        image: 'https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/tivi_cate_thumb_a23c4a577b.png',
    },
    {
        id: 5,
        name: 'Đồng Hồ',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/dong_ho_cate_thumb_fefdd822ba.png',
    },
    {
        id: 6,
        name: 'Máy Giặt',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_giat_cate_thumb_facc132260.png',
    },
    {
        id: 7,
        name: 'Máy Lọc Nước',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_loc_nuoc_cate_thumb_d94bdb85d2.png',
    },
    {
        id: 8,
        name: 'Tủ lạnh',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/tu_lanh_cate_thumb_77da11d0c4.png',
    },
    {
        id: 9,
        name: 'Điều Hòa, Máy Lạnh',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_lanh_tu_lanh_cate_thumb_8251a4da68.png',
    },
    {
        id: 10,
        name: 'Sim thẻ',
        image: 'https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/sim_fpt_cate_thumb_04409a0fdd.png',
    },
];
const ProductSlider = ({ products, settings }) => {
    return (
        <Slider {...settings}>
            {products.map((product) => (
                <Box
                    key={product.id}
                    sx={{
                        p: '10px',
                        height: '120px',
                    }}
                >
                    <StyledBox>
                        <img src={product.image} alt={product.name} style={{ width: '100px', padding: '8px' }} />
                        <Typography variant="subtitle2" sx={{ flex: 1, textAlign: 'center' }}>
                            {product.name}
                        </Typography>
                    </StyledBox>
                </Box>
            ))}
        </Slider>
    );
};

function GridCategory(props) {
    const theme = useTheme();

    const midIndex = Math.ceil(products.length / 2);
    const firstHalf = products.slice(0, midIndex);
    const secondHalf = products.slice(midIndex);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: midIndex,
        slidesToScroll: midIndex,
    };
    return (
        <Box
            sx={{
                width: '1200px',
                m: '0px auto',
                boxShadow: theme.boxShadow.main,
                borderRadius: '10px',
            }}
        >
            <ProductSlider products={firstHalf} settings={settings} />
            <ProductSlider products={secondHalf} settings={settings} />
        </Box>
    );
}

export default GridCategory;
