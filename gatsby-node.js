/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// cсоздаю Field c именем slug
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators

  // узнаю какие ноды создает мой сайт:
  // console.log(node.internal.type)

  // если нода это md файл
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `pages/blog`,
      trailingSlash: false,
    })
    //отсюда:
    //https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#createfilepath
    //вместо value: slug прописываю value: `/blog` + slug
    createNodeField({
      node,
      name: `slug`,
      value: `/blog` + slug,
    })
  }

  // если нода это JSON файл - DevicesJson
  if (node.internal.type === `DevicesJson`) {
    const slug =
      '/' +
      'devices' +
      '/' +
      node.device_type.replace(/ /g, '-').toLowerCase() +
      '/' +
      node.title.replace(/ /g, '-').toLowerCase()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

// создание страниц
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    //
    // маркдовны для блога
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
    //

    // девайсы из json
    graphql(`
      {
        allDevicesJson {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allDevicesJson.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/device-page.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
    //
  })
}
