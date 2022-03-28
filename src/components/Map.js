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
      <div>
        <Text color="#000" align="center">
          MAP
        </Text>
      </div>
    )
  }
}
