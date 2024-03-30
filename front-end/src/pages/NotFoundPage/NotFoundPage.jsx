import { useEffect } from 'react';
import CountDown from '../../components/CountDown/CountDown';

function NotFoundPage() {
    let defaultTitle = 'NotFoundPage';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);

    return (
        <>
            <CountDown targetTime={604800000} />
        </>
    );
}

export default NotFoundPage;
