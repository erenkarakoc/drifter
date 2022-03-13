import "./Registration.css"

import { IonPage, IonContent, useIonRouter } from "@ionic/react"

import Button from "../components/Button"
import Text from "../components/Text"
import RegistrationType from "../components/RegistrationType"

const Registration = () => {
  const router = useIonRouter()
  return (
    <IonPage>
      <IonContent className="Onboarding Registration">
        <div className="OnboardingWrapper">
          <Button
            type="button"
            theme="link"
            color="var(--dt-primary-500)"
            hoverColor="var(--dt-primary-300)"
            textColor="var(--dt-primary-500)"
            className="ForgotPasswordBacktoLogin"
            onClick={router.goBack}
          >
            Back
          </Button>

          <Text color="white" weight={400} spacing="0.3px">
            <h2>Select the registration type</h2>
          </Text>

          <form className="RegistrationForm">
            <div className="RegistrationTytpes">
              <RegistrationType
                checked
                type="private"
                text="Private"
                value="private"
                name="registrationType"
              />
              <RegistrationType
                type="company"
                text="Company"
                value="company"
                name="registrationType"
              />
              <RegistrationType
                type="rental"
                text="Rental car company"
                value="rental"
                name="registrationType"
              />
            </div>
          </form>
          <Button
            type="submit"
            theme="rounded"
            color="var(--dt-primary)"
            hoverColor="var(--dt-primary-300)"
            textColor="var(--dt-primary-500)"
            className="RegistrationNext"
          >
            Next
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Registration
