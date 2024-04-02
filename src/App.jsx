import { Input } from "./Input.jsx"

export function MyApp() {
  return (
    <>
      <h1>Hello world</h1>
      <Input
        renderHello={() => <div>Hello</div>}
        renderString={(value) => <div>{value}</div>}
        renderOddOrEven={({ value }) => (
          <div>{value % 2 === 0 ? "Even" : "Odd"}</div>
        )}
      />
    </>
  )
}
