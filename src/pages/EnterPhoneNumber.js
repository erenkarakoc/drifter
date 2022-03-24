import { IonPage, IonContent, useIonRouter } from "@ionic/react"

// Components
import Text from "../components/Text"
import PhoneInput from "../components/PhoneInput"
import Button from "../components/Button"

const EnterPhoneNumber = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Onboarding">
          <div className="OnboardingWrapper" style={{ paddingTop: "10vh" }}>
            <Text
              select="none"
              color="var(--dt-primary)"
              size="24px"
              weight={300}
              lineHeight="30px"
              align="center"
              margin="0 0 22px"
            >
              Enter your mobile for registration:
            </Text>
            <PhoneInput />
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
