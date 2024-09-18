import { Stack } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import { useTheme } from '@emotion/react';

const StyledInput = styled.input`
    border: 1px solid ${({ theme }) => theme.palette.primary.main};
    padding: 10px 35px 10px 20px;
    border-radius: 30px;
    width: 400px;
    font-size: 15px;
    color: ${({ theme }) => theme.text.primary.main};

    &::placeholder {
        color: #888;
        font-style: italic;
        opacity: 0.5;
        font-size: 13px;
    }
`;
function SearchInput(props) {
    const theme = useTheme();
    return (
        <Stack sx={{ flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
            <StyledInput type="text" theme={theme} placeholder="Nhập tên điện thoại, phụ kiện, máy tính... cần tìm" />
            <SearchIcon
                sx={{
                    position: 'absolute',
                    right: '7px',
                    color: theme.palette.primary.main,
                    cursor: 'pointer',
                }}
            />
        </Stack>
    );
}

export default SearchInput;
