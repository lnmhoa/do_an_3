import { Button } from 'react-bootstrap';
import { Sun } from '../Icons/SunIcon';
import { Moon } from '../Icons/MoonIcon';
import { useState } from 'react';

function Theme() {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-bs-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
    };
    const selectedTheme = localStorage.getItem('selectedTheme') ? localStorage.getItem('selectedTheme') : 'light';
    if (selectedTheme === 'dark') {
        setDarkMode();
        var dark = true;
    }
    const [isDarkMode, setIsDarkMode] = useState(dark);
    const toggleTheme = () => {
        if (selectedTheme === 'dark') {
            setLightMode();
        } else if (selectedTheme === 'light') {
            setDarkMode();
        }
        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <>
            <Button
                style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', paddingLeft: '0' }}
                value="dark"
                onClick={toggleTheme}
            >
                {isDarkMode ? <Moon color="yellow" /> : <Sun color="orange" />}
            </Button>
        </>
    );
}

export default Theme;
