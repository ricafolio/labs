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
})
