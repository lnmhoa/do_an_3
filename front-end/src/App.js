import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
    const [titlePage, setTitlePage] = useState('');
    var Page;
    useEffect(() => {
        const newTitlePage = routes.map((route) => {
            console.log(route.title);
            if (route.page === Page) {
                return route.title;
            }
        });
        console.log('đây là ' + newTitlePage);
        setTitlePage(newTitlePage); // Cập nhật titlePage
        
        document.title = titlePage;
    }, [Page]); // useEffect sẽ chạy khi routes thay đổi
    return (
        <div>
            <Contact />
            <Router>
                <Routes>
                    {routes.map((route) => {
                        Page = route.page;
                        const Layout = route.isShowLayout ? DefaultLayout : Fragment;
                        return (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
