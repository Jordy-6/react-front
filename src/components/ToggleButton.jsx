import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../context/ThemeContext.jsx";


function ToggleButton() {

    const { toggleTheme } = useContext(ThemeContext)
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        toggleTheme(isToggled  ? 'dark' : 'light')
    }, [isToggled]);


    return (
        <>
            <div className="form-check form-switch">
                <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={(event) => setIsToggled(!isToggled)}
                    checked={isToggled}
                />
            </div>
        </>
    );
}

export default ToggleButton;
