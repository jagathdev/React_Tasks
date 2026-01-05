import { useEffect, useState } from "react";

const Day3Task = () => {
    return (<>
        <div>
            <h1>DAY 3 – useEffect + Side Effects</h1>
            <h1>🔧 TASKS</h1>

            <h1>1. Log on component mount</h1>
            <Mount />
            <h1>2. Timer with cleanup</h1>
            <TimerCleanup />
            <h1>3. Fetch API and render list</h1>
            <h1>4. Dependency-based effect</h1>
            <h1>5. Cleanup example</h1>
            <h1>6. Scroll event listener</h1>
            <h1>7. Window resize listener</h1>
            <h1>8. Auto-focus on load</h1>
            <h1>9. Change title using effect</h1>
            <h1>10. localStorage sync with effect</h1>

        </div>
    </>)
};

export default Day3Task;

// 1. Log on component mount

export const Mount = () => {

    useEffect(() => {
        console.log("Component Mounted")
    }, [])

    return (<>
        <h1>Log on component mount</h1>
    </>)
}

// 2. Timer with cleanup

export const TimerCleanup = () => {

    const [time, setTime] = useState<number>(0)


    useEffect(() => {

        setInterval(() => {
            setTime(time + 1)
        }, 1000)

    }, [])

    const CleaupTimer = () => {

    }

    return (<>
        <div>
            <h1>Timer</h1>
            <img src="vite.sv" alt="" />
            <button onClick={CleaupTimer}>CleanUp</button>
        </div>
    </>)
}