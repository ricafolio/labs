import { useState } from "react"

export function Input(props) {
  const [value, setValue] = useState("")

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {props.renderHello()}
      {props.renderString("Hola")}
      {props.renderOddOrEven({ value: 10 })}
    </>
  )
}
