import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const cx = classNames.bind(styles);

function FormInput(props) {
    const { label, id, errorMessage,  onChange, ...otherValue } = props;
    const [showPassword, setShowPassword] = useState(false);

    const onClick = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={cx('container')}>
            <span className={cx('line')}> </span>
            {otherValue.name === 'password' ? (
                <input {...otherValue}  type={showPassword ? 'text' : 'password'} onChange={onChange} />
                ) : (
                <input {...otherValue} onChange={onChange} pattern='2'/>
            )}
            {otherValue.name === 'password' &&
                (showPassword ? (
                    <BsEye onClick={onClick} style={{ position: 'absolute', top: '9px', right: '30px' }} />
                ) : (
                    <BsEyeSlash onClick={onClick} style={{ position: 'absolute', top: '9px', right: '30px' }} />
                ))}
                <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;
