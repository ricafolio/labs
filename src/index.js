import React from "react"
import { useState } from "react"
import { createRoot } from "react-dom/client"
import { Tasks } from "./Tasks.jsx"
import { TaskNew } from "./TaskNew.jsx"

function MyApp() {
  const [tasks, setTask] = useState([
    { id: 1, name: "Cook" },
    { id: 2, name: "Cook lunch" },
    { id: 3, name: "Cook dinner" },
  ])

  function addNewTask(name) {
    setTask([
      ...tasks,
      {
        id: new Date().getTime(),
        name,
      },
    ])
  }

  return (
    <>
      <h1>To-do list</h1>
      <Tasks tasks={tasks} />
      <TaskNew handleClick={addNewTask} />
    </>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<MyApp />)
