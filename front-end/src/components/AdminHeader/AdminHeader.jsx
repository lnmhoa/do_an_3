import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import UserMenu from '../HeaderTop/subComponent/UserMenu';


export default function AdminHeader() {
    return (
        <AppBar position="static" >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="https://res.cloudinary.com/dbtvigpjm/image/upload/v1725985449/admin-logo_kkh2jh.png"
                        alt=""
                        style={{ width: '200px' }}
                    />
                    {/* <Typography variant="h6" component="div">
                        My Application
                    </Typography> */}
                </Box>
                <Box>
                    <UserMenu />
                </Box>
            </Toolbar>
        </AppBar>
    );
}
