import japan from './images/japan.jpeg';
import australia from './images/australia.jpeg';
import norway from './images/norway.jpeg';

export default [
  {
    id: 0,
    location: "japan",
    googleMapsLink: "https://goo.gl/maps/YjzJwZfsAJcu1oaC9",
    title: "Mount Fuji",
    time: {
      startTime: 1616126768000,
      endTime: 1617788568000
    },
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    coverImg: japan
  },
  {
    id: 1,
    location: "australia",
    googleMapsLink: "https://goo.gl/maps/4MXpjZ8cPWXSGcbs7",
    title: "Sydney Opera House",
    time: {
      startTime: 1623490968000,
      endTime: 1626082968000
    },
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    coverImg: australia
  },
  {
    id: 2,
    location: "norway",
    googleMapsLink: "https://goo.gl/maps/fF58eeQzDG599Kpj6",
    title: "Geirangerfjord",
    time: {
      startTime: 1641292968000,
      endTime: 1646822568000
    },
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    coverImg: norway
  }
]