import * as React from "react"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1> Hey! This website is still in development. Feel free to come back later!</h1>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Moritz-Held.de</title>
