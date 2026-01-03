import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between bg-blue-400 p-5">
                <Link to='/'><h1 className="bg-gray-900 px-3 py-1 text-white rounded font-bold">Logo</h1></Link>
                <div className="flex gap-10">
                    <Link to='/' className="bg-black px-3 py-1 text-white rounded font-bold">Home</Link>
                    <Link to='/Task' className="bg-black text-white px-3 py-1 rounded font-bold">Task</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
