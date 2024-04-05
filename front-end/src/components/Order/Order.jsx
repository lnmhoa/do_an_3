import styles from './Order.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Hello from '../Hello/Hello';
import { useState } from 'react';
const cx = classNames.bind(styles);

const statusList = {
    ALL: 'Tất cả',
    WAIT_FOR_COMFIRMATION: 'Chờ xác nhận',
    COMFIRMED: 'Đã xác nhận',
    BEING_TRANSPORTED: 'Đang vận chuyển',
    DELIVERED: 'Đã giao hàng',
    CANCLED: 'Đã huỷ',
};

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

const renderOrder = (order, index) => (
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
        <td>
            <Link to="/detail-order">Xem chi tiết</Link>
        </td>
    </tr>
);

const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

function Order(props) {
    const [status, setStatus] = useState(localStorage.getItem('STATUS') ?? statusList.ALL);
    const [dateStart, setDateStart] = useState('2024-01-01'); // Thiết lập lai giá trị ngày bắt đầu là ngày mà khách hàng tham gia
    const [dateFinish, setDateFinish] = useState(getCurrentDate());

    const handleStatus = (statusParameter) => {
        setStatus(statusParameter);
        localStorage.setItem('STATUS', statusParameter);
    };

    const handleDateStart = (e) => {
        setDateStart(e.target.value);
    };

    const handleDateFinish = (e) => {
        setDateFinish(e.target.value);
    };

    return (
        <>
            <Hello
                src={require('../../image/System/cart.png')}
                valueText={'Kiểm tra thông tin đơn hàng của bạn tại đây'}
            />

            <div className={cx('box-0')}>
                <div className={cx('box-2')}>
                    <input type="date" defaultValue={dateStart} onChange={handleDateStart} />
                    <span>&rarr;</span>
                    <input type="date" defaultValue={dateFinish} onChange={handleDateFinish} />
                </div>

                <div className={cx('box-3')}>
                    {Object.entries(statusList).map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleStatus(item[1])}
                            className={cx('sub-box-3', { active: item[1] === status })}
                        >
                            {item[1]}
                        </div>
                    ))}
                </div>
            </div>

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
                    <tbody>
                        {status === statusList.ALL
                            ? listOrder
                                  .filter((order) => dateStart <= order.dateOrder && order.dateOrder <= dateFinish)
                                  .map((order, index) => renderOrder(order, index))
                            : listOrder
                                  .filter(
                                      (order) =>
                                          order.status === status &&
                                          dateStart <= order.dateOrder &&
                                          order.dateOrder <= dateFinish,
                                  )
                                  .map((order, index) => renderOrder(order, index))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Order;
