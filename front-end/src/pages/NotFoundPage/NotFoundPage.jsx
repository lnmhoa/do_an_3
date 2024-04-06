import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegFaceSadCry } from 'react-icons/fa6';
function NotFoundPage() {
    let defaultTitle = 'NotFoundPage';
    useEffect(() => {
        document.title = defaultTitle;
    }, [defaultTitle]);

    return (
        <>
            <div
                style={{
                    margin: '0 auto',
                    height: '100vh',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    padding: '50px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'grey'
                }}
            >
                <FaRegFaceSadCry style={{ fontSize: 100 }} />
                <strong style={{ fontSize: 40 }}>404</strong>
                <p>Page Not Found</p>
                <Link to='/' style={{color: 'var(--color-2)'}}>Back to Home</Link>
            </div>
        </>
    );
}

export default NotFoundPage;
