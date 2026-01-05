import { useEffect, useRef, useState } from "react";

const Day2Task = () => {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 pb-4 border-b-4 border-purple-500">
                        Day 2 Tasks - useRef Hook
                    </h1>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">1. Focus input on button click</h2>
                        <FocusInput />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">2. Clear Input Using Ref</h2>
                        <ClearInput />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">3. AutoSave Input to Local Storage</h2>
                        <AutoSave />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">4. Theme change using ref + Tailwind</h2>
                        <ThemeChange />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">5. Scroll to top button</h2>
                        <ScrollTop />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">6. Change font size using ref</h2>
                        <FontIncrese />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">7. Video play / pause using ref</h2>
                        <VideoPause />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">8. Count clicks without re-render</h2>
                        <Counter />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">9. Read input without state</h2>
                        <ReadInput />
                    </div>

                    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-semibold text-purple-600 mb-4">10. Show / Hide element using ref</h2>
                        <HideShow />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Day2Task;

// 1. Focus input on button click

export const FocusInput = () => {
    // useRef<HTMLInputElement>(null) - ref for input element
    const focusRef = useRef<HTMLInputElement>(null)

    // (): void - function returns nothing
    const inputFocus = (): void => {
        focusRef.current?.focus()
        alert("Input Focused")
    }

    return (
        <div className="flex gap-3 items-center">
            <input ref={focusRef} type="text" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
            <input onClick={inputFocus} type="submit" value="Focus Input" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded cursor-pointer transition-colors" />
        </div>
    )
}

// 2. Clear Input Using Ref

export const ClearInput = () => {
    // useRef<HTMLInputElement>(null) - ref for input element
    const clearRef = useRef<HTMLInputElement>(null)

    // (): void - function returns nothing
    const InputClear = (): void => {
        if (clearRef.current) {
            clearRef.current.value = ""
            alert("Input Value is Clear")
        }
    }

    return (
        <div className="flex gap-3 items-center">
            <input ref={clearRef} type="text" placeholder="Enter Your Name" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500" />
            <button type="submit" onClick={InputClear} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors">Clear Input</button>
        </div>
    )
}

// 3. AutoSave Input to Local Storage

export const AutoSave = () => {
    // useRef<HTMLInputElement>(null) - ref for input element
    const saveRef = useRef<HTMLInputElement>(null)

    // React.ChangeEvent<HTMLInputElement> - type for input change events (FIXED: was 'any')
    const saveInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const inputVal = e.target.value
        localStorage.setItem("autoSaveData", inputVal)
    }

    useEffect(() => {
        const GetData = localStorage.getItem("autoSaveData")

        if (GetData && saveRef.current) {
            saveRef.current.value = GetData
        }
    }, [])

    return (
        <div>
            <input ref={saveRef} type="text" onChange={saveInput} placeholder="Type here...." className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
            <p className="text-sm text-gray-500 mt-2">✓ Auto-saved to localStorage</p>
        </div>
    )
}

// 4. Theme change using ref + Tailwind

export const ThemeChange = () => {
    // useRef<HTMLDivElement | null>(null) - ref for div element
    const ThemeRef = useRef<HTMLDivElement | null>(null)

    // useRef<boolean>(true) - stores boolean without re-render (FIXED: was not typed)
    const darkRef = useRef<boolean>(true)

    // useState<boolean> - theme state is boolean
    const [theme, setTheme] = useState<boolean>(true)

    // (): void - function returns nothing
    const changeTheme = (): void => {
        setTheme(!theme)

        if (!ThemeRef.current) return;
        console.log(!ThemeRef.current)

        if (darkRef.current) {
            ThemeRef.current.classList.add("bg-gray-900", "text-white")
            ThemeRef.current.classList.remove("bg-yellow-300", "text-black")
        } else {
            ThemeRef.current.classList.remove("bg-gray-900", "text-white")
            ThemeRef.current.classList.add("bg-yellow-300", "text-black")
        }
        darkRef.current = !darkRef.current
    }

    return (
        <div className="space-y-4">
            <div className={`p-4 rounded-lg transition-colors ${theme ? "bg-black text-white" : "bg-white text-black border"}`}>
                <div className="mb-3">This is a Theme Change using State</div>
                <button className={`px-4 py-2 rounded font-semibold transition-colors ${theme ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`} onClick={changeTheme}>
                    {theme ? "Light" : "Dark"}
                </button>
            </div>

            <div ref={ThemeRef} className="p-4 rounded-lg transition-colors">
                <div className="mb-3">This is Theme Change Component Using useRef Hook</div>
                <button onClick={changeTheme} className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded transition-colors">
                    Change Theme
                </button>
            </div>
        </div>
    )
}

// 5. Scroll to top button
export const ScrollTop = () => {
    // (): void - function returns nothing
    const GoToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <button onClick={GoToTop} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            ↑ Go To Top
        </button>
    )
}

//6. Change font size using ref

export const FontIncrese = () => {
    // useRef<HTMLDivElement>(null) - ref for div element
    const fontRef = useRef<HTMLDivElement>(null)

    // (): void - function returns nothing
    const Increase = (): void => {
        fontRef.current?.classList.add("text-5xl", "font-bold")
    }

    return (
        <div>
            <h1 ref={fontRef} className="mb-4 text-gray-700 transition-all">This is a Font Increase Component</h1>
            <button onClick={Increase} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition-colors">
                Increase Font Size
            </button>
        </div>
    )
}

// 7. Video play / pause using ref
import video from '../assets/MurugarVideo.mp4'

export const VideoPause = () => {
    // useRef<HTMLVideoElement | null>(null) - ref for video element
    const videoRef = useRef<HTMLVideoElement | null>(null)

    // (): void - function returns nothing
    const PlayandPauseVideo = (): void => {
        if (videoRef.current?.paused) {
            videoRef.current.play()
        } else {
            videoRef.current?.pause()
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <video src={video} ref={videoRef} width={300} className="rounded-lg shadow-lg"></video>
            <button onClick={PlayandPauseVideo} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition-colors">
                ▶️ Play / Pause
            </button>
        </div>
    )
}

// 8. Count clicks without re-render

export const Counter = () => {
    // useRef<number>(0) - ref stores number without re-render
    const countRef = useRef<number>(0)

    // (): void - function returns nothing
    const IncCount = (): void => {
        countRef.current += 1
        console.log(countRef.current)
    }

    // (): void - function returns nothing
    const DecCount = (): void => {
        countRef.current -= 1
        console.log(countRef.current)
    }

    return (
        <div className="flex gap-3">
            <button onClick={IncCount} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition-colors">
                Increment
            </button>
            <button onClick={DecCount} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded transition-colors">
                Decrement
            </button>
            <p className="text-sm text-gray-500 self-center">(Check console for count)</p>
        </div>
    )
}

// 9. Read input without state

export const ReadInput = () => {
    // useRef<HTMLInputElement | null>(null) - ref for input element
    const inputRef = useRef<HTMLInputElement | null>(null)

    // React.ChangeEvent<HTMLInputElement> - type for input change events (FIXED: was 'any')
    const readInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.value)
    }

    return (
        <div>
            <input ref={inputRef} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" type="text" onChange={readInput} placeholder="Type to see in console..." />
            <p className="text-sm text-gray-500 mt-2">Check console for input value</p>
        </div>
    )
}

// 10. Show / Hide element using ref

export const HideShow = () => {
    // useRef<HTMLDivElement | null>(null) - ref for div element
    const hideRef = useRef<HTMLDivElement | null>(null)

    // (): void - function returns nothing
    const Hidediv = (): void => {
        if (!hideRef.current) return;
        hideRef.current.classList.toggle("hidden")
    }

    return (
        <div className="space-y-4">
            <div ref={hideRef} className="bg-gradient-to-r from-purple-500 to-pink-500 h-32 w-64 rounded-lg shadow-lg"></div>
            <button onClick={Hidediv} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded transition-colors">
                Hide / Show Box
            </button>
        </div>
    )
}