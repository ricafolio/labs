import React from "react"
import { createRoot } from "react-dom/client"

function MyApp() {
  return <h1>Hello</h1>
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<MyApp />)
