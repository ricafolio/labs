import { FlyOutContext } from "./Flyout.jsx"
import { useContext } from "react"

export function Input(props) {
  const { value, toggle } = useContext(FlyOutContext)
  return <input onFocus={toggle} onBlur={toggle} value={value} {...props} />
}
