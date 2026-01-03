import { useRef } from "react";

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
    const saveInput = () => {

    }

    return (<>
        <input ref={saveRef} type="text" onChange={saveInput} />
    </>)
}