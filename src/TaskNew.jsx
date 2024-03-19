import { useState } from "react"

export function TaskNew({ handleClick }) {
  const [newTask, setNewTask] = useState("")
  return (
    <>
      <input
        type="text"
        placeholder="Write new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          handleClick(newTask)
          setNewTask("")
        }}
      >
        Submit
      </button>
    </>
  )
}
