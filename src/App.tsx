import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Task from "./Task/Task"
import Day1Task from "./Task/Day1Task"


const App: React.FC = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
          <Route path="/task/day1task" element={<Day1Task />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
