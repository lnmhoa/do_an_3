import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ReorderIcon from '@mui/icons-material/Reorder';
import MenuItem from '@mui/material/MenuItem';

export default function CategoryMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                startIcon={<ReorderIcon />}
                variant="outlined"
                sx={{
                  borderRadius: '50px'
                }}
            >
                Danh Mục
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>Danh mục 1</MenuItem>
                <MenuItem onClick={handleClose}>Danh mục 2</MenuItem>
            </Menu>
        </div>
    );
}
