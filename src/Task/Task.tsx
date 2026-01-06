import { Link } from "react-router-dom";
import type { taskData } from "../Typescript/Interface"
import { useContext } from "react";
import { ThemeContext } from "../usecontext/ThemeContext";

const Task = () => {

    const { theme } = useContext(ThemeContext)!;

    const tasks: taskData[] = [
        { link: "/task/day1task", name: "Day 1 Task" },
        { link: "/task/day2task", name: "Day 2 Task" },
        { link: "/task/day3task", name: "Day 3 Task" },
        { link: "/task/day4task", name: "Day 4 Task" },
        { link: "/task/day5task", name: "Day 5 Task" },
    ];

    return (
        <>
            <div className={theme ? "bg-yellow-200 p-6 space-y-8" : "bg-gray-800 text-white p-6 space-y-8"
            }>
                {tasks.map((e: any, i: number) => (
                    <div className="flex justify-center" key={i}>
                        <Link to={e.link} className="p-2 bg-black m-3 w-50 text-center text-white rounded-2xl">{e.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Task
