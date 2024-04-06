// import { useEffect, useState } from 'react';

// function useCountDown(targetTime) {
//     const countDownDate = new Date(1712035165090 + targetTime).getTime();

//     const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCountDown(countDownDate - new Date().getTime());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [countDownDate]);

//     return getReturnValues(countDown);
// }

// const getReturnValues = (countDown) => {
//     // calculate time left
//     const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//     return [days, hours, minutes, seconds];
// };

// Code cũ không xử lí lại thời gian nếu thời gian là âm
// Giá trị countDown phải tính toán lại không cần thiết khi mà targetTime chưa thay đổi

import { useEffect, useState } from 'react';

function useCountDown(targetTime) {
    const calculateTimeLeft = () => {
        const countDownDate = new Date(1712035165090 + targetTime).getTime();
        const countDown = countDownDate - new Date().getTime();
        const days = Math.max(Math.floor(countDown / (1000 * 60 * 60 * 24)), 0);
        const hours = Math.max(Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
        const minutes = Math.max(Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)), 0);
        const seconds = Math.max(Math.floor((countDown % (1000 * 60)) / 1000), 0);
        return [days, hours, minutes, seconds];
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetTime]);

    return timeLeft;
}

export default useCountDown;
