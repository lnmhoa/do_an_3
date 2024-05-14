import styles from '../InfoUserAdmin/InfoUserAdmin.module.scss';
import className from 'classnames/bind';
// import { useEffect, useState } from 'react';
// import { getAllUsers } from '../../services/UserServices';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import { FaEye } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const cx = className.bind(styles);

function OrderAdmin(props) {
    const listOrder = [
        {
            orderID: 'DH002',
            nameProduct: 'Máy tính bảng',
            dateOrder: '2024-03-05',
            priceOrder: 800,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH003',
            nameProduct:
                'Tai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe BluetoothTai nghe Bluetooth',
            dateOrder: '2024-03-10',
            priceOrder: 200,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH004',
            nameProduct: 'Ổ cứng di động',
            dateOrder: '2024-03-15',
            priceOrder: 120,
            status: 'Đã huỷ',
        },
        {
            orderID: 'DH005',
            nameProduct: 'Máy ảnh kỹ thuật số',
            dateOrder: '2024-03-20',
            priceOrder: 450,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH006',
            nameProduct: 'Bàn phím Gaming',
            dateOrder: '2024-03-25',
            priceOrder: 150,
            status: 'Đã huỷ',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        { orderID: 'DH008', nameProduct: 'Ổ đĩa SSD', dateOrder: '2024-03-07', priceOrder: 250, status: 'Đã huỷ' },
        {
            orderID: 'DH009',
            nameProduct: 'Màn hình máy tính',
            dateOrder: '2024-03-12',
            priceOrder: 300,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH010',
            nameProduct: 'Ổ đĩa cứng HDD',
            dateOrder: '2024-03-17',
            priceOrder: 100,
            status: 'Đã huỷ',
        },
        {
            orderID: 'DH011',
            nameProduct: 'Loa Bluetooth',
            dateOrder: '2024-03-22',
            priceOrder: 180,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH012',
            nameProduct: 'Thiết bị điều khiển thông minh',
            dateOrder: '2024-03-27',
            priceOrder: 90,
            status: 'Đã huỷ',
        },
        {
            orderID: 'DH013',
            nameProduct: 'Ổ đĩa quang DVD',
            dateOrder: '2024-03-04',
            priceOrder: 40,
            status: 'Đã giao hàng',
        },
        { orderID: 'DH014', nameProduct: 'Bút cảm ứng', dateOrder: '2024-03-09', priceOrder: 70, status: 'Đã huỷ' },
        {
            orderID: 'DH015',
            nameProduct: 'Ốp lưng điện thoại',
            dateOrder: '2024-03-14',
            priceOrder: 20,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH016',
            nameProduct: 'Pin dự phòng',
            dateOrder: '2024-03-19',
            priceOrder: 50,
            status: 'Đã huỷ',
        },
        { orderID: 'DH017', nameProduct: 'USB 3.0', dateOrder: '2024-03-24', priceOrder: 15, status: 'Đã giao hàng' },
        { orderID: 'DH018', nameProduct: 'Thẻ nhớ', dateOrder: '2024-03-29', priceOrder: 25, status: 'Đã huỷ' },
        { orderID: 'DH019', nameProduct: 'Cáp sạc', dateOrder: '2024-03-03', priceOrder: 10, status: 'Đã giao hàng' },
        {
            orderID: 'DH020',
            nameProduct: 'Ốp kính cường lực điện thoại',
            dateOrder: '2024-03-08',
            priceOrder: 35,
            status: 'Đã huỷ',
        },
        {
            orderID: 'DH021',
            nameProduct: 'Thiết bị chuyển đổi USB-C',
            dateOrder: '2024-03-13',
            priceOrder: 45,
            status: 'Đã giao hàng',
        },
    ];

    return (
        <div className={cx('container')}>
            <AdminSidebar />
            <div className={cx('sub-container', 'content')}>
                <div className={cx('table-title')}>Quản lý đơn hàng</div>

                <table className={cx('table-upload')}>
                    <thead>
                        <tr>
                            <th style={{ width: '4%' }}>#</th>
                            <th style={{ width: '11%' }}>Mã đơn hàng</th>
                            <th style={{ width: '40%' }}>Sản phẩm</th>
                            <th style={{ width: '13%' }}>Ngày đặt hàng</th>
                            <th style={{ width: '13%' }}>Thành tiền</th>
                            <th style={{ width: '12%' }}>Trạng thái</th>
                            <th style={{ width: '7%' }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrder.map((order, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{order.orderID}</td>
                                <td>
                                    <div className={cx('hehe')} key={index}>
                                        {order.nameProduct}
                                    </div>
                                </td>
                                <td>{order.dateOrder}</td>
                                <td>{order.priceOrder} vnđ</td>
                                <td>Chờ xử lý</td>
                                <td>
                                    <button>
                                        {' '}
                                        <FaEye />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrderAdmin;
