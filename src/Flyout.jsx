import { createContext, useCallback, useState } from "react"
import { Input } from "./Input.jsx"
import { List } from "./List.jsx"
import { ListItem } from "./ListItem.jsx"

export const FlyOutContext = createContext()

export function FlyOut(props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const toggle = useCallback(() => {
    setOpen((state) => !state)
  }, [])

  return (
    <FlyOutContext.Provider
      value={{
        open,
        value,
        setValue,
        toggle,
      }}
    >
      <div>{props.children}</div>
    </FlyOutContext.Provider>
  )
}

FlyOut.Input = Input
FlyOut.List = List
FlyOut.ListItem = ListItem
