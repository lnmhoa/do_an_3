import styles from './OrderDetail.module.scss';
import classNames from 'classnames/bind';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function OrderDetail({ title }) {
    useEffect(() => {
        document.title = title;
    }, [title]);
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('tableOrder')}>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ width: '3%' }}>#</th>
                                <th style={{ width: '15%' }}>Mã đơn hàng</th>
                                <th style={{ width: '20%' }}>Sản phẩm</th>
                                <th style={{ width: '20%' }}>Ngày đặt hàng</th>
                                <th style={{ width: '20%' }}>Thành tiền</th>
                                <th style={{ width: '10%' }}>Chi tiết</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
