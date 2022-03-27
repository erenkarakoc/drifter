import { IonPage, IonContent, useIonRouter } from "@ionic/react"

// Components
import Logo from "./../components/Logo"
import Text from "../components/Text"
import DTPhoneInput from "../components/DTPhoneInput"
import Button from "../components/Button"

const EnterPhoneNumber = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <div className="LandingWrapper" style={{ paddingTop: "10vh" }}>
            <Logo height={124} width={116} type="MonoDark" />
            <Text select="none" cssClass="title-2" margin="0 0 45px">
              Enter your mobile phone for registration:
            </Text>
            <DTPhoneInput />
            <Button theme="primary" margin="56px 0 0" routerLink="/materials">
              Proceed
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default EnterPhoneNumber
