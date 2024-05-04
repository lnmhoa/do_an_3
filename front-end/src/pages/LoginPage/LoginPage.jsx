import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { useMutation } from '@tanstack/react-query';
import * as UserServices from '../../services/UserServices';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

const LOGIN_OR_REGISTER = 1;

function LoginPage(props) {
    const mutation = useMutation({
        mutationFn: (data) => UserServices.loginUser(data),
    });

    const [values, setValues] = useState({
        tel: '',
    });

    const [loginOrRegister, setForm] = useState(LOGIN_OR_REGISTER);

    const handleSubmit = () => {
        mutation.mutate({
            email: 'hehe',
            pass: 1234,
        });
    };

    const handleChangeInputTel = (e) => {
        if (e.target.name === 'phoneNumber') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputLogin = [
        {
            id: 1,
            name: 'phoneNumber',
            placeholder: 'Nhập số điện thoại',
            label: 'Số điện thoại',
            type: 'text',
            pattern: '[0-9]*',
            maxLength: '11',
            errorMessage: 'Vui lòng nhập số điện thoại hợp lệ!',
            required: true,
            onChange: handleChangeInputTel,
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Nhập mật khẩu',
            type: 'password',
            errorMessage: 'Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!',
            label: 'Mật khẩu',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    return (
        <div className={cx('container')}>
            <img
                src="https://static.vecteezy.com/system/resources/previews/029/922/261/original/sign-in-to-account-user-authorization-login-authentication-page-concept-laptop-with-login-and-password-form-page-on-screen-stock-illustration-vector.jpg"
                alt=""
            />
            <form className={cx('login-form')}>
                <h1>Đăng Nhập</h1>
                <div className={cx('input-div')}>
                    {inputLogin.map((element, index) => (
                        <FormInput
                            key={index}
                            label={element.label}
                            name={element.name}
                            placeholder={element.placeholder}
                            pattern={element.pattern}
                            required={element.required}
                            type={element.type}
                            errorMessage={element.errorMessage}
                            onChange={element.onChange ?? null}
                        />
                    ))}
                </div>
                <div className={cx('other-option')}>
                    <a href="">Quên mật khẩu</a>
                </div>
                <button>Đăng Nhập</button>
            </form>
        </div>
    );
}

export default LoginPage;
