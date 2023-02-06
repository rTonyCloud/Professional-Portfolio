const useThemeOptions = () => {
    const [theme, setTheme] = React.useState('dark')
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('dark')
            window.localStorage.setItem('theme', 'dark')
        } else {
            setTheme('light')
            window.localStorage.setItem('theme', 'light')
        }
    }
    return { theme, toggleTheme }
}
