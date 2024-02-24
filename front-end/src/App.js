import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultLayout from './components/DefaultLayout/DefaultLayout';
import './App.css'

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {routes.map((route) => {
                        const Page = route.page;
                        const Layout = route.isShowLayout ? DefaultLayout : Fragment;
                        return <Route path={route.path} key={route.path} element={<Layout><Page /></Layout>} />;
                    })}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

