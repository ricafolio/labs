function withStyles(Component, defaultStyle) {
  return (props) => {
    const style = {
      color: "red",
      fontSize: "1.5em",
      ...defaultStyle,
      ...props.style,
    }

    return <Component {...props} style={style} />
  }
}

function Text({ style, customProp }) {
  return <p style={style}>{customProp ? customProp : "Default text"}</p>
}

const StyledText = withStyles(Text, { fontWeight: "bold" })
console.log(StyledText)

export function MyApp() {
  return (
    <>
      <h1>Hello world</h1>
      <Text />
      <StyledText />
      <StyledText customProp="hi" />
      <StyledText style={{ fontWeight: "regular" }} />
    </>
  )
}
