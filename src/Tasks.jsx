export function Tasks({ tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <div className="task" key={task.id}>
            <span>{task.name}</span>
            <button className="icon-btn" onClick={() => deleteTask(task.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"
                ></path>
              </svg>
            </button>
          </div>
        )
      })}
    </div>
  )
}
