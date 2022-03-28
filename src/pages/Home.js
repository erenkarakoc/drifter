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
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Map />
      </IonContent>
    </IonPage>
  )
}

export default Home
