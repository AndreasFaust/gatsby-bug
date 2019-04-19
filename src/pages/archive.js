import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const SecondPage = ({ data }) => {
  const { nodes } = data.allArchive
  return (
    <div>
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to='/'>Go back to the homepage</Link>
      {nodes.map(node => (
        node.contentWork.map(image => (
          <Img
            style={{ height: '100%', objectFit: 'contain' }}
            imgStyle={{ objectFit: 'contain' }}
            objectFit='contain'
            fluid={image.local.childImageSharp.fluid}
            alt={image.alttext}
          />
        ))
      ))}
    </div>
  )
}

export default SecondPage

export const query = graphql`
  query {
    allArchive {
      nodes {
        url
        title
        text
        description
        contentWork {
          type
          videoDesktop
          videoMobile
          url
          alttext
          local {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
