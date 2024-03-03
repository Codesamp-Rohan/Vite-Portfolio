// import React from "react";
import useTheme from "../context/theme.js";

export default function ThemeBtn({isTheme, setIsTheme}){

    const {themeMode, darkTheme, lightTheme} = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked;

        if(darkModeStatus){
            darkTheme();
        } else {
            lightTheme();
        }
    }

    return (
        // <button className="border-[0.2px] border-[#6e40c9] rounded-md px-[30px]">Theme</button>

        <label className="relative inline-flex items-center cursor-pointer border-[0.4px] border-[#6e40c9] rounded-md px-[20px] dark:bg-[#eee] dark:text-[#000]">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"}
                onClick={() => setIsTheme(!isTheme)}
            />
            Theme
        </label>
    )
}