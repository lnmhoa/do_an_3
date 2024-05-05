import FormInput from '../../components/FormInput/FormInput';
import { useState, useEffect } from 'react';
import * as UserServices from '../../services/UserServices';
import { UserMutationHooks } from '../../hooks/userMutationHooks';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

const LOGIN_OR_REGISTER = 1;

function LoginPage(props) {
    const mutation = UserMutationHooks((data) => UserServices.loginUser(data));

    const [values, setValues] = useState({});

    const { data, isLoading, isSuccess, isError } = mutation;

    const [loginOrRegister, setForm] = useState(LOGIN_OR_REGISTER);

    const handleSubmit = () => {
        mutation.mutate({
            phoneNumber: values.phoneNumber,
            password: values.password,
        });
    };

    useEffect(()=>{
        if(isSuccess){
            console.log('thành công');
            navigate('/');
        }else if(isError){
            console.log('thất bại');
        }
    }, [isSuccess, isError])

    console.log(data);

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
            onChange: handleChangeInputTel,
        },
    ];

    return (
        <div className={cx('container')}>
            <img src={require('../../image/System/login-poster.png')} alt="" />
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
                    <a href="http://localhost:3000/signup">Đăng kí</a>
                </div>
                <button>Đăng Nhập</button>
                {/* <button>Đăng Nhập Bằng Google</button> */}
            </form>
        </div>
    );
}

export default LoginPage;
