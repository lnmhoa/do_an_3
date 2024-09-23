import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { Box, Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function BreadcumbsCustom(props) {
    const { BreadcrumbsItems, ...others } = props;
    const theme = useTheme();
    return (
        <Box role="presentation" mb={'10px'}>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                {BreadcrumbsItems &&
                    BreadcrumbsItems.map((breadcrumbsItem) => {
                        return (
                            <Link
                                underline="hover"
                                to={breadcrumbsItem.path}
                                style={{
                                    color: breadcrumbsItem.index ? theme.palette.primary.main : theme.text.primary.main,
                                }}
                            >
                                {breadcrumbsItem.name}
                            </Link>
                        );
                    })}
            </Breadcrumbs>
        </Box>
    );
}

export default BreadcumbsCustom;
