import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Task from "./Task/Task"
import Day1Task from "./Task/Day1Task"
import Day2Task from "./Task/Day2Task"
import Day3Task from "./Task/Day3Task"
import Day4Task from "./Task/Day4Task"
import Day5Task from "./Task/Day5Task"
import Login from "./pages/Login"


const App: React.FC = () => {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/day1task" element={<Day1Task />} />
          <Route path="/task/day2task" element={<Day2Task />} />
          <Route path="/task/day3task" element={<Day3Task />} />
          <Route path="/task/day4task" element={<Day4Task />} />
          <Route path="/task/day5task" element={<Day5Task />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
