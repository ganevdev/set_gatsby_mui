import React from 'react'
import Link from 'gatsby-link'

const LinkCardDevice = ({ device }) => (
  <div>
    <Link to={device.fields.slug}>
      <h1 isSize={4}>{device.title}</h1>
    </Link>
  </div>
)

export default LinkCardDevice
