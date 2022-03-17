import "./Registration.css"

import { useState } from "react"
import { IonPage, IonContent, useIonRouter } from "@ionic/react"
import { useSelector } from "react-redux"

import Text from "../components/Text"
import Input from "./../components/Input"
import Button from "../components/Button"
import RegistrationType from "../components/RegistrationType"

const Registration = () => {
  const router = useIonRouter()
  const { regType } = useSelector((state) => state.regTypes)

  const [isDisabled, setDisabled] = useState(true)

  const handleChange = () => {
    const inputFields = document.querySelectorAll(
      ".native-input[name='registrationDetails']"
    )
    const validInputs = Array.from(inputFields).filter(
      (input) => input.value !== ""
    )

    if (inputFields.length === validInputs.length) {
      setDisabled(false)
    }
  }

  return (
    <IonPage>
      <IonContent className="Onboarding Registration">
        <div className="OnboardingWrapper">
          {!!regType ? (
            <>
              <RegistrationType
                id="currentRegType"
                type={regType}
                value={regType}
                text={regType}
                onChange={() => false}
                onClick={() => router.push("/registration", "back")}
                checked
              />
              <form
                className="RegistrationForm"
                onSubmit={() => router.push("/materials", "forward")}
              >
                <Input
                  placeholder="National ID"
                  name="registrationDetails"
                  onKeyUp={handleChange}
                />
                <Input
                  placeholder="Full Name"
                  name="registrationDetails"
                  onKeyUp={handleChange}
                />
                <Input
                  placeholder="Age"
                  name="registrationDetails"
                  onKeyUp={handleChange}
                />
                <Input
                  placeholder="Sex"
                  name="registrationDetails"
                  onKeyUp={handleChange}
                />
                <Input
                  placeholder="Adress(es)"
                  name="registrationDetails"
                  onKeyUp={handleChange}
                />
                <Button
                  type="submit"
                  theme="rounded"
                  color="var(--dt-pink)"
                  hoverColor="var(--dt-pink-3)"
                  activeColor="var(--dt-pink-3)"
                  textColor="#fff"
                  activeText="#fff"
                  className="RegistrationNext"
                  disabled={isDisabled}
                >
                  Next
                </Button>
              </form>
            </>
          ) : (
            <>
              <Text
                color="white"
                weight={400}
                margin="0 0 40px"
                spacing="0.3px"
                align="center"
              >
                <h2>You need to select a registration type to proceed!</h2>
              </Text>
              <Button
                type="button"
                theme="rounded"
                color="var(--dt-pink)"
                hoverColor="var(--dt-pink-3)"
                activeColor="var(--dt-pink-3)"
                textColor="#fff"
                activeText="#fff"
                routerLink="/registration"
              >
                Go to Registration
              </Button>
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Registration
