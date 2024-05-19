import FormInput from '../../components/FormInput/FormInput';
import { useState, useEffect } from 'react';
// import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { UserMutationHooks } from '../../hooks/userMutationHooks';
import SwalComp from '../../components/Swal/SwalComp';
import { Link } from 'react-router-dom';
import * as UserServices from '../../services/UserServices';
import classNames from 'classnames/bind';
import styles from '../LoginPage/LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function RegisPage(props) {
    const [values, setValues] = useState({});
    const mutation = UserMutationHooks((data) => UserServices.signupUser(data));

    const { data, isLoading, isSuccess, isError } = mutation;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            phoneNumber: values.phoneNumber,
            password: values.password,
            email: values.email,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            if (data.message === 'SUCCESS') {
                SwalComp('Đăng kí thành công', 'success', '/login', navigate);
            } else {
                SwalComp(data.message, 'error', '/signup', navigate);
            }
        } else if (isError) {
            SwalComp('Vui lòng kiểm tra lại kết nối Internet', 'error', '/signup', navigate);
        }
    }, [isSuccess, isError]);

    const handleChangeInputTel = (e) => {
        if (e.target.name === 'phoneNumber') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputRegister = [
        {
            id: 1,
            name: 'phoneNumber',
            type: 'text',
            placeholder: 'Nhập số điện thoại',
            errorMessage: 'Vui lòng nhập số diện thoại hợp lệ!',
            label: 'Số điện thoại *',
            pattern: '[0-9]*',
            required: true,
            onChange: handleChangeInputTel,
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Nhập email',
            errorMessage: 'Vui lòng nhập đúng email!',
            label: 'Email *',
            pattern:
                '/^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i;',
            required: true,
            onChange: handleChangeInputTel,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Nhập password',
            errorMessage: 'Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!',
            label: 'Mật khẩu *',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
            onChange: handleChangeInputTel,
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Nhập lại mật khẩu',
            errorMessage: 'Mật khẩu xác nhận không trùng khớp!',
            label: 'Xác nhận mật khẩu *',
            pattern: values.password,
            required: true,
            onChange: handleChangeInputTel,
        },
    ];

    return (
        <div className={cx('container')}>
            <img src={require('../../image/System/login-poster.png')} alt="" />
            <form className={cx('login-form')} onSubmit={handleSubmit}>
                <h1>Đăng ký</h1>
                <div className={cx('input-div')}>
                    {inputRegister.map((element, index) => (
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
                <button>Đăng ký</button>
                <div className={cx('other-option')}>
                    <Link to="/">Quên mật khẩu</Link>
                    <Link to="/login">Đăng nhập</Link>
                </div>
            </form>
        </div>
    );
}

export default RegisPage;
