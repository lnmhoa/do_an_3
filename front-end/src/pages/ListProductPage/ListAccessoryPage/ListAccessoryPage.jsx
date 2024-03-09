import { useEffect } from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';

import classNames from 'classnames/bind';
import styles from './ListAccessoryPage.module.scss';
// import { Link } from 'react-router-dom';

const cx = classNames.bind(styles)

function ListAccessoryPage({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className={cx('container')}>
            <Breadcrumbs/>
            {/* Đường dẫn */}
            {/* Bộ lọc */}
            {/* TopicProduct */}
            {/* Slider (bán chạy) */}
            {/* Danh sách các phụ kiện khác */}
        </div>
    );
}

export default ListAccessoryPage;
