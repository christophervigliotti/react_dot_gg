        import * as React from "react";
        export default function ThemeSwitcher() {
            const [theme,setTheme] = React.useState("light")
            const handleClick = () => {
                setTheme(theme === "dark" ? "light" : "dark");
            };
            return (
                <button onClick={handleClick} className={theme}>            
                  Switch Theme from {theme}
                </button>
            );
        }