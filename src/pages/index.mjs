import * as React from "react"
import { Helmet } from "react-helmet"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <h1> Hey! This website is still in development. Feel free to come back later!</h1>
      <p>Meanwhile, you can have a look at my Thingiverse profile, where I am slowly uploading my designs from the last few years. Meaning that is also still in progress..<br>
      <a href="https://www.thingiverse.com/heldemann/designs" target="_blank">https://www.thingiverse.com/heldemann/designs</a>
      </p>    
  </main>
  )
}

export default IndexPage

export const Head = () => <title>Moritz-Held.de</title>
