export function Tasks({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return <div className="task">{task.name}</div>
      })}
    </div>
  )
}
