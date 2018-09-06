import React from 'react'
import Link from 'gatsby-link'

const LinkCardPost = ({ post }) => (
  <div>
    <Link to={post.fields.slug}>
      <h1 isSize={4}>{post.frontmatter.title}</h1>
      {post.frontmatter.title} ({post.frontmatter.date})
    </Link>
  </div>
)

export default LinkCardPost
