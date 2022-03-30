// Ionic & React
import { useState } from "react"
import { IonPage, IonContent, useIonRouter, useIonAlert } from "@ionic/react"

import "./Landing.css"

// Redux
import { useSelector } from "react-redux"

// Plugins
import {
  isValidPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input"

// Components
import Logo from "./../components/Logo"
import Text from "../components/Text"
import DTPhoneInput from "../components/DTPhoneInput"
import Button from "../components/Button"

const EnterPhoneNumber = () => {
  const [border, setBorder] = useState("")

  const router = useIonRouter()
  const [present] = useIonAlert()

  let { phone } = useSelector((state) => state.userSlice)

  return (
    <IonPage>
      <IonContent scrollEvents={false}>
        <div className="Landing">
          <form
            className="LandingWrapper"
            onSubmit={(e) => {
              e.preventDefault()

              if (isValidPhoneNumber(phone)) {
                present({
                  cssClass: "surePhoneNumber",
                  message: `Are you sure you typed your number correctly?\n\n<span>${formatPhoneNumberIntl(
                    phone
                  )}</span>`,
                  buttons: [
                    "No",
                    {
                      text: "Yes",
                      handler: (d) => router.push("/enter-sms-code", "forward"),
                    },
                  ],
                })
              } else {
                setBorder("shake")
              }
            }}
          >
            <Logo height={124} width={116} type="MonoDark" />

            <Text select="none" cssClass="title-2" margin="0 0 40px">
              Enter your mobile phone for registration:
            </Text>

            <DTPhoneInput border={border} setBorder={setBorder} />

            <Button type="submit" theme="primary" margin="56px 0 0">
              Proceed
            </Button>
          </form>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default EnterPhoneNumber
