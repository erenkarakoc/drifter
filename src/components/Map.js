// Ionic & React
import { Component } from "react"
import { Geolocation } from "@capacitor/geolocation"

import Text from "./Text"

export default class Map extends Component {
  componentDidMount() {
    const printCurrentPosition = async () => {
      const coordinates = await Geolocation.getCurrentPosition()
      console.log(coordinates)
    }

    printCurrentPosition()
  }

  render() {
    return (
      <>
        <iframe
          title="Map"
          height="100%"
          width="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d130265.72825388546!2d17.84196963163168!3d59.326241967260415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2str!4v1648681428323!5m2!1sen!2str"
        />
      </>
    )
  }
}
