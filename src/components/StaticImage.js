import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*

Usage:

<StaticImage src="photo-skate-girl.jpg" />

<StaticImage src="photo-skate-girl.jpg" aspect="portrait">
  {({ image }) =>
    image &&
    image.fluid && <Figure fluid={image.fluid} alt="Skater girl" />
  }
</StaticImage>

*/

const StaticImage = ({ src, aspect, children }) => {
  const data = useStaticQuery(query)
  let image

  if (src === "random") {
    const blacklisted = ["bee-left", "bee-right", "snail2"]
    const illusOnly = [...data.allFile.edges].filter(item => {
      return (
        item.node.relativePath.includes("illustrations") &&
        !blacklisted.includes(item.node.name)
      )
    })
    image = [illusOnly[Math.floor(Math.random() * illusOnly.length)]]
  } else {
    image = [...data.allFile.edges].filter(item => {
      return item.node.relativePath === src
    })
  }

  if (image && image[0] && image[0].node) {
    const img =
      aspect && image[0].node[aspect]
        ? image[0].node[aspect]
        : image[0].node.default
    if (children) {
      return children({ image: img })
    } else {
      return <Img fluid={img.fluid} alt="" />
    }
  } else {
    console.warn(`Could not find static image ${src}`)
    return null
  }
}

export default StaticImage

const query = graphql`
  query {
    allFile {
      edges {
        node {
          name
          relativePath
          default: childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`
