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
        otherValue.name === 'password' ||
        otherValue.name === 'confirmPassword' ||
        otherValue.name === 'newPassword' ||
        otherValue.name === 'confirmNewPassword'; //CHỈ CẦN 1 ĐIỀU KIỆN ĐÚNG

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleFocus = () => {
        setFocused(true);
    };

    return (
        <div className={cx('container')}>
            {label && (
                <label className={cx('label-input')} style={{ minWidth: 140 }}>
                    {label}
                </label>
            )}
            <input
                {...otherValue}
                type={isPasswordInput ? (showPassword ? 'text' : 'password') : otherValue.type} // NẾU NÓ LÀ 'PASS HOẶC PASS CONFIRM' THÌ XÉT TIẾP ẨN HIỆN PASS KHÔNG THÌ LÀ TEXT
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() => isPasswordInput && setFocused(true)}
                focused={focused.toString()}
                placeholder={placeholder}
                defaultValue={defaultValue}
                className={cx({ passField: isPasswordInput })}
            />

            <span>{errorMessage}</span>
            {isPasswordInput &&
                (showPassword ? (
                    <BsEye className={cx('passIcon')} onClick={handleTogglePassword} />
                ) : (
                    <BsEyeSlash className={cx('passIcon')} onClick={handleTogglePassword} />
                ))}
        </div>
    );
}

export default FormInput;
