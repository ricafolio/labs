import { render, screen, fireEvent } from "@testing-library/react"
import { MyApp } from "../src/App.jsx"

function addNewTask(taskName) {
  const submitBtn = screen.queryByText("Submit")
  const inputBox = screen.queryByPlaceholderText("Write new task")

  fireEvent.change(inputBox, { target: { value: taskName } })
  fireEvent.click(submitBtn)
}

describe("Task tests", () => {
  beforeEach(() => {
    render(<MyApp />)
  })

  it("Should be see newly added task", () => {
    const newTaskName = "Study Jest"
    addNewTask(newTaskName)

    const newTaskElement = screen.queryByText(newTaskName)

    expect(newTaskElement).toBeInTheDocument()
  })

  it("Should be able to delete task", () => {
    const newTaskName1 = "Delete me"
    addNewTask(newTaskName1)
    const newTaskElement1 = screen.queryByText(newTaskName1)

    // Added task has delete button element
    const deleteBtn = newTaskElement1.nextElementSibling
    expect(deleteBtn).toBeInTheDocument()

    // Button has trash icon
    const deleteBtnSVG = newTaskElement1.nextElementSibling.querySelector("svg")
    expect(deleteBtnSVG).toBeInTheDocument()

    fireEvent.click(deleteBtn)

    // Added task gone
    expect(newTaskElement1).not.toBeInTheDocument()
  })

  it("Should delete the correct task within multiple tasks", () => {
    const taskName = "Delete me"
    const numberOfSameTasks = 5
    const targetIndexToDelete = 1 // second task

    // add 5 tasks with the same name
    for (let i = 0; i < numberOfSameTasks; i++) {
      addNewTask(taskName)
    }

    // get all tasks
    const tasks = screen.queryAllByText(taskName)
    expect(tasks.length).toBe(numberOfSameTasks)

    // verify tasks
    tasks.forEach((task, index) => {
      const taskParent = task.parentElement

      /// verify task and parent
      expect(task).toBeInTheDocument()
      expect(taskParent).toHaveClass("task")
      expect(taskParent).toHaveAttribute("data-testid")
      expect(taskParent.parentElement).toHaveClass("tasks")

      // verify button
      const deleteBtn = taskParent.querySelector("button")
      const svgIcon = deleteBtn.querySelector("svg")
      expect(taskParent).toContainElement(deleteBtn)
      expect(deleteBtn).toContainElement(svgIcon)

      // delete target task by index
      if (index === targetIndexToDelete) {
        fireEvent.click(deleteBtn)
      }
    })

    // verify tasks is decreased
    const remainingTasks = screen.queryAllByText(taskName)
    expect(remainingTasks.length).toBe(numberOfSameTasks - 1)

    // verify which tasks are in the document via old tasks
    tasks.forEach((task, index) => {
      if (index === targetIndexToDelete) {
        expect(task).not.toBeInTheDocument()
      } else {
        expect(task).toBeInTheDocument()
      }
    })
  })
})
