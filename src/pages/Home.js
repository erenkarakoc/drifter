// Ionic & React
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
} from "@ionic/react"

// Components
import Map from "../components/Map"

const Home = () => {
  return (
    <IonPage>
      <IonContent>
        <Map />
      </IonContent>
    </IonPage>
  )
}

export default Home
