import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const cx = classNames.bind(styles);

function FormInput(props) {
    const { label, id, errorMessage, onChange, defaultValue, placeholder, ...otherValue } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);
    const isPasswordInput =
        otherValue.name === 'password' || otherValue.name === 'confirmPassword' || otherValue.name === 'newPassword'; //CHỈ CẦN 1 ĐIỀU KIỆN ĐÚNG

    const handleTogglePassword = () => {
        if (isPasswordInput) {
            setShowPassword(!showPassword);
        }
    };

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className={cx('container')}>
            <input
                {...otherValue}
                type={isPasswordInput ? (showPassword ? 'text' : 'password') : otherValue.type} // NẾU NÓ LÀ 'PASS HOẶC PASS CONFIRM' THÌ XÉT TIẾP ẨN HIỆN PASS KHÔNG THÌ LÀ TEXT
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => isPasswordInput && setFocused(true)}
                focused={focused.toString()}
                placeholder={placeholder}
                defaultValue={defaultValue}
            />

            <label className={cx('label-input')} style={{ minWidth: 140 }}>
                {label}
            </label>

            <span>{errorMessage}</span>
            {isPasswordInput &&
                (showPassword ? (
                    <BsEye
                        onClick={handleTogglePassword}
                        style={{ position: 'absolute', top: '25%', right: '12px', fontSize: 13 }}
                    />
                ) : (
                    <BsEyeSlash
                        onClick={handleTogglePassword}
                        style={{ position: 'absolute', top: '25%', right: '12px', fontSize: 13 }}
                    />
                ))}
        </div>
    );
}

export default FormInput;
