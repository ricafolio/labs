import { FlyOutContext } from "./Flyout.jsx"
import { useContext } from "react"

export function ListItem({ children, value }) {
  const { setValue } = useContext(FlyOutContext)
  return <li onMouseDown={() => setValue(value)}>{children}</li>
}
