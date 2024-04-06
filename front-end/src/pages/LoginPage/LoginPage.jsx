import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage(props) {
    const [values, setValues] = useState({
        tel: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        if (e.target.name === 'tel') {
            e.target.value = e.target.value.replace(/\D/g, '');
        }
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const inputs = [
        {
            id: 1,
            name: 'tel',
            placeholder: 'Nhập số điện thoại',
            label: 'Số điện thoại *',
            type: 'text',
            maxLength: '11',
            errorMessage: 'Vui lòng nhập số điện thoại hợp lệ!',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Nhập mật khẩu',
            type: 'password',
            errorMessage: 'Mật khẩu từ 8-20 kí tự. Ít nhất 1 từ, 1 số, 1 kí tự đặc biệt!',
            label: 'Mật khẩu *',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
    ];

    return (
        <div className={cx('container')}>
            <img
                src={require('../../image/System/imgAccount.png')}
                alt=""
                style={{ height: 360, aspectRatio: '1 / 1.1' }}
            />
            <div className={cx('sub-container')}>
                <div className={cx('title')}>Đăng Nhập</div>

                <form onSubmit={handleSubmit} action="/login">
                    {inputs.map((input) => {
                        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />;
                    })}
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40 }}>
                        <Link to="/forgotPassword">
                            <div className={cx('note')}>Quên mật khẩu hả?</div>
                        </Link>
                        <Link to="/register">
                            <div className={cx('note')}>Chưa có tài khoản?</div>
                        </Link>
                    </div>
                    <button type="submit">Đăng nhập</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
