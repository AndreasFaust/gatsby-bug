import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default ({ data }) => {
  const { nodes } = data.allWorks
  return nodes.map(node => (
    node.contentStart.map(image => (
      <Img
        style={{ height: '100%', objectFit: 'contain' }}
        imgStyle={{ objectFit: 'contain' }}
        objectFit='contain'
        fluid={image.local.childImageSharp.fluid}
        alt={image.alttext}
      />
    ))
  ))
}

export const query = graphql`
  query {
    allWorks {
      nodes {
        id
        url
        title
        text
        description
        contentStart {
          id
          type
          videoDesktop
          videoMobile
          url
          alttext
          local {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
