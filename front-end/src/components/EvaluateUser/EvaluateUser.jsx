import styles from './EvaluateUser.module.scss';
import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';

const cx = classNames.bind(styles);

function EvaluateUser(props) {
    return (
        <>
            <Hello
                src={require('../../image/System/comment.png')}
                valueText={'Những đánh giá chân thành của bạn tại đây'}
            />
        </>
    );
}

export default EvaluateUser;
