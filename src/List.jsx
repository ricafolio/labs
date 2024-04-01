import { FlyOutContext } from "./Flyout.jsx"
import { useContext } from "react"

export function List({ children }) {
  const { open } = useContext(FlyOutContext)

  return open && <ul>{children}</ul>
}
