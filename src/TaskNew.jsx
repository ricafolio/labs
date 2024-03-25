import { useState } from "react"

export function TaskNew({ handleClick }) {
  const [newTask, setNewTask] = useState("")
  const [hasError, setHasError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const isBadInput = /^\s*$/.test(newTask)
    if (isBadInput) {
      setHasError(true)
      return
    }

    setHasError(false)
    handleClick(newTask)
    setNewTask("")
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Write new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      {hasError && <div className="error">Please enter a valid input</div>}
      <button type="submit">Submit</button>
    </form>
  )
}
