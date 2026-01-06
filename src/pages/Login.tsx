import { useState, } from "react"

const Login = () => {

    const [loginData, setLoginData] = useState<null>(null);

    const getLoginData = (e: any) => {
        e.preventDefault();
        console.log(loginData)
    }

    const getInputData = (e: any) => {
        const { name, value } = e.target
        setLoginData((loginData: any) => ({ ...loginData, [name]: value }))
    }

    return (
        <div>
            <form onSubmit={getLoginData}>
                <label>Name :</label>
                <input type="text" onChange={getInputData} name="name" placeholder="Enter User Name" />
                <label >Password</label>
                <input type="text" onChange={getInputData} name="password" placeholder="Enter password" />
                <input type="submit" value="Login" />
            </form>

        </div >
    )
}

export default Login;
