import { useRef, useState, useEffect, useCallback } from 'react';
import styles from '../ProductAdmin/ProductAdmin.module.scss';
import className from 'classnames/bind';
import AdminSidebar from '../../components/AdminSidebar/AdminSidebar';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';
import ReactPaginate from 'react-paginate';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import NavAdmin from '../../components/NavAdmin/NavAdmin';
import Swal from 'sweetalert2';
import { FaEdit, FaTrash } from 'react-icons/fa';

const cx = className.bind(styles);

function ProductAdmin(props) {
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
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
        },
        {
            orderID: 'DH007',
            nameProduct: 'Chuột không dây',
            dateOrder: '2024-03-02',
            priceOrder: 30,
            status: 'Đã giao hàng',
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
    ];

    const [editForm, setEditForm] = useState(false);
    const contentRef = useRef(null);

    const handleActionDelete = (index) => {
        Swal.fire({
            title: 'Xác nhận xoá!',
            text: 'Bạn sẽ xoá hoàn toàn dữ liệu này!',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: 'Huỷ',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Xoá ',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Đã xoá!',
                    text: 'Dữ liệu đã được xoá.',
                    icon: 'success',
                });
            }
        });
    };

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.filter = editForm ? 'blur(5px)' : 'none';
        }
    }, [editForm]);

    const handleActionEdit = useCallback(() => setEditForm(!editForm), [editForm]);

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + 10;
    const currentItems = listOrder.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(listOrder.length / 10);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % listOrder.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={cx('container')}>
            {editForm && <AddProductForm action={handleActionEdit} tittle="Thêm sản phẩm" />}
            <AdminSidebar />
            <div className={cx('sub-container', 'content')} ref={contentRef}>
                <div className={cx('table-title')}>Quản lý sản phẩm</div>
                <NavAdmin action={handleActionEdit} />
                <table className={cx('table-upload')}>
                    <thead>
                        <tr>
                            <th style={{ width: '4%' }}>#</th>
                            <th style={{ width: '11%' }}>Mã sản phẩm</th>
                            <th style={{ width: '35%' }}>Tên sản phẩm</th>
                            <th style={{ width: '13%' }}>Ngày đặt hàng</th>
                            <th style={{ width: '13%' }}>Thành tiền</th>
                            <th style={{ width: '12%' }}>Trạng thái</th>
                            <th style={{ width: '12%' }}>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.map((order, index) => (
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
                                    <div className={cx('action')} onClick={() => handleActionDelete(index)}>
                                        <FaTrash />
                                    </div>
                                    <div className={cx('action')}>
                                        <FaEdit />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className={cx('pagination')}>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel={<FaAngleRight />}
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel={<FaAngleLeft />}
                        renderOnZeroPageCount={null}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProductAdmin;
