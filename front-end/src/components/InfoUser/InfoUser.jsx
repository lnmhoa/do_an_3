// import styles from './InfoUser.module.scss';
// import classNames from 'classnames/bind';
import Hello from '../Hello/Hello';
// const cx = classNames.bind(styles);

function InfoUser(props) {
    return (
        <>
            <Hello
                src={require('../../image/System/info.png')}
                valueText={'Kiểm tra và chỉnh sửa thông tin cá nhân tại đây'}
            />
        </>
    );
}

export default InfoUser;
// import React from 'react';
// import { useDropzone } from 'react-dropzone';

// const InfoUser = () => {
//   const onDrop = (acceptedFiles) => {
//     console.log(acceptedFiles);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <>
//         <Hello
//             src={require('../../image/System/cart.png')}
//             valueText={'Kiểm tra thông tin đơn hàng của bạn tại đây'}
//         />
//     </>
// );
// };

// export default InfoUser;