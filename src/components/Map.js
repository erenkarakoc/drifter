// Ionic & React
import { useState, useEffect } from "react"
import { Geolocation } from "@capacitor/geolocation"

import "./Map.css"

// Google Maps
import GoogleMap from "google-map-react"
import Icon from "./Icon"

const Map = () => {
  const [pos, setPos] = useState({
    lat: 0,
    long: 0,
  })

  useEffect(() => {
    const printCurrentPosition = async () => {
      await Geolocation.watchPosition(
        { enableHighAccuracy: true, timeout: 1000 },
        (pos, err) => {
          setPos({
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
          })
          if (err) console.log(err)
        }
      )
    }

    printCurrentPosition()
  }, [])

  return pos.lat ? (
    <GoogleMap
      defaultCenter={[pos.lat, pos.long]}
      defaultZoom={8}
      bootstrapURLKeys={{ key: "AIzaSyA9NZLS4S5ox3AMaUcfVRqqghKfCsHjuP0" }}
    >
      <Icon name="marker" height={50} width={40} lat={pos.lat} lng={pos.long} />
    </GoogleMap>
  ) : (
    ""
  )
}

export default Map
