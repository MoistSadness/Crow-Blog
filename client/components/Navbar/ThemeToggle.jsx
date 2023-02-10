import { useState, useEffect } from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeToggle() {
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

    // When the application loads, check local storage for a saved theme
    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme')
        savedTheme && setActiveTheme(savedTheme)
    }, [])

    // When the active theme changes, swap it with the inactive theme
    useEffect(() => {
        document.body.dataset.theme = activeTheme
        window.localStorage.setItem('theme', activeTheme)
    }, [activeTheme])

    return (
        <button
            aria-label={`Change to ${inactiveTheme} mode`}
            className="button--theme-toggle"
            onClick={() => setActiveTheme(inactiveTheme)}
        >
            {activeTheme === 'light' ?
                <LightModeIcon fontSize='1em' /> :
                <DarkModeIcon fontSize='1em' />}
        </button>
    )
}