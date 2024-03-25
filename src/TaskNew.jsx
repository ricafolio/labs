import { useState } from "react"

export function TaskNew({ handleClick }) {
  const [newTask, setNewTask] = useState("")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        handleClick(newTask)
        setNewTask("")
      }}
    >
      <input
        type="text"
        placeholder="Write new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
