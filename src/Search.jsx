import { FlyOut } from "./Flyout.jsx"

export function Search() {
  return (
    <div>
      <FlyOut>
        <FlyOut.Input placeholder="Hello" />
        <FlyOut.List>
          <FlyOut.ListItem value="San Francisco, CA">
            San Francisco, CA
          </FlyOut.ListItem>
          <FlyOut.ListItem value="Seattle, WA">Seattle, WA</FlyOut.ListItem>
          <FlyOut.ListItem value="Austin, TX">Austin, TX</FlyOut.ListItem>
          <FlyOut.ListItem value="Miami, FL">Miami, FL</FlyOut.ListItem>
          <FlyOut.ListItem value="Boulder, CO">Boulder, CO</FlyOut.ListItem>
        </FlyOut.List>
      </FlyOut>
    </div>
  )
}
