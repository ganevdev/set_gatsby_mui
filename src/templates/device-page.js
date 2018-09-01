import React from 'react'

export default ({ data }) => {
  const device = data.devicesJson
  return (
    <div>
      <h1>{device.title}</h1>
    </div>
  )
}

export const query = graphql`
  query DeviceQuery($slug: String!) {
    devicesJson(fields: { slug: { eq: $slug } }) {
      title
      ASIN
      device_type
    }
  }
`
