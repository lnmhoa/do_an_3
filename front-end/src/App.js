import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
    return (
        <div>
            {/* <Contact /> */}
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        var Layout;

                        if (route.layout === null) {
                            Layout = Fragment;
                        } else Layout = route.layout;
                        return (
                            <Route
                                path={route.path}
                                key={route.path}
                                element={
                                    <Layout>
                                        <Page title={route.title} isShowFooter={route.isShowFooter} />
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
