/* Home */
import "./Home.css"

import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react"

import Button from "../components/Button"

const Home = () => {
  const router = useIonRouter()

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <Button type="link" text="Back" onClick={router.goBack} />
          </IonButtons>
          <IonTitle>Drifter</IonTitle>
        </IonToolbar>

        <IonToolbar>
          <IonTitle>Subheader</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </>
  )
}

export default Home
