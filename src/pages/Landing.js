// Ionic & React
import { IonContent, IonPage, createAnimation } from "@ionic/react"

import "./Landing.css"

// Components
import Text from "../components/Text"
import Button from "./../components/Button"
import { ReactComponent as LandingImage } from "../assets/images/vectors/car-and-charger.svg"

const Landing = () => {
  const slideAnimation = (baseEl, opts) => {
    const leavingAnimation = createAnimation()
      .addElement(opts.leavingEl)
      .duration(400)
      .easing("ease")
      .fromTo("transform", "translateX(0)", "translateX(-30px)")

    const enteringAnimation = createAnimation()
      .addElement(opts.enteringEl)
      .duration(350)
      .easing("ease")
      .fromTo("opacity", 0, 1)
      .fromTo("transform", "translateX(100vw)", "translateX(0)")

    const animation = createAnimation().addAnimation([
      enteringAnimation,
      leavingAnimation,
    ])

    return animation
  }

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <div
            className="LandingWrapper"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div className="LandingImage">
              <LandingImage />
            </div>

            <Text
              select="none"
              cssClass="title"
              align="center"
              margin="0 auto 0"
            >
              <h2>Welcome to Drifter!</h2>
            </Text>
            <Text
              select="none"
              color="var(--dt-primary)"
              cssClass="body"
              align="center"
              margin="25px auto 0"
            >
              <p>
                Pay %50 off for your first 3 fees (parking or charging) in
                Drifter points!
              </p>
            </Text>
            <Text
              select="none"
              color="var(--dt-primary)"
              cssClass="body"
              align="center"
              margin="14px auto 0"
            >
              <p>
                Explore all park & charge in
                <br />
                one app!
              </p>
            </Text>
            <Button
              theme="fab"
              routerLink="/enter-phone-number"
              routerAnimation={slideAnimation}
              icon="arrow-right"
              iconSize={16}
            />
          </div>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Landing
