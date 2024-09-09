import { Box, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
    padding: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

function GridCategory(props) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridTemplateRows: 'repeat(4, 1fr)',
                columnGap: '10px',
                rowGap: '9px',
                maxWidth: '1200px',
                m: '30px auto',
            }}
        >
            <StyledBox
                sx={{
                    flexDirection: 'column',
                    gridArea: '1 / 1 / 5 / 2',
                    height: '100%',
                    // aspectRatio: 1,
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/laptop_cate_thumb_f8bef6898b.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Laptop</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '1 / 2 / 3 / 3',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/Tren_20_trieu_cate_thumb_9464481b81.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Điện Thoại</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '3 / 2 / 5 / 3',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/may_tinh_bang_cate_thumb_00e3b3eefa.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Máy tính bảng</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '1 / 3 / 3 / 4',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/dong_ho_cate_thumb_fefdd822ba.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Đồng hồ</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '3 / 3 / 5 / 4',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/phu_kien_cate_thumb_aab4ad136c.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Phụ kiện</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'column',
                    gridArea: '1 / 4 / 5 / 5',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/180x0/filters:quality(100)/tivi_cate_thumb_a23c4a577b.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Tivi</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '1 / 5 / 3 / 6',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/sim_fpt_cate_thumb_04409a0fdd.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Sim, Thẻ nhớ</Typography>
            </StyledBox>
            <StyledBox
                sx={{
                    flexDirection: 'row',
                    gridArea: '3 / 5 / 5 / 6',
                    height: '100%',
                }}
            >
                <img
                    src="https://cdn2.fptshop.com.vn/unsafe/96x0/filters:quality(100)/man_hinh_cate_thumb_f68d362f1e.png"
                    alt=""
                />
                <Typography variant='subtitle2' sx={{flex: 1, textAlign: 'center'}}>Màn hình</Typography>
            </StyledBox>
        </Box>
    );
}

export default GridCategory;
