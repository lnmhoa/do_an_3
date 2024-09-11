import { Box, Stack, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import React from 'react';

function Feature(props) {
    return (
        <Box
            sx={{
                width: '1200px',
                m: '0 auto',
                p: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: '100px',
            }}
        >
            <Stack
                sx={{
                    textAlign: 'center',
                }}
            >
                <CheckCircleOutlineIcon
                    sx={{
                        fontSize: '40px',
                        m: '0 auto 10px',
                        color: '#ff0000',
                    }}
                />
                <Typography variant="H4">Thương hiệu đảm bảo</Typography>
                <Typography>Hàng nhập khẩu, bảo hành chính hãng</Typography>
            </Stack>
            <Stack
                sx={{
                    textAlign: 'center',
                }}
            >
                <PublishedWithChangesIcon
                    sx={{
                        fontSize: '40px',
                        m: '0 auto 10px',
                        color: '#ff0000',
                    }}
                />
                <Typography variant="H4">Đổi trả dễ dàng</Typography>
                <Typography>Theo chính sách đổi trả tại cửa hàng</Typography>
            </Stack>
            <Stack
                sx={{
                    textAlign: 'center',
                }}
            >
                <VerifiedUserIcon
                    sx={{
                        fontSize: '40px',
                        m: '0 auto 10px',
                        color: '#ff0000',
                    }}
                />
                <Typography variant="H4">Sản phẩm chất lượng</Typography>
                <Typography>Đảm bảo tương thích và độ bền cao</Typography>
            </Stack>
            <Stack
                sx={{
                    textAlign: 'center',
                }}
            >
                <LocalShippingIcon
                    sx={{
                        fontSize: '40px',
                        m: '0 auto 10px',
                        color: '#ff0000',
                    }}
                />
                <Typography variant="H4">Giao hàng tận nơi</Typography>
                <Typography>Tại 63 tỉnh thành</Typography>
            </Stack>
        </Box>
    );
}

export default Feature;
