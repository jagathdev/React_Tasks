import { useEffect, useRef, useState } from "react";

const Day2Task = () => {
    return (
        <>
            <h1>Day 2 Tasks</h1>
            <h1>1. Focus input on button click</h1>
            <FocusInput />
            <h1>2. Clear Input Using Ref</h1>
            <ClearInput />
            <h1>3. AutoSave Input to Local Storage</h1>
            <AutoSave />
            <h1>4. Theme change using ref + Tailwind</h1>
            <ThemeChange />
        </>
    )
}

export default Day2Task;

// 1. Focus input on button click

export const FocusInput = () => {

    const focusRef = useRef<HTMLInputElement>(null)

    const inputFocus = () => {
        focusRef.current?.focus()
        alert("Input Focused")
    }

    return (<>
        <input ref={focusRef} type="text" className="border p-1" placeholder="Enter Value" />
        <input onClick={inputFocus} type="submit" value="Focus Input" />
    </>)
}

// 2. Clear Input Using Ref

export const ClearInput = () => {

    const clearRef = useRef<HTMLInputElement>(null)

    const InputClear = () => {
        if (clearRef.current) {
            clearRef.current.value = ""
            alert("Input Value is Clear")
        }

    }

    return (<>
        <input ref={clearRef} type="text" placeholder="Enter Your Name" className="p-1 border" />
        <button type="submit" onClick={InputClear}>ClearInput</button>
    </>)
}

// 3. AutoSave Input to Local Storage

const AutoSave = () => {

    const saveRef = useRef<HTMLInputElement>(null)

    const saveInput = (e: any) => {
        const inputVal = e.target.value
        localStorage.setItem("autoSaveData", inputVal)
    }

    useEffect(() => {
        const GetData = localStorage.getItem("autoSaveData")

        if (GetData && saveRef.current) {
            saveRef.current.value = GetData
        }
    }, [])

    return (<>
        <input ref={saveRef} type="text" onChange={saveInput} placeholder="Typehere...." />

    </>)
}

// 4. Theme change using ref + Tailwind

const ThemeChange = () => {

    const ThemeRef = useRef<any>(true)

    const [theme, setTheme] = useState<boolean>(true)

    const changeTheme = () => {
        setTheme(!theme)

        if (ThemeRef.current) {
            ThemeRef.current.classList.add("bg-red-600", "text-white")
            ThemeRef.current = false
            console.log(ThemeRef.current)
        } else {
            ThemeRef.current.classList.remove("bg-red-600", "text-white")
            // ThemeRef.current.classList.add("p-5", "bg-yellow-600")
            alert("Else")
        }
    }

    return (<>
        <div className={theme ? "bg-black text-white" : ""}>
            <div>This is a Theme Change using State</div>
            <button className={theme ? "bg-white text-black px-3 py-1" : "bg-black text-white px-3 py-1"} onClick={changeTheme}>{theme ? "Light" : "Dark"}</button>
        </div>

        <div ref={ThemeRef} >
            <div>This is Theme Change Component Using useRef Hook</div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    </>)
}