import { Button, Checkbox, FormControlLabel, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import DeleteIcon from '@mui/icons-material/Delete';
import RedeemIcon from '@mui/icons-material/Redeem';
import ProductInCart from './ProductInCart';
import OrderInfoInCart from './OrderInfoInCart';
import { useTheme } from '@emotion/react';
const StyledStack = styled(Stack)({
    backgroundColor: '#fff',
    borderRadius: '8px', // Thêm border-radius để làm mềm các góc
    padding: '5px 10px',
});

function NoneEmptyCart(props) {
    const theme = useTheme();
    return (
        <Stack flexDirection="row" width={'100%'} gap={'10px'}>
            <Stack flex={4} gap={'10px'}>
                <StyledStack flexDirection={'row'} justifyContent={'space-between'}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked': {
                                        color: theme.palette.secondary.main,
                                    },
                                }}
                            />
                        }
                        label="Chọn tất cả"
                    />
                    <IconButton
                        size="large"
                        sx={{
                            color: '#333',
                            '&:hover': {
                                color: '#ff0000',
                            },
                        }}
                    >
                        <DeleteIcon />
                    </IconButton>
                </StyledStack>
                <StyledStack>
                    <ProductInCart />
                </StyledStack>
            </Stack>
            <Stack flex={2} gap={'10px'}>
                <StyledStack flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size="large"
                        sx={{
                            color: theme.palette.primary.main,
                            '&:hover': {
                                color: '#ff0000',
                            },
                        }}
                    >
                        <RedeemIcon />
                        <Typography ml={'20px'}>Quà tặng </Typography>
                    </IconButton>
                </StyledStack>
                <StyledStack>
                    <OrderInfoInCart />
                </StyledStack>
            </Stack>
        </Stack>
    );
}

export default NoneEmptyCart;
