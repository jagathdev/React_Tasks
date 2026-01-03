import React, { useState } from "react"


// React.FC - Functional Component type (no props needed here)
const Day1Task: React.FC = () => {

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Main heading */}
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 pb-4 border-b-4 border-blue-500">
                        React State Management - Day 1 Tasks
                    </h1>

                    {/* Task 1 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            1. Create a counter app with Increment / Decrement / Reset
                        </h2>
                        <Counter />
                    </div>

                    {/* Task 2 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            2. Render users list using map()
                        </h2>
                        <RenderUser />
                    </div>

                    {/* Task 3 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            3. Toggle Login / Logout
                        </h2>
                        <Toggle />
                    </div>

                    {/* Task 4 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            4. Update profile object (name, age)
                        </h2>
                        <UpdateProfile />
                    </div>

                    {/* Task 5 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            5. Conditional rendering (Admin / User)
                        </h2>
                        <ConRendering />
                    </div>

                    {/* Task 6 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            6. Like Button
                        </h2>
                        <LikeBtn />
                    </div>

                    {/* Task 7 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            7. Change background on click
                        </h2>
                        <ChangeBg />
                    </div>

                    {/* Task 8 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            8. Add / Remove item in array
                        </h2>
                        <AddArray />
                    </div>

                    {/* Task 9 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            9. Disable button after click
                        </h2>
                        <DisableBtn />
                    </div>

                    {/* Task 10 */}
                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                            10. Simple form input using state
                        </h2>
                        <SimpleForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Day1Task

//1. Create a Counter App

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    const Increment = () => {
        setCount(count + 1)
    }

    const Decrement = () => {
        setCount(count - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (
        <div className="p-8">
            <div className="text-center">
                <p className="text-4xl font-bold mb-4">{count}</p>

                <button
                    onClick={Increment}
                    className="bg-green-500 text-white px-4 py-2 rounded m-1"
                >
                    Increment
                </button>

                <button
                    onClick={Decrement}
                    className="bg-blue-500 text-white px-4 py-2 rounded m-1"
                >
                    Decrement
                </button>

                <button
                    onClick={Reset}
                    className="bg-red-500 text-white px-4 py-2 rounded m-1"
                >
                    Reset
                </button>
            </div>
        </div>
    )
};


// 2 . Render users list using map()

// Define the shape of user data
interface UserData {
    userName: string;
    age: string;
    email: string;
    mobile: string;
    password: string;
}

const RenderUser = () => {
    // useState with UserData type - ensures user object matches the interface
    const [user, setUser] = useState<UserData>({
        userName: "",
        age: "",
        email: "",
        mobile: "",
        password: ""
    })

    // React.ChangeEvent<HTMLInputElement> - type for input change events
    const getInputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Updates user state while preserving other properties
        setUser((user: UserData) => ({ ...user, [name]: value }))
    }

    // React.FormEvent<HTMLFormElement> - type for form submit events
    const getUserData = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Your logic here
    }

    return (<>
        <div className="p-8 max-w-md mx-auto">
            <form onSubmit={getUserData} className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Name :</label>
                    <input className="border rounded px-3 py-2" type="text" onChange={getInputData} name="userName" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Age :</label>
                    <input className="border rounded px-3 py-2" type="text" onChange={getInputData} name="age" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Email :</label>
                    <input type="email" className="border rounded px-3 py-2" onChange={getInputData} name="email" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Mobile :</label>
                    <input type="number" className="border rounded px-3 py-2" onChange={getInputData} name="mobile" />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Password :</label>
                    <input type="password" className="border rounded px-3 py-2" onChange={getInputData} name="password" />
                </div>
                <input type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer mt-2" />
            </form>
            <div className="bg-gray-50 p-4 rounded">
                <h1 className="mb-2">UserName: {user.userName}</h1>
                <h1 className="mb-2">Age: {user.age}</h1>
                <h1 className="mb-2">Email: {user.email}</h1>
                <h1 className="mb-2">Mobile: {user.mobile}</h1>
                <h1 className="mb-2">Password: {user.password}</h1>
            </div>
        </div>
    </>)
}

// 3. Toggle Login / Logout
export const Toggle = () => {
    // boolean type - indicates login status is either true or false
    const [loginsts, setLoginsts] = useState<boolean>(false)

    // void type - function doesn't return anything
    const handleClick = (): void => {
        setLoginsts(!loginsts)
    }

    return (<>
        <div className="p-8 flex justify-center items-center">
            <button
                onClick={handleClick}
                className={`px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 ${loginsts
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                    }`}
            >
                {loginsts ? "Login" : "Logout"}
            </button>
        </div>
    </>)
}
// 4. Update profile object (name, age)

// Interface defines the structure of profile data
interface ProfileData {
    profileName: string;
    age: string;
}

export const UpdateProfile = () => {
    // useState<ProfileData> - state is typed as ProfileData object
    const [profile, setProfile] = useState<ProfileData>(
        { profileName: "", age: "" }
    )

    // React.ChangeEvent<HTMLInputElement> - type for input change events
    const getDataInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        // Spread operator preserves existing properties while updating one
        setProfile((profile: ProfileData) => ({ ...profile, [name]: value }))
    }

    // React.FormEvent<HTMLFormElement> - type for form submit events
    const submitForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        console.log(profile)
    }

    return (<>
        <div className="p-8 max-w-md mx-auto">
            <form onSubmit={submitForm} className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow">
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Name :</label>
                    <input
                        type="text"
                        name="profileName"
                        onChange={getDataInput}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1 font-medium text-gray-700">Age :</label>
                    <input
                        type="text"
                        name="age"
                        onChange={getDataInput}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded cursor-pointer transition-colors mt-2"
                />
            </form>
        </div>
    </>)
}
// 5. Conditional rendering (Admin / User)

// Interface defines the structure of admin data
interface AdminData {
    name: string;
    age: string;
    role: string;
}

export const ConRendering = () => {
    // useState<AdminData> - state is typed as AdminData object
    const [admin, setAdmin] = useState<AdminData>({ name: "", age: "", role: "" })

    // useState<AdminData> - finalData should also be AdminData type
    const [finalData, setFinalData] = useState<AdminData>({ name: "", age: "", role: "" });

    // useState<boolean> - boolean flag to show/hide data
    const [showData, setShowData] = useState<boolean>(false)

    // React.ChangeEvent<HTMLInputElement | HTMLSelectElement> - handles both input and select changes
    const Inputval = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        const { name, value } = e.target;
        setAdmin((admin) => ({ ...admin, [name]: value }))
    }

    // React.FormEvent<HTMLFormElement> - form submit event type
    const getAdmin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setFinalData(admin)
        console.log(admin)
        setShowData(true)
    }

    return (<>
        <div className="p-8 max-w-2xl mx-auto">
            <form onSubmit={getAdmin} className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Name :</label>
                    <input
                        type="text"
                        name="name"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={Inputval}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Age :</label>
                    <input
                        type="text"
                        name="age"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={Inputval}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Role :</label>
                    <select
                        name="role"
                        onChange={Inputval}
                        className="border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="" disabled>Select Any one</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors w-full"
                />
            </form>

            {showData && (
                <div className="bg-white p-6 rounded-lg shadow">
                    {finalData.role === "admin" ? (
                        <div className="border-l-4 border-green-500 pl-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                                This is a {finalData.role} Details
                            </h1>
                            <p className="mb-2 text-gray-700">
                                <span className="font-semibold">Admin Name:</span> {finalData.name}
                            </p>
                            <p className="mb-2 text-gray-700">
                                <span className="font-semibold">Admin Age:</span> {finalData.age}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Admin Role:</span> {finalData.role}
                            </p>
                        </div>
                    ) : (
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">
                                This is a {finalData.role} Details
                            </h1>
                            <p className="mb-2 text-gray-700">
                                <span className="font-semibold">User Name:</span> {finalData.name}
                            </p>
                            <p className="mb-2 text-gray-700">
                                <span className="font-semibold">User Age:</span> {finalData.age}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">User Role:</span> {finalData.role}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    </>)
}

// 6. Like button
export const LikeBtn = () => {
    // useState<boolean> - like state is a boolean (true/false)
    const [like, setLike] = useState<boolean>(false)

    // (): void - function returns nothing
    const handleDoubleClick = (): void => {
        setLike(!like)
    }

    return (<>
        <div className="p-8 flex justify-center items-center">
            <button
                onDoubleClick={handleDoubleClick}
                className={`px-6 py-3 font-bold text-white rounded-lg transition-all duration-300 transform hover:scale-105 ${like
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-red-500 hover:bg-red-600"
                    }`}
            >
                {like ? "❤️ Liked" : "🤍 Like"}
            </button>
        </div>
    </>)
}

// 7. Change background on click

export const ChangeBg = () => {
    // useState<string> - bg state stores a string value (color name)
    const [bg, setBg] = useState<string>("")

    // useState<boolean> - showBox is a boolean flag to show/hide the box
    const [showBox, setShowBox] = useState<boolean>(false)

    // React.ChangeEvent<HTMLSelectElement> - type for select change events
    const getColorValue = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setBg(e.target.value)
        console.log(e.target.value)
    }

    // React.FormEvent<HTMLFormElement> - type for form submit events
    const getColor = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        setShowBox(true)
    }

    return (<>
        <div className="p-8 max-w-md mx-auto">
            <form onSubmit={getColor} className="bg-white p-6 rounded-lg shadow mb-6">
                <div className="flex flex-col mb-4">
                    <label className="mb-2 font-medium text-gray-700">Choose a color</label>
                    <select
                        onChange={getColorValue}
                        name="color"
                        className="border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:border-blue-500 mb-4"
                    >
                        <option value="" disabled>Select Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>
                </div>
                <input
                    type="submit"
                    value="Show Box"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors w-full"
                />
            </form>

            {showBox && (
                <div className="flex justify-center">
                    {bg === "red" && (
                        <div className="bg-red-600 text-white p-8 w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold">
                            Red Box
                        </div>
                    )}
                    {bg === "blue" && (
                        <div className="bg-blue-600 text-white p-8 w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold">
                            Blue Box
                        </div>
                    )}
                    {bg === "yellow" && (
                        <div className="bg-yellow-500 text-white p-8 w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold">
                            Yellow Box
                        </div>
                    )}
                    {bg === "black" && (
                        <div className="bg-black text-white p-8 w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold">
                            Black Box
                        </div>
                    )}
                    {bg === "green" && (
                        <div className="bg-green-600 text-white p-8 w-64 h-64 rounded-lg shadow-lg flex items-center justify-center text-2xl font-bold">
                            Green Box
                        </div>
                    )}
                </div>
            )}
        </div>
    </>)
}

//8.Add / Remove item in array
// Interface defines the structure of a product
interface Product {
    id: string;
    productName: string;
    price: string;
    qty: string;
}

export const AddArray = () => {
    // useState<Product> - single product state typed as Product interface
    const [product, setProduct] = useState<Product>(
        { id: "", productName: "", price: "", qty: "" }
    );

    // useState<Product[]> - array of products typed as Product array (not any[])
    const [newProduct, setNewProduct] = useState<Product[]>([])

    // React.ChangeEvent<HTMLInputElement> - type for input change events
    const getProductInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        // Updates product state while preserving other properties
        setProduct((product: Product) => ({ ...product, [name]: value }))
    }

    // React.FormEvent<HTMLFormElement> - type for form submit events
    const getProduct = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        console.log(product)

        // Adds new product to the array
        setNewProduct((newProduct) => ([...newProduct, product]))

        // Resets form fields
        setProduct({ id: "", productName: "", price: "", qty: "" })
    }

    return (<>
        <div className="p-8 max-w-4xl mx-auto">
            <form onSubmit={getProduct} className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Product</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Product Id :</label>
                        <input
                            type="text"
                            onChange={getProductInput}
                            name="id"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={product.id}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Product Name :</label>
                        <input
                            type="text"
                            onChange={getProductInput}
                            name="productName"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={product.productName}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Product Price :</label>
                        <input
                            type="text"
                            onChange={getProductInput}
                            name="price"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={product.price}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-1 font-medium text-gray-700">Product Qty :</label>
                        <input
                            type="text"
                            onChange={getProductInput}
                            name="qty"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={product.qty}
                        />
                    </div>
                </div>

                <input
                    type="submit"
                    value="Add Product"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors w-full"
                />
            </form>

            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Product List</h2>
                {newProduct.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No products added yet</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {newProduct.map((e: Product, i: number) => (
                            <div key={i} className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow">
                                <div className="mb-2">
                                    <span className="font-semibold text-gray-600">ID:</span>
                                    <span className="ml-2 text-gray-800">{e.id}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="font-semibold text-gray-600">Name:</span>
                                    <span className="ml-2 text-gray-800">{e.productName}</span>
                                </div>
                                <div className="mb-2">
                                    <span className="font-semibold text-gray-600">Price:</span>
                                    <span className="ml-2 text-green-600 font-bold">${e.price}</span>
                                </div>
                                <div>
                                    <span className="font-semibold text-gray-600">Qty:</span>
                                    <span className="ml-2 text-gray-800">{e.qty}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    </>)
}

// 9. Disable button after click

export const DisableBtn = () => {
    // useState<boolean> - btn state is a boolean (true = enabled, false = disabled)
    const [btn, setBtn] = useState<boolean>(true)

    // (): void - function returns nothing
    const DisableButton = (): void => {
        setBtn(false)
    }

    return (<>
        <div className="p-8 flex justify-center items-center">
            <button
                className={`font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${btn
                    ? "bg-black hover:bg-gray-800 text-white cursor-pointer transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                onClick={DisableButton}
                disabled={!btn}
            >
                {btn ? "Click Me" : "Button is Disabled"}
            </button>
        </div>
    </>)
}

// 10. Simple form input using state
// Interface defines the structure of form data
interface FormData {
    name: string;
    mobile: string;
    email: string;
    password: string;
}

export const SimpleForm = () => {
    // useState<FormData> - formData state typed as FormData interface
    const [formData, setFormData] = useState<FormData>({
        name: "",
        mobile: "",
        email: "",
        password: ""
    })

    // useState<boolean> - showData is a boolean flag to show/hide data
    const [showData, setShowData] = useState<boolean>(false)

    // React.ChangeEvent<HTMLInputElement> - type for input change events
    const inputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        // Spread operator preserves existing properties while updating one
        setFormData((formData) => ({ ...formData, [name]: value }))
    }

    // React.FormEvent<HTMLFormElement> - type for form submit events
    const getFormData = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setShowData(true)
    }

    return (<>
        <div className="p-8 max-w-md mx-auto">
            <form onSubmit={getFormData} className="bg-white p-6 rounded-lg shadow mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Registration Form</h2>

                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Name :</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={inputValue}
                        name="name"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Mobile :</label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={inputValue}
                        name="mobile"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Email :</label>
                    <input
                        type="email"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={inputValue}
                        name="email"
                    />
                </div>

                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-medium text-gray-700">Password :</label>
                    <input
                        type="password"
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        onChange={inputValue}
                        name="password"
                    />
                </div>

                <input
                    type="submit"
                    value="Register"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded cursor-pointer transition-colors w-full"
                />
            </form>

            {showData && (
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Submitted Information</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">
                            <span className="font-semibold">Name:</span> {formData.name}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Mobile:</span> {formData.mobile}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span> {formData.email}
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Password:</span> {formData.password}
                        </p>
                    </div>
                </div>
            )}
        </div>
    </>)
}

