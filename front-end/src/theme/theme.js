import '../components/GlobalStyle/GlobalStyle.scss';

function Theme({ children }) {
    const setDarkMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem("selectedTheme", "dark")
    };
    const setLightMode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem("selectedTheme", "light")
    };
    const selectedTheme = localStorage.getItem("selectedTheme")
    if(selectedTheme === 'dark'){
        setDarkMode()
    }
    const toggleTheme = (e) => {
        if (e.target.checked) setDarkMode();
        else setLightMode();
    };
    return (
        <div>
            {/* {children}
            <input type="checkbox" onChange={toggleTheme} /> */}
        </div>
    );
}

export default Theme;
