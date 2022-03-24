// Ionic & React
import { IonContent, IonPage } from "@ionic/react"

// Components
import Text from "../components/Text"
import Button from "./../components/Button"

const Landing = () => {
  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div class="Onboarding">
          <div className="OnboardingWrapper ion-justify-content-center ion-align-items-center">
            <Text
              select="none"
              color="var(--dt-primary)"
              size="24px"
              weight={700}
            >
              <h2>Welcome to Drifter!</h2>
            </Text>
            <Text
              select="none"
              color="var(--dt-primary)"
              size="24px"
              weight={400}
              lineHeight="30px"
              align="center"
              margin="64px 0 0"
            >
              Pay %50 off for your first 3 fees (parking or charging) in Drifter
              points!
            </Text>
            <Text
              select="none"
              color="var(--dt-primary)"
              size="24px"
              weight={400}
              lineHeight="30px"
              align="center"
              margin="64px 0 0"
            >
              Explore all park&charge in one app!
            </Text>
            <Button
              theme="primary"
              margin="64px 0 0"
              routerLink="/enter-phone-number"
            >
              Take me in!
            </Button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Landing
