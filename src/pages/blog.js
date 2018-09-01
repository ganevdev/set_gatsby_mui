import React from 'react'
import PostLinkCard from '../components/PostLinkCard'

const IndexBlog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLinkCard key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default IndexBlog

export const pageQuery = graphql`
  query IndexQueryPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
