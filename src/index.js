import React from "react"
import { createRoot } from "react-dom/client"
import { Button } from "./Button.jsx"

function MyApp() {
  return (
    <>
      <h1>Hello</h1>
      <Button>Submit</Button>
    </>
  )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<MyApp />)
