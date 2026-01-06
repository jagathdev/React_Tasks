import { useContext } from "react"
import { ThemeContext } from "../usecontext/ThemeContext"

const Day5Task = () => {

    const { theme, themeChange } = useContext(ThemeContext)!;


    return (
        <>
            <div className={theme ? "bg-amber-200" : "bg-gray-600 text-white"}>
                <h1>Day 5 Task Use Context</h1>
                <button className="border-2" onClick={themeChange}>Change Theme</button>
            </div>
        </>
    )
}

export default Day5Task;

