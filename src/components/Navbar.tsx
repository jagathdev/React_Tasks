import { useContext } from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "../usecontext/ThemeContext"

const Navbar = () => {
    const { theme, themeChange } = useContext(ThemeContext)!;
    return (
        <>
            <div className={theme ? "flex justify-between bg-gray-900 p-5" : "flex justify-between bg-gray-400 p-5"}>

                <Link to='/'><h1 className="bg-gray-900 px-3 py-1 text-white rounded font-bold">Logo</h1></Link>
                <div className="flex gap-10">
                    <Link to='/' className="bg-black px-3 py-1 text-white rounded font-bold">Home</Link>
                    <Link to='/Task' className="bg-black text-white px-3 py-1 rounded font-bold">Task</Link>
                    <button className={theme ? "bg-black text-white px-3 py-1 rounded font-bold" : "bg-white  px-3 py-1 rounded font-bold"} onClick={themeChange}>{theme ? "Dark" : "Light"}</button>
                </div>
            </div >
        </>
    )
}

export default Navbar
