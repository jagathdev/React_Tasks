import { useEffect, useRef, useState } from "react";

const Day2Task = () => {
    return (
        <>
            <div className="h-100">

                <h1>Day 2 Tasks</h1>
                <h1>1. Focus input on button click</h1>
                <FocusInput />
                <h1>2. Clear Input Using Ref</h1>
                <ClearInput />
                <h1>3. AutoSave Input to Local Storage</h1>
                <AutoSave />
                <h1>4. Theme change using ref + Tailwind</h1>
                <ThemeChange />
                <h1>5. Scroll to top button</h1>
                <ScrollTop />
                <h1>6. Change font size using ref</h1>
                <FontIncrese />
            </div>
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

export const AutoSave = () => {

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

export const ThemeChange = () => {

    const ThemeRef = useRef<HTMLDivElement | null>(null)

    const darkRef = useRef(true)

    const [theme, setTheme] = useState<boolean>(true)

    const changeTheme = () => {
        setTheme(!theme)

        if (!ThemeRef.current) return;

        if (darkRef.current) {
            ThemeRef.current.classList.add("bg-gray-900", "text-white")
            ThemeRef.current.classList.remove("bg-yellow-300", "text-black")
        } else {
            ThemeRef.current.classList.remove("bg-gray-900", "text-white")
            ThemeRef.current.classList.add("bg-yellow-300", "text-black")
        }
        darkRef.current = !darkRef.current
    }

    return (<>
        <div className={theme ? "bg-black text-white" : ""}>
            <div>This is a Theme Change using State</div>
            <button className={theme ? "bg-white text-black px-3 py-1" : "bg-black text-white px-3 py-1 "} onClick={changeTheme}>{theme ? "Light" : "Dark"}</button>
        </div>

        <div ref={ThemeRef} >
            <div>This is Theme Change Component Using useRef Hook</div>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    </>)
}
// 5. Scroll to top button
export const ScrollTop = () => {

    const GoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
        // alert("TO goto top")
    }

    return (<>
        <button onClick={GoToTop}>Go To Top </button>
    </>)
}

//6. Change font size using ref

const FontIncrese = () => {

    const fontRef = useRef<HTMLDivElement>(null)

    const Increase = () => {
        fontRef.current?.classList.add("text-5xl", "font-bold")
    }
    return (<>
        <div>
            <h1 ref={fontRef}>This is a Font Increase Component</h1>
            <button onClick={Increase}>Increse Font Size</button>
        </div>
    </>)
}