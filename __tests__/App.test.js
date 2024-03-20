import { render, screen } from "@testing-library/react"
import { MyApp } from "../src/App.jsx"

describe("App tests", () => {
  it("Should contain the heading", () => {
    render(<MyApp />)
    let heading = screen.getByText("To-do list")
    expect(heading).toBeInTheDocument()
  })

  it("Should have form to add task", () => {
    render(<MyApp />)
    expect(screen.queryByText("Submit")).toBeInTheDocument()
    expect(screen.queryByPlaceholderText("Write new task")).toBeInTheDocument()
  })
})
