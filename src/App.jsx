import { useState } from "react"
import { Tasks } from "./Tasks.jsx"
import { TaskNew } from "./TaskNew.jsx"

export function MyApp() {
  const genId = () => {
    return crypto.randomUUID()
  }

  const [tasks, setTask] = useState([
    { id: genId(), name: "Cook" },
    { id: genId(), name: "Cook lunch" },
    { id: genId(), name: "Cook dinner" },
  ])

  function addNewTask(name) {
    setTask([
      ...tasks,
      {
        id: genId(),
        name,
      },
    ])
  }

  function deleteTask(id) {
    setTask(tasks.filter((num) => num.id !== id))
  }

  return (
    <>
      <h1>To-do list</h1>
      <Tasks tasks={tasks} deleteTask={deleteTask} />
      <TaskNew handleClick={addNewTask} />
    </>
  )
}
