import FormInput from '../../components/FormInput/FormInput';
import { useState, useEffect } from 'react';
import * as UserServices from '../../services/UserServices';
import { UserMutationHooks } from '../../hooks/userMutationHooks';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LoginPage.module.scss';
import SwalComp from '../../components/Swal/SwalComp';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide';


const cx = classNames.bind(styles);

const LOGIN_OR_REGISTER = 1;

function LoginPage(props) {
    const mutation = UserMutationHooks((data) => UserServices.loginUser(data));

    const [values, setValues] = useState({});

    const { data, isLoading, isSuccess, isError } = mutation;

    const [loginOrRegister, setForm] = useState(LOGIN_OR_REGISTER);

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            phoneNumber: values.phoneNumber,
            password: values.password,
        });
    };

    useEffect(() => {
        if (isSuccess) {
            if (data.message === 'SUCCESS') {
                localStorage.setItem('access_token', JSON.stringify(data?.access_token))
                if(data?.access_token){
                    const userDecode = jwt_decode(data?.access_token)
                    if(userDecode?.id){
                        handleGetInfoUser(userDecode?.id, data?.access_token)
                    }
                }
                SwalComp('Đăng nhập thành công', 'success', '/', navigate);
            } else {
                SwalComp(data.message, 'error', '/login', navigate);
            }
        } else if (isError) {
            SwalComp('Vui lòng kiểm tra lại kết nối Internet', 'error', '/login', navigate);
        }
    }, [isSuccess, isError]);

    const handleGetInfoUser = async (id, token) =>{
        const res = await UserServices.getInfoUser(id, token);
        dispatch(updateUser({...res?.data, access_token: token}))
    }


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
            <form className={cx('login-form')} onSubmit={handleSubmit}>
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
                    <Link to="/">Quên mật khẩu</Link>
                    <Link to="/">Đăng kí</Link>
                </div>
                <button>Đăng Nhập</button>
            </form>
        </div>
    );
}

export default LoginPage;
