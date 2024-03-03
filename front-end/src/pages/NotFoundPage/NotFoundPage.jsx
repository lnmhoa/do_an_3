import { useEffect } from 'react';

function NotFoundPage() {
    let defaultTitle = 'NotFoundPage';
    useEffect(() => {
        document.title = defaultTitle;
    }, []);
    return (
        <>
            <h1>NotFoundPage</h1>
        </>
    );
}

export default NotFoundPage;
