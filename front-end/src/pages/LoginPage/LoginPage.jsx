import FormInput from '../../components/FormInput/FormInput';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';

const cx = classNames.bind(styles);

function LoginPage(props) {
    const [values, setValues] = useState({
        tel: '',
        password: '',
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

    console.log(values);

    const inputs = [
        {
            id: 1,
            name: 'tel',
            placeholder: 'Số điện thoại',
            label: 'Số điện thoại',
            type: 'text',
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Mật khẩu',
            label: 'Mật khẩu',
            type: 'password',
        },
    ];

    return (
        <div className={cx('container')}>
            <img src={require('../../image/System/imgAccount.png')} alt="" />
            <div className={cx('sub-container')}>
                <h1>Đăng Nhập</h1>
                <form onSubmit={handleSubmit} action="/login">
                    {inputs.map((input) => {
                        return <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />;
                    })}
                    <div style={{ display: 'flex', gap: 20 }}>
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
