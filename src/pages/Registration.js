import "./Registration.css"

import { IonPage, IonContent, useIonRouter } from "@ionic/react"
import { useDispatch, useSelector } from "react-redux"

import { changeRegType } from "../redux/store/registrationTypesSlice"

import Button from "../components/Button"
import Text from "../components/Text"
import RegistrationType from "../components/RegistrationType"

const Registration = () => {
  const router = useIonRouter()
  const dispatch = useDispatch()

  const { regType } = useSelector((state) => state.regTypes)

  const handleChange = (e) => {
    dispatch(changeRegType(e.target.value))
  }

  return (
    <IonPage>
      <IonContent className="Onboarding Registration">
        <div className="OnboardingWrapper">
          <Text color="white" weight={400} spacing="0.3px">
            <h2>Select the registration type</h2>
          </Text>

          <form
            className="RegistrationForm"
            onSubmit={(e) => {
              e.preventDefault()
              router.push("/registration-form", "forward")
            }}
          >
            <div className="RegistrationTypes">
              <RegistrationType
                id="registrationPrivate"
                type="private"
                name="registrationType"
                value="private"
                text="Private"
                onChange={handleChange}
                required
              />
              <RegistrationType
                id="registrationCompany"
                type="company"
                name="registrationType"
                value="company"
                text="Company"
                onChange={handleChange}
                required
              />
              <RegistrationType
                id="registrationRental"
                type="rental"
                name="registrationType"
                value="rental"
                text="Rental car company"
                onChange={handleChange}
                required
              />
            </div>
            <Button
              type="submit"
              theme="rounded"
              color="var(--dt-pink)"
              hoverColor="var(--dt-pink-3)"
              activeColor="var(--dt-pink-3)"
              textColor="#fff"
              activeText="#fff"
              className="RegistrationNext"
              disabled={!!regType ? false : true}
            >
              Next
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Registration
