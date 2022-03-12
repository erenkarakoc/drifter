import "./Register.css"
import { IonContent } from "@ionic/react"
import { useIonRouter } from "@ionic/react"

import Button from "../components/Button"

const Register = () => {
  const router = useIonRouter()

  return (
    <IonContent className="ion-padding">
      {router.canGoBack ? (
        <Button text="Back" type="link" onClick={router.goBack} />
      ) : (
        ""
      )}
    </IonContent>
  )
}

export default Register
