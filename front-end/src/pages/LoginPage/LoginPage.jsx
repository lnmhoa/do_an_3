import React, { useState } from 'react';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';

function LoginPage(props) {
    const theme = useTheme();
    const [visibilityPassword, setVisibilityPassword] = useState(false);
    const [numberPhoneLogin, setNumberPhoneLogin] = useState('');
    const [password, setPassword] = useState('');
    const [numberPhoneLoginError, setNumberPhoneLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validatePhoneNumber = (number) => {
        const phoneRegex = /^(?:\+84|0)([0-9]{9})$/; // Regex cho số điện thoại Việt Nam
        return phoneRegex.test(number);
    };

    const handleNumberPhoneLoginError = () => {
        if (numberPhoneLogin.trim() === '') {
            setNumberPhoneLoginError('Số điện thoại không được để trống!');
        } else if (!validatePhoneNumber(numberPhoneLogin)) {
            setNumberPhoneLoginError('Số điện thoại không hợp lệ!');
        } else {
            setNumberPhoneLoginError('');
        }
    };

    const handlePasswordError = () => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);
        const hasNoWhitespace = /^\S*$/.test(password);

        if (password.length < minLength) {
            setPasswordError('Mật khẩu phải có ít nhất 8 ký tự!');
        } else if (!hasUpperCase) {
            setPasswordError('Mật khẩu phải có ít nhất một chữ hoa!');
        } else if (!hasLowerCase) {
            setPasswordError('Mật khẩu phải có ít nhất một chữ thường!');
        } else if (!hasSpecialChar) {
            setPasswordError('Mật khẩu phải có ít nhất một ký tự đặc biệt!');
        } else if (!hasNoWhitespace) {
            setPasswordError('Mật khẩu không được chứa khoảng trắng!');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        handleNumberPhoneLoginError();
        handlePasswordError();
    };

    return (
        <Box
            sx={{
                width: '1200px',
                display: 'flex',
                minHeight: '500px',
                alignItems: 'center',
                justifyContent: 'center',
                m: '10px auto',
                flexDirection: 'column',
            }}
        >
            <img
                src="https://res.cloudinary.com/dta7fdnph/image/upload/v1727082494/image-removebg-preview_1_oufh5k.png"
                alt="Logo"
                style={{ width: '400px' }}
            />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px 10px',
                    minWidth: '400px',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit} // Thêm sự kiện submit ở đây
            >
                <Stack minHeight={'80px'}>
                    <TextField
                        label="Số điện thoại"
                        variant="standard"
                        error={!!numberPhoneLoginError}
                        helperText={numberPhoneLoginError}
                        onChange={(e) => setNumberPhoneLogin(e.target.value)}
                    />
                </Stack>
                <Stack minHeight={'80px'} mt={'10px'} position={'relative'}>
                    <TextField
                        type={visibilityPassword ? 'text' : 'password'}
                        label="Mật khẩu"
                        variant="standard"
                        error={!!passwordError}
                        helperText={passwordError}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <IconButton
                        sx={{
                            position: 'absolute',
                            right: '10px',
                            top: '19px',
                            padding: 0,
                        }}
                        onClick={() => setVisibilityPassword(!visibilityPassword)}
                    >
                        {visibilityPassword ? (
                            <RemoveRedEyeIcon sx={{ fontSize: '20px' }} />
                        ) : (
                            <VisibilityOffIcon sx={{ fontSize: '20px' }} />
                        )}
                    </IconButton>
                </Stack>
                <Button variant="contained" type="submit" sx={{ mt: '10px' }}>
                    Đăng nhập
                </Button>
            </Box>

            <Stack flexDirection={'row'} gap={'5px'}>
                <Typography variant="subtitle2">Bạn đã mua hàng tại đây?</Typography>
                <Link to="/register">
                    <Typography
                        variant="subtitle2"
                        sx={{
                            color: theme.palette.primary.main,
                            cursor: 'pointer', // Thay đổi con trỏ khi hover
                        }}
                    >
                        Đăng ký ngay
                    </Typography>
                </Link>
            </Stack>
            <Link to="/register">
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: theme.palette.primary.main,
                        cursor: 'pointer', // Thay đổi con trỏ khi hover
                    }}
                >
                    Quên mật khẩu?
                </Typography>
            </Link>
        </Box>
    );
}

export default LoginPage;
