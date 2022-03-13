import "./ForgotPassword.css"

import { IonPage, IonContent, useIonRouter } from "@ionic/react"

import Input from "../components/Input"
import Button from "../components/Button"
import Text from "../components/Text"

const ForgotPassword = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonContent className="Onboarding ForgotPassword">
        <div className="OnboardingWrapper">
          <Text color="white" weight={400} spacing="0.3px">
            <h2>Forgot your password?</h2>
          </Text>
          <Text
            color="var(--dt-primary-300)"
            size={14}
            weight={400}
            spacing="0.3px"
            align="center"
          >
            <p>
              Enter the email address associated with your account and we will
              send you a mail including a link to reset your password.
            </p>
          </Text>

          <form className="ForgotPasswordForm">
            <Input
              type="email"
              placeholder="Email Address"
              icon="envelope"
              autoFocus
              autofocus
              className="ForgotPasswordEmail rounded"
            />
            <Button
              type="submit"
              theme="rounded"
              color="var(--dt-pink)"
              hoverColor="var(--dt-pink-3)"
              activeColor="var(--dt-pink-3)"
              textColor="#fff"
              activeText="#fff"
              className="ForgotPasswordSend ion-text-uppercase ion-margin-top"
            >
              Send
            </Button>
          </form>

          <Button
            type="button"
            theme="link"
            color="var(--dt-primary-500)"
            hoverColor="var(--dt-primary-300)"
            textColor="var(--dt-primary-500)"
            className="ForgotPasswordBacktoLogin"
            onClick={() => router.push("/login", "back")}
          >
            Back to Login
          </Button>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default ForgotPassword
