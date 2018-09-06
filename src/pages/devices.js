import React from 'react'
import LinkCardDevice from '../components/LinkCardDevice'
import RadioFilter from '../components/RadioFilter';
 
const IndexDevices = ({
  data: {
    allDevicesJson: { edges },
  },
}) => {
  const Devices = edges
    // ПОЛЬЗОВАТЕЛЬСКИЕ ФИЛЬТРЫ по девайсам
    .filter(edge => {
      let filter_matches = true
      //
      // из https://codepen.io/andreasremdt/pen/rvQJYR?editors=1010
      // freeCodeCamp Twitch Viewer
      //
      // filter_matches определяет для каждого девайса по отдельности
      // пройдет ли он в лист FilteredDevices или нет
      // каждый следующий if это фильтр,
      // если девайс его не проходит то filter_matches = false
      //
      // фильтр по мышиным фильтрам-радио кнопкам
      if ('laser' !== edge.node.mouse_sensor) {
        filter_matches = false
      }

      if (filter_matches) return edge
    })
    .map(edge => <LinkCardDevice key={edge.node.id} device={edge.node} />)

  return <div><RadioFilter></RadioFilter>{Devices}</div>
}
export default IndexDevices

export const query = graphql`
  query IndexQueryDevices {
    allDevicesJson {
      edges {
        node {
          fields {
            slug
          }
          id
          title
          device_type
          ASIN
          hide
          mouse_sensor
        }
      }
    }
  }
`
