import useCountDown from '../../hooks/useCountDown';
import styles from './CountDown.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CountDown({ targetTime }) {
    const [days, hours, minutes, seconds] = useCountDown(targetTime);
    return (
        <div className={cx('show-counter')}>
            <div>
                <div>{days}</div>ngày
            </div>
            <div>
                <div>{hours}</div>giờ
            </div>
            <div>
                <div>{minutes}</div>phút
            </div>
            <div>
                <div>{seconds}</div>giây
            </div>
        </div>
    );
}

export default CountDown;
